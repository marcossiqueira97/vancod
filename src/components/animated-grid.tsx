import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 120 twinkling particles/stars
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      color: Math.random() > 0.5 ? '#ef4444' : Math.random() > 0.3 ? '#06b6d4' : '#ffffff'
    }));

    // Create 3 shooting meteors
    const meteors = Array.from({ length: 3 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.5,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 6 + 4,
      alpha: 0
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Twinkling Stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.abs(star.alpha));
        ctx.fillStyle = star.color;
        ctx.shadowBlur = star.size * 3;
        ctx.shadowColor = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw Shooting Meteors
      meteors.forEach((m) => {
        m.x -= m.speed;
        m.y += m.speed * 0.5;
        m.alpha += 0.02;

        if (m.x < -100 || m.y > height || m.alpha > 1) {
          m.x = Math.random() * width + 200;
          m.y = Math.random() * (height * 0.4);
          m.alpha = 0;
        }

        ctx.save();
        ctx.globalAlpha = Math.sin(m.alpha * Math.PI) * 0.7;
        const grad = ctx.createLinearGradient(m.x, m.y, m.x + m.length, m.y - m.length * 0.5);
        grad.addColorStop(0, '#ef4444');
        grad.addColorStop(0.5, '#3b82f6');
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + m.length, m.y - m.length * 0.5);
        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none bg-black">
      {/* Canvas Starfield */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* Cyberpunk Glowing Neon Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 90, 0],
          y: [0, -60, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/4 w-[650px] h-[650px] rounded-full bg-red-600/25 blur-[140px]"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -100, 0],
          y: [0, 80, 0],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-[550px] h-[550px] rounded-full bg-cyan-600/20 blur-[150px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, 60, -60, 0],
          opacity: [0.2, 0.45, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-96 left-10 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[160px]"
      />

      {/* Cyberpunk Matrix Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_20%,#000_50%,transparent_100%)]" />

      {/* Moving Horizontal Scanline Beam */}
      <motion.div 
        animate={{ y: ['0%', '1000%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent shadow-[0_0_15px_#ef4444]"
      />
    </div>
  );
}
