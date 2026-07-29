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
    <div className="bg-slate-50 text-slate-900 overflow-hidden relative" ref={containerRef}>
      <SEO 
        title="Ecossistema SaaS" 
        description="Uma suíte completa de soluções SaaS para gerenciar vendas, operações e clientes. Feito para empresas que exigem velocidade, design e alto desempenho."
        schema={schema}
      />
      
      {/* Dynamic Animated Background */}
      <AnimatedGrid />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 backdrop-blur-md text-sm font-medium text-blue-400 mb-8 hover:bg-blue-600/20 transition-colors cursor-pointer group shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Vancod OS 2.0 Lançado
              <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-all" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[96px] font-extrabold tracking-tighter text-slate-900 mb-8 leading-[1.05]"
            >
              A tecnologia <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                da sua operação.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Engenharia de software de elite para restaurantes, adegas, eventos e e-commerce. Substitua dezenas de ferramentas por uma plataforma unificada, desenhada para converter.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button to="/contato" variant="primary" icon>
                Agendar Demonstração
              </Button>
            </motion.div>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {showcaseTabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === idx
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 scale-105 border border-blue-500'
                    : 'bg-white text-slate-700 hover:text-blue-600 border border-slate-200 shadow-sm hover:bg-slate-50'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Hero Interface Mockup with Real HD Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 relative mx-auto max-w-6xl"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-indigo-400/15 to-purple-400/20 rounded-3xl blur-2xl opacity-70" />
            
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/60 overflow-hidden group ring-1 ring-slate-200">
              <div className="absolute top-0 w-full h-12 bg-slate-100/90 border-b border-slate-200 flex items-center px-6 gap-2 z-30 backdrop-blur-md">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-400" />
                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
                   <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
                 <div className="mx-auto px-6 py-1 rounded-md bg-white text-xs text-slate-700 font-mono border border-slate-200 flex items-center gap-2 shadow-inner">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   https://{showcaseTabs[activeTab].subdomain}
                 </div>
                 <Link to={showcaseTabs[activeTab].path} className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
                   Abrir Rota <ArrowRight className="w-3 h-3" />
                 </Link>
              </div>
              
              <div className="absolute inset-0 pt-12 flex items-center justify-center bg-slate-100">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <img 
                    src={showcaseTabs[activeTab].img} 
                    alt={showcaseTabs[activeTab].name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 border border-slate-200 text-xs font-bold text-blue-700 backdrop-blur-md shadow-lg flex items-center gap-2">
                    {showcaseTabs[activeTab].badge}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video / Interactive Operation Player */}
      <VideoDemoPlayer />

      {/* Authentic Tech Stack & Guarantees Bar */}
      <section className="py-12 border-y border-slate-200 bg-white/80 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-500 mb-8 uppercase tracking-[0.25em]">Arquitetura de Engenharia de Alta Performance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '⚡', title: '100% Offline (Rust + SQLite)', desc: 'Balcão Pro Adegas (PDV Desktop)', color: 'text-cyan-700 border-cyan-200 bg-cyan-50' },
              { icon: '💻', title: 'App Desktop & Nuvem', desc: 'Vancod Restaurantes (KDS + iFood)', color: 'text-pink-700 border-pink-200 bg-pink-50' },
              { icon: '📱', title: 'Web App via QR Code', desc: 'Olhare (Telão TV sem Instalação)', color: 'text-purple-700 border-purple-200 bg-purple-50' },
              { icon: '🛒', title: 'Headless E-Commerce', desc: 'Commerce (Sync Estoque 24/7)', color: 'text-emerald-700 border-emerald-200 bg-emerald-50' }
            ].map((pillar, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col items-center gap-2 shadow-sm">
                <span className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg ${pillar.color}`}>{pillar.icon}</span>
                <span className="text-slate-900 font-bold text-base mt-1">{pillar.title}</span>
                <span className="text-slate-500 text-xs font-medium">{pillar.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Bento Grid with Rich Color Accents */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Poder sem <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">complexidade.</span>
            </h2>
            <p className="text-xl text-slate-600">Quatro pilares fundamentais projetados para escalar sua operação sem atritos.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Balcão Pro Adegas',
                tag: '⚡ Caixa Rápido sem Fila',
                badgeColor: 'bg-cyan-100 border-cyan-300 text-cyan-800',
                cardBg: 'bg-white border-slate-200 shadow-xl shadow-cyan-900/5 hover:border-cyan-400 hover:shadow-2xl',
                desc: 'O sistema perfeito para quem vende bebida, atende filas rápido e quer organizar o fiado.',
                icon: <Box className="w-8 h-8 text-cyan-600" />,
                checkColor: 'text-cyan-600',
                btnColor: 'text-cyan-700 hover:text-cyan-800',
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
                badgeColor: 'bg-pink-100 border-pink-300 text-pink-800',
                cardBg: 'bg-white border-slate-200 shadow-xl shadow-pink-900/5 hover:border-pink-400 hover:shadow-2xl',
                desc: 'PDV, cozinha KDS, delivery e gestão offline-first para restaurantes e pizzarias.',
                icon: <Layers className="w-8 h-8 text-pink-600" />,
                checkColor: 'text-pink-600',
                btnColor: 'text-pink-700 hover:text-pink-800',
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
                badgeColor: 'bg-emerald-100 border-emerald-300 text-emerald-800',
                cardBg: 'bg-white border-slate-200 shadow-xl shadow-emerald-900/5 hover:border-emerald-400 hover:shadow-2xl',
                desc: 'Plataforma de e-commerce headless de alta performance integrada ao estoque físico.',
                icon: <Smartphone className="w-8 h-8 text-emerald-600" />,
                checkColor: 'text-emerald-600',
                btnColor: 'text-emerald-700 hover:text-emerald-800',
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
                badgeColor: 'bg-purple-100 border-purple-300 text-purple-800',
                cardBg: 'bg-white border-slate-200 shadow-xl shadow-purple-900/5 hover:border-purple-400 hover:shadow-2xl',
                desc: 'O fotógrafo registra o momento oficial. O Olhare guarda o resto das memórias.',
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                checkColor: 'text-purple-600',
                btnColor: 'text-purple-700 hover:text-purple-800',
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
                className={`group relative backdrop-blur-xl p-8 rounded-2xl border transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-2 ${product.cardBg}`}
              >
                <div className="relative z-10 w-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 group-hover:scale-110 transition-transform duration-500">
                      {product.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-xs font-bold backdrop-blur-md ${product.badgeColor}`}>
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">{product.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {product.bulletList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                        <span className={`${product.checkColor} font-extrabold`}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={product.path} className={`inline-flex items-center gap-2 font-bold ${product.btnColor} transition-colors pt-4 border-t border-slate-100`}>
                  Explorar {product.title.split(' ')[0]} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Solution CTA */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border border-blue-200 rounded-3xl p-10 md:p-16 relative overflow-hidden group shadow-xl shadow-blue-600/5"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Quer sua solução personalizada?</h3>
                <p className="text-lg text-slate-600 font-normal leading-relaxed">
                  Entendemos que operações complexas exigem ferramentas específicas. Nossa equipe de engenharia pode adaptar ou construir módulos exclusivos para o seu negócio.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button to="/contato" variant="primary" icon>
                  Entre em Contato
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-32 bg-slate-100/80 border-y border-slate-200 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Velocidade como <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600 bg-clip-text text-transparent">funcionalidade.</span>
            </h2>
            <p className="text-xl text-slate-600">Cada milissegundo importa na hora de fechar uma venda. Arquitetura serverless e computação de borda garantem o melhor desempenho do mercado.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-2xl p-10 border border-slate-200 shadow-xl overflow-hidden relative group hover:border-blue-400 transition-all duration-500">
              <div className="relative z-10 max-w-md">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl border border-blue-200 flex items-center justify-center mb-8">
                  <BarChart3 className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Análise em Tempo Real</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-normal">Métricas detalhadas sobre vendas, acessos e conversões, processadas instantaneamente para decisões baseadas em dados.</p>
              </div>
              
              <div className="absolute right-0 bottom-0 w-[60%] h-[70%] bg-slate-50 rounded-tl-[2rem] border-t border-l border-slate-200 translate-x-8 translate-y-8 flex items-end p-8 gap-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700">
                 {[40, 70, 45, 90, 65, 100].map((h, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     whileInView={{ height: `${h}%` }}
                     transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                     className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-md opacity-90"
                   />
                 ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-xl group hover:border-emerald-400 transition-all duration-500">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl border border-emerald-200 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Padrão Corporativo</h3>
              <p className="text-slate-600 leading-relaxed font-normal">Criptografia de ponta a ponta, compliance LGPD e backups redundantes.</p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-xl group hover:border-purple-400 transition-all duration-500">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl border border-purple-200 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Rede Global</h3>
              <p className="text-slate-600 leading-relaxed font-normal">Conteúdo servido na borda, garantindo latência mínima globalmente.</p>
            </div>

            <div className="md:col-span-2 bg-white rounded-2xl p-10 border border-slate-200 shadow-xl relative overflow-hidden group hover:border-pink-400 transition-all duration-500">
               <div className="relative z-10 max-w-xl h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-extrabold mb-6 text-slate-900 tracking-tight">Sistema de Design Unificado</h3>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed font-normal">Nossos produtos compartilham a mesma identidade visual e de interação. Se você sabe usar um, sabe usar todos.</p>
                  <ul className="space-y-4">
                    {['Componentes rigorosamente testados', 'Acessibilidade WCAG AA', 'Tematização avançada'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                        <CheckCircle2 className="w-6 h-6 text-pink-600" />
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
      <section className="py-32 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-slate-400">Tudo o que você precisa saber sobre o ecossistema Vancod.</p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-48 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-950" />
        
        {/* Glow effect */}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
          >
            Pronto para elevar <br/>o nível do seu negócio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light"
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
             <Button to="/contato" variant="primary">
               Agendar Demonstração
             </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
