import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Button as UIButton } from '@vancod/ui';

const products = [
  { name: 'Balcão Pro Adegas', path: '/adegas', desc: 'Gestão inteligente para adegas e distribuidoras' },
  { name: 'Vancod Restaurantes', path: '/restaurantes', desc: 'PDV, comandas, mesas e KDS para food service' },
  { name: 'Olhare', path: '/olhare', desc: 'Plataforma de fotos e gestão para eventos' },
  { name: 'Vancod Commerce', path: '/commerce', desc: 'Plataforma completa de e-commerce' },
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
    <>
      {/* Overclock-style Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-950 via-slate-950 to-blue-950 border-b border-red-500/20 text-xs py-2 px-4 text-center font-mono text-slate-300 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
        <span className="text-red-400 font-bold tracking-wider uppercase">VANCOD OS 3.0</span>
        <span className="hidden sm:inline text-slate-400">· Velocidade máxima offline sem travar seu caixa</span>
        <Link to="/contato" className="text-white hover:text-red-400 underline font-bold ml-2">Agendar Teste →</Link>
      </div>

      <header
        className={cn(
          'fixed top-8 left-0 right-0 z-50 transition-all duration-500 border-b',
          scrolled 
            ? 'bg-slate-950/85 backdrop-blur-2xl border-slate-800/80 shadow-2xl shadow-black/80' 
            : 'bg-slate-950/50 backdrop-blur-md border-slate-800/40'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-3 group relative">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-rose-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative z-10 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                  <span className="text-white font-extrabold text-2xl tracking-tighter">V</span>
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white relative z-10 font-serif">Vancod<span className="text-red-500">_</span></span>
              </Link>

              <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
                <div className="relative group">
                  <button className="flex items-center gap-1.5 font-bold text-slate-300 hover:text-white transition-colors py-2">
                    Produtos <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300 text-red-500" />
                  </button>
                  <div className="absolute top-full left-0 w-[440px] bg-slate-950/95 backdrop-blur-2xl border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded-2xl p-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="grid grid-cols-2 gap-2">
                      {products.map((p) => (
                        <Link key={p.path} to={p.path} className="block p-3.5 hover:bg-slate-900/90 border border-transparent hover:border-slate-700/80 rounded-xl transition-all group/item">
                          <div className="font-bold text-white group-hover/item:text-red-400 transition-colors flex items-center gap-1">
                            <span>{p.name}</span>
                          </div>
                          <div className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">{p.desc}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-800/80 p-2">
                       <Link to="/sobre" className="flex items-center justify-between text-xs font-bold text-red-400 hover:text-red-300 group/link">
                          Conheça o Ecossistema Vancod <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                       </Link>
                    </div>
                  </div>
                </div>
                <Link to="/sobre" className="font-bold text-slate-300 hover:text-white transition-colors">Empresa</Link>
                <Link to="/suporte" className="font-bold text-slate-300 hover:text-white transition-colors">Suporte</Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-6 font-mono text-sm">
              <Link to="/contato" className="font-bold text-slate-300 hover:text-white transition-colors">Falar com Vendas</Link>
              <Link 
                to="/contato" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] hover:scale-105 border border-red-500/30"
              >
                Agendar Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950 border-t border-slate-800 overflow-hidden shadow-2xl"
            >
              <div className="px-4 pt-4 pb-8 space-y-2">
                <div className="py-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3 font-mono">Ecossistema</div>
                  {products.map((p) => (
                    <Link key={p.path} to={p.path} className="block px-3 py-3 rounded-xl text-base font-bold text-slate-200 hover:text-red-400 hover:bg-slate-900">
                      {p.name}
                    </Link>
                  ))}
                </div>
                <div className="h-px bg-slate-800 my-4" />
                <Link to="/sobre" className="block px-3 py-3 rounded-xl text-base font-bold text-slate-200 hover:text-red-400 hover:bg-slate-900">Empresa</Link>
                <Link to="/suporte" className="block px-3 py-3 rounded-xl text-base font-bold text-slate-200 hover:text-red-400 hover:bg-slate-900">Suporte</Link>
                <Link to="/contato" className="block px-3 py-3 rounded-xl text-base font-bold text-slate-200 hover:text-red-400 hover:bg-slate-900">Contato</Link>
                <div className="pt-6 px-3">
                  <Link to="/contato" className="w-full flex justify-center items-center gap-2 py-3.5 bg-red-600 text-white rounded-xl font-extrabold shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                    Agendar Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-32 pb-12 border-t border-slate-800 relative overflow-hidden text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-2xl">V</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">Vancod</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Ecossistema de engenharia de software de classe mundial para empresas que exigem alto desempenho, design e conversão.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/vancod" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600/20 hover:border-pink-500/40 transition-all text-white group" title="Instagram Vancod">
                <Instagram className="w-5 h-5 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-6">Produtos</h4>
            <ul className="space-y-4">
              {products.map(p => (
                <li key={p.path}>
                  <Link to={p.path} className="text-sm text-slate-400 hover:text-white transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><Link to="/sobre" className="text-sm text-slate-400 hover:text-white transition-colors">Sobre nós</Link></li>
              <li><Link to="/contato" className="text-sm text-slate-400 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-6">Recursos</h4>
            <ul className="space-y-4">
              <li><Link to="/suporte" className="text-sm text-slate-400 hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/contato" className="text-sm text-slate-400 hover:text-white transition-colors">Falar com Vendas</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacidade" className="text-sm text-slate-400 hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link to="/termos" className="text-sm text-slate-400 hover:text-white transition-colors">Termos de uso</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Vancod Systems. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-sm text-slate-400">
             <span>Construído com excelência no Brasil.</span>
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
    </div>
  );
}
