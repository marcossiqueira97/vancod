import crypto from "crypto";
import type { NextFunction, Request, Response } from "express";
import { readVisits, summarize, type Visit } from "./analytics";

const sha256 = (s: string) => crypto.createHash("sha256").update(s).digest();

// Falha fechada: sem ADMIN_PASSWORD, o painel não abre para ninguém.
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return res.status(503).type("text").send("Painel desativado: defina ADMIN_PASSWORD no servidor.");
  }
  const header = req.headers.authorization ?? "";
  const decoded = header.startsWith("Basic ") ? Buffer.from(header.slice(6), "base64").toString("utf8") : "";
  const password = decoded.split(":").slice(1).join(":");
  // Compara hashes com tempo constante para não vazar o tamanho nem o conteúdo da senha.
  if (!crypto.timingSafeEqual(sha256(password), sha256(expected))) {
    res.set("WWW-Authenticate", 'Basic realm="Vancod Admin"');
    return res.status(401).type("text").send("Acesso negado.");
  }
  next();
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const fmt = (iso: string | null) =>
  iso ? new Date(iso).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }) : "—";

function renderRow(cells: string[]) {
  return `<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
}

export async function renderAdmin(): Promise<string> {
  const visits: Visit[] = await readVisits();
  const s = summarize(visits);

  const systemRows = s.systems.length
    ? s.systems.map((x) => renderRow([esc(x.system), String(x.visits7d), String(x.visitors7d), fmt(x.lastVisit)])).join("")
    : `<tr><td colspan="4">Nenhuma visita nos últimos 7 dias.</td></tr>`;

  const latestRows = s.latest.length
    ? s.latest
        .map((v) => renderRow([fmt(v.t), esc(v.system), esc(v.path), esc(v.ref), `<code>${esc(v.v)}</code>`]))
        .join("")
    : `<tr><td colspan="5">Nenhuma visita registrada ainda.</td></tr>`;

  return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Vancod · Visitas</title>
<style>
  body{margin:0;padding:24px;font:14px/1.5 system-ui,sans-serif;background:#f8fafc;color:#0f172a}
  h1{font-size:20px;margin:0 0 4px} h2{font-size:15px;margin:28px 0 8px}
  .muted{color:#64748b;font-size:12px}
  .cards{display:flex;gap:12px;flex-wrap:wrap;margin-top:16px}
  .card{background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:14px 18px;min-width:160px}
  .card b{display:block;font-size:24px}
  table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden}
  th,td{text-align:left;padding:8px 12px;border-bottom:1px solid #f1f5f9;font-size:13px;word-break:break-all}
  th{background:#f1f5f9;font-weight:600}
  code{font-size:12px}
  .wrap{overflow-x:auto}
</style></head>
<body>
  <h1>Painel de visitas</h1>
  <div class="muted">Visitantes são anônimos: o ID muda a cada dia e não identifica pessoa. Horário de Brasília.</div>

  <div class="cards">
    <div class="card"><span class="muted">Visitas (7 dias)</span><b>${s.total7d}</b></div>
    <div class="card"><span class="muted">Visitas (30 dias)</span><b>${s.total30d}</b></div>
  </div>

  <h2>Por sistema (últimos 7 dias)</h2>
  <div class="wrap"><table>
    <tr><th>Sistema</th><th>Visitas</th><th>Visitantes únicos</th><th>Última visita</th></tr>
    ${systemRows}
  </table></div>

  <h2>Últimas 100 visitas</h2>
  <div class="wrap"><table>
    <tr><th>Quando</th><th>Sistema</th><th>Página</th><th>Origem</th><th>Visitante</th></tr>
    ${latestRows}
  </table></div>
</body></html>`;
}
