import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Zap, ChefHat, QrCode, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { FloatingWhatsApp } from './floating-whatsapp';
import { SITE_CONFIG, getWhatsAppUrl } from '../lib/config';

const products = [
  { 
    name: 'Balcão Pro Adegas', 
    path: '/adegas', 
    desc: 'PDV com operação offline-first, controle de fiado e desmembramento de combos.', 
    icon: <Zap className="w-4 h-4 text-cyan-600" /> 
  },
  { 
    name: 'Vancod Restaurantes', 
    path: '/restaurantes', 
    desc: 'KDS para cozinha, comanda digital de mesas e integração de pedidos.', 
    icon: <ChefHat className="w-4 h-4 text-pink-600" /> 
  },
  { 
    name: 'Olhare Fotos & Eventos', 
    path: '/olhare', 
    desc: 'Mural de fotos e recados em tempo real na TV via QR Code sem instalação.', 
    icon: <QrCode className="w-4 h-4 text-purple-600" /> 
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
            ? 'bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-sm' 
            : 'bg-white/85 backdrop-blur-md border-slate-200/50'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            
            {/* Logo */}
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
                  V
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-tight">Vancod</span>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Tecnologia</span>
                </div>
              </Link>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center gap-7">
                <div className="relative group">
                  <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2">
                    Produtos <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 w-[440px] bg-white border border-slate-200 shadow-xl rounded-2xl p-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ring-1 ring-slate-900/5">
                    <div className="space-y-1">
                      {products.map((p) => (
                        <Link 
                          key={p.path} 
                          to={p.path} 
                          className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition-all group/item"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 mt-0.5 group-hover/item:bg-white group-hover/item:shadow-xs transition-all">
                            {p.icon}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors text-sm">{p.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-relaxed font-normal">{p.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/sobre" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">A Empresa</Link>
                <Link to="/suporte" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Suporte</Link>
                <Link to="/contato" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Contato</Link>
              </nav>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                to="/contato" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xs shadow-sm transition-all hover:shadow-md"
              >
                Agendar demonstração
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2" aria-label="Menu principal">
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
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <div className="py-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">Soluções Especializadas</div>
                {products.map((p) => (
                  <Link 
                    key={p.path} 
                    to={p.path} 
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50"
                  >
                    <span className="p-1.5 rounded-lg bg-slate-100">{p.icon}</span>
                    {p.name}
                  </Link>
                ))}
              </div>
              <div className="h-px bg-slate-100 my-2" />
              <Link to="/sobre" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">A Empresa</Link>
              <Link to="/suporte" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Suporte Técnico</Link>
              <Link to="/contato" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Fale Conosco</Link>
              <div className="pt-3 px-3">
                <Link to="/contato" className="w-full flex justify-center items-center gap-2 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-bold text-sm shadow-sm">
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
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-extrabold text-lg">
                V
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-tight">Vancod</span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Tecnologia</span>
              </div>
            </Link>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
              Desenvolvimento de softwares especializados para rotinas de adegas, restaurantes e eventos com foco em agilidade e confiabilidade operacional.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Vancod Tecnologia — {SITE_CONFIG.company.city}, {SITE_CONFIG.company.country}</span>
            </div>
          </div>
          
          {/* Coluna 2: Soluções */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Soluções</h4>
            <ul className="space-y-2.5">
              {products.map(p => (
                <li key={p.path}>
                  <Link to={p.path} className="text-xs text-slate-400 hover:text-white transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Suporte & Atendimento */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Suporte</h4>
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
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Institucional</h4>
            <ul className="space-y-2.5">
              <li><Link to="/sobre" className="text-xs text-slate-400 hover:text-white transition-colors">Sobre a Vancod</Link></li>
              <li><Link to="/termos" className="text-xs text-slate-400 hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-xs text-slate-400 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
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
