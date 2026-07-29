import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, CheckCircle2, Zap, Monitor, Smartphone, ShoppingBag } from 'lucide-react';

export function VideoDemoPlayer() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const demos = [
    {
      id: 'adega-speed',
      title: 'Caixa Rápido para Balcão',
      product: 'Balcão Pro Adegas',
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      badge: '⚡ Caixa 100% Ativo sem Internet',
      description: 'Veja como um pedido de combo de bebida + energéticos e fiado é fechado em segundos sem fila no balcão.',
      stats: ['Venda rápida de combos e bebidas', 'Funciona 100% mesmo se cair a internet', 'Controle de Fiado com fatura no WhatsApp'],
      previewImg: '/assets/adega-br.png',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10'
    },
    {
      id: 'kds-kitchen',
      title: 'Comanda & Cozinha KDS',
      product: 'Vancod Restaurantes',
      icon: <Monitor className="w-5 h-5 text-pink-400" />,
      badge: '💻 App Desktop & Nuvem',
      description: 'O pedido feito no caixa, mesa ou iFood vai imediatamente para a tela da cozinha dividida por setores de preparo.',
      stats: ['App Desktop & Nuvem Sincronizado', 'Integração Oficial com iFood', 'KDS por Setor de Preparo'],
      previewImg: '/assets/restaurantes-br.png',
      badgeColor: 'border-pink-500/40 text-pink-300 bg-pink-500/10'
    },
    {
      id: 'olhare-tv',
      title: 'Mural TV ao Vivo',
      product: 'Olhare Fotos & Eventos',
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      badge: '📸 Web App via QR Code',
      description: 'Convidados escaneiam o QR Code na mesa e enviam fotos que passam por moderação e aparecem na TV do evento.',
      stats: ['Plataforma Web 100% em Nuvem', 'Acesso por QR Code (Zero Instalação)', 'Painel de Moderação ao Vivo'],
      previewImg: '/assets/olhare-br.png',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10'
    }
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-bold mb-4 shadow-sm">
            <Play className="w-3.5 h-3.5 fill-blue-700 text-blue-700" /> Demonstração da Operação
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Sistemas rodando em <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">tempo real.</span>
          </h2>
          <p className="text-xl text-slate-600 font-normal">
            Selecione uma demonstração abaixo para ver a tecnologia em ação no seu segmento.
          </p>
        </div>

        {/* Demo Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {demos.map((demo, idx) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                activeDemo === idx
                  ? 'bg-white border-blue-500 shadow-xl shadow-blue-600/10 scale-[1.02] ring-2 ring-blue-500/20'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-slate-100 border border-slate-200">{demo.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{demo.product.split(' ')[0]}</span>
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">{demo.title}</h4>
                <p className="text-xs text-slate-500 font-medium">{demo.badge}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Video / Interactive Display Container */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 md:p-10 shadow-2xl shadow-slate-200/80 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Media Player */}
            <div className="lg:col-span-7 relative group">
              <div className="relative aspect-[16/10] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDemo}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <img 
                      src={demos[activeDemo].previewImg} 
                      alt={demos[activeDemo].title} 
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Floating Live Overlay Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold text-emerald-400 backdrop-blur-md flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      DEMO AO VIVO • OPERAÇÃO ATIVA
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Demo Specs & Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${demos[activeDemo].badgeColor}`}>
                  {demos[activeDemo].badge}
                </span>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  {demos[activeDemo].description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Diferenciais em Destaque:</span>
                {demos[activeDemo].stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
