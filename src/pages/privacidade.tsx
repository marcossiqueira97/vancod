import { motion } from 'motion/react';
import { SEO } from '../components/seo';

export default function Privacidade() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de Privacidade - Vancod Tecnologia",
    "description": "Política de Privacidade e conformidade com a LGPD dos softwares da Vancod Tecnologia."
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24">
      <SEO 
        title="Política de Privacidade" 
        description="Diretrizes de privacidade, segurança da informação e tratamento de dados conforme a LGPD."
        schema={schema}
        canonicalUrl="https://vancod.com.br/privacidade"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold mb-4">
            Privacidade & LGPD
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">Política de Privacidade</h1>
          <p className="text-slate-500 mb-10 text-sm border-b border-slate-200 pb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Coleta e Uso de Dados</h2>
              <p>
                A Vancod Tecnologia coleta exclusivamente as informações estritamente necessárias para a prestação dos serviços contratados, tais como dados de identificação do estabelecimento, informações cadastrais de usuários e dados de contato para suporte e faturamento.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Dados de Clientes dos Estabelecimentos</h2>
              <p>
                Nos produtos que realizam gestão de clientes (ex: controle de fiado ou comandas), a Vancod atua como operadora técnica dos dados, cabendo ao estabelecimento cliente a condição de controlador conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD). A Vancod não comercializa nem compartilha dados operacionais de clientes com terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Armazenamento e Segurança</h2>
              <p>
                Adotamos medidas técnicas e organizacionais compatíveis com padrões de mercado para proteger as informações contra acessos não autorizados, perdas ou alterações. As comunicações em rede utilizam protocolos criptografados (HTTPS/TLS).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Direitos do Titular</h2>
              <p>
                Em cumprimento à LGPD, titulares de dados pessoais podem solicitar a confirmação da existência de tratamento, acesso aos dados, correção de informações incompletas ou revogação de consentimento mediante solicitação pelo e-mail <strong>contato@vancod.com.br</strong>.
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
