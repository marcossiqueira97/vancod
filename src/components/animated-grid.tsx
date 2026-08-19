import { motion } from 'motion/react';

export function AnimatedGrid() {
  const blueprintNodes = [
    { top: '15%', left: '15%', label: 'OPERAÇÃO OFFLINE-FIRST' },
    { top: '26%', left: '78%', label: 'CONTROLE DE ESTOQUE' },
    { top: '48%', left: '8%', label: 'EXTRATO NO WHATSAPP' },
    { top: '65%', left: '85%', label: 'KDS DE COZINHA' },
    { top: '38%', left: '82%', label: 'GESTÃO DE MESAS' },
    { top: '80%', left: '22%', label: 'MURAL VIA QR CODE' },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-400/15 via-indigo-300/10 to-transparent blur-[120px]" />
      
      {/* Precision Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_15%,#000_65%,transparent_100%)]" />

      {/* Coordinate Markers */}
      <div className="absolute inset-0">
        {blueprintNodes.map((node, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: node.top, left: node.left }}
            className="absolute flex items-center gap-1.5 font-mono text-[9px] text-blue-600/70 font-semibold"
          >
            <div className="relative w-3 h-3 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-500" />
            </div>
            <span className="hidden md:inline bg-white/80 border border-slate-200 px-1.5 py-0.5 rounded text-slate-600 shadow-2xs">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
