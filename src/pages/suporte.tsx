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
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-20 relative overflow-hidden">
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
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6"
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
            <Search className="h-6 w-6 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-5 bg-white border border-slate-300 rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all text-lg shadow-lg"
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
              className="bg-white border border-slate-200 rounded-2xl p-10 hover:border-blue-400 transition-all group shadow-xl"
            >
               <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                 <Book className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Base de Conhecimento</h3>
               <p className="text-slate-600 mb-8 font-normal leading-relaxed">Artigos detalhados e guias passo a passo sobre cada funcionalidade dos nossos sistemas.</p>
               <Link to="/blog" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700">Acessar Artigos <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200 rounded-2xl p-10 hover:border-blue-400 transition-all group shadow-xl"
            >
               <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                 <Video className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Vancod Academy</h3>
               <p className="text-slate-600 mb-8 font-normal leading-relaxed">Cursos em vídeo ensinando desde o básico até o uso avançado das plataformas.</p>
               <Link to="/blog" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700">Assistir Aulas <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200 rounded-2xl p-10 hover:border-blue-400 transition-all group shadow-xl"
            >
               <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                 <FileText className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Documentação API</h3>
               <p className="text-slate-600 mb-8 font-normal leading-relaxed">Para desenvolvedores: guias de integração, referências e webhooks da Vancod.</p>
               <Link to="/contato" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700">Ver Documentação <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </motion.div>
         </div>

         {/* Contact CTA */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.5 }}
           className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-10 md:p-14 text-center shadow-lg"
         >
               </Link>
            </div>
         </motion.div>
      </section>
    </div>
  );
}
