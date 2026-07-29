import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Github, Twitter, Linkedin } from 'lucide-react';
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-slate-200/80 shadow-lg shadow-slate-200/50' 
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-3 group relative">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative z-10 shadow-md shadow-blue-600/30">
                <span className="text-white font-extrabold text-xl">V</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 relative z-10">Vancod</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2">
                  Produtos <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 w-[420px] bg-white backdrop-blur-2xl border border-slate-200 shadow-2xl rounded-2xl p-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="grid grid-cols-2 gap-2">
                    {products.map((p) => (
                      <Link key={p.path} to={p.path} className="block p-3.5 hover:bg-slate-50 border border-transparent hover:border-slate-200 rounded-xl transition-all group/item">
                        <div className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">{p.name}</div>
                        <div className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 p-2">
                     <Link to="/sobre" className="flex items-center justify-between text-xs font-semibold text-blue-600 hover:text-blue-700 group/link">
                        Conheça o Ecossistema <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                     </Link>
                  </div>
                </div>
              </div>
              <Link to="/sobre" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Empresa</Link>
              <Link to="/blog" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Blog</Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/contato" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">Falar com Vendas</Link>
            <Link 
              to="/contato" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-bold text-sm transition-all shadow-md shadow-blue-600/25 hover:scale-105"
            >
              Agendar Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
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
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              <div className="py-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">Ecossistema</div>
                {products.map((p) => (
                  <Link key={p.path} to={p.path} className="block px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">
                    {p.name}
                  </Link>
                ))}
              </div>
              <div className="h-px bg-slate-100 my-4" />
              <Link to="/sobre" className="block px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Empresa</Link>
              <Link to="/blog" className="block px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Blog</Link>
              <Link to="/contato" className="block px-3 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50">Contato</Link>
              <div className="pt-6 px-3">
                <Link to="/contato" className="w-full flex justify-center items-center gap-2 py-3.5 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-bold">
                  Agendar Demo <ArrowRight className="w-4 h-4" />
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
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/marcossiqueira97/vancod" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                <Github className="w-4 h-4" />
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
              <li><Link to="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="text-sm text-slate-400 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-6">Recursos</h4>
            <ul className="space-y-4">
              <li><Link to="/suporte" className="text-sm text-slate-400 hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/suporte" className="text-sm text-slate-400 hover:text-white transition-colors">Documentação API</Link></li>
              <li><Link to="/suporte" className="text-sm text-slate-400 hover:text-white transition-colors">Status do Sistema</Link></li>
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
