import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ReactNode, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FAQ } from './faq';
import { SEO } from './seo';
import { AnimatedGrid } from './animated-grid';

interface ProductLayoutProps {
  name: string;
  tagline: string;
  description: string;
  subdomain: string;
  primaryColor: string;
  features: { title: string; desc: string; icon: ReactNode }[];
  screenshots: string[];
  faqItems?: { question: string; answer: string }[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  workflowTitle?: ReactNode;
  workflowSubtitle?: string;
  workflowSteps?: { step: number; title: string; desc: string }[];
  workflowBullets?: string[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export function ProductLayout({
  name,
  tagline,
  description,
  subdomain,
  primaryColor,
  features,
  screenshots,
  faqItems,
  sectionTitle = "Projetado para a rotina prática do seu negócio.",
  sectionSubtitle = "Recursos desenvolvidos para reduzir atritos, evitar erros manuais e manter a operação fluida.",
  workflowTitle = <>Fluxo de trabalho <br />direto e eficiente.</>,
  workflowSubtitle = "Menos cliques e uma curva de aprendizado rápida para que sua equipe atenda com agilidade.",
  workflowSteps = [
    { step: 1, title: 'Implantação Guiada', desc: 'Configuração inicial dos seus produtos e equipamentos com nosso acompanhamento.' },
    { step: 2, title: 'Operação sem Travamentos', desc: 'Interface limpa para que o atendimento flua sem interrupções.' },
    { step: 3, title: 'Controle e Relatórios', desc: 'Relatórios claros de vendas e estoque para facilitar sua tomada de decisão.' }
  ],
  workflowBullets = ['Interface intuitiva e sem distrações', 'Operação local sem depender de internet', 'Suporte técnico humanizado'],
  ctaTitle = "Deseja ver a solução funcionando?",
  ctaSubtitle = `Agende uma demonstração e conheça os fluxos práticos do ${name}.`
}: ProductLayoutProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, Android, iOS",
    "description": description
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden min-h-screen">
      <SEO
        title={name}
        description={description}
        schema={schema}
        canonicalUrl={`https://vancod.com.br/${(name.split(' ')[1] || name).toLowerCase()}`}
      />
      
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden min-h-[85vh] flex items-center">
        <AnimatedGrid />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-14 w-full">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              {name} • Solução Especializada
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
            >
              {tagline}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
            >
              <Link 
                to="/contato"
                className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Agendar demonstração</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href={`https://${subdomain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-800 hover:bg-slate-100 border border-slate-300 rounded-full font-semibold text-sm transition-all flex items-center justify-center"
              >
                Acessar Portal Web
              </a>
            </motion.div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1 text-slate-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-blue-600" /> Demonstração guiada
              </span>
              <span>•</span>
              <span>Sem comissão sobre vendas</span>
              <span>•</span>
              <span>Suporte humanizado</span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y, opacity }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-[16/10] rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden ring-1 ring-slate-200">
              {screenshots && screenshots.length > 0 ? (
                <div className="w-full h-full relative">
                  <div className="h-9 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-xs font-mono text-slate-500 ml-2">https://{subdomain}</span>
                  </div>
                  <img 
                    src={screenshots[0]} 
                    alt={`${name} Interface`}
                    className="w-full h-[calc(100%-2.25rem)] object-cover" 
                  />
                </div>
              ) : (
                <div className="text-center p-8 flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 text-white mb-4 flex items-center justify-center shadow-sm">
                    <span className="text-2xl font-bold text-white">V</span>
                  </div>
                  <div className="text-lg font-bold text-slate-900">{name}</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">{sectionTitle}</h2>
            <p className="text-base md:text-lg text-slate-600">{sectionSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white border border-slate-200 text-blue-600 font-bold">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 relative bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-14 relative z-10">
            <div className="flex-1 order-2 md:order-1 w-full">
               <div className="grid gap-4">
                 {workflowSteps.map((item) => (
                   <div 
                     key={item.step}
                     className="flex gap-4 items-start p-5 rounded-xl bg-white border border-slate-200 shadow-2xs"
                   >
                     <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                       {item.step}
                     </div>
                     <div>
                       <h4 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h4>
                       <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
               <div>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">{workflowTitle}</h2>
                 <p className="text-base text-slate-600 mb-6 leading-relaxed">{workflowSubtitle}</p>
                 <ul className="space-y-3">
                   {workflowBullets.map((item, i) => (
                     <li key={i} className="flex items-center gap-2.5">
                       <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                       <span className="text-slate-800 text-sm font-medium">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">Perguntas Frequentes</h2>
              <p className="text-sm md:text-base text-slate-400">Esclarecimentos operacionais sobre o {name}.</p>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            {ctaTitle}
          </h2>
          <p className="text-base md:text-lg text-blue-100 mb-8 font-normal">
            {ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link 
               to="/contato"
               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-900 hover:bg-blue-50 rounded-full font-bold transition-all text-sm shadow-md"
            >
              <span>Agendar demonstração</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
               href={`https://${subdomain}`}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-semibold transition-all text-sm"
            >
              Ir para {subdomain}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
