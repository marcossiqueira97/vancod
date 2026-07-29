import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { SEO } from '../components/seo';
import { useRef } from 'react';

// Dados simulados para demonstração
const getPostData = (slug: string) => ({
  slug,
  title: 'Como aumentar as vendas da sua distribuidora de bebidas em 2024',
  excerpt: 'Descubra as estratégias de tecnologia e gestão que estão fazendo as maiores adegas do Brasil dobrarem seu faturamento através de automação e dados.',
  content: `
    <h2>O cenário atual das distribuidoras</h2>
    <p>O mercado de bebidas mudou radicalmente nos últimos anos. A gestão baseada em cadernetas e sistemas lentos não suporta mais o nível de exigência dos consumidores e a velocidade das operações B2B e B2C. Para escalar, é preciso tecnologia de ponta.</p>
    
    <h3>1. Automação do Controle de Estoque</h3>
    <p>Uma das maiores perdas de faturamento ocorre na ruptura de estoque (quando falta produto) ou no excesso de capital parado. Sistemas modernos utilizam algoritmos de previsão de demanda para sugerir compras com base no histórico de vendas e sazonalidade.</p>
    <blockquote>"Empresas que adotam gestão preditiva de estoque reduzem custos em até 30% já no primeiro trimestre."</blockquote>
    
    <h3>2. E-commerce B2B e Vendas pelo WhatsApp</h3>
    <p>Seus clientes (bares, restaurantes e eventos) precisam fazer pedidos de forma rápida, a qualquer hora. Ter um portal B2B integrado ao seu ERP elimina erros de digitação de vendedores e agiliza a separação no galpão. Integrar isso a bots inteligentes no WhatsApp multiplica sua capacidade de atendimento.</p>
    
    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Gestão de estoque moderna" />
    
    <h3>3. Análise de Dados em Tempo Real</h3>
    <p>Você sabe exatamente qual é a margem de contribuição de cada cerveja neste exato momento? Sistemas baseados em nuvem oferecem dashboards que cruzam custos de aquisição, impostos e despesas logísticas em tempo real, permitindo ajustes de precificação dinâmicos.</p>
    
    <h2>Conclusão</h2>
    <p>O crescimento em 2024 não virá de trabalhar mais horas, mas de trabalhar de forma mais inteligente. O <strong>Vancod Adega</strong> foi construído exatamente para resolver esses gargalos, unificando PDV, financeiro e portal de vendas em uma plataforma brutalmente rápida.</p>
  `,
  category: 'Vancod Adega',
  date: '12 Fev 2024',
  readTime: '5 min',
  image: 'https://images.unsplash.com/photo-1574626003260-2521c7be1dfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  author: {
    name: 'Marcos Siqueira',
    role: 'Especialista em Produto',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcos'
  }
});

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostData(slug || '');
  
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vancod",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vancod.com.br/logo.png"
      }
    },
    "datePublished": "2024-02-12" // Fixo para demonstração
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        schema={schema}
        canonicalUrl={`https://vancod.com.br/blog/${post.slug}`}
        ogImage={post.image}
      />
      
      {/* Cinematic Article Header */}
      <div ref={headerRef} className="relative h-[80vh] flex items-end justify-center overflow-hidden">
         <motion.div style={{ y }} className="absolute inset-0 z-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-[#0A0A0A]/60 to-slate-950/30" />
         </motion.div>
         
         <div className="absolute top-24 left-4 sm:left-8 z-20">
            <Link to="/blog" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-sm font-medium text-white hover:bg-black/60 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
            </Link>
         </div>
         
         <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                 <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-bold backdrop-blur-md shadow-lg">
                   {post.category}
                 </span>
                 <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                   <Calendar className="w-4 h-4" />
                   {post.date}
                 </div>
                 <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                   <Clock className="w-4 h-4" />
                   {post.readTime}
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-slate-300 font-light leading-relaxed max-w-3xl border-l-2 border-blue-500 pl-6">
                {post.excerpt}
              </p>
            </motion.div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-16 relative">
         {/* Share & Author Sidebar */}
         <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
               <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Autor</h4>
                  <div className="flex items-center gap-4">
                     <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full bg-white/5 border border-white/10" />
                     <div>
                        <div className="font-bold text-white">{post.author.name}</div>
                        <div className="text-sm text-slate-400">{post.author.role}</div>
                     </div>
                  </div>
               </div>
               
               <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Compartilhar</h4>
                  <div className="flex gap-3">
                     <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-slate-300 transition-colors text-slate-400">
                        <Twitter className="w-4 h-4" />
                     </button>
                     <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-slate-300 transition-colors text-slate-400">
                        <Linkedin className="w-4 h-4" />
                     </button>
                     <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors text-slate-400">
                        <Facebook className="w-4 h-4" />
                     </button>
                     <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400">
                        <Share2 className="w-4 h-4" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
         
         {/* Article Content */}
         <div className="flex-1 max-w-3xl">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="prose prose-invert prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-slate-300 prose-img:rounded-3xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl font-light text-slate-300 leading-relaxed"
               dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-12 border-t border-white/10">
               <div className="bg-slate-900 border border-white/10 rounded-2xl p-10 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                     <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Pronto para acelerar?</h3>
                     <p className="text-slate-400 mb-8 max-w-xl mx-auto">Pare de perder dinheiro com gestão ineficiente. Veja na prática como nossos sistemas otimizam a sua operação.</p>
                     <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-500 rounded-full font-bold hover:scale-105 transition-transform ">
                        Agendar Demonstração <ArrowLeft className="w-4 h-4 rotate-180" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
