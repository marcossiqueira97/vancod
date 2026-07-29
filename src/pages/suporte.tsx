import { motion } from 'motion/react';
import { Search, Book, MessageCircle, FileText, ArrowRight, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';

export default function Suporte() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Central de Ajuda - Vancod",
    "description": "Suporte, documentação e guias para aproveitar ao máximo os sistemas Vancod."
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      <SEO 
        title="Central de Ajuda" 
        description="Tutoriais, documentação e suporte em tempo real para maximizar o uso da plataforma Vancod."
        schema={schema}
        canonicalUrl="https://vancod.com.br/suporte"
      />


      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
        >
          Como podemos <br/>ajudar você?
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl mx-auto mt-12"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-slate-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-5 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-lg backdrop-blur-md shadow-2xl"
            placeholder="Busque por artigos, tutoriais ou produtos..."
          />
        </motion.div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-900 border border-white/10 rounded-2xl p-10 hover:border-white/20 transition-all group"
            >
               <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                 <Book className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Base de Conhecimento</h3>
               <p className="text-slate-400 mb-8 font-light leading-relaxed">Artigos detalhados e guias passo a passo sobre cada funcionalidade dos nossos sistemas.</p>
               <a href="#" className="inline-flex items-center text-slate-300 font-semibold hover:text-white">Acessar Artigos <ArrowRight className="w-4 h-4 ml-2" /></a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-900 border border-white/10 rounded-2xl p-10 hover:border-white/20 transition-all group"
            >
               <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                 <Video className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Vancod Academy</h3>
               <p className="text-slate-400 mb-8 font-light leading-relaxed">Cursos em vídeo ensinando desde o básico até o uso avançado das plataformas.</p>
               <a href="#" className="inline-flex items-center text-slate-300 font-semibold hover:text-white">Assistir Aulas <ArrowRight className="w-4 h-4 ml-2" /></a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-900 border border-white/10 rounded-2xl p-10 hover:border-white/20 transition-all group"
            >
               <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                 <FileText className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Documentação API</h3>
               <p className="text-slate-400 mb-8 font-light leading-relaxed">Para desenvolvedores: guias de integração, referências e webhooks da Vancod.</p>
               <a href="#" className="inline-flex items-center text-slate-300 font-semibold hover:text-white">Ver Documentação <ArrowRight className="w-4 h-4 ml-2" /></a>
            </motion.div>
         </div>

         {/* Contact CTA */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
           className="mt-16 bg-slate-900 border border-white/10 rounded-2xl p-10 md:p-16 text-center"
         >
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
               <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Ainda precisa de ajuda?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto font-light text-lg">Nossa equipe técnica especializada está pronta para resolver qualquer dúvida através do chat em tempo real dentro do sistema.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/contato" className="px-8 py-4 bg-blue-600 text-white hover:bg-blue-500 rounded-full font-bold hover:scale-105 transition-transform text-lg ">
                 Falar com Suporte
               </Link>
            </div>
         </motion.div>
      </section>
    </div>
  );
}
