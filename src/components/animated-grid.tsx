import { motion } from 'motion/react';

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Animated Glowing Light Orbs for Light Theme */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          x: [0, 80, 0],
          y: [0, -40, 0],
          opacity: [0.35, 0.65, 0.35]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-300/30 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -90, 0],
          y: [0, 60, 0],
          opacity: [0.3, 0.55, 0.3]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-indigo-300/25 blur-[130px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, -50, 0],
          opacity: [0.2, 0.45, 0.2]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-96 left-10 w-[450px] h-[450px] rounded-full bg-purple-300/20 blur-[140px]"
      />

      {/* Grid Pattern Overlay for Light Theme */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_10%,#000_40%,transparent_100%)]" />

      {/* Floating Animated Particles */}
      <div className="absolute inset-0">
        {[
          { top: '15%', left: '20%', size: '6px', duration: 4, delay: 0 },
          { top: '25%', left: '75%', size: '4px', duration: 6, delay: 1 },
          { top: '45%', left: '15%', size: '5px', duration: 5, delay: 2 },
          { top: '65%', left: '85%', size: '6px', duration: 7, delay: 0.5 },
          { top: '35%', left: '50%', size: '4px', duration: 4.5, delay: 1.5 },
          { top: '80%', left: '35%', size: '5px', duration: 8, delay: 3 }
        ].map((pt, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.4, 1]
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
            className="absolute rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
          />
        ))}
      </div>
    </div>
  );
}
