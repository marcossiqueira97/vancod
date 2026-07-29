import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';

const posts = [
  {
    slug: 'como-aumentar-vendas-adega-2024',
    title: 'Como aumentar as vendas da sua distribuidora de bebidas em 2024',
    excerpt: 'Descubra as estratégias de tecnologia e gestão que estão fazendo as maiores adegas do Brasil dobrarem seu faturamento.',
    category: 'Vancod Adega',
    date: '12 Fev 2024',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1574626003260-2521c7be1dfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    slug: 'pdv-nuvem-vs-local',
    title: 'PDV em Nuvem vs PDV Local: Qual a melhor opção para seu restaurante?',
    excerpt: 'Uma análise profunda sobre custos, segurança e desempenho entre sistemas modernos e legados.',
    category: 'Tecnologia',
    date: '08 Fev 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'e-commerce-headless-vantagens',
    title: 'O que é E-commerce Headless e por que grandes marcas estão migrando?',
    excerpt: 'Entenda como a arquitetura desacoplada pode gerar carregamentos ultrarrápidos e taxas de conversão recordes.',
    category: 'Vancod Commerce',
    date: '02 Fev 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'gestao-filas-eventos',
    title: 'Acabe com as filas no bar do seu evento usando tecnologia Cashless',
    excerpt: 'O guia definitivo para implementar pagamentos por aproximação e RFID no seu próximo festival.',
    category: 'Vancod Eventos',
    date: '28 Jan 2024',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'lgpd-para-varejo',
    title: 'LGPD no Varejo: Como adequar sua base de clientes sem perder vendas',
    excerpt: 'Passo a passo prático para coletar e armazenar dados de forma segura e dentro da lei.',
    category: 'Gestão',
    date: '15 Jan 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Blog() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Vancod",
    "description": "Insights, tecnologia e estratégias para escalar seu negócio."
  };

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-20">
      <SEO 
        title="Blog e Insights" 
        description="Estratégias de vendas, gestão e as últimas novidades em tecnologia para escalar sua operação B2B."
        schema={schema}
        canonicalUrl="https://vancod.com.br/blog"
      />
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 mb-8 backdrop-blur-md">
            Conteúdo Premium
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Insights para <span className="text-slate-400">escalar.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Estratégias de engenharia, negócios e design utilizadas pelos líderes do mercado.
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to={`/blog/${featuredPost.slug}`} className="group block relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-white/20 transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-[#0A0A0A]/80 to-transparent z-10" />
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-[60vh] object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold backdrop-blur-md">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight group-hover:text-slate-300 transition-colors duration-500">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed hidden md:block">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                    Ler artigo completo <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>
      )}

      {/* Grid Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Últimos Artigos</h3>
          <div className="hidden md:flex gap-4">
            {['Todos', 'Tecnologia', 'Gestão', 'E-commerce'].map((cat, i) => (
              <button key={i} className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${i === 0 ? 'bg-blue-600 text-white hover:bg-blue-500' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {regularPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full bg-slate-900 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                     <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
                       {post.category}
                     </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-slate-500 text-sm font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight leading-snug group-hover:text-slate-300 transition-colors duration-300">
                    {post.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed font-light mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-white font-semibold text-sm group-hover:text-slate-300 transition-colors">
                    Ler mais <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
             Carregar mais artigos
           </button>
        </div>
      </section>
    </div>
  );
}
