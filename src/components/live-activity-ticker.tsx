import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, CheckCircle2, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const activities = [
  { text: 'Adega Imperial (Campinas/SP): 142 vendas finalizadas sem internet no caixa', icon: '⚡', color: 'text-cyan-400' },
  { text: 'Pizzaria Bella Itália (Curitiba/PR): Tempo de cozinha reduzido para 12 min no KDS', icon: '🍕', color: 'text-pink-400' },
  { text: 'Casamento Marina & Pedro (Belo Horizonte/MG): 419 fotos ao vivo na TV', icon: '📸', color: 'text-purple-400' },
  { text: 'Distribuidora Premium (São Paulo/SP): R$ 3.800 de fiado recuperados via WhatsApp', icon: '💰', color: 'text-emerald-400' },
  { text: 'Burger House (Rio de Janeiro/RJ): 84 pedidos iFood despachados sem digitação manual', icon: '🍔', color: 'text-amber-400' },
];

export function LiveActivityTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-3 bg-slate-900 border-b border-slate-800 text-slate-300 text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left Indicator */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold text-slate-100 uppercase tracking-wider text-[11px] hidden sm:inline">
            Atividade em Tempo Real:
          </span>
        </div>

        {/* Center Animated Activity */}
        <div className="flex-1 overflow-hidden h-5 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 truncate"
            >
              <span>{activities[index].icon}</span>
              <span className="font-medium text-slate-200 truncate">{activities[index].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Status Badge */}
        <div className="hidden md:flex items-center gap-1 text-[11px] text-emerald-400 font-mono bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800">
          <span>99.99% Uptime</span>
        </div>

      </div>
    </div>
  );
}
