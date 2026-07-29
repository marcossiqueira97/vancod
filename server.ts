import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Basic security headers
  app.use(helmet({
    contentSecurityPolicy: false, // Disabling CSP for development ease with Vite inline scripts
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
  app.post("/api/contact", contactLimiter, (req, res) => {
    const { name, email, phone, role, solution, message } = req.body;
    
    // Validating basic input to prevent empty spam
    if (!name || !email) {
      return res.status(400).json({ error: "Nome e e-mail são obrigatórios." });
    }

    // In a real app, you would send an email or save to a database here.
    console.log("Contact form submission received:", req.body);
    
    res.status(200).json({ success: true, message: "Mensagem recebida com sucesso!" });
  });

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
