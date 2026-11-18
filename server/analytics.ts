import fs from "fs";
import path from "path";
import crypto from "crypto";

export interface Visit {
  t: string; // ISO timestamp
  host: string;
  path: string;
  system: string;
  ref: string; // só o domínio de origem, sem caminho nem query
  v: string; // visitante anônimo: hash diário de IP + navegador
}

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "analytics.jsonl");
// Sem ANALYTICS_SALT, o sal muda a cada reinício: a contagem de visitantes únicos fica menor, mas nada quebra.
const SALT = process.env.ANALYTICS_SALT || crypto.randomBytes(16).toString("hex");

export function visitorId(ip: string, ua: string, now = new Date()): string {
  const day = now.toISOString().slice(0, 10);
  return crypto.createHash("sha256").update(`${SALT}|${day}|${ip}|${ua}`).digest("hex").slice(0, 16);
}

export function systemFor(host: string, pathname: string): string {
  if (host.startsWith("adegas.") || /^\/adegas?(\/|$)/.test(pathname)) return "Balcão Pro Adegas";
  if (host.startsWith("restaurantes.") || /^\/restaurantes(\/|$)/.test(pathname)) return "Vancod Restaurantes";
  if (host.startsWith("olhare.") || /^\/(olhare|eventos)(\/|$)/.test(pathname)) return "Olhare Fotos & Eventos";
  if (pathname === "/") return "Site institucional";
  return "Demais páginas";
}

export async function recordVisit(visit: Visit): Promise<void> {
  await fs.promises.mkdir(DATA_DIR, { recursive: true });
  await fs.promises.appendFile(FILE, JSON.stringify(visit) + "\n");
}

// shortcut: lê o arquivo inteiro para somar, aceitável até algumas centenas de milhares de visitas; migrar para SQLite ou banco quando passar disso.
export async function readVisits(): Promise<Visit[]> {
  let raw: string;
  try {
    raw = await fs.promises.readFile(FILE, "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
  const visits: Visit[] = [];
  let broken = 0;
  for (const line of raw.split("\n")) {
    if (!line) continue;
    try {
      visits.push(JSON.parse(line) as Visit);
    } catch {
      broken++;
    }
  }
  if (broken > 0) console.warn(`[analytics] ${broken} linha(s) inválida(s) ignorada(s) em ${FILE}`);
  return visits;
}

export interface SystemSummary {
  system: string;
  visits7d: number;
  visitors7d: number;
  lastVisit: string | null;
}

export function summarize(visits: Visit[], now = new Date()) {
  const DAY = 24 * 60 * 60 * 1000;
  const since7 = now.getTime() - 7 * DAY;
  const since30 = now.getTime() - 30 * DAY;

  const recent7 = visits.filter((v) => Date.parse(v.t) >= since7);
  const bySystem = new Map<string, { visits: number; visitors: Set<string>; last: string }>();
  for (const v of recent7) {
    const entry = bySystem.get(v.system) ?? { visits: 0, visitors: new Set<string>(), last: v.t };
    entry.visits++;
    entry.visitors.add(v.v);
    if (v.t > entry.last) entry.last = v.t;
    bySystem.set(v.system, entry);
  }

  const systems: SystemSummary[] = [...bySystem.entries()]
    .map(([system, e]) => ({ system, visits7d: e.visits, visitors7d: e.visitors.size, lastVisit: e.last }))
    .sort((a, b) => b.visits7d - a.visits7d);

  return {
    total7d: recent7.length,
    total30d: visits.filter((v) => Date.parse(v.t) >= since30).length,
    systems,
    latest: [...visits].sort((a, b) => (a.t < b.t ? 1 : -1)).slice(0, 100),
  };
}
