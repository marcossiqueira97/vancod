import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import nodemailer from "nodemailer";
import "dotenv/config";
import { recordVisit, systemFor, visitorId } from "./server/analytics";
import { renderAdmin, requireAdmin } from "./server/admin";
import { SITE_CONFIG } from "./src/lib/config";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Basic security headers
  // CSP fica ativo apenas em produção: no dev, o Vite usa scripts/estilos inline e HMR
  // que quebrariam com a política restrita.
  app.use(helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production"
        ? {
            directives: {
              "default-src": ["'self'"],
              "script-src": ["'self'"],
              // Inline styles vêm do motion (framer-motion); fontes do Google Fonts.
              "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
              "font-src": ["'self'", "https://fonts.gstatic.com"],
              "img-src": ["'self'", "data:", "https://images.unsplash.com"],
              "connect-src": ["'self'"],
              "object-src": ["'none'"],
              "frame-ancestors": ["'none'"],
              "base-uri": ["'self'"],
              "form-action": ["'self'"],
            },
          }
        : false,
  }));

  app.use(express.json());

  // Rate Limiting for the contact form API
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 3 requests per `window` (here, per 15 minutes)
    message: { error: "Muitas tentativas de envio deste IP, por favor, tente novamente após 15 minutos." },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });

  // API route for contact form
  // Envia a mensagem de verdade via SMTP quando SMTP_HOST/PORT/USER/PASS e CONTACT_TO
  // estão configurados; sem configuração, falha com erro claro em vez de fingir sucesso.
  app.post("/api/contact", contactLimiter, async (req, res) => {
    const { name, email, phone, role, solution, message } = req.body as {
      name?: string;
      email?: string;
      phone?: string;
      role?: string;
      solution?: string;
      message?: string;
    };

    // Validating basic input to prevent empty spam
    if (!name || !email) {
      return res.status(400).json({ error: "Nome e e-mail são obrigatórios." });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactTo) {
      console.error(
        "[contact] Envio não configurado: faltam SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS/CONTACT_TO. Mensagem NÃO enviada.",
      );
      return res.status(500).json({
        error:
          "O envio de mensagens não está configurado neste servidor (faltam as variáveis SMTP_* e CONTACT_TO). Nenhuma mensagem foi enviada.",
      });
    }

    const transport = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: smtpPort === "465",
      auth: { user: smtpUser, pass: smtpPass },
    });

    const text = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefone: ${phone}` : null,
      role ? `Perfil: ${role}` : null,
      solution ? `Solução: ${solution}` : null,
      message ? `Mensagem:\n${message}` : null,
    ]
      .filter((line): line is string => Boolean(line))
      .join("\n");

    try {
      await transport.sendMail({
        from: process.env.CONTACT_FROM || `"Site Vancod" <${smtpUser}>`,
        to: contactTo,
        replyTo: email,
        subject: `[vancod.com.br] Contato de ${name}${solution ? ` (${solution})` : ""}`,
        text,
      });
      console.log(`[contact] E-mail enviado para ${contactTo} (de ${email})`);
      res.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });
    } catch (err) {
      console.error("[contact] Falha ao enviar e-mail:", err);
      res.status(502).json({
        error:
          "Não foi possível enviar a mensagem agora (falha no servidor de e-mail configurado). Tente novamente mais tarde.",
      });
    }
  });

  // Rastreamento de visitas: grava rota, sistema e domínio de origem. IP nunca é salvo, só um hash diário.
  const trackLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Muitas requisições de rastreamento." },
  });

  app.post("/api/track", trackLimiter, async (req, res) => {
    const { path: pagePath, referrer } = (req.body ?? {}) as { path?: unknown; referrer?: unknown };
    if (typeof pagePath !== "string" || !pagePath.startsWith("/") || pagePath.length > 200) {
      return res.status(400).json({ error: "Caminho inválido." });
    }

    let ref = "direto";
    if (typeof referrer === "string" && referrer.length <= 500) {
      try {
        ref = new URL(referrer).host || ref;
      } catch {
        ref = "direto"; // referrer malformado conta como acesso direto
      }
    }

    const host = req.hostname.slice(0, 100);
    try {
      await recordVisit({
        t: new Date().toISOString(),
        host,
        path: pagePath,
        system: systemFor(host, pagePath),
        ref,
        v: visitorId(req.ip ?? "", req.get("user-agent") ?? ""),
      });
    } catch (err) {
      // Falha de rastreamento não pode quebrar a página do visitante; fica registrada no log.
      console.error("[analytics] Falha ao gravar visita:", err);
    }
    res.status(204).end();
  });

  // Painel: conta só as tentativas com senha errada, para não travar quem acerta.
  const adminLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    skipSuccessfulRequests: true,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Muitas tentativas de acesso ao painel. Tente novamente em 15 minutos.",
  });

  app.get("/admin", adminLimiter, requireAdmin, async (_req, res) => {
    try {
      res.type("html").send(await renderAdmin());
    } catch (err) {
      console.error("[admin] Falha ao montar o painel:", err);
      res.status(500).type("text").send("Não foi possível carregar as visitas agora.");
    }
  });

  // Preserva os links antigos das p?ginas de produtos.
  for (const product of SITE_CONFIG.products) {
    const paths = product.id === "adega" ? ["/adega", product.path] : product.id === "olhare" ? ["/eventos", product.path] : [product.path];
    app.get(paths, (_req, res) => res.redirect(301, `https://${product.subdomain}`));
  }

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      if (req.originalUrl.startsWith('/api')) return next();
      try {
        const url = req.originalUrl;
        let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
