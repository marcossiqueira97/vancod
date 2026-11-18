import { useState } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, getWhatsAppUrl } from '../lib/config';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const hasDirectWhatsApp = Boolean(SITE_CONFIG.contact.whatsappNumber);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-900/5"
          >
            {/* Header */}
            <div className="bg-slate-900 p-5 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                  V
                </div>
                <div>
                  <h4 className="font-bold text-base text-white leading-tight">Fale com a Vancod</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Demonstrações e esclarecimento de dúvidas
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 bg-slate-50 space-y-4">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <p className="font-semibold text-slate-900 mb-1">Como podemos ajudar sua operação?</p>
                <p>Por segmento:</p>
              </div>

              <div className="space-y-2">
                {[
                  { 
                    title: 'Balcão Pro Adegas', 
                    desc: 'PDV offline e fiado no WhatsApp',
                    msg: 'Olá! Gostaria de agendar uma demonstração do Balcão Pro para Adegas.' 
                  },
                  { 
                    title: 'Vancod Restaurantes', 
                    desc: 'KDS para cozinha e integração de pedidos',
                    msg: 'Olá! Gostaria de agendar uma demonstração do Vancod Restaurantes.' 
                  },
                  { 
                    title: 'Olhare Fotos & Eventos', 
                    desc: 'Transmissão de fotos via QR Code',
                    msg: 'Olá! Gostaria de conhecer o Olhare para Eventos.' 
                  },
                ].map((item, idx) => (
                  hasDirectWhatsApp ? (
                    <a
                      key={idx}
                      href={getWhatsAppUrl(item.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-all text-xs text-slate-800 group shadow-2xs"
                    >
                      <div>
                        <span className="font-bold block text-slate-900">{item.title}</span>
                        <span className="text-[11px] text-slate-500">{item.desc}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      to="/contato"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-all text-xs text-slate-800 group shadow-2xs"
                    >
                      <div>
                        <span className="font-bold block text-slate-900">{item.title}</span>
                        <span className="text-[11px] text-slate-500">{item.desc}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  )
                ))}
              </div>

              {hasDirectWhatsApp ? (
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Abrir Conversa no WhatsApp
                </a>
              ) : (
                <Link
                  to="/contato"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Solicitar Contato Comercial
                </Link>
              )}

              <div className="text-center">
                <Link 
                  to="/contato" 
                  onClick={() => setIsOpen(false)}
                  className="text-[11px] font-semibold text-blue-600 hover:underline"
                >
                  Ou preencha o formulário de demonstração
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2.5 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold shadow-xl border border-slate-700 transition-all text-xs"
        aria-label="Fale com a Vancod"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
        <span>Fale Conosco</span>
      </motion.button>
    </div>
  );
}
