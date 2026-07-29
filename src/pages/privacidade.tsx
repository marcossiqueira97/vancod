import { motion } from 'motion/react';
import { SEO } from '../components/seo';

export default function Privacidade() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de Privacidade - Vancod",
    "description": "Política de Privacidade dos sistemas do ecossistema Vancod."
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-20">
      <SEO 
        title="Política de Privacidade" 
        description="Saiba como a Vancod coleta, usa e protege seus dados de acordo com a LGPD."
        schema={schema}
        canonicalUrl="https://vancod.com.br/privacidade"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">Política de Privacidade</h1>
          <p className="text-slate-400 mb-16 text-lg border-b border-white/10 pb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-12 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
              <p className="leading-relaxed font-light">
                A Vancod valoriza e respeita a sua privacidade. Esta política descreve como coletamos, usamos, armazenamos e protegemos os seus dados e os dados da sua empresa ao utilizar os sistemas do nosso ecossistema. Estamos em total conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Dados Coletados</h2>
              <p className="leading-relaxed font-light mb-4">
                Coletamos apenas as informações necessárias para a prestação dos nossos serviços SaaS:
              </p>
              <ul className="list-disc pl-6 space-y-3 font-light text-slate-400 marker:text-blue-500">
                <li><strong>Dados Cadastrais:</strong> Nome, e-mail, telefone, CNPJ/CPF e endereço.</li>
                <li><strong>Dados de Uso:</strong> Logs de acesso, endereço IP e interações para telemetria.</li>
                <li><strong>Dados de Transações:</strong> Informações financeiras (não armazenamos CVV de cartão).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Segurança da Informação</h2>
              <p className="leading-relaxed font-light">
                Implementamos medidas de segurança de nível corporativo, incluindo criptografia ponta a ponta, firewalls avançados e proteção contra ataques DDoS, garantindo que os dados do seu negócio e de seus clientes estejam protegidos 24/7.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento</h2>
              <p className="leading-relaxed font-light">
                A Vancod nunca vende seus dados. O compartilhamento ocorre apenas com fornecedores essenciais (como processadores de pagamento e cloud providers) através de rígidos contratos de confidencialidade.
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
