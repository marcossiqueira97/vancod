import { motion } from 'motion/react';

export function AnimatedGrid() {
  const spheres = [
    {
      size: 'w-48 h-48 md:w-64 md:h-64',
      top: 'top-8',
      left: 'left-[8%]',
      bg: 'bg-gradient-to-tr from-blue-600/30 via-sky-400/25 to-indigo-500/30',
      border: 'border-2 border-blue-400/60 shadow-[0_0_40px_rgba(59,130,246,0.4)]',
      animate: {
        y: [0, -35, 20, 0],
        x: [0, 25, -25, 0],
        scale: [1, 1.1, 0.95, 1],
      },
      duration: 12
    },
    {
      size: 'w-40 h-40 md:w-56 md:h-56',
      top: 'top-24',
      left: 'right-[10%]',
      bg: 'bg-gradient-to-bl from-indigo-600/30 via-purple-500/25 to-blue-500/30',
      border: 'border-2 border-indigo-400/60 shadow-[0_0_40px_rgba(99,102,241,0.4)]',
      animate: {
        y: [0, 45, -20, 0],
        x: [0, -35, 20, 0],
        scale: [1, 0.95, 1.08, 1],
      },
      duration: 16
    },
    {
      size: 'w-36 h-36 md:w-52 md:h-52',
      top: 'top-[420px]',
      left: 'left-[4%]',
      bg: 'bg-gradient-to-r from-cyan-500/30 via-blue-600/25 to-indigo-500/30',
      border: 'border-2 border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.4)]',
      animate: {
        y: [0, -30, 30, 0],
        x: [0, 40, -15, 0],
        scale: [1, 1.15, 0.9, 1],
      },
      duration: 14
    },
    {
      size: 'w-44 h-44 md:w-60 md:h-60',
      top: 'top-[580px]',
      left: 'right-[6%]',
      bg: 'bg-gradient-to-tr from-purple-600/30 via-pink-500/25 to-blue-500/30',
      border: 'border-2 border-purple-400/60 shadow-[0_0_35px_rgba(168,85,247,0.4)]',
      animate: {
        y: [0, 35, -35, 0],
        x: [0, -25, 25, 0],
        scale: [1, 1.08, 0.92, 1],
      },
      duration: 18
    }
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* 3D Glassmorphic Floating Spheres */}
      {spheres.map((s, i) => (
        <motion.div
          key={i}
          animate={s.animate}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute rounded-full ${s.size} ${s.top} ${s.left} ${s.bg} ${s.border} backdrop-blur-md will-change-transform flex items-center justify-center`}
        >
          {/* Inner 3D Highlight Ring */}
          <div className="w-[85%] h-[85%] rounded-full border border-white/40 bg-white/10 blur-[1px]" />
        </motion.div>
      ))}

      {/* Modern Grid Blueprint Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_15%,#000_60%,transparent_100%)]" />

      {/* Floating Shimmer Glowing Light Dots */}
      <div className="absolute inset-0">
        {[
          { top: '15%', left: '18%', size: '12px' },
          { top: '25%', left: '82%', size: '10px' },
          { top: '42%', left: '14%', size: '14px' },
          { top: '62%', left: '85%', size: '11px' },
          { top: '35%', left: '48%', size: '13px' },
          { top: '78%', left: '32%', size: '12px' }
        ].map((pt, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.6, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              top: pt.top,
              left: pt.left,
              width: pt.size,
              height: pt.size,
            }}
            className="absolute rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.9)]"
          />
        ))}
      </div>
    </div>
  );
}
