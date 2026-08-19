import { motion } from 'motion/react';
import { SEO } from '../components/seo';

export default function Termos() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Termos de Uso - Vancod Tecnologia",
    "description": "Termos e condições para uso dos softwares e plataformas da Vancod Tecnologia."
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24">
      <SEO 
        title="Termos de Uso" 
        description="Termos e condições para contratação e uso dos softwares da Vancod Tecnologia."
        schema={schema}
        canonicalUrl="https://vancod.com.br/termos"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold mb-4">
            Documento Legal
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">Termos de Uso</h1>
          <p className="text-slate-500 mb-10 text-sm border-b border-slate-200 pb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Aceitação dos Termos</h2>
              <p>
                Ao contratar, acessar ou utilizar as soluções de software da Vancod Tecnologia (incluindo Balcão Pro Adegas, Vancod Restaurantes e Olhare Fotos & Eventos), você concorda com as condições descritas neste documento. Caso não concorde com alguma das cláusulas, o uso dos serviços não deve ser continuado.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Licença de Uso do Software</h2>
              <p className="mb-3">
                A Vancod concede uma licença limitada, não exclusiva, intransferível e revogável para a utilização das ferramentas contratadas no âmbito da atividade comercial do cliente:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>O cliente não tem direito de sublicenciar, descompilar, realizar engenharia reversa ou copiar o código-fonte.</li>
                <li>O uso deve respeitar os limites de terminais ou contas estabelecidos no plano acordado.</li>
                <li>É vedada a utilização das ferramentas para fins ilícitos ou em desacordo com a legislação brasileira.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Disponibilidade e Operação</h2>
              <p>
                A Vancod emprega esforços técnicos para garantir a estabilidade e a continuidade de seus serviços. Nos módulos com tecnologia offline-first, a continuidade das operações no caixa é assegurada localmente, sendo a sincronização com a nuvem retomada assim que restabelecida a conexão do cliente.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Propriedade Intelectual</h2>
              <p>
                Todos os direitos autorais, marcas, códigos, designs e estruturas dos softwares pertencem exclusivamente à Vancod Tecnologia. A contratação dos serviços confere unicamente o direito de uso nos termos contratados.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Contato e Foro</h2>
              <p>
                Para dúvidas referentes aos presentes Termos de Uso, entre em contato através do e-mail <strong>contato@vancod.com.br</strong>. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer dúvidas decorrentes deste instrumento.
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
