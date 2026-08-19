import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Zap, 
  ChefHat, 
  QrCode, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Users2,
  Settings2,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQ } from '../components/faq';
import { SEO } from '../components/seo';
import { useState } from 'react';
import { AnimatedGrid } from '../components/animated-grid';
import { ComparisonTable } from '../components/comparison-table';
import { RoiCalculator } from '../components/roi-calculator';
import { InteractiveSystemSimulator } from '../components/interactive-system-simulator';
import { ClientsSection } from '../components/clients-section';
import { CasesSection } from '../components/cases-section';
import { TestimonialsSection } from '../components/testimonials-section';
import { WhyVancod } from '../components/why-vancod';
import { TransparencySection } from '../components/transparency-section';
import { SITE_CONFIG } from '../lib/config';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseTabs = [
    {
      id: 'adega',
      name: 'Balcão Pro Adegas',
      subdomain: 'adegas.vancod.com.br',
      badge: 'Operação Offline-First & PDV Rápido',
      img: '/assets/adega-br.png',
      path: '/adegas'
    },
    {
      id: 'restaurantes',
      name: 'Vancod Restaurantes',
      subdomain: 'restaurantes.vancod.com.br',
      badge: 'KDS Cozinha & Comanda de Mesas',
      img: '/assets/restaurantes-br.png',
      path: '/restaurantes'
    },
    {
      id: 'olhare',
      name: 'Olhare Fotos & Eventos',
      subdomain: 'olhare.vancod.com.br',
      badge: 'Transmissão ao Vivo na TV via QR Code',
      img: '/assets/olhare-br.png',
      path: '/olhare'
    }
  ];

  const faqs = [
    {
      question: "Como funciona a implantação e o suporte dos sistemas Vancod?",
      answer: "Nossa equipe acompanha você na instalação e na configuração inicial dos produtos e dados. O suporte técnico é prestado de forma direta e humanizada via e-mail e WhatsApp para tirar dúvidas e manter sua rotina fluida."
    },
    {
      question: "O sistema de caixa continua funcionando se a internet cair?",
      answer: "Sim. O Balcão Pro Adegas e o módulo de PDV do Vancod Restaurantes foram projetados com arquitetura offline-first. Isso significa que o caixa continua operando localmente no computador, registrando vendas e imprimindo comprovantes sem interrupção."
    },
    {
      question: "Existe cobrança de comissão percentual sobre as vendas?",
      answer: "Não. A Vancod trabalha com assinaturas de software com valores transparentes e previsíveis. Não cobramos comissões sobre o faturamento do seu estabelecimento."
    },
    {
      question: "Quais equipamentos são necessários para utilizar os sistemas?",
      answer: "Nossos sistemas rodam em computadores convencionais com Windows, além de navegadores modernos em tablets e celulares. São compatíveis com impressoras térmicas padrão (USB/Rede) e leitores de código de barras comuns."
    },
    {
      question: "Posso agendar uma demonstração antes de contratar?",
      answer: "Sim. Realizamos demonstrações online e práticas para você ver o sistema funcionando no modelo exato do seu negócio e tirar todas as suas dúvidas com nossa equipe."
    }
  ];

  // Schema.org sem preços fictícios ou claims não comprovadas
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vancod Tecnologia",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, Android, iOS",
    "description": "Soluções de software desenvolvidas para atender as necessidades práticas de adegas, distribuidores, restaurantes e eventos com agilidade e confiabilidade."
  };

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden relative">
      <SEO 
        title="Software Especializado para Adegas, Restaurantes e Eventos" 
        description="Soluções de software desenvolvidas para atender as necessidades práticas de adegas, distribuidores, restaurantes e eventos com agilidade e confiabilidade."
        schema={schema}
      />
      
      <AnimatedGrid />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center pt-28 pb-16 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-6 border border-slate-300/60"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Sistemas desenvolvidos para a rotina real da sua empresa
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              Softwares que simplificam e <br className="hidden sm:block" />
              <span className="text-blue-600">
                organizam a sua operação.
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-normal leading-relaxed"
            >
              Soluções especializadas para <strong>adegas</strong>, <strong>restaurantes</strong> e <strong>eventos</strong>. Menos cliques, menos erros de atendimento e funcionamento garantido mesmo sem internet.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
            >
              <Link
                to="/contato"
                className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 hover:shadow-md"
              >
                <span>Agendar demonstração</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#simulador"
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-full font-semibold text-sm shadow-xs transition-all flex items-center justify-center"
              >
                <span>Ver demonstração interativa</span>
              </a>
            </motion.div>

          </div>

          {/* Interface Mockup Display */}
          <div className="mt-14 relative mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              {showcaseTabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === idx
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="aspect-[16/9] md:aspect-[21/10] rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 justify-between">
                 <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                 </div>
                 <span className="text-xs font-mono text-slate-500">
                   https://{showcaseTabs[activeTab].subdomain}
                 </span>
                 <Link 
                   to={showcaseTabs[activeTab].path} 
                   className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                 >
                   Ver produto <ArrowRight className="w-3 h-3" />
                 </Link>
              </div>
              
              <div className="relative w-full h-[calc(100%-2.5rem)] bg-slate-100">
                <img 
                  src={showcaseTabs[activeTab].img} 
                  alt={showcaseTabs[activeTab].name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PRODUTOS DO ECOSSISTEMA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Soluções Dedicadas</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Cada produto desenvolvido para um contexto específico.
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              Conheça as ferramentas desenhadas para atender com precisão o seu modelo de trabalho.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Balcão Pro Adegas',
                tag: 'Adegas & Distribuidoras',
                desc: 'PDV com operação offline-first, dedução automática de insumos em combos e gestão prática de fiado com extrato no WhatsApp.',
                icon: <Zap className="w-6 h-6 text-cyan-600" />,
                path: '/adegas',
                bullets: [
                  'Caixa com funcionamento local sem depender de internet',
                  'Desmembramento de combos (bebida + insumos)',
                  'Controle de clientes no fiado e limites',
                  'Compatível com impressoras térmicas e leitores'
                ]
              },
              {
                title: 'Vancod Restaurantes',
                tag: 'Bares & Restaurantes',
                desc: 'Comanda de mesas no celular, telas KDS para organização de pedidos na cozinha e sincronização com canais de delivery.',
                icon: <ChefHat className="w-6 h-6 text-pink-600" />,
                path: '/restaurantes',
                bullets: [
                  'Telas digitais KDS por praça de preparo',
                  'Lançamento ágil de mesas e comandas',
                  'Divisão automática de contas no salão',
                  'Módulo para pizzarias com meio-a-meio'
                ]
              },
              {
                title: 'Olhare Fotos & Eventos',
                tag: 'Festas & Cerimoniais',
                desc: 'Mural interativo que transmite fotos e recados dos convidados na TV do evento via QR Code sem baixar aplicativos.',
                icon: <QrCode className="w-6 h-6 text-purple-600" />,
                path: '/olhare',
                bullets: [
                  'Acesso instantâneo pelo navegador do celular',
                  'Painel de moderação para aprovação de fotos',
                  'Transmissão contínua em Smart TVs ou telões',
                  'Download completo da galeria pós-evento'
                ]
              },
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      {p.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      {p.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{p.desc}</p>
                  
                  <ul className="space-y-2.5 mb-8">
                    {p.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={p.path}
                  className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Ver detalhes da solução</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PRODUTO EM AÇÃO / SIMULADOR */}
      <div id="simulador">
        <InteractiveSystemSimulator />
      </div>

      {/* 4. COMO FUNCIONA NA PRÁTICA */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Processo Transparente</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Tecnologia que resolve problemas reais da operação.
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              Sem burocracia excessiva ou sistemas genéricos que não encaixam no seu dia a dia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Entendemos sua operação',
                desc: 'Identificamos os pontos críticos do seu fluxo de caixa, atendimento, cozinha ou evento para indicar a configuração ideal.',
                icon: <Users2 className="w-5 h-5 text-blue-600" />
              },
              {
                step: '02',
                title: 'Configuramos a solução',
                desc: 'Ajudamos você a cadastrar seus produtos, parâmetros de atendimento e equipamentos (impressoras, leitores e telas).',
                icon: <Settings2 className="w-5 h-5 text-blue-600" />
              },
              {
                step: '03',
                title: 'Sua equipe começa a operar',
                desc: 'Com uma interface simples e direta, sua equipe aprende em minutos e conta com nosso suporte sempre que precisar.',
                icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />
              },
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative">
                <span className="text-4xl font-extrabold text-slate-200 absolute top-6 right-6 font-mono">
                  {card.step}
                </span>
                <div className="p-3 bg-white rounded-xl border border-slate-200 w-fit mb-6 shadow-2xs">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. POR QUE ESCOLHER A VANCOD (4 PILARES) */}
      <WhyVancod />

      {/* 6. COMPARATIVO OPERACIONAL */}
      <ComparisonTable />

      {/* 7. SIMULADOR DE RETORNO / ROI */}
      <RoiCalculator />

      {/* 8. PROVA SOCIAL: CLIENTES & CASES & DEPOIMENTOS (ESTRUTURA HONESTA) */}
      <ClientsSection />
      <CasesSection />
      <TestimonialsSection />

      {/* 9. CONFIANÇA & TRANSPARÊNCIA INSTITUCIONAL */}
      <TransparencySection />

      {/* 10. FAQ */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-sm md:text-base text-slate-400">
              Esclarecimentos sobre implantação, infraestrutura e funcionamento das ferramentas.
            </p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Pronto para organizar a operação do seu negócio?
          </h2>
          <p className="text-base md:text-lg text-blue-100 mb-8 max-w-xl mx-auto font-normal">
            Agende uma demonstração prática e veja como os sistemas Vancod se adaptam à sua rotina.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contato"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-900 hover:bg-blue-50 rounded-full font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Agendar demonstração</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/suporte"
              className="w-full sm:w-auto px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-semibold text-sm transition-all flex items-center justify-center"
            >
              <span>Central de suporte</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
