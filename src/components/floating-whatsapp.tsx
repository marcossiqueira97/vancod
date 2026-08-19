import { useState } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = '5511999999999'; // Can be customized or linked to contact page
  const defaultMessage = encodeURIComponent('Olá! Gostaria de conhecer as soluções da Vancod e agendar uma demonstração gratuita.');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-900/5"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 font-extrabold flex items-center justify-center text-xl shadow-md">
                    V
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base leading-tight">Time de Especialistas Vancod</h4>
                  <p className="text-xs text-blue-100 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online agora • Resposta rápida
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 bg-slate-50 space-y-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900 mb-1">👋 Olá! Precisa acelerar sua operação?</p>
                <p className="text-xs text-slate-600">
                  Tire dúvidas em tempo real com nossa equipe e agende uma demonstração prática do sistema no seu negócio.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  { title: '⚡ Balcão Pro Adegas', text: 'Quero ver o PDV para Adegas e Distribuidoras' },
                  { title: '💻 Vancod Restaurantes', text: 'Quero conhecer o KDS e Integração iFood' },
                  { title: '📸 Olhare Fotos', text: 'Quero o mural de fotos ao vivo para Eventos' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(`Olá! ${item.text}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all text-xs font-bold text-slate-800 group shadow-2xs"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>

              <a
                href={`https://wa.me/${phone}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Iniciar Conversa no WhatsApp
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Atendimento 100% seguro e sem compromisso
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-extrabold shadow-2xl shadow-emerald-600/40 border-2 border-white/20 transition-all group"
        aria-label="Falar no WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-300 border-2 border-emerald-700 animate-ping" />
        </div>
        <span className="text-sm font-bold hidden sm:inline-block">Fale Conosco</span>
      </motion.button>
    </div>
  );
}
