import { motion } from 'motion/react';
import { ArrowRight, Code2, Rocket, Target, Zap, Layout, Headset, Shield, Sparkles, CheckCircle2, Award, Users, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Button } from '../components/button';

export default function Sobre() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre a Vancod Systems",
    "description": "Somos uma empresa brasileira de alta engenharia de software especializada em soluções SaaS de alto desempenho para o varejo, food service e eventos."
  };

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden min-h-screen">
      <SEO 
        title="Sobre a Vancod • Engenharia de Software de Elite" 
        description="A Vancod desenvolve softwares com zero latência, alta conversão e foco absoluto em aumentar o lucro de adegas, restaurantes e eventos."
        schema={schema}
        canonicalUrl="https://vancod.com.br/sobre"
      />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 text-xs font-extrabold text-blue-800 mb-8 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Nossa Missão
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            Software criado para quem <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              exige resultado e velocidade.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-12"
          >
            Não acreditamos em sistemas lentos, cheios de menus inúteis que travam no horário de pico. Desenvolvemos produtos cirúrgicos para resolver com maestria a operação real da sua empresa.
          </motion.p>
        </div>
      </section>

      {/* Ecosystem & Vision Section */}
      <section className="py-24 bg-white border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Um ecossistema especialista que cresce junto com você.
              </h2>
              <div className="space-y-6 text-base md:text-lg text-slate-600 font-normal leading-relaxed">
                <p>
                  A <strong>Vancod</strong> é uma empresa brasileira de tecnologia com engenharia de classe mundial. Ao invés de um ERP genérico e engessado, construímos softwares dedicados por segmento de mercado.
                </p>
                <p>
                  Utilizamos uma arquitetura híbrida moderna: <strong>Desktop Offline-First em Rust + SQLite</strong> para garantir que seu caixa nunca pare mesmo sem sinal de internet, integrado a uma <strong>Nuvem Serverless de Borda</strong> para sincronização em tempo real de relatórios e faturas.
                </p>
                <p>
                  Nosso compromisso é direto: tecnologia que desaparece na sua rotina para deixar seu negócio vender mais e lucrar com máxima tranquilidade.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white border border-slate-800">
                 <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                   <Award className="w-6 h-6 text-blue-400" />
                   Nossos Segmentos de Atuação
                 </h3>
                 <div className="space-y-6">
                    {[
                      { title: "Distribuidoras & Adegas", desc: "Balcão Pro: PDV offline ultra-rápido, combos e fiado WhatsApp.", tag: "Balcão Pro" },
                      { title: "Restaurantes & Pizzarias", desc: "Vancod Food: KDS digital na cozinha, comandas e iFood direto.", tag: "Food Service" },
                      { title: "Eventos & Cerimoniais", desc: "Olhare: Transmissão de fotos ao vivo no telão via QR Code.", tag: "Olhare Live" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 pb-6 border-b border-slate-800 last:border-0 last:pb-0">
                         <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 text-blue-400 font-bold">
                           {i + 1}
                         </div>
                         <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-base font-extrabold text-white">{item.title}</h4>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores & Princípios */}
      <section className="py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Nossos Princípios Inegociáveis
            </h2>
            <p className="text-lg text-slate-400">
              As regras de engenharia que guiam cada linha de código e cada interface da Vancod.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-7 h-7 text-cyan-400" />, title: "Velocidade Extrema (0ms)", desc: "Cada clique importa. Nossos sistemas são desenhados para responder instantaneamente nos horários de maior pico." },
              { icon: <Server className="w-7 h-7 text-blue-400" />, title: "100% Offline-First", desc: "A internet da rua pode cair que seu caixa continua vendendo, abrindo a gaveta e emitindo notas normalmente." },
              { icon: <Layout className="w-7 h-7 text-pink-400" />, title: "Design Sem Fricção", desc: "Interfaces claras e ergonômicas. Sua equipe aprende a usar em menos de 10 minutos sem treinamentos cansativos." },
              { icon: <Target className="w-7 h-7 text-emerald-400" />, title: "Foco no Lucro Real", desc: "Eliminamos desperdícios com cadernos de fiado perdidos, erros manuais de comanda e filas intermináveis." },
              { icon: <Headset className="w-7 h-7 text-amber-400" />, title: "Suporte Próximo no WhatsApp", desc: "Sem robôs chatos. Atendimento humanizado e rápido com especialistas que entendem a sua rotina." },
              { icon: <Shield className="w-7 h-7 text-purple-400" />, title: "Zero Comissão sobre Vendas", desc: "Seu faturamento é 100% seu. Cobramos uma assinatura transparente sem surpresas no fim do mês." }
            ].map((valor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">{valor.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">{valor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-28 relative text-center bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900"
          >
            Pronto para evoluir a gestão do seu negócio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            Agende uma demonstração prática e descubra como o ecossistema Vancod acelera suas operações.
          </motion.p>
          <div className="flex justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-extrabold text-base shadow-xl shadow-blue-600/25 hover:scale-105 transition-all"
            >
              <span>Solicitar Demonstração</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
