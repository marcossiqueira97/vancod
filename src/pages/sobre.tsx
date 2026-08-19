import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Building, Mail, MapPin, Server, Cpu, RefreshCw, Shield, Headphones, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { AmbientBackground } from '../components/ambient-background';
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <AmbientBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Institucional
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
            Desenvolvemos softwares que atendem à realidade do seu negócio.
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            A Vancod é uma empresa brasileira de tecnologia focada em criar soluções de software especializadas, práticas e confiáveis para pequenos e médios negócios.
          </p>
        </div>
      </section>

      {/* 4 Perguntas Fundamentais: Quem Somos, O Que Fazemos, Para Quem, Como Pensamos */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Quem Somos</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Empresa Brasileira de Tecnologia</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fundada para desenvolver ferramentas acessíveis e robustas com engenharia própria e proximidade com o usuário.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">O Que Fazemos</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Softwares Especializados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Desenvolvemos sistemas que resolvem com precisão a operação de caixa, controle de estoque, cozinha e eventos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Para Quem</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Pequenos e Médios Negócios</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adegas, distribuidoras de bebidas, restaurantes, bares, pizzarias e organizadores de eventos sociais e corporativos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Como Pensamos</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Simplicidade & Evolução</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Interfaces sem excesso de botões irrelevantes, orientadas à velocidade da rotina e com melhorias contínuas.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center pt-8 border-t border-slate-100">
            
            <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-sm">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Por que criamos produtos dedicados por segmento?
              </h2>
              <p>
                Durante anos acompanhamos empresários lidando com sistemas genéricos: ferramentas inchadas de funcionalidades desnecessárias, lentas de operar no balcão e caras para manter.
              </p>
              <p>
                Na <strong>Vancod</strong>, escolhemos desenvolver produtos dedicados:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Balcão Pro:</strong> Focado no varejo de bebidas, com dedução de combos e fiado com extrato no WhatsApp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Vancod Restaurantes:</strong> Focado em food service, integrando salão, telas KDS de cozinha e delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Olhare:</strong> Focado em eventos, viabilizando transmissão ao vivo de fotos por QR Code sem app.</span>
                </li>
              </ul>
            </div>

            {/* Institutional Information Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 shadow-sm">
              <h3 className="text-base font-bold text-white mb-4 pb-2.5 border-b border-slate-800 flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-400" />
                Dados Institucionais
              </h3>
              
              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Empresa</span>
                  <span className="font-semibold text-slate-100">{SITE_CONFIG.name}</span>
                </div>
                
                <div>
                  <span className="text-slate-400 block text-[11px]">Localização</span>
                  <span className="font-semibold text-slate-100 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {SITE_CONFIG.company.city} — {SITE_CONFIG.company.state}, {SITE_CONFIG.company.country}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px]">E-mail Comercial</span>
                  <span className="font-semibold text-slate-100 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    {SITE_CONFIG.contact.email}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px]">Cadastro Fiscal</span>
                  <span className="font-mono text-slate-300">
                    {SITE_CONFIG.company.cnpj || 'CNPJ: Sob consulta comercial'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: TECNOLOGIA CONSTRUÍDA PARA USO REAL */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Fundamentos Técnicos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Tecnologia construída para uso real
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Arquitetura projetada para garantir continuidade operacional e segurança no dia a dia da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Server className="w-5 h-5 text-blue-600" />,
                title: "Operação Offline-First",
                desc: "O módulo de caixa opera de forma local no computador, garantindo que o atendimento não seja interrompido por oscilações na conexão de internet."
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-blue-600" />,
                title: "Sincronização Segura",
                desc: "Os registros locais são sincronizados com a nuvem de forma automática assim que a rede é restabelecida, mantendo relatórios sempre atualizados."
              },
              {
                icon: <Cpu className="w-5 h-5 text-blue-600" />,
                title: "Arquitetura Híbrida",
                desc: "Combinamos a agilidade de aplicações locais para o caixa com painéis web acessíveis por navegador de qualquer dispositivo."
              },
              {
                icon: <Shield className="w-5 h-5 text-blue-600" />,
                title: "Segurança e Privacidade",
                desc: "Protocolos criptografados (HTTPS/TLS) e tratamento ético de dados conforme as diretrizes da LGPD."
              },
              {
                icon: <Zap className="w-5 h-5 text-blue-600" />,
                title: "Manutenção & Evolução Contínua",
                desc: "Desenvolvimento interno contínuo com atualizações de estabilidade, desempenho e novos recursos orientados ao feedback dos clientes."
              },
              {
                icon: <Headphones className="w-5 h-5 text-blue-600" />,
                title: "Suporte Técnico Direto",
                desc: "Atendimento por especialistas que conhecem o código dos produtos e ajudam na configuração de periféricos e rotinas."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-200 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight text-slate-900">
            Deseja conhecer as soluções na prática?
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Agende uma demonstração com nossa equipe e veja como os sistemas Vancod se aplicam à sua rotina.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-xs transition-all"
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
