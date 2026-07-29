import { motion } from 'motion/react';
import { ArrowRight, Code2, Rocket, Target, Zap, Layout, Headset, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Button } from '../components/button';

export default function Sobre() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre a Vancod",
    "description": "Somos um ecossistema completo de soluções SaaS especializadas que crescem junto com o seu negócio. Simplicidade, velocidade e inovação para PMEs."
  };

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden min-h-screen">
      <SEO 
        title="Sobre a Empresa" 
        description="A Vancod é um ecossistema de soluções SaaS especializadas. Softwares modernos e intuitivos para gestão de PMEs."
        schema={schema}
        canonicalUrl="https://vancod.com.br/sobre"
      />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 lg:pt-56 lg:pb-32 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 text-xs font-bold text-blue-800 mb-8 backdrop-blur-md shadow-sm"
          >
            Nossa Missão
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[1.05]"
          >
            Sistemas que <br className="hidden md:block"/>
            <span className="text-slate-400">dão resultados reais.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-12"
          >
            Acreditamos que um software não deve ser difícil de usar. Ele deve simplificar sua rotina e permitir que você foque apenas no crescimento do seu negócio.
          </motion.p>
        </div>
      </section>

      {/* Ecosystem & Vision Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Um Ecossistema que cresce com você.</h2>
              <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
                <p>
                  A Vancod é uma empresa brasileira de tecnologia especializada no desenvolvimento de soluções SaaS para pequenas e médias empresas. 
                </p>
                <p>
                  Não desenvolvemos soluções genéricas. Ao invés de um único ERP gigantesco cheio de funções desnecessárias, criamos plataformas especializadas, rápidas e objetivas. Cada produto nasce para resolver profundamente os desafios de um segmento específico.
                </p>
                <p>
                  Nossa visão é clara: queremos que, quando um empresário pensar em tecnologia para sua empresa, a primeira marca que venha à mente seja a Vancod. Construímos soluções onde a melhor tecnologia é aquela que desaparece, permitindo que o usuário foque no que importa.
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
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                 <h3 className="text-2xl font-bold text-white mb-8">Nossos Mercados</h3>
                 <div className="space-y-6">
                    {[
                      { title: "Distribuidoras de Bebidas", desc: "Gestão inteligente de estoque e PDV." },
                      { title: "Restaurantes & Bares", desc: "Operação fluida para Food Service." },
                      { title: "E-commerce & Lojas", desc: "Plataformas de alta conversão." },
                      { title: "Eventos", desc: "Compartilhamento de fotos por QR Code." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 pb-6 border-b border-white/10 last:border-0 last:pb-0">
                         <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-1">
                           <Target className="w-5 h-5 text-slate-300" />
                         </div>
                         <div>
                            <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-32 bg-slate-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Nossos Princípios</h2>
            <p className="text-xl text-slate-400 font-light">As regras inegociáveis que moldam a experiência de cada produto do Ecossistema Vancod.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Sparkles />, title: "Simplicidade", desc: "Simplicidade acima da complexidade. O software deve ser tão fácil que dispensa treinamentos longos." },
              { icon: <Zap />, title: "Performance e Velocidade", desc: "Aplicações extremamente rápidas. Valorizamos o tempo do nosso cliente e cada clique importa." },
              { icon: <Layout />, title: "Interfaces Intuitivas", desc: "A experiência do usuário é prioridade. Qualidade em cada detalhe visual e interativo." },
              { icon: <Target />, title: "Foco em Resultados", desc: "Tecnologia como ferramenta para gerar resultados reais. Aumentar produtividade e reduzir erros." },
              { icon: <Headset />, title: "Atendimento Próximo", desc: "Transparência e parceria. Evolução constante pautada no feedback e necessidades reais do cliente." },
              { icon: <Code2 />, title: "Inovação Especializada", desc: "Não fazemos genérico. Entregamos tecnologia acessível e de ponta para empresas de qualquer porte." }
            ].map((valor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-900 p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                  {valor.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{valor.title}</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed">{valor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-48 relative text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white"
          >
            Pronto para evoluir a gestão do seu negócio?
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 font-light max-w-2xl mx-auto"
          >
            Descubra como o ecossistema Vancod pode simplificar sua rotina e escalar suas operações.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Button to="/contato" variant="primary" icon>
              Solicite uma Demonstração
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
