import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Instagram, Zap, ChefHat, QrCode, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { LiveActivityTicker } from './live-activity-ticker';
import { FloatingWhatsApp } from './floating-whatsapp';

const products = [
  { name: 'Balcão Pro Adegas', path: '/adegas', desc: 'PDV Desktop 100% Offline, combos e fiado no WhatsApp', icon: <Zap className="w-4 h-4 text-cyan-600" /> },
  { name: 'Vancod Restaurantes', path: '/restaurantes', desc: 'KDS para cozinha, comanda digital e integração iFood', icon: <ChefHat className="w-4 h-4 text-pink-600" /> },
  { name: 'Olhare Fotos & Eventos', path: '/olhare', desc: 'Mural de fotos ao vivo no telão da festa via QR Code', icon: <QrCode className="w-4 h-4 text-purple-600" /> },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <LiveActivityTicker />
      <div
        className={cn(
          'transition-all duration-300 border-b',
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-slate-200 shadow-lg shadow-slate-200/50' 
            : 'bg-white/85 backdrop-blur-md border-slate-200/60'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-3 group relative">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative z-10 shadow-md shadow-blue-600/30">
                  <span className="text-white font-black text-2xl">V</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl tracking-tight text-slate-900 leading-none">Vancod</span>
                  <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-0.5">Systems</span>
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                <div className="relative group">
                  <button className="flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors py-2">
                    Soluções & Produtos <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 w-[480px] bg-white backdrop-blur-2xl border border-slate-200 shadow-2xl rounded-2xl p-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ring-1 ring-slate-900/5">
                    <div className="grid grid-cols-1 gap-2">
                      {products.map((p) => (
                        <Link key={p.path} to={p.path} className="flex items-start gap-3.5 p-3.5 hover:bg-slate-50 border border-transparent hover:border-slate-200 rounded-xl transition-all group/item">
                          <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 group-hover/item:scale-105 transition-transform mt-0.5">
                            {p.icon}
                          </div>
                          <div>
                            <div className="font-extrabold text-slate-900 group-hover/item:text-blue-600 transition-colors text-sm">{p.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{p.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 p-2 flex items-center justify-between">
                       <span className="text-xs text-slate-500 font-medium">Arquitetura de Alta Confiabilidade</span>
                       <Link to="/sobre" className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 group/link">
                          Sobre a Vancod <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                       </Link>
                    </div>
                  </div>
                </div>
                <Link to="/sobre" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">A Empresa</Link>
                <Link to="/suporte" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Suporte</Link>
                <Link to="/contato" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Planos & Preços</Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-5">
              <Link to="/contato" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                Falar com Vendas
              </Link>
              <Link 
                to="/contato" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-extrabold text-sm transition-all shadow-lg shadow-blue-600/25 hover:scale-105"
              >
                Agendar Demonstração
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2" aria-label="Menu">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              <div className="py-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">Soluções do Ecossistema</div>
                {products.map((p) => (
                  <Link key={p.path} to={p.path} className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50">
                    <span className="p-1.5 rounded-lg bg-slate-100">{p.icon}</span>
                    {p.name}
                  </Link>
                ))}
              </div>
              <div className="h-px bg-slate-100 my-4" />
              <Link to="/sobre" className="block px-3 py-2.5 rounded-xl text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50">A Empresa</Link>
              <Link to="/suporte" className="block px-3 py-2.5 rounded-xl text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Suporte Técnico</Link>
              <Link to="/contato" className="block px-3 py-2.5 rounded-xl text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Falar com Consultores</Link>
              <div className="pt-4 px-3">
                <Link to="/contato" className="w-full flex justify-center items-center gap-2 py-3.5 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-extrabold shadow-lg shadow-blue-600/25">
                  Agendar Demonstração Gratuita <ArrowRight className="w-4 h-4" />
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
  return (
    <footer className="bg-slate-950 pt-28 pb-12 border-t border-slate-800 text-slate-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-2xl">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tight text-white leading-none">Vancod</span>
                <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mt-0.5">Systems</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Ecossistema de engenharia de software de classe mundial para empresas que exigem alto desempenho, 0ms de lentidão no caixa e máxima conversão.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/vancod" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600/20 hover:border-pink-500/40 transition-all text-white group" title="Instagram Vancod">
                <Instagram className="w-5 h-5 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Produtos</h4>
            <ul className="space-y-3.5">
              {products.map(p => (
                <li key={p.path}>
                  <Link to={p.path} className="text-sm text-slate-400 hover:text-white transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-3.5">
              <li><Link to="/sobre" className="text-sm text-slate-400 hover:text-white transition-colors">Sobre a Vancod</Link></li>
              <li><Link to="/contato" className="text-sm text-slate-400 hover:text-white transition-colors">Contato & Vendas</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Suporte</h4>
            <ul className="space-y-3.5">
              <li><Link to="/suporte" className="text-sm text-slate-400 hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/contato" className="text-sm text-slate-400 hover:text-white transition-colors">Demonstração Guiada</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Legal & LGPD</h4>
            <ul className="space-y-3.5">
              <li><Link to="/privacidade" className="text-sm text-slate-400 hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link to="/termos" className="text-sm text-slate-400 hover:text-white transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vancod Systems. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
             <span>Engenharia de Software de Alta Performance para o Brasil.</span>
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
      <main className="flex-1 pt-12">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
