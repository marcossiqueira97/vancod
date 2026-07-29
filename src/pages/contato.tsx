import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageSquare, Phone, Building2, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/seo';
import { useState, FormEvent } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    solution: 'adega',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', role: '', solution: 'adega', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Erro ao enviar a mensagem. Tente novamente mais tarde.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Erro de conexão. Verifique sua internet e tente novamente.');
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Fale com Especialistas - Vancod",
    "description": "Agende uma demonstração e descubra como a Vancod pode escalar sua operação."
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      <SEO 
        title="Fale com Vendas" 
        description="Agende uma demonstração e descubra como a Vancod pode ajudar a escalar sua operação."
        schema={schema}
        canonicalUrl="https://vancod.com.br/contato"
      />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 mb-8 backdrop-blur-md">
              Fale com Vendas
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
              Acelere seu <br/>crescimento.
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light">
              Nossa equipe de especialistas está pronta para entender seus desafios e mostrar como o ecossistema Vancod se adapta à sua operação.
            </p>
            
            <div className="space-y-8">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                   <MessageSquare className="w-5 h-5 text-slate-300" />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-white mb-1">Demonstração Personalizada</h3>
                   <p className="text-slate-400 font-light">Veja os sistemas em ação aplicados ao seu modelo de negócios real.</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                   <Building2 className="w-5 h-5 text-slate-300" />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-white mb-1">Migração sem Atritos</h3>
                   <p className="text-slate-400 font-light">Cuidamos da importação de dados e treinamento da sua equipe.</p>
                 </div>
               </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Empresas que confiam na Vancod</p>
               <div className="flex flex-wrap gap-8 opacity-50 grayscale">
                 <div className="text-xl font-bold font-serif text-white">Adega Prime</div>
                 <div className="text-xl font-bold font-serif text-white">TechCommerce</div>
                 <div className="text-xl font-bold font-serif text-white">GastroBar</div>
               </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative"
          >
             <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                
                {status === 'success' && (
                  <div className="bg-white/5 border border-white/10 text-slate-300 px-4 py-3 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-white/5 border border-white/10 text-slate-300 px-4 py-3 rounded-xl text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-slate-400">Nome completo *</label>
                     <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors" placeholder="João Silva" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-slate-400">E-mail corporativo *</label>
                     <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors" placeholder="joao@empresa.com.br" />
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-slate-400">Telefone / WhatsApp</label>
                     <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors" placeholder="(00) 00000-0000" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-slate-400">Cargo</label>
                     <input type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors" placeholder="Ex: Diretor, Gerente..." />
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Qual solução mais te interessa?</label>
                  <select value={formData.solution} onChange={e => setFormData({...formData, solution: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors appearance-none">
                     <option value="adega" className="bg-slate-900">Vancod Adega</option>
                     <option value="restaurantes" className="bg-slate-900">Vancod Restaurantes</option>
                     <option value="commerce" className="bg-slate-900">Vancod Commerce</option>
                     <option value="eventos" className="bg-slate-900">Vancod Eventos</option>
                     <option value="todas" className="bg-slate-900">Múltiplas soluções / Não tenho certeza</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Como podemos ajudar? (Opcional)</label>
                  <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors resize-none" placeholder="Conte-nos um pouco sobre a sua operação atual..."></textarea>
                </div>

                <button disabled={status === 'loading'} type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-500 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 mt-4  disabled:opacity-50 disabled:cursor-not-allowed">
                   {status === 'loading' ? 'Enviando...' : (
                     <>Solicitar Contato <ArrowRight className="w-5 h-5" /></>
                   )}
                </button>
                
                <p className="text-xs text-center text-slate-500 font-light mt-4">
                  Ao enviar, você concorda com nossos <a href="/termos" className="underline hover:text-white">Termos</a> e <a href="/privacidade" className="underline hover:text-white">Política de Privacidade</a>.
                </p>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
