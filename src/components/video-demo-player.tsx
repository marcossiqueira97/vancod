import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, CheckCircle2, Zap, Monitor, Smartphone, ShoppingBag } from 'lucide-react';

export function VideoDemoPlayer() {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 'adega-speed',
      title: 'Caixa Rápido para Balcão',
      product: 'Balcão Pro Adegas',
      icon: <Zap className="w-5 h-5 text-red-400" />,
      badge: '⚡ Caixa 100% Ativo sem Internet',
      description: 'Veja como um pedido de combo de bebida + energéticos e fiado é fechado em segundos sem fila no balcão.',
      stats: ['Venda rápida de combos e bebidas', 'Funciona 100% mesmo se cair a internet', 'Controle de Fiado com fatura no WhatsApp'],
      previewImg: '/assets/adega-br.png',
      badgeColor: 'border-red-500/40 text-red-400 bg-red-950/80'
    },
    {
      id: 'kds-kitchen',
      title: 'Comanda & Cozinha KDS',
      product: 'Vancod Restaurantes',
      icon: <Monitor className="w-5 h-5 text-cyan-400" />,
      badge: '💻 App Desktop & Nuvem',
      description: 'O pedido feito no caixa, mesa ou iFood vai imediatamente para a tela da cozinha dividida por setores de preparo.',
      stats: ['App Desktop & Nuvem Sincronizado', 'Integração Oficial com iFood', 'KDS por Setor de Preparo'],
      previewImg: '/assets/restaurantes-br.png',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/80'
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
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/80'
    },
    {
      id: 'commerce-sync',
      title: 'Sync de Estoque Físico',
      product: 'Vancod Commerce',
      icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
      badge: '🛒 E-Commerce Headless',
      description: 'Uma venda realizada no balcão da sua loja física atualiza automaticamente a disponibilidade da sua loja virtual.',
      stats: ['Plataforma E-Commerce Headless', 'Sincronização Física + Virtual 24/7', 'Checkout de Alta Conversão'],
      previewImg: '/assets/commerce-br.png',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/80'
    }
  ];

  return (
    <section className="py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-mono font-bold mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            <Play className="w-3.5 h-3.5 fill-red-400 text-red-400" /> DEMONSTRAÇÃO DA OPERAÇÃO
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-serif">
            Sistemas rodando em <span className="bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">tempo real.</span>
          </h2>
          <p className="text-xl text-slate-400 font-normal">
            Selecione uma demonstração abaixo para ver a tecnologia em ação no seu segmento.
          </p>
        </div>

        {/* Demo Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {demos.map((demo, idx) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                activeDemo === idx
                  ? 'bg-slate-900 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.3)] scale-[1.02] ring-1 ring-red-500/40'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-slate-950 border border-slate-800">{demo.icon}</span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">{demo.product.split(' ')[0]}</span>
              </div>
              <div>
                <h4 className="font-extrabold text-white text-base mb-1">{demo.title}</h4>
                <p className="text-xs text-slate-400 font-mono">{demo.badge}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Video / Interactive Display Container */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden ring-1 ring-slate-800">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Media Player */}
            <div className="lg:col-span-7 relative group">
              <div className="relative aspect-[16/10] rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
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
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/90 border border-slate-700 text-xs font-mono font-bold text-emerald-400 backdrop-blur-md flex items-center gap-2 shadow-lg">
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
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold border mb-3 ${demos[activeDemo].badgeColor}`}>
                  {demos[activeDemo].badge}
                </span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight mb-3 font-serif">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed font-normal">
                  {demos[activeDemo].description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">// Diferenciais em Destaque:</span>
                {demos[activeDemo].stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-200 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
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
