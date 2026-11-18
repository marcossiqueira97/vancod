import { motion } from 'motion/react';
import { Headphones, ShieldCheck, ArrowRight, Mail, HelpCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { SITE_CONFIG, getWhatsAppUrl } from '../lib/config';

export default function Suporte() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Suporte Técnico e Atendimento - Vancod Tecnologia",
    "description": "Canais oficiais de suporte técnico e esclarecimento de dúvidas operacionais."
  };

  const hasWhatsApp = Boolean(SITE_CONFIG.contact.whatsappNumber);

  return (
    <div className="top-band [--band:400px] bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 relative overflow-hidden">
      <SEO 
        title="Central de Suporte & Atendimento Técnico" 
        description="Atendimento direto e suporte técnico para clientes das soluções Balcão Pro, Vancod Restaurantes e Olhare."
        schema={schema}
        canonicalUrl="https://vancod.com.br/suporte"
      />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-blue-200 text-xs font-semibold mb-4">
          Canais de Atendimento
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-4">
          Central de Suporte Técnico
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
          Estamos à disposição para auxiliar na configuração de equipamentos, dúvidas de operação e acompanhamento da sua equipe.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid md:grid-cols-2 gap-6">
            
            {/* Card 1: Existing Clients */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                 <Headphones className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Suporte ao Cliente</h3>
               <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                 Já utiliza uma das soluções Vancod e precisa de auxílio com configurações de caixa, impressoras ou cardápio?
               </p>
               
               <div className="space-y-3 pt-2">
                 <div className="flex items-center gap-2 text-xs text-slate-700">
                   <Mail className="w-4 h-4 text-blue-600" />
                   <span>{SITE_CONFIG.contact.suporteEmail}</span>
                 </div>
                 {hasWhatsApp && (
                   <a
                     href={getWhatsAppUrl('Olá! Sou cliente Vancod e preciso de suporte técnico.')}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs hover:bg-blue-700 transition-colors shadow-xs"
                   >
                     <span>Abrir chamado no WhatsApp</span>
                     <ArrowRight className="w-3.5 h-3.5" />
                   </a>
                 )}
               </div>
            </div>

            {/* Card 2: Demonstration */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center mb-6 text-slate-700">
                 <HelpCircle className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Dúvidas Comerciais & Demonstração</h3>
               <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                 Quer conhecer os sistemas, consultar compatibilidade de equipamentos ou solicitar uma apresentação online?
               </p>
               <div className="pt-2">
                 <Link
                   to="/contato"
                   className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition-colors shadow-xs"
                 >
                   <span>Agendar demonstração</span>
                   <ArrowRight className="w-3.5 h-3.5" />
                 </Link>
               </div>
            </div>

         </div>

         {/* Operational Guidelines */}
         <div className="mt-12 bg-slate-100/80 border border-slate-200 rounded-2xl p-6 text-xs text-slate-600 leading-relaxed">
           <h4 className="font-bold text-slate-900 mb-2 text-sm">Horários e Formatos de Atendimento</h4>
           <p className="mb-2">
             Nosso suporte atende de segunda a sábado em horário comercial.
           </p>
           <p>
             Para dúvidas sobre termos de uso ou políticas de tratamento de dados, consulte nossa página de <Link to="/termos" className="text-blue-600 underline font-semibold">Termos de Serviço</Link> e <Link to="/privacidade" className="text-blue-600 underline font-semibold">Política de Privacidade</Link>.
           </p>
         </div>
      </section>
    </div>
  );
}
