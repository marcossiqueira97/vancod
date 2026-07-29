import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TerminalLog {
  text: string;
  type: 'cmd' | 'success' | 'warn' | 'info' | 'venda';
  time: string;
}

const logStream: TerminalLog[] = [
  { type: 'cmd', text: 'vancod-kernel init --engine=rust --db=sqlite', time: '16:42:01' },
  { type: 'success', text: '✓ Conexão Rust estabelecida (0ms latência local)', time: '16:42:01' },
  { type: 'success', text: '✓ Modo Offline Ativo: Caixa Balcão Pro Operacional', time: '16:42:02' },
  { type: 'venda', text: '● Venda #4092 Confirmada: 1x Combo Whisky + 4x Red Bull (R$ 189,90)', time: '16:42:04' },
  { type: 'info', text: '⚡ Sync Físico ➔ E-Commerce atualizado automaticamente (0ms)', time: '16:42:05' },
  { type: 'cmd', text: 'kds-cozinha dispatch order #104 [Pizza Calabresa]', time: '16:42:07' },
  { type: 'success', text: '✓ Pedido #104 recebido na tela KDS Cozinha (Mesa 4)', time: '16:42:08' },
  { type: 'info', text: '📸 Olhare TV: 48 Fotos moderadas e transmitidas no telão', time: '16:42:10' },
  { type: 'venda', text: '● Venda #4093 Confirmada: 2x Cerveja Heineken 600ml (R$ 32,00)', time: '16:42:12' },
  { type: 'success', text: '✓ Fatura do Fiado enviada automaticamente no WhatsApp do cliente', time: '16:42:14' },
];

export function TerminalLogs() {
  const [logs, setLogs] = useState<TerminalLog[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial load first 3 logs
    setLogs(logStream.slice(0, 3));
    setCurrentIndex(3);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % logStream.length;
        setLogs((prevLogs) => {
          const nextLog = logStream[nextIndex];
          const updated = [...prevLogs, nextLog];
          if (updated.length > 7) updated.shift();
          return updated;
        });
        return nextIndex;
      });
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs space-y-2.5 bg-slate-950 p-5 rounded-xl border border-slate-800 text-slate-200">
      <div className="text-slate-500 flex items-center justify-between pb-2 border-b border-slate-900 text-[11px]">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          // EVENTOS DE OPERAÇÃO AO VIVO
        </span>
        <span className="text-red-400 font-bold bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">100% OFFLINE</span>
      </div>

      <div className="space-y-2 min-h-[220px] flex flex-col justify-end">
        <AnimatePresence initial={false}>
          {logs.map((log, idx) => (
            <motion.div
              key={`${log.time}-${idx}-${log.text.slice(0, 10)}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-2 leading-relaxed"
            >
              <span className="text-slate-600 text-[10px] select-none">{log.time}</span>
              {log.type === 'cmd' && <span className="text-slate-400">❯ {log.text}</span>}
              {log.type === 'success' && <span className="text-emerald-400 font-semibold">{log.text}</span>}
              {log.type === 'info' && <span className="text-cyan-400 font-semibold">{log.text}</span>}
              {log.type === 'venda' && (
                <div className="p-2 rounded-lg bg-red-950/40 border border-red-500/30 text-amber-300 font-bold w-full my-0.5">
                  {log.text}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="flex items-center gap-1 text-slate-500 pt-1">
          <span className="text-red-500">❯</span>
          <span className="inline-block w-2 h-4 bg-red-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
