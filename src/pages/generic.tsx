import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 px-4 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm">
          <span className="font-extrabold text-2xl">V</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">{title}</h1>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          Esta página está em processo de atualização ou não foi localizada.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-full text-xs font-bold transition-all shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar à página inicial
        </Link>
      </motion.div>
    </div>
  );
}
