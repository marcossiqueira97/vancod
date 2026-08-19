import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Box, 
  BarChart3, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  Play,
  TrendingUp,
  Award,
  Users,
  Clock,
  Sparkles,
  ChefHat,
  QrCode,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQ } from '../components/faq';
import { SEO } from '../components/seo';
import { useRef, useState } from 'react';
import { AnimatedGrid } from '../components/animated-grid';
import { Button } from '../components/button';
import { VideoDemoPlayer } from '../components/video-demo-player';
import { ComparisonTable } from '../components/comparison-table';
import { RoiCalculator } from '../components/roi-calculator';
import { InteractiveSystemSimulator } from '../components/interactive-system-simulator';

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
    }
  ];

  const faqs = [
    {
      question: "Como funciona a implantação e o suporte dos sistemas Vancod?",
      answer: "Nossa equipe de especialistas acompanha todo o processo de instalação e configuração inicial. Você conta com suporte técnico humanizado e ágil direto no WhatsApp todos os dias da semana para tirar dúvidas e otimizar sua rotina."
    },
    {
      question: "O sistema de caixa continua funcionando se a internet do meu estabelecimento cair?",
      answer: "Sim! Tanto o Balcão Pro Adegas quanto o Vancod Restaurantes possuem arquitetura Offline-First (Desktop em Rust + SQLite). Seu caixa passa vendas, emite comprovantes e abre a gaveta de dinheiro normalmente sem depender de conexão com a internet."
    },
    {
      question: "Existe cobrança de comissão ou porcentagem sobre as minhas vendas?",
      answer: "Não! A Vancod não cobra nenhuma porcentagem sobre o faturamento do seu negócio. Seu lucro é 100% seu, com planos mensais claros, transparentes e previsíveis."
    },
    {
      question: "Preciso comprar servidores caros ou computadores novos?",
      answer: "Não. Nossos sistemas são extremamente leves e otimizados para rodar em computadores comuns, notebooks, tablets ou smartphones, sem exigir investimentos pesados em infraestrutura."
    },
    {
      question: "Como funciona a migração dos dados do meu sistema antigo?",
      answer: "Nossa equipe técnica ajuda na importação do seu catálogo de produtos, clientes e histórico, garantindo uma transição rápida e sem interrupção nas suas vendas."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vancod Systems",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden relative" ref={containerRef}>
      <SEO 
        title="Ecossistema SaaS de Alta Performance" 
        description="Engenharia de software definitiva para Adegas, Restaurantes e Eventos. PDV offline, KDS para cozinha, integração iFood e transmissão de fotos ao vivo."
        schema={schema}
      />
      
      {/* Background Grid */}
      <AnimatedGrid />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-extrabold mb-8 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Engenharia de Software de Classe Mundial para o Seu Negócio
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[88px] font-black tracking-tight text-slate-900 mb-8 leading-[1.08]"
            >
              A tecnologia que <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                multiplica seus resultados.
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Sistemas inteligentes e ultrarrápidos para <strong>adegas</strong>, <strong>restaurantes</strong> e <strong>eventos</strong>. Elimine filas, acabe com erros de cozinha e feche vendas em 0 milissegundos.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contato"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-extrabold text-base shadow-xl shadow-blue-600/30 hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <span>Agendar Demonstração Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#simulador"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-full font-bold text-base shadow-sm hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Testar Simulador Interativo</span>
              </a>
            </motion.div>

            {/* Trust Proof Metrics Under Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-200"
            >
              {[
                { label: 'Latência de Caixa Local', val: '0 ms', desc: '100% Offline-First' },
                { label: 'Aumento de Giro no Pico', val: '+40%', desc: 'Sem Filas no Balcão' },
                { label: 'Comissão por Pedido', val: 'R$ 0,00', desc: 'Lucro 100% Seu' },
                { label: 'SLA de Disponibilidade', val: '99.99%', desc: 'Estabilidade Total' },
              ].map((m, i) => (
                <div key={i} className="p-4 bg-white/80 rounded-2xl border border-slate-200 text-center shadow-xs">
                  <div className="text-2xl md:text-3xl font-black text-blue-600 font-mono">{m.val}</div>
                  <div className="text-xs font-extrabold text-slate-900 mt-1">{m.label}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{m.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {showcaseTabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
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
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                 <Link to={showcaseTabs[activeTab].path} className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
                   Acessar Solução <ArrowRight className="w-3.5 h-3.5" />
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
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/95 border border-slate-200 text-xs font-bold text-blue-700 backdrop-blur-md shadow-lg flex items-center gap-2">
                    {showcaseTabs[activeTab].badge}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE SYSTEM SIMULATOR SECTION */}
      <div id="simulador">
        <InteractiveSystemSimulator />
      </div>

      {/* ROI & PROFIT IMPACT CALCULATOR */}
      <RoiCalculator />

      {/* THREE PILLARS BENTO GRID */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Sistemas Especialistas, <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Zero Burocracia.
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Cada segmento possui necessidades únicas. Por isso desenvolvemos ferramentas dedicadas e cirurgicamente precisas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Balcão Pro Adegas',
                tag: '⚡ 100% Offline (Sem Fila)',
                badgeColor: 'bg-cyan-100 border-cyan-300 text-cyan-800',
                cardBg: 'bg-white border-slate-200 shadow-xl shadow-cyan-900/5 hover:border-cyan-400 hover:shadow-2xl',
                desc: 'O sistema definitivo para adegas, distribuidoras e conveniências que vendem no balcão e no fiado.',
                icon: <Zap className="w-8 h-8 text-cyan-600" />,
                checkColor: 'text-cyan-600',
                btnColor: 'text-cyan-700 hover:text-cyan-800',
                path: '/adegas',
                bulletList: [
                  'Caixa rápido que nunca trava na sexta à noite',
                  'Controle de fiado com fatura no WhatsApp',
                  'Baixa automática de combos (whisky + gelo + energético)',
                  'Controle de cascos e vasilhames retornáveis'
                ]
              },
              {
                title: 'Vancod Restaurantes',
                tag: '💻 KDS & iFood Integrado',
                badgeColor: 'bg-pink-100 border-pink-300 text-pink-800',
                cardBg: 'bg-white border-slate-200 shadow-xl shadow-pink-900/5 hover:border-pink-400 hover:shadow-2xl',
                desc: 'PDV, comanda eletrônica, telas KDS para cozinha e sincronização automática com iFood.',
                icon: <ChefHat className="w-8 h-8 text-pink-600" />,
                checkColor: 'text-pink-600',
                btnColor: 'text-pink-700 hover:text-pink-800',
                path: '/restaurantes',
                bulletList: [
                  'Pedidos do iFood direto na cozinha sem redigitar',
                  'Telas KDS digitais por setor (Bar, Chapa, Forno)',
                  'Módulo especialista em Pizzarias (até 4 sabores)',
                  'Divisão automática de conta por mesa ou comanda'
                ]
              },
              {
                title: 'Olhare Fotos & Eventos',
                tag: '📸 Mural TV ao Vivo (Zero App)',
                badgeColor: 'bg-purple-100 border-purple-300 text-purple-800',
                cardBg: 'bg-white border-slate-200 shadow-xl shadow-purple-900/5 hover:border-purple-400 hover:shadow-2xl',
                desc: 'Transforme as fotos dos convidados na atração principal da festa com transmissão ao vivo na TV.',
                icon: <QrCode className="w-8 h-8 text-purple-600" />,
                checkColor: 'text-purple-600',
                btnColor: 'text-purple-700 hover:text-purple-800',
                path: '/olhare',
                bulletList: [
                  'Acesso instantâneo por QR Code sem baixar app',
                  'Mural ao vivo em alta definição na TV do salão',
                  'Painel de moderação para aprovar fotos e recados',
                  'Download de todas as fotos em alta resolução em 1 clique'
                ]
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`group relative backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-2 ${product.cardBg}`}
              >
                <div className="relative z-10 w-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 group-hover:scale-110 transition-transform duration-500">
                      {product.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-xs font-extrabold backdrop-blur-md ${product.badgeColor}`}>
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">{product.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">{product.desc}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {product.bulletList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 font-medium">
                        <span className={`${product.checkColor} font-black`}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={product.path} 
                  className={`inline-flex items-center justify-between font-extrabold ${product.btnColor} transition-colors pt-4 border-t border-slate-100 text-sm`}
                >
                  <span>Conhecer {product.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO / INTERACTIVE OPERATION PLAYER */}
      <VideoDemoPlayer />

      {/* COMPARISON TABLE: VANCOD VS LEGACY SYSTEMS */}
      <ComparisonTable />

      {/* SOCIAL PROOF & SUCCESS METRICS */}
      <section className="py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-emerald-600" /> Resultados Reais de Clientes
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Quem usa Vancod não troca.
            </h2>
            <p className="text-lg text-slate-600">
              Veja os depoimentos de empresários que transformaram sua gestão e aceleraram suas vendas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Sexta-feira à noite a internet da minha rua caiu no pico de vendas. Antigamente a gente parava tudo. Com o Balcão Pro, o caixa continuou passando cerveja e combo sem travar nada.",
                author: "Rodrigo Mendes",
                business: "Distribuidora & Adega Ponto Certo",
                city: "Campinas / SP",
                tag: "Adega / Balcão",
                badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
              },
              {
                quote: "O KDS na cozinha e a integração com o iFood salvaram nossa operação. Zeramos os erros de pedidos que os garçons anotavam errado no papel.",
                author: "Juliana Castro",
                business: "Pizzaria Don Corleone",
                city: "Curitiba / PR",
                tag: "Restaurante & Pizzaria",
                badgeColor: "bg-pink-50 text-pink-700 border-pink-200"
              },
              {
                quote: "Colocamos o Olhare no nosso casamento e foi a maior sensação da festa! Os convidados amaram ver as fotos aparecendo no telão em tempo real.",
                author: "Camila & Marcelo",
                business: "Casamento no Espaço Villa Real",
                city: "São Paulo / SP",
                tag: "Evento / Casamento",
                badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
              }
            ].map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${test.badgeColor}`}>
                      {test.tag}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                    {test.author[0]}
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">{test.author}</h5>
                    <p className="text-xs text-slate-500">{test.business} • {test.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-slate-400">
              Tudo o que você precisa saber para começar a usar a Vancod hoje.
            </p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* FINAL HIGH-CONVERSION CTA */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-extrabold mb-8 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              Implantação Rápida • Treinamento Incluso • Sem Fidelidade
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Pronto para transformar sua operação e acelerar seu faturamento?
            </h2>

            <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Agende uma demonstração prática sem compromisso e veja o sistema funcionando no seu modelo de negócio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contato"
                className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-blue-50 text-blue-900 rounded-full font-black text-base shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Falar com um Especialista</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/suporte"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-base backdrop-blur-md transition-all flex items-center justify-center"
              >
                <span>Central de Suporte</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
