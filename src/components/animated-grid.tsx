import { motion } from 'motion/react';

export function AnimatedGrid() {
  // Intersection coordinates for blueprint crosshair markers (Focado no Empreendedor Brasileiro)
  const blueprintNodes = [
    { top: '15%', left: '15%', label: '⚡ CAIXA EM 0ms' },
    { top: '26%', left: '78%', label: '🔒 100% OFFLINE (SEM TRAVAR)' },
    { top: '48%', left: '8%', label: '📲 FIADO AUTOMÁTICO WHATSAPP' },
    { top: '65%', left: '85%', label: '🛵 INTEGRADO AO IFOOD' },
    { top: '38%', left: '82%', label: '🛒 ESTOQUE FÍSICO + VIRTUAL' },
    { top: '80%', left: '22%', label: '📸 FOTOS NA TV POR QR CODE' },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Diffuse Depth Glow (No spherical outlines) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-400/20 via-indigo-300/15 to-transparent blur-[120px]" />
      <div className="absolute top-[500px] left-1/4 w-[700px] h-[400px] bg-gradient-to-r from-sky-400/15 via-blue-500/10 to-transparent blur-[140px]" />

      {/* 3D Blueprint Precision Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_15%,#000_65%,transparent_100%)]" />

      {/* Intersecting Light Beams: Horizontal Beam */}
      <motion.div 
        animate={{ y: ['0%', '400%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]"
      />

      {/* Intersecting Light Beams: Vertical Beam */}
      <motion.div 
        animate={{ x: ['0%', '300%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.8)]"
      />

      {/* Blueprint Coordinate Crosshairs & Tech Markers */}
      <div className="absolute inset-0">
        {blueprintNodes.map((node, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3.5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: node.top, left: node.left }}
            className="absolute flex items-center gap-1.5 font-mono text-[10px] text-blue-600/80 font-bold"
          >
            {/* Crosshair Marker */}
            <div className="relative w-4 h-4 flex items-center justify-center">
              <div className="absolute w-full h-[1px] bg-blue-500/70" />
              <div className="absolute h-full w-[1px] bg-blue-500/70" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_#3b82f6]" />
            </div>
            <span className="hidden sm:inline bg-blue-50/80 border border-blue-200/80 px-1.5 py-0.5 rounded text-blue-700 shadow-sm backdrop-blur-sm">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
