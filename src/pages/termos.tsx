import { motion } from 'motion/react';
import { SEO } from '../components/seo';

export default function Termos() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Termos de Uso - Vancod",
    "description": "Termos de Uso dos sistemas do ecossistema Vancod."
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-20">
      <SEO 
        title="Termos de Uso" 
        description="Termos e condições para uso dos softwares SaaS do ecossistema Vancod."
        schema={schema}
        canonicalUrl="https://vancod.com.br/termos"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">Termos de Uso</h1>
          <p className="text-slate-400 mb-16 text-lg border-b border-white/10 pb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-12 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
              <p className="leading-relaxed font-light">
                Ao acessar e usar os sistemas do ecossistema Vancod, você concorda em cumprir e ser regido por estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Licença de Uso</h2>
              <p className="leading-relaxed font-light mb-4">
                Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para utilizar nossos softwares SaaS estritamente para os fins comerciais da sua empresa, de acordo com o plano contratado.
              </p>
              <ul className="list-disc pl-6 space-y-3 font-light text-slate-400 marker:text-blue-500">
                <li>Você não pode copiar, modificar ou distribuir o código fonte.</li>
                <li>O uso deve respeitar os limites de usuários e recursos do plano.</li>
                <li>É proibido usar o sistema para fins ilícitos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Contas de Usuário</h2>
              <p className="leading-relaxed font-light">
                Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorram sob sua conta. A Vancod não se responsabiliza por perdas ou danos resultantes do uso não autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Propriedade Intelectual</h2>
              <p className="leading-relaxed font-light">
                Todos os direitos, títulos e interesses relativos aos softwares, marcas, logos e design do ecossistema Vancod são de propriedade exclusiva da Vancod. A contratação dos serviços não confere a você nenhuma propriedade sobre nossas tecnologias.
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
