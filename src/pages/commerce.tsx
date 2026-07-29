import { ProductLayout } from '../components/product-layout';
import { ShoppingBag, CreditCard, LayoutTemplate, Globe, Package, TrendingUp } from 'lucide-react';

export default function Commerce() {
  return (
    <ProductLayout
      name="Vancod Commerce"
      subdomain="commerce.vancod.com.br"
      primaryColor="text-slate-300"
      tagline="Sua loja virtual de alta performance."
      description="Plataforma de e-commerce headless construída para conversão. Páginas ultra-rápidas, checkout otimizado e gestão de pedidos centralizada."
      screenshots={['/assets/commerce-dashboard.png']}
      features={[
        {
          icon: <ShoppingBag />,
          title: "Catálogo Ilimitado",
          desc: "Gestão de produtos com variações complexas, atributos customizados, kits e coleções dinâmicas."
        },
        {
          icon: <LayoutTemplate />,
          title: "Vitrines Customizáveis",
          desc: "Construtor de páginas visual. Crie landing pages para campanhas sem precisar de código."
        },
        {
          icon: <CreditCard />,
          title: "Checkout Transparente",
          desc: "Processo de pagamento otimizado em uma página para máxima conversão, aceitando PIX, Cartões e Boleto."
        },
        {
          icon: <Globe />,
          title: "SEO Técnico Avançado",
          desc: "Arquitetura otimizada para o Google. Core Web Vitals perfeitos, sitemaps dinâmicos e rich snippets."
        },
        {
          icon: <Package />,
          title: "Gestão de Logística",
          desc: "Integração com Correios, transportadoras, cálculo de frete no carrinho e rastreamento de pacotes."
        },
        {
          icon: <TrendingUp />,
          title: "Recuperação de Vendas",
          desc: "Carrinhos abandonados automáticos via e-mail e WhatsApp, cupons de desconto e cross-sell."
        }
      ]}
      faqItems={[
        {
          question: "Posso usar meu próprio domínio?",
          answer: "Sim, você pode conectar e configurar facilmente o seu domínio próprio (ex: suaempresa.com.br) na sua loja virtual."
        },
        {
          question: "Quais gateways de pagamento são integrados?",
          answer: "Temos integração nativa com os principais gateways do mercado, como Stripe, Mercado Pago, Pagar.me e PagSeguro, todos com checkout transparente."
        },
        {
          question: "A plataforma cobra comissão sobre as vendas?",
          answer: "Não. A Vancod não cobra nenhuma taxa de transação ou comissão sobre suas vendas. Você só paga as taxas normais do gateway de pagamento escolhido."
        },
        {
          question: "Como funciona a personalização do layout da loja?",
          answer: "Oferecemos um editor visual arrastar-e-soltar completo, além de diversos templates premium que você pode personalizar para deixar com a cara da sua marca."
        }
      ]}
    />
  );
}
