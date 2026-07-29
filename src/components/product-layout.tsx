import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
  sectionTitle = "Projetado para dominar.",
  sectionSubtitle = "Recursos de classe mundial desenhados especificamente para acelerar sua operação.",
  workflowTitle = <>Fluxo de trabalho <br/>em estado da arte.</>,
  workflowSubtitle = "Desenhamos cada tela pensando na velocidade da sua operação. Menos cliques, mais resultados e uma curva de aprendizado quase nula.",
  workflowSteps = [
    { step: 1, title: 'Integração Rápida', desc: 'Importe seus dados e comece a operar em minutos.' },
    { step: 2, title: 'Operação Fluida', desc: 'Interface sem atritos para a sua equipe render o máximo.' },
    { step: 3, title: 'Escala e Lucro', desc: 'Análises e automações trabalhando 24/7 pelo seu negócio.' }
  ],
  workflowBullets = ['Interface brutalmente minimalista', 'Atalhos globais de teclado', 'Otimização implacável para mobile'],
  ctaTitle = "Assuma o controle absoluto.",
  ctaSubtitle = `Agende uma demonstração e veja o ${name} transformar sua operação em tempo real.`
}: ProductLayoutProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 text-xs font-bold text-blue-800 mb-8 backdrop-blur-md shadow-sm"
            >
              {name}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[1.1]"
            >
              {tagline}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href={`https://${subdomain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-extrabold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-base shadow-lg shadow-blue-600/25"
              >
                Acessar {name.replace('Vancod ', '')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link 
                to="/contato"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 hover:bg-slate-100 border border-slate-300 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-base shadow-sm"
              >
                Agendar Demo
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ y, opacity }}
            className="flex-1 w-full relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-75 transition-opacity" />
            <div className="relative aspect-[16/10] rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-300/60 overflow-hidden ring-1 ring-slate-200 group">
              {screenshots && screenshots.length > 0 ? (
                <div className="w-full h-full relative">
                  <div className="absolute top-0 inset-x-0 h-9 bg-slate-100/90 backdrop-blur-md border-b border-slate-200 z-20 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-xs font-mono text-slate-600 ml-2">{subdomain}</span>
                  </div>
                  <img 
                    src={screenshots[0]} 
                    alt={`${name} Interface`}
                    className="w-full h-full object-cover pt-9 group-hover:scale-105 transition-transform duration-700" 
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
      <section className="py-32 bg-slate-100/80 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">{sectionTitle}</h2>
            <p className="text-xl text-slate-600">{sectionSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl shadow-lg shadow-slate-200/50"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-blue-50 border border-blue-200 group-hover:scale-110 transition-transform duration-500 text-blue-600 font-bold">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-normal">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Workflow */}
      <section className="py-32 relative border-t border-slate-200 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-20 relative z-10">
            <div className="flex-1 order-2 md:order-1 w-full">
               <div className="grid gap-6">
                 {workflowSteps.map((item, i) => (
                   <motion.div 
                     key={item.step}
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.7, delay: i * 0.15 }}
                     className="flex gap-6 items-start p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors shadow-sm"
                   >
                     <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-lg shadow-md shadow-blue-600/30`}>
                       {item.step}
                     </div>
                     <div>
                       <h4 className="text-xl font-extrabold text-slate-900 mb-2">{item.title}</h4>
                       <p className="text-slate-600 text-lg leading-relaxed font-normal">{item.desc}</p>
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
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter">{workflowTitle}</h2>
                 <p className="text-xl text-slate-600 mb-10 leading-relaxed font-normal">{workflowSubtitle}</p>
                 <ul className="space-y-5">
                   {workflowBullets.map((item, i) => (
                     <li key={i} className="flex items-center gap-4">
                       <CheckCircle2 className="w-6 h-6 text-blue-600" />
                       <span className="text-slate-700 font-semibold text-lg">{item}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="py-32 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">Perguntas Frequentes</h2>
              <p className="text-xl text-slate-600">Tire suas dúvidas técnicas e comerciais sobre o {name}.</p>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-32 lg:py-48 relative overflow-hidden border-t border-slate-200 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter text-slate-900"
          >
            {ctaTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 font-normal"
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
            <a 
               href={`https://${subdomain}`}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-extrabold hover:scale-105 transition-transform text-base shadow-lg shadow-blue-600/25"
            >
              Ir para {subdomain}
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
               to="/contato"
               className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-300 rounded-full font-bold hover:scale-105 transition-transform text-base"
            >
              Falar com Especialista
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
