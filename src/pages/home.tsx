import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQ } from '../components/faq';
import { SEO } from '../components/seo';
import { WhyVancod } from '../components/why-vancod';
import { TransparencySection } from '../components/transparency-section';

// Dados estáticos ficam fora do componente: não são recriados a cada render.
const steps = [
  'Entendemos a sua operação',
  'Configuramos a solução',
  'Treinamos a sua equipe',
  'Acompanhamos a operação'
];

// Só o que o Balcão Pro faz de fato (PRODUCT.md, "Capabilities").
const balcaoFacts = [
  'Continua vendendo quando a internet cai',
  'Combos com baixa automática dos insumos',
  'Fiado com limite por cliente',
  'Imprime em Bematech, Elgin, Epson e Daruma'
];

const trustItems = [
  { icon: '/assets/icone-implantacao.png', label: 'Implantação acompanhada' },
  { icon: '/assets/icone-suporte.png', label: 'Suporte real e rápido' },
  { icon: '/assets/icone-sob-medida.png', label: 'Soluções sob medida' },
  { icon: '/assets/icone-seguranca.png', label: 'Operação estável e segura' }
];

const productCards = [
  {
    name: 'Balcão Pro Adegas',
    desc: 'Controle de vendas, PDV, estoque e fiado para adegas.',
    img: '/assets/foto-adega.jpg',
    to: 'https://adegas.vancod.com.br',
    accent: 'from-blue-500 to-sky-400'
  },
  {
    name: 'Vancod Restaurantes',
    desc: 'PDV, comandas, cozinha e gestão completa para restaurantes.',
    img: '/assets/foto-restaurante.jpg',
    to: 'https://restaurantes.vancod.com.br',
    accent: 'from-violet-500 to-fuchsia-400'
  },
  {
    name: 'Olhare Fotos & Eventos',
    desc: 'Organização, vendas e entrega de fotos para eventos.',
    img: '/assets/foto-eventos.jpg',
    to: 'https://olhare.vancod.com.br',
    accent: 'from-amber-500 to-orange-400'
  }
];

const faqs = [
  {
    question: "A Vancod desenvolve software sob medida?",
    answer: "Sim. Além das soluções prontas para segmentos como adegas, restaurantes e eventos, desenvolvemos sistemas sob medida para processos específicos da sua empresa. Começamos entendendo a operação antes de definir o escopo."
  },
  {
    question: "Como funciona a implantação e o suporte?",
    answer: "Nossa equipe acompanha a instalação e a configuração inicial dos produtos e dos dados. O suporte técnico é feito direto pela equipe, por e-mail, para tirar dúvidas e manter a rotina fluida."
  },
  {
    question: "Existe cobrança de comissão percentual sobre as vendas?",
    answer: "Não. Trabalhamos com assinaturas de software com valores transparentes e previsíveis. Não cobramos comissões sobre o faturamento do seu estabelecimento."
  },
  {
    question: "Posso conversar com a equipe antes de contratar?",
    answer: "Sim. Você pode agendar uma conversa para apresentar a sua operação e entender se o nosso formato faz sentido para o seu negócio, sem compromisso."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vancod Tecnologia",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Empresa de tecnologia que desenvolve software sob medida e soluções para empresas de adegas, restaurantes, eventos e outros segmentos."
};

export default function Home() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden font-sans">
      <SEO
        title="Sistemas para adegas, restaurantes e eventos"
        description="Balcão Pro para adegas, Vancod Restaurantes para salão e cozinha, Olhare para eventos. Software sob medida com implantação acompanhada."
        schema={schema}
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-[#001a44] text-white">
        {/* A arte já traz o fundo azul à esquerda; ela encosta na direita e o texto fica por cima. */}
        <img
          src="/assets/hero-bg.jpg"
          alt="Adega, restaurante e show: os segmentos atendidos pela Vancod"
          className="absolute inset-y-0 right-0 hidden h-full w-[58%] object-cover object-right lg:block [mask-image:linear-gradient(to_right,transparent,black_18%)]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-xl">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.03] text-white"
              >
                Sistemas prontos e sob medida para{' '}
                <span className="text-blue-400">adegas, restaurantes e eventos.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed"
              >
                Desenvolvemos e implantamos sistemas para controle, gestão e operação do seu negócio, com suporte próximo e foco em resultado.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-9 flex flex-col sm:flex-row items-start gap-3"
              >
                <Link
                  to="/contato"
                  className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <span>Agendar demonstração</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#solucoes"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/25 text-white font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Conheça nossas soluções
                </a>
              </motion.div>

              <p className="mt-5 text-sm text-slate-300">
                Assinatura mensal, sem comissão sobre o seu faturamento.
              </p>

              <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6">
                {trustItems.map((t) => (
                  <li key={t.label} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <img src={t.icon} alt="" className="h-9 w-9 shrink-0" />
                    <span>{t.label}</span>
                  </li>
                ))}
              </ul>

              {/* No celular a arte não cabe ao lado do texto: entra um recorte abaixo. */}
              <img
                src="/assets/hero-bg.jpg"
                alt=""
                className="mt-10 h-48 w-full rounded-2xl object-cover object-[78%_center] lg:hidden"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRODUTOS */}
      <section id="solucoes" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-slate-950">
                Produtos para o seu segmento
              </h2>
            </div>
            <p className="max-w-sm text-sm text-slate-600">
              Soluções práticas, estáveis e adaptadas à rotina da sua operação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {productCards.map((c) => (
              <a
                key={c.to}
                href={c.to}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-colors hover:border-slate-300 hover:shadow-md"
              >
                <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.accent}`} />
                <img src={c.img} alt="" className="h-20 w-28 shrink-0 rounded-xl object-cover" loading="lazy" />
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-slate-950">{c.name}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-600">{c.desc}</span>
                </span>
                <ArrowRight className="ml-auto w-4 h-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMO TRABALHAMOS: foto + 4 passos */}
      <section id="como-trabalhamos" className="scroll-mt-20 relative overflow-hidden bg-slate-50 border-y border-slate-200">
        <img
          src="/assets/foto-equipe.jpg"
          alt="Ilustração: consultor mostra o sistema no notebook para dois clientes"
          className="absolute inset-y-0 left-0 hidden h-full w-[26%] object-cover xl:block"
          loading="lazy"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 xl:pl-[24%] grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-slate-950">
              Do processo à operação, com você em cada etapa.
            </h2>
          </div>
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <li key={step} className="flex flex-col gap-2 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <span className="font-display text-3xl font-bold leading-none text-blue-600">{i + 1}</span>
                <span className="text-sm font-bold leading-snug text-slate-950">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. PROVA: a tela do Balcão Pro */}
      <section className="hero-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-white">
              O caixa da adega não para quando a internet cai.
            </h2>
            <ul className="mt-6 space-y-3">
              {balcaoFacts.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-sky-400" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://adegas.vancod.com.br"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              Ver o Balcão Pro
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <img
            src="/assets/adega-pdv-recorte.jpg"
            alt="Tela de venda do Balcão Pro com o aviso de funcionamento offline e a lista de itens"
            className="w-full rounded-2xl border border-sky-400/40 shadow-[0_20px_60px_-20px_rgba(56,189,248,0.5)]"
            loading="lazy"
          />
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <WhyVancod />

      {/* 5. PRIMEIROS PARCEIROS */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-slate-950 mb-4">
            Ainda são poucos clientes. Cada implantação é feita por quem escreve o código.
          </h2>
          <p className="text-base text-slate-600 mb-8 leading-relaxed">
            A Vancod está começando, e preferimos dizer isso a inventar logos. Quem entra agora participa da implantação junto com a equipe: o fluxo é ajustado ao seu balcão, à sua cozinha ou ao seu evento.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-colors"
          >
            <span>Agendar demonstração</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. CONFIANÇA & TRANSPARÊNCIA */}
      <TransparencySection />

      {/* 7. FAQ */}
      <section className="py-24 md:py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] text-white">
              Perguntas frequentes
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Dúvidas sobre a empresa, a implantação e o suporte.
            </p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 md:py-32 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02] mb-6 text-white">
            Quer conversar sobre a operação da sua empresa?
          </h2>
          <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Conte o que a sua equipe enfrenta hoje e veja se podemos ajudar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contato"
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Agendar demonstração</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/suporte"
              className="w-full sm:w-auto px-7 py-3.5 text-slate-200 hover:text-white font-semibold text-sm transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-xl"
            >
              Central de suporte
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">Conversa sem compromisso, antes de qualquer contratação.</p>
        </div>
      </section>

    </div>
  );
}
