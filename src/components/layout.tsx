import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Zap, ChefHat, QrCode, MapPin, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { FloatingWhatsApp } from './floating-whatsapp';
import { SITE_CONFIG, getWhatsAppUrl } from '../lib/config';

const products = [
  { 
    name: 'Balcão Pro Adegas', 
    path: 'https://adegas.vancod.com.br', 
    desc: 'PDV com operação offline-first, controle de fiado e desmembramento de combos.', 
    icon: <Zap className="w-4 h-4 text-blue-600" /> 
  },
  { 
    name: 'Vancod Restaurantes', 
    path: 'https://restaurantes.vancod.com.br', 
    desc: 'KDS para cozinha, comanda digital de mesas e integração de pedidos.', 
    icon: <ChefHat className="w-4 h-4 text-blue-600" /> 
  },
  { 
    name: 'Olhare Fotos & Eventos', 
    path: 'https://olhare.vancod.com.br', 
    desc: 'Mural de fotos e recados em tempo real na TV via QR Code sem instalação.', 
    icon: <QrCode className="w-4 h-4 text-blue-600" /> 
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={cn(
          'transition-all duration-300 border-b',
          scrolled
            ? 'bg-[#001a44]/95 backdrop-blur-xl border-white/10 shadow-lg'
            : 'bg-[#001a44]/80 backdrop-blur-md border-white/5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            
            {/* Logo */}
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center">
                <img src="/assets/vancod-marca-dark.png" alt="" className="h-9 w-auto" />
                <span className="ml-1.5 leading-none">
                  <span className="block font-display text-2xl font-bold tracking-tight text-white">vancod</span>
                  <span className="block text-[9px] font-semibold tracking-[0.3em] text-sky-400">TECNOLOGIA</span>
                </span>
              </Link>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center gap-6">
                <div className="relative group">
                  <button className="flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-white transition-colors py-2">
                    Soluções <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200 text-slate-400" />
                  </button>
                  <div className="absolute top-full left-0 w-[420px] bg-white border border-slate-200 shadow-lg rounded-2xl p-2.5 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ring-1 ring-slate-900/5">
                    <div className="space-y-1">
                      {products.map((p) => (
                        <a 
                          key={p.path} 
                          href={p.path} 
                          className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition-all group/item"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 mt-0.5 group-hover/item:bg-white group-hover/item:shadow-2xs transition-all">
                            {p.icon}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors text-xs">{p.name}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-normal">{p.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/#como-trabalhamos" className="text-xs font-semibold text-slate-200 hover:text-white transition-colors">Como trabalhamos</Link>
                <Link to="/sobre" className="text-xs font-semibold text-slate-200 hover:text-white transition-colors">A Empresa</Link>
                <Link to="/suporte" className="text-xs font-semibold text-slate-200 hover:text-white transition-colors">Suporte</Link>
                <Link to="/contato" className="text-xs font-semibold text-slate-200 hover:text-white transition-colors">Contato</Link>
              </nav>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              {SITE_CONFIG.contact.whatsappNumber && (
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/30 text-white font-semibold text-xs hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Falar no WhatsApp
                </a>
              )}
              <Link 
                to="/contato" 
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-2xs transition-all hover:shadow-xs"
              >
                <span>Agendar demonstração</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2" aria-label="Menu principal">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <div className="py-2">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">Soluções Especializadas</div>
                {products.map((p) => (
                  <a 
                    key={p.path} 
                    href={p.path} 
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50"
                  >
                    <span className="p-1.5 rounded-lg bg-slate-100">{p.icon}</span>
                    {p.name}
                  </a>
                ))}
              </div>
              <div className="h-px bg-slate-100 my-2" />
              <Link to="/#como-trabalhamos" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Como trabalhamos</Link>
              <Link to="/sobre" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">A Empresa</Link>
              <Link to="/suporte" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Suporte Técnico</Link>
              <Link to="/contato" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Fale Conosco</Link>
              <div className="pt-3 px-3">
                <Link to="/contato" className="w-full flex justify-center items-center gap-2 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-bold text-xs shadow-xs">
                  Agendar demonstração <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-20 pb-12 border-t border-slate-800 text-slate-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* Coluna 1: Empresa & Bio */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center">
              <img src="/assets/vancod-logo-128.webp" alt="Vancod Tecnologia" className="h-16 w-16 rounded-full object-cover" />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Desenvolvimento de softwares especializados para rotinas de adegas, restaurantes e eventos com foco em agilidade e confiabilidade operacional.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Vancod Tecnologia — {SITE_CONFIG.company.city}, {SITE_CONFIG.company.country}</span>
            </div>
          </div>
          
          {/* Coluna 2: Soluções */}
          <div className="lg:col-span-1">
            <h2 className="font-bold text-white mb-4 text-sm">Soluções</h2>
            <ul className="space-y-2.5">
              {products.map(p => (
                <li key={p.path}>
                  <a href={p.path} className="text-xs text-slate-400 hover:text-white transition-colors">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Suporte & Atendimento */}
          <div className="lg:col-span-1">
            <h2 className="font-bold text-white mb-4 text-sm">Suporte</h2>
            <ul className="space-y-2.5">
              <li><Link to="/suporte" className="text-xs text-slate-400 hover:text-white transition-colors">Central de Suporte</Link></li>
              <li><Link to="/contato" className="text-xs text-slate-400 hover:text-white transition-colors">Fale Conosco</Link></li>
              <li>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-xs text-slate-400 hover:text-white transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Institucional & Legal */}
          <div className="lg:col-span-1">
            <h2 className="font-bold text-white mb-4 text-sm">Institucional</h2>
            <ul className="space-y-2.5">
              <li><Link to="/sobre" className="text-xs text-slate-400 hover:text-white transition-colors">Sobre a Vancod</Link></li>
              <li><Link to="/termos" className="text-xs text-slate-400 hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-xs text-slate-400 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Vancod Tecnologia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Soluções de software desenvolvidas para operações reais.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-blue-500/20">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
