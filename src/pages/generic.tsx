import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full text-center"
      >
        <div className="w-20 h-20 bg-white/5 border border-white/10 text-white rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-2xl">
          <span className="font-bold text-4xl">V</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">{title}</h1>
        <p className="text-xl font-light text-slate-400 mb-10 leading-relaxed">
          Esta página está atualmente em desenvolvimento pela nossa equipe de engenharia.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-500 rounded-full text-sm font-bold hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Início
        </Link>
      </motion.div>
    </div>
  );
}
