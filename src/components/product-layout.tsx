import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MessageCircle, Star, Award } from 'lucide-react';
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
  sectionTitle = "Projetado para dominar a sua rotina.",
  sectionSubtitle = "Engenharia de alta velocidade desenhada especificamente para zerar atrasos e acelerar seu faturamento.",
  workflowTitle = <>Fluxo de trabalho <br/>em estado da arte.</>,
  workflowSubtitle = "Menos cliques, zero lentidão e uma curva de aprendizado quase nula para toda a sua equipe.",
  workflowSteps = [
    { step: 1, title: 'Implantação Rápida', desc: 'Importe produtos e clientes com nosso time e comece no mesmo dia.' },
    { step: 2, title: 'Operação Sem Filas', desc: 'Interface sem atrito para seu caixa e atendimento renderem o máximo.' },
    { step: 3, title: 'Escala & Lucro Real', desc: 'Relatórios claros e automações trabalhando 24/7 pelo seu negócio.' }
  ],
  workflowBullets = ['Interface intuitiva e sem distrações', 'Atalhos globais de teclado para agilidade', 'Funcionamento 100% garantido'],
  ctaTitle = "Pronto para transformar sua operação?",
  ctaSubtitle = `Agende uma demonstração gratuita e veja o ${name} funcionando na prática no seu negócio.`
}: ProductLayoutProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, Android, iOS",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    }
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
      
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <AnimatedGrid />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 text-xs font-extrabold text-blue-800 mb-8 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              {name} • Engenharia Especializada
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]"
            >
              {tagline}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link 
                to="/contato"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-extrabold hover:scale-105 transition-all flex items-center justify-center gap-2 text-base shadow-xl shadow-blue-600/25"
              >
                <span>Agendar Demonstração Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href={`https://${subdomain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 hover:bg-slate-100 border border-slate-300 rounded-full font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-base shadow-sm"
              >
                Acessar Portal Web
              </a>
            </motion.div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <ShieldCheck className="w-4 h-4" /> 100% Garantido
              </span>
              <span>•</span>
              <span>Zero taxa por comissão</span>
              <span>•</span>
              <span>Suporte VIP WhatsApp</span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ y, opacity }}
            className="flex-1 w-full relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-[16/10] rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-300/60 overflow-hidden ring-1 ring-slate-200 group">
              {screenshots && screenshots.length > 0 ? (
                <div className="w-full h-full relative">
                  <div className="absolute top-0 inset-x-0 h-10 bg-slate-100/90 backdrop-blur-md border-b border-slate-200 z-20 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-xs font-mono text-slate-600 ml-2">https://{subdomain}</span>
                  </div>
                  <img 
                    src={screenshots[0]} 
                    alt={`${name} Interface`}
                    className="w-full h-full object-cover pt-10 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              ) : (
                <div className="text-center p-8 flex flex-col items-center justify-center h-full">
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-blue-600 text-white border border-blue-500 mb-6 flex items-center justify-center shadow-lg`}>
                    <span className="text-4xl font-extrabold text-white">V</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 tracking-tight">{name} Interface</div>
                  <div className="text-slate-500 mt-2">Visão do Produto</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-End Bento Features */}
      <section className="py-28 bg-white border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">{sectionTitle}</h2>
            <p className="text-lg md:text-xl text-slate-600">{sectionSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 hover:border-blue-400 transition-all duration-300 group relative overflow-hidden hover:-translate-y-1 hover:shadow-xl shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-100 border border-blue-200 group-hover:scale-110 transition-transform duration-300 text-blue-700 font-bold">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-normal">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Workflow */}
      <section className="py-28 relative bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 order-2 md:order-1 w-full">
               <div className="grid gap-6">
                 {workflowSteps.map((item, i) => (
                   <motion.div 
                     key={item.step}
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: i * 0.15 }}
                     className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm"
                   >
                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-base shadow-md shadow-blue-600/30">
                       {item.step}
                     </div>
                     <div>
                       <h4 className="text-lg font-extrabold text-slate-900 mb-1">{item.title}</h4>
                       <p className="text-slate-600 text-sm leading-relaxed font-normal">{item.desc}</p>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
               >
                 <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">{workflowTitle}</h2>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed font-normal">{workflowSubtitle}</p>
                 <ul className="space-y-4">
                   {workflowBullets.map((item, i) => (
                     <li key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                       <span className="text-slate-800 font-semibold text-base">{item}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="py-28 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">Perguntas Frequentes</h2>
              <p className="text-lg text-slate-400">Tire suas dúvidas técnicas e comerciais sobre o {name}.</p>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>
      )}

      {/* Final High Conversion CTA */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            {ctaTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-blue-100 mb-10 font-normal max-w-2xl mx-auto"
          >
            {ctaSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
               to="/contato"
               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-full font-black hover:scale-105 transition-all text-base shadow-2xl"
            >
              <span>Falar com um Especialista</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
               href={`https://${subdomain}`}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold hover:scale-105 transition-all text-base"
            >
              Ir para {subdomain}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
