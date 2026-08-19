import { motion } from 'motion/react';
import { ArrowRight, Target, Zap, Layout, Headphones, Shield, CheckCircle2, Building, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { SITE_CONFIG } from '../lib/config';

export default function Sobre() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre a Vancod Tecnologia",
    "description": "Empresa brasileira de tecnologia focada em desenvolver soluções de software especializadas para pequenos e médios negócios."
  };

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden min-h-screen">
      <SEO 
        title="Sobre a Vancod Tecnologia • Nossa História e Propósito" 
        description="A Vancod é uma empresa brasileira de tecnologia focada em desenvolver soluções de software especializadas para pequenos e médios negócios."
        schema={schema}
        canonicalUrl="https://vancod.com.br/sobre"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-6">
            Institucional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
            Desenvolvemos softwares que atendem à realidade do seu negócio.
          </h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            A Vancod é uma empresa brasileira de tecnologia focada em criar soluções de software especializadas, práticas e confiáveis para pequenos e médios negócios.
          </p>
        </div>
      </section>

      {/* Visão e Abordagem */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Por que criamos produtos especializados?
              </h2>
              <p>
                Durante anos acompanhamos empresários lidando com sistemas genéricos: ferramentas inchadas de funcionalidades que quase ninguém usa, lentas de operar e caras para manter.
              </p>
              <p>
                Na <strong>Vancod</strong>, escolhemos um caminho diferente. Desenvolvemos produtos dedicados por segmento de mercado:
              </p>
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-start gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Balcão Pro:</strong> Focado no varejo de bebidas, distribuidoras e adegas que precisam de velocidade de caixa e controle prático de fiado.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Vancod Restaurantes:</strong> Focado em food service, integrando mesas, KDS de cozinha e delivery sem retrabalho.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Olhare:</strong> Focado em eventos, viabilizando transmissão ao vivo de fotos por QR Code direto pelo navegador.</span>
                </li>
              </ul>
              <p className="pt-2">
                Nosso propósito é oferecer tecnologia acessível, estável e que realmente faça diferença no dia a dia de quem está na linha de frente da operação.
              </p>
            </div>

            {/* Institutional Information Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-400" />
                Dados Institucionais
              </h3>
              
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Empresa</span>
                  <span className="font-semibold text-slate-100">{SITE_CONFIG.name}</span>
                </div>
                
                <div>
                  <span className="text-slate-400 block mb-0.5">Localização</span>
                  <span className="font-semibold text-slate-100 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {SITE_CONFIG.contact.city} — {SITE_CONFIG.contact.state}, {SITE_CONFIG.contact.country}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">E-mail Comercial</span>
                  <span className="font-semibold text-slate-100 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    {SITE_CONFIG.contact.email}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Registro Fiscal</span>
                  <span className="font-mono text-slate-300">
                    {SITE_CONFIG.contact.cnpj ? SITE_CONFIG.contact.cnpj : 'CNPJ: Sob consulta comercial'}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <span className="text-slate-400 block mb-1">Modelo de Atendimento</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Atendimento e suporte técnico remoto para todo o território nacional, com implantações guiadas e acompanhamento contínuo.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Princípios de Engenharia e Produto */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Como Pensamos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Nossos Princípios de Trabalho
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Diretrizes que orientam cada desenvolvimento e decisão de produto.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Zap className="w-5 h-5 text-blue-600" />, 
                title: "Simplicidade Operacional", 
                desc: "O sistema deve ser intuitivo para que qualquer membro da sua equipe aprenda a utilizá-lo sem longos manuais." 
              },
              { 
                icon: <Shield className="w-5 h-5 text-blue-600" />, 
                title: "Resiliência a Falhas", 
                desc: "Quando o caixa precisa passar vendas, a perda de internet não pode travar o atendimento do seu cliente." 
              },
              { 
                icon: <Layout className="w-5 h-5 text-blue-600" />, 
                title: "Interfaces Diretas", 
                desc: "Telas limpas, sem excesso de botões irrelevantes, focadas em agilizar o fluxo de trabalho." 
              },
              { 
                icon: <Target className="w-5 h-5 text-blue-600" />, 
                title: "Foco no Resultado Real", 
                desc: "A tecnologia precisa reduzir retrabalho, evitar calotes e ajudar sua empresa a crescer com organização." 
              },
              { 
                icon: <Headphones className="w-5 h-5 text-blue-600" />, 
                title: "Suporte Próximo", 
                desc: "Tratamos clientes como parceiros, ouvindo feedbacks reais para aprimorar os softwares continuamente." 
              },
              { 
                icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />, 
                title: "Transparência Comercial", 
                desc: "Sem comissões ocultas sobre suas vendas. Cobranças claras e previsíveis para sua gestão financeira." 
              }
            ].map((principio, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 w-fit mb-4">
                  {principio.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{principio.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{principio.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight text-slate-900">
            Quer conhecer melhor nossos sistemas?
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Agende uma demonstração prática sem compromisso com nossa equipe técnica e tire todas as suas dúvidas.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm shadow-sm transition-all"
            >
              <span>Agendar demonstração</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
