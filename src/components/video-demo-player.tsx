import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Zap, Monitor, Smartphone, Layers } from 'lucide-react';

export function VideoDemoPlayer() {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 'adega-speed',
      title: 'Frente de Caixa & Combos',
      product: 'Balcão Pro Adegas',
      icon: <Zap className="w-5 h-5 text-cyan-600" />,
      badge: 'Operação Offline-First',
      description: 'Lançamento rápido de combos de bebidas com dedução automática de insumos e controle de fiado com extrato no WhatsApp.',
      stats: ['Venda ágil de bebidas e combos', 'Funcionamento local sem depender de internet', 'Registro de fiado com extrato digital'],
      previewImg: '/assets/adega-br.png',
      badgeColor: 'border-cyan-200 text-cyan-800 bg-cyan-50'
    },
    {
      id: 'kds-kitchen',
      title: 'Comandas & Telas KDS',
      product: 'Vancod Restaurantes',
      icon: <Monitor className="w-5 h-5 text-pink-600" />,
      badge: 'Cozinha & Salão',
      description: 'Pedidos de mesas e delivery organizados em telas digitais na cozinha por praça de preparo com alertas de tempo.',
      stats: ['Telas KDS por praça de produção', 'Divisão automática de contas de mesas', 'Módulo com frações para pizzarias'],
      previewImg: '/assets/restaurantes-br.png',
      badgeColor: 'border-pink-200 text-pink-800 bg-pink-50'
    },
    {
      id: 'olhare-tv',
      title: 'Mural de Fotos ao Vivo',
      product: 'Olhare Fotos & Eventos',
      icon: <Smartphone className="w-5 h-5 text-purple-600" />,
      badge: 'Transmissão em Telão',
      description: 'Convidados enviam fotos pelo celular via QR Code que passam por moderação prévia e aparecem na TV do evento.',
      stats: ['Acesso direto pelo navegador sem instalar app', 'Painel de moderação de fotos', 'Download completo em alta resolução'],
      previewImg: '/assets/olhare-br.png',
      badgeColor: 'border-purple-200 text-purple-800 bg-purple-50'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Visão de Produto</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Interfaces desenvolvidas para o dia a dia.
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Selecione uma das soluções para visualizar os fluxos de trabalho e os recursos principais.
          </p>
        </div>

        {/* Demo Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {demos.map((demo, idx) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(idx)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                activeDemo === idx
                  ? 'bg-slate-50 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-slate-100">{demo.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{demo.product}</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-0.5">{demo.title}</h4>
              <p className="text-xs text-slate-500">{demo.badge}</p>
            </button>
          ))}
        </div>

        {/* Display Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Media */}
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDemo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full"
                  >
                    <img 
                      src={demos[activeDemo].previewImg} 
                      alt={demos[activeDemo].title} 
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border mb-2 ${demos[activeDemo].badgeColor}`}>
                  {demos[activeDemo].badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {demos[activeDemo].description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-700 block">Destaques operacionais:</span>
                {demos[activeDemo].stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
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
