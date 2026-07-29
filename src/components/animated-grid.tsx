import { motion } from 'motion/react';

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* GPU Accelerated Ambient Aurora Light Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 60, 0],
          y: [0, -30, 0],
          opacity: [0.45, 0.75, 0.45]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-400/35 via-indigo-400/25 to-sky-300/20 blur-[130px] will-change-transform"
      />
      
      <motion.div 
        animate={{ 
          scale: [1.15, 1, 1.15],
          x: [0, -70, 0],
          y: [0, 50, 0],
          opacity: [0.35, 0.65, 0.35]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-indigo-400/30 via-purple-300/20 to-blue-300/25 blur-[140px] will-change-transform"
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          x: [0, 40, -40, 0],
          opacity: [0.25, 0.55, 0.25]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-80 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-sky-400/25 to-purple-400/20 blur-[150px] will-change-transform"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_15%,#000_50%,transparent_100%)]" />

      {/* Smooth Ambient Scan Beam passing down the grid */}
      <motion.div 
        animate={{ y: ['-10%', '200%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent blur-md pointer-events-none"
      />

      {/* Floating Shimmer Ambient Light Nodes */}
      <div className="absolute inset-0">
        {[
          { top: '18%', left: '22%', size: '8px', duration: 4.5, delay: 0 },
          { top: '28%', left: '78%', size: '6px', duration: 6.5, delay: 1 },
          { top: '48%', left: '12%', size: '7px', duration: 5.5, delay: 2 },
          { top: '68%', left: '88%', size: '8px', duration: 7.5, delay: 0.5 },
          { top: '38%', left: '52%', size: '6px', duration: 5, delay: 1.5 },
          { top: '82%', left: '38%', size: '7px', duration: 8.5, delay: 3 }
        ].map((pt, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.35, 0.95, 0.35],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: pt.duration,
              delay: pt.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              top: pt.top,
              left: pt.left,
              width: pt.size,
              height: pt.size,
            }}
            className="absolute rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          />
        ))}
      </div>
    </div>
  );
}
