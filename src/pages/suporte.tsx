import { motion } from 'motion/react';
import { MessageCircle, Headphones, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';

export default function Suporte() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Suporte Técnico e Atendimento - Vancod",
    "description": "Atendimento rápido e suporte técnico especializado para clientes e parceiros Vancod."
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-20 relative overflow-hidden">
      <SEO 
        title="Suporte Técnico" 
        description="Atendimento direto e suporte especializado para maximizar o desempenho da sua operação."
        schema={schema}
        canonicalUrl="https://vancod.com.br/suporte"
      />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6"
        >
          Suporte Técnico & <br/>Atendimento Direto
        </motion.h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-normal">
          Precisa de ajuda com sua operação ou quer agendar um treinamento com nossos especialistas? Estamos prontos para atender você.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl p-10 hover:border-blue-400 transition-all group shadow-xl"
            >
               <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                 <Headphones className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Suporte ao Cliente</h3>
               <p className="text-slate-600 mb-8 font-normal leading-relaxed">Já é cliente Vancod e precisa de auxílio com configurações de caixa, PDV ou integração de cardápio?</p>
               <Link to="/contato" className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-600/25">
                 Falar com Suporte <ArrowRight className="w-4 h-4" />
               </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white border border-slate-200 rounded-3xl p-10 hover:border-blue-400 transition-all group shadow-xl"
            >
               <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                 <ShieldCheck className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Demonstração & Vendas</h3>
               <p className="text-slate-600 mb-8 font-normal leading-relaxed">Quer abrir uma adega, restaurante ou evento e precisa de um plano sob medida para sua cidade?</p>
               <Link to="/contato" className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-md shadow-slate-900/25">
                 Agendar Demonstração <ArrowRight className="w-4 h-4" />
               </Link>
            </motion.div>
         </div>

         {/* Contact CTA */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.4 }}
           className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-10 md:p-14 text-center shadow-2xl shadow-blue-600/20"
         >
           <h3 className="text-3xl font-extrabold mb-4">Atendimento via WhatsApp</h3>
           <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto font-normal">Fale diretamente com nossa equipe comercial e agilize a implantação do sistema no seu negócio.</p>
           <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-extrabold rounded-full hover:bg-blue-50 transition-all shadow-lg">
              <MessageCircle className="w-5 h-5" /> Entrar em Contato Agora
           </Link>
         </motion.div>
      </section>
    </div>
  );
}
