import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageSquare, Phone, Building2, CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Clock, Headphones } from 'lucide-react';
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
    "description": "Agende uma demonstração e descubra como a Vancod pode acelerar sua operação."
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 relative overflow-hidden">
      <SEO 
        title="Falar com Especialistas & Vendas" 
        description="Agende uma demonstração gratuita e descubra como a Vancod pode multiplicar a eficiência do seu negócio."
        schema={schema}
        canonicalUrl="https://vancod.com.br/contato"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-extrabold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Atendimento & Consultoria Especializada
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
            Acelere o crescimento da <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              sua operação hoje.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            Nossa equipe técnica e comercial está pronta para entender seus desafios e montar uma demonstração personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Perks (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Quick WhatsApp Highlight Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-xl shadow-emerald-900/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                  <MessageCircle className="w-6 h-6 fill-white text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">Atendimento Imediato</h3>
                  <p className="text-xs text-emerald-100 font-medium">Resposta em menos de 5 minutos</p>
                </div>
              </div>
              <p className="text-sm text-emerald-50 leading-relaxed mb-6">
                Prefere falar direto pelo WhatsApp? Nossos consultores estão online para tirar dúvidas e agendar sua demo agora.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20da%20Vancod."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-white text-emerald-800 rounded-xl font-extrabold text-sm shadow-md hover:bg-emerald-50 transition-all"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Guarantees List */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h4 className="font-extrabold text-slate-900 text-lg">O que acontece na demonstração:</h4>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Demonstração Prática</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">Você vê na tela o sistema funcionando exatamente no seu segmento.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center flex-shrink-0 text-indigo-600 font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Migração Guiada sem Custos</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">Ajudamos a importar produtos, clientes e histórico do seu sistema antigo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-emerald-600 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Sem Fidelidade Forçada</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">Você só continua porque o sistema realmente dá lucro e funciona.</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Envie sua solicitação</h3>
            <p className="text-sm text-slate-600 mb-8">Preencha os campos abaixo e nosso time entrará em contato.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'success' && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 px-4 py-3 rounded-2xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">Mensagem enviada com sucesso! Um especialista entrará em contato em instantes.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-2xl text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Nome Completo *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">E-mail *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-sm"
                    placeholder="seuemail@empresa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">WhatsApp / Telefone *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-sm"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Cidade / Estado</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-sm"
                    placeholder="Ex: São Paulo / SP"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Qual sistema você quer conhecer?</label>
                <select
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-sm font-medium"
                >
                  <option value="adega">Balcão Pro Adegas (PDV Offline & Fiado WhatsApp)</option>
                  <option value="restaurantes">Vancod Restaurantes (KDS Cozinha & iFood)</option>
                  <option value="eventos">Olhare Fotos (Mural TV ao Vivo via QR Code)</option>
                  <option value="todas">Ecossistema Completo / Múltiplas Unidades</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Mensagem ou dúvida específica (Opcional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors text-sm resize-none"
                  placeholder="Conte um pouco sobre como funciona sua operação hoje..."
                />
              </div>

              <button
                disabled={status === 'loading'}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-extrabold text-base transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? 'Enviando...' : (
                  <>Solicitar Demonstração Gratuita <ArrowRight className="w-5 h-5" /></>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Seus dados estão 100% protegidos pela LGPD. Não enviamos spam.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
