import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Box, BarChart3, Zap, Shield, Smartphone, Globe, Layers, CheckCircle2, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQ } from '../components/faq';
import { SEO } from '../components/seo';
import { useRef, useState } from 'react';
import { AnimatedGrid } from '../components/animated-grid';
import { Button } from '../components/button';
import { VideoDemoPlayer } from '../components/video-demo-player';
import { ComparisonTable } from '../components/comparison-table';
import { TerminalLogs } from '../components/terminal-logs';

export default function Home() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const showcaseTabs = [
    {
      id: 'adega',
      name: 'Balcão Pro Adegas',
      subdomain: 'adegas.vancod.com.br',
      badge: '⚡ Caixa Rápido 100% Ativo sem Internet',
      img: '/assets/adega-br.png',
      path: '/adegas'
    },
    {
      id: 'restaurantes',
      name: 'Vancod Restaurantes',
      subdomain: 'restaurantes.vancod.com.br',
      badge: '💻 Cozinha na Tela + iFood Direto',
      img: '/assets/restaurantes-br.png',
      path: '/restaurantes'
    },
    {
      id: 'olhare',
      name: 'Olhare Fotos & Eventos',
      subdomain: 'olhare.vancod.com.br',
      badge: '📸 Transmissão de Fotos na TV da Festa',
      img: '/assets/olhare-br.png',
      path: '/olhare'
    },
    {
      id: 'commerce',
      name: 'Vancod Commerce',
      subdomain: 'commerce.vancod.com.br',
      badge: '🛒 Loja Virtual & Estoque Sincronizado',
      img: '/assets/commerce-br.png',
      path: '/commerce'
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const faqs = [
    {
      question: "Como funciona a implantação e o suporte?",
      answer: "Nossa equipe de especialistas acompanha você desde o primeiro dia. O suporte técnico está disponível todos os dias via chat em tempo real e e-mail, sempre pronto para resolver qualquer dúvida rapidamente."
    },
    {
      question: "Os sistemas da Vancod são integrados?",
      answer: "Sim, todo o ecossistema Vancod foi projetado para operar de forma unificada. Você pode gerenciar o estoque físico da sua loja e vender os mesmos produtos no Vancod Commerce com sincronização em tempo real."
    },
    {
      question: "Preciso instalar algum programa ou ter um servidor local?",
      answer: "Não, todas as nossas soluções são 100% em nuvem (SaaS). Você só precisa de um dispositivo conectado à internet (computador, tablet ou smartphone) para acessar e gerenciar o seu negócio de qualquer lugar."
    },
    {
      question: "Meus dados estarão seguros?",
      answer: "Absolutamente. Utilizamos servidores globais com alta disponibilidade, criptografia de ponta a ponta e realizamos backups automáticos contínuos. A Vancod está totalmente em conformidade com as diretrizes da LGPD."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vancod",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    }
  };

  return (
    <div className="bg-black text-white overflow-hidden relative" ref={containerRef}>
      <SEO 
        title="Ecossistema SaaS" 
        description="Uma suíte completa de soluções SaaS para gerenciar vendas, operações e clientes. Feito para empresas que exigem velocidade, design e alto desempenho."
        schema={schema}
      />
      
      {/* Dynamic Animated Background */}
      <AnimatedGrid />

      {/* Hero Section - Overclock Cyberpunk 100k Style */}
      <section className="relative min-h-screen flex items-center pt-36 pb-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-950/80 border border-red-500/40 backdrop-blur-xl text-xs font-mono font-bold text-red-400 mb-8 shadow-[0_0_25px_rgba(239,68,68,0.3)]"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse"></span>
              SISTEMAS DE ELITE · RUST + SQLITE NATIVO
              <ChevronRight className="w-4 h-4 text-red-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-tighter text-white mb-8 leading-[1.04] font-serif"
            >
              Você pede velocidade. <br/>
              <span className="bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(239,68,68,0.6)]">
                O caixa responde em 0ms.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Substitua sistemas lentos que caem no sábado à noite por caixas nativos em <strong className="text-white">Rust + SQLite 100% offline</strong> para adegas, comandas KDS para restaurantes e fotos ao vivo para eventos.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link 
                to="/contato" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-full font-extrabold text-lg transition-all shadow-[0_0_35px_rgba(239,68,68,0.5)] hover:shadow-[0_0_50px_rgba(239,68,68,0.8)] border border-red-500/40 hover:scale-105"
              >
                Ver Soluções ao Vivo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contato" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/90 text-slate-200 border border-slate-700/80 rounded-full font-mono font-bold text-base hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all shadow-xl"
              >
                &gt; Agendar Demonstração
              </Link>
            </motion.div>
          </div>

          {/* Interactive Showcase Tabs - Overclock Style */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {showcaseTabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === idx
                    ? 'bg-red-600 text-white shadow-[0_0_25px_rgba(239,68,68,0.6)] scale-105 border border-red-400'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeTab === idx ? 'bg-white animate-pulse' : 'bg-slate-600'}`} />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Hero Interface Mockup - Cyberpunk Terminal IDE Style */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 relative mx-auto max-w-6xl"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600/30 via-rose-500/20 to-blue-600/30 rounded-3xl blur-3xl opacity-80" />
            
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800/90 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden group ring-1 ring-slate-800">
              {/* IDE Window Header */}
              <div className="w-full h-12 bg-slate-900/90 border-b border-slate-800/90 flex items-center px-6 justify-between z-30 backdrop-blur-md font-mono text-xs">
                 <div className="flex items-center gap-3">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500" />
                     <div className="w-3 h-3 rounded-full bg-amber-500" />
                     <div className="w-3 h-3 rounded-full bg-emerald-500" />
                   </div>
                   <span className="text-slate-400 font-bold ml-2">vancod-os 3.0.4 — [MODO OPERAÇÃO]</span>
                 </div>
                 
                 <div className="hidden md:flex items-center gap-2 px-4 py-1 rounded-md bg-slate-950 text-slate-300 font-mono border border-slate-800">
                   <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                   https://{showcaseTabs[activeTab].subdomain}
                 </div>
                 
                 <Link to={showcaseTabs[activeTab].path} className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
                   Abrir Rota <ArrowRight className="w-3 h-3" />
                 </Link>
              </div>
              
              {/* Split Screen: Terminal Pane + Visual Screen */}
              <div className="grid lg:grid-cols-12 min-h-[420px] bg-slate-950">
                {/* Left Terminal Pane */}
                <div className="lg:col-span-5 p-4 border-b lg:border-b-0 lg:border-r border-slate-800/80 bg-slate-950 text-slate-300">
                  <TerminalLogs />
                </div>

                {/* Right Visual Image Pane */}
                <div className="lg:col-span-7 relative min-h-[300px] flex items-center justify-center bg-slate-900/50">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full min-h-[350px]"
                  >
                    <img 
                      src={showcaseTabs[activeTab].img} 
                      alt={showcaseTabs[activeTab].name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-slate-950/90 border border-slate-800 text-xs font-mono font-bold text-red-400 backdrop-blur-md shadow-2xl flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      {showcaseTabs[activeTab].badge}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video / Interactive Operation Player */}
      <VideoDemoPlayer />

      {/* Authentic Tech Stack & Guarantees Bar */}
      <section className="py-14 border-y border-slate-800/80 bg-slate-950/90 backdrop-blur-2xl relative z-10 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-bold text-slate-500 mb-8 uppercase tracking-[0.25em] text-[11px]">// ARQUITETURA DE ENGENHARIA DE ALTA PERFORMANCE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '⚡', title: '100% Offline (Rust + SQLite)', desc: 'Balcão Pro Adegas (PDV Desktop)', color: 'text-red-400 border-red-500/30 bg-red-950/40' },
              { icon: '💻', title: 'App Desktop & Nuvem', desc: 'Vancod Restaurantes (KDS + iFood)', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40' },
              { icon: '📱', title: 'Web App via QR Code', desc: 'Olhare (Telão TV sem Instalação)', color: 'text-purple-400 border-purple-500/30 bg-purple-950/40' },
              { icon: '🛒', title: 'Headless E-Commerce', desc: 'Commerce (Sync Estoque 24/7)', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40' }
            ].map((pillar, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col items-center gap-2 shadow-xl">
                <span className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg ${pillar.color}`}>{pillar.icon}</span>
                <span className="text-white font-bold text-sm mt-1">{pillar.title}</span>
                <span className="text-slate-400 text-xs font-sans">{pillar.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Bento Grid with Rich Color Accents */}
      <section className="py-32 relative z-10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-serif">
              Poder sem <span className="bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">complexidade.</span>
            </h2>
            <p className="text-xl text-slate-400">Quatro pilares fundamentais projetados para escalar sua operação sem atritos.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Balcão Pro Adegas',
                tag: '⚡ Caixa Rápido sem Fila',
                badgeColor: 'bg-red-950/80 border-red-500/40 text-red-400',
                cardBg: 'bg-slate-950/90 border-slate-800/90 shadow-2xl hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]',
                desc: 'O sistema perfeito para quem vende bebida, atende filas rápido e quer organizar o fiado.',
                icon: <Box className="w-8 h-8 text-red-500" />,
                checkColor: 'text-red-400',
                btnColor: 'text-red-400 hover:text-red-300',
                path: '/adegas',
                bulletList: [
                  'Passagem de caixa ultrarrápida sem travar',
                  'Controle de fiado com fatura no WhatsApp',
                  'Baixa automática de combos e vasilhames'
                ]
              },
              {
                title: 'Vancod Restaurantes',
                tag: '💻 App Desktop & KDS Cozinha',
                badgeColor: 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300',
                cardBg: 'bg-slate-950/90 border-slate-800/90 shadow-2xl hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
                desc: 'PDV, cozinha KDS, delivery e gestão offline-first para restaurantes e pizzarias.',
                icon: <Layers className="w-8 h-8 text-cyan-400" />,
                checkColor: 'text-cyan-400',
                btnColor: 'text-cyan-400 hover:text-cyan-300',
                path: '/restaurantes',
                bulletList: [
                  'PDV, cozinha KDS e delivery em 1 lugar',
                  'Gestão com suporte a operação local e cloud',
                  'Integração oficial direta com iFood'
                ]
              },
              {
                title: 'Commerce',
                tag: '🛒 High Conversion E-Commerce',
                badgeColor: 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300',
                cardBg: 'bg-slate-950/90 border-slate-800/90 shadow-2xl hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
                desc: 'Plataforma de e-commerce headless de alta performance integrada ao estoque físico.',
                icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
                checkColor: 'text-emerald-400',
                btnColor: 'text-emerald-400 hover:text-emerald-300',
                path: '/commerce',
                bulletList: [
                  'Plataforma e-commerce headless',
                  'Desempenho focado em conversão',
                  'Estoque físico sincronizado em tempo real'
                ]
              },
              {
                title: 'Olhare',
                tag: '📸 Web App via QR Code (Zero Instalação)',
                badgeColor: 'bg-purple-950/80 border-purple-500/40 text-purple-300',
                cardBg: 'bg-slate-950/90 border-slate-800/90 shadow-2xl hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
                desc: 'O fotógrafo registra o momento oficial. O Olhare guarda o resto das memórias.',
                icon: <Zap className="w-8 h-8 text-purple-400" />,
                checkColor: 'text-purple-400',
                btnColor: 'text-purple-400 hover:text-purple-300',
                path: '/olhare',
                bulletList: [
                  'Registro fotográfico de momentos oficiais',
                  'Fotos acessíveis por QR Code sem app',
                  'Mural ao Vivo em HD na TV e livro de memórias'
                ]
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`group relative backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-2 ${product.cardBg}`}
              >
                <div className="relative z-10 w-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform duration-500">
                      {product.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-xs font-mono font-bold backdrop-blur-md ${product.badgeColor}`}>
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight font-serif">{product.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {product.bulletList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 font-normal">
                        <span className={`${product.checkColor} font-bold font-mono`}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={product.path} className={`inline-flex items-center gap-2 font-mono font-bold text-sm ${product.btnColor} transition-colors pt-4 border-t border-slate-800/80`}>
                  Explorar {product.title.split(' ')[0]} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Solution CTA */}
      <section className="py-20 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-red-950/80 via-slate-950 to-blue-950/80 border border-red-500/30 rounded-3xl p-10 md:p-16 relative overflow-hidden group shadow-2xl shadow-red-950/50 ring-1 ring-red-500/20"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight font-serif">Quer sua solução personalizada?</h3>
                <p className="text-lg text-slate-300 font-normal leading-relaxed">
                  Entendemos que operações complexas exigem ferramentas específicas. Nossa equipe de engenharia pode adaptar ou construir módulos exclusivos para o seu negócio.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  to="/contato" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full font-extrabold text-base transition-all shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:shadow-[0_0_45px_rgba(239,68,68,0.8)] hover:scale-105 border border-red-400"
                >
                  Entre em Contato <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-32 bg-slate-950 border-y border-slate-800/80 relative overflow-hidden z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-serif">
              Velocidade como <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">funcionalidade.</span>
            </h2>
            <p className="text-xl text-slate-400">Cada milissegundo importa na hora de fechar uma venda. Arquitetura serverless e computação de borda garantem o melhor desempenho do mercado.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-900/90 rounded-3xl p-10 border border-slate-800 shadow-2xl overflow-hidden relative group hover:border-red-500/50 transition-all duration-500">
              <div className="relative z-10 max-w-md">
                <div className="w-14 h-14 bg-red-950 border border-red-500/30 rounded-2xl flex items-center justify-center mb-8">
                  <BarChart3 className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight font-serif">Análise em Tempo Real</h3>
                <p className="text-slate-300 leading-relaxed text-lg font-normal">Métricas detalhadas sobre vendas, acessos e conversões, processadas instantaneamente para decisões baseadas em dados.</p>
              </div>
              
              <div className="absolute right-0 bottom-0 w-[60%] h-[70%] bg-slate-950 rounded-tl-[2rem] border-t border-l border-slate-800 translate-x-8 translate-y-8 flex items-end p-8 gap-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700">
                 {[40, 70, 45, 90, 65, 100].map((h, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     whileInView={{ height: `${h}%` }}
                     transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                     className="flex-1 bg-gradient-to-t from-red-600 via-rose-500 to-amber-400 rounded-t-md opacity-90 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                   />
                 ))}
              </div>
            </div>

            <div className="bg-slate-900/90 rounded-3xl p-10 border border-slate-800 shadow-2xl group hover:border-emerald-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-emerald-950 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 font-serif">Padrão Corporativo</h3>
              <p className="text-slate-300 leading-relaxed font-normal">Criptografia de ponta a ponta, compliance LGPD e backups redundantes.</p>
            </div>

            <div className="bg-slate-900/90 rounded-3xl p-10 border border-slate-800 shadow-2xl group hover:border-purple-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-purple-950 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 font-serif">Rede Global</h3>
              <p className="text-slate-300 leading-relaxed font-normal">Conteúdo servido na borda, garantindo latência mínima globalmente.</p>
            </div>

            <div className="md:col-span-2 bg-slate-900/90 rounded-3xl p-10 border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-pink-500/50 transition-all duration-500">
               <div className="relative z-10 max-w-xl h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-extrabold mb-6 text-white tracking-tight font-serif">Sistema de Design Unificado</h3>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed font-normal">Nossos produtos compartilham a mesma identidade visual e de interação. Se você sabe usar um, sabe usar todos.</p>
                  <ul className="space-y-4">
                    {['Componentes rigorosamente testados', 'Acessibilidade WCAG AA', 'Tematização avançada'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200 font-semibold">
                        <CheckCircle2 className="w-6 h-6 text-pink-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table: Vancod vs Traditional Systems */}
      <ComparisonTable />

      {/* FAQ Section */}
      <section className="py-32 bg-black border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 font-serif">Perguntas Frequentes</h2>
            <p className="text-xl text-slate-400">Tudo o que você precisa saber sobre o ecossistema Vancod.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-48 relative overflow-hidden border-t border-slate-800 bg-gradient-to-b from-black via-slate-950 to-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter font-serif"
          >
            Pronto para elevar <br/>o nível do seu negócio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-normal"
          >
            Junte-se a milhares de empresas que confiam na Vancod para escalar operações e maximizar conversões.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
             <Link 
               to="/contato" 
               className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-full font-extrabold text-xl transition-all shadow-[0_0_40px_rgba(239,68,68,0.6)] hover:shadow-[0_0_60px_rgba(239,68,68,0.9)] border border-red-400 hover:scale-105"
             >
               Agendar Demonstração <ArrowRight className="w-6 h-6" />
             </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
