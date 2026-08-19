import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageSquare, Phone, Building2, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { SEO } from '../components/seo';
import { useState, FormEvent } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../lib/config';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    solution: 'adega',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const hasWhatsApp = Boolean(SITE_CONFIG.contact.whatsappNumber);

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
        setFormData({ name: '', email: '', phone: '', city: '', solution: 'adega', message: '' });
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
    "name": "Contato e Demonstração - Vancod Tecnologia",
    "description": "Agende uma demonstração prática ou entre em contato com nossa equipe."
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-20 relative overflow-hidden">
      <SEO 
        title="Contato & Agendamento de Demonstração" 
        description="Fale com a equipe da Vancod Tecnologia. Agende uma demonstração prática dos sistemas Balcão Pro, Vancod Restaurantes ou Olhare."
        schema={schema}
        canonicalUrl="https://vancod.com.br/contato"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-4">
            Atendimento Comercial & Suporte
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Agende uma demonstração prática.
          </h1>
          <p className="text-base md:text-lg text-slate-600">
            Nossa equipe técnica e comercial está à disposição para tirar dúvidas e mostrar como as soluções se aplicam ao seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contacts & Transparency (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-base text-slate-900 pb-3 border-b border-slate-100">
                Canais de Atendimento
              </h3>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">E-mail Comercial:</span>
                    <span>{SITE_CONFIG.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Localização:</span>
                    <span>{SITE_CONFIG.contact.city} — {SITE_CONFIG.contact.state}, {SITE_CONFIG.contact.country}</span>
                  </div>
                </div>

                {hasWhatsApp && (
                  <div className="flex items-start gap-3 pt-2">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-xs transition-all"
                    >
                      <span>Conversar no WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* What to expect card */}
            <div className="bg-slate-100/80 p-6 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
              <h4 className="font-bold text-slate-900 text-sm">Como funciona o atendimento:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Apresentação remota orientada ao seu segmento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Esclarecimento sobre equipamentos compatíveis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Sem pressão ou compromisso de contratação prévia.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Preencha o formulário</h3>
            <p className="text-xs text-slate-500 mb-6">Entraremos em contato no horário de sua preferência.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'success' && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3.5 rounded-xl flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-300 text-red-800 p-3.5 rounded-xl text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Seu Nome *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white text-xs"
                    placeholder="Nome completo"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">E-mail corporativo *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white text-xs"
                    placeholder="nome@empresa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">WhatsApp / Telefone *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white text-xs"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Cidade / Estado</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white text-xs"
                    placeholder="Ex: São Paulo / SP"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Qual produto você deseja conhecer?</label>
                <select
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white text-xs"
                >
                  <option value="adega">Balcão Pro Adegas (PDV Offline & Fiado)</option>
                  <option value="restaurantes">Vancod Restaurantes (KDS Cozinha & Comandas)</option>
                  <option value="eventos">Olhare Fotos (Mural TV via QR Code)</option>
                  <option value="todas">Mais de uma solução / Dúvidas gerais</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Mensagem adicional (Opcional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white text-xs resize-none"
                  placeholder="Conte brevemente sobre o modelo de atendimento do seu negócio..."
                />
              </div>

              <button
                disabled={status === 'loading'}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-xs transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? 'Enviando...' : (
                  <>Solicitar demonstração <ArrowRight className="w-4 h-4" /></>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Seus dados serão utilizados apenas para retorno do contato solicitado.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
