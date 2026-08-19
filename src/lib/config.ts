/**
 * Configurações Institucionais e Comerciais da Vancod Tecnologia
 * Centralização de contatos, dados da empresa e estruturas para expansão futura.
 */

export interface ClientItem {
  name: string;
  logo?: string;
  segment: string;
  url?: string;
  isAuthorized?: boolean;
}

export interface CaseItem {
  company: string;
  segment: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial?: string;
  image?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  segment: string;
  testimonial: string;
  photo?: string;
}

export const SITE_CONFIG = {
  name: 'Vancod Tecnologia',
  shortName: 'Vancod',
  tagline: 'Soluções de software especializadas para a operação do seu negócio',
  description: 'Desenvolvemos sistemas focados em resolver problemas práticos de adegas, restaurantes e eventos com agilidade e confiabilidade.',
  url: 'https://vancod.com.br',
  
  // Informações Institucionais da Empresa
  company: {
    legalName: '', // Razão Social oficial quando disponível
    cnpj: '', // CNPJ oficial quando disponível
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
  },

  // Contatos comerciais e institucionais
  contact: {
    email: 'contato@vancod.com.br',
    suporteEmail: 'suporte@vancod.com.br',
    // Inserir número oficial quando definido (ex: '5511999999999')
    whatsappNumber: '',
  },

  // Estruturas prontas para receber dados reais quando autorizados
  clients: [] as ClientItem[],
  cases: [] as CaseItem[],
  testimonials: [] as TestimonialItem[],

  // Produtos Oficiais do Ecossistema
  products: [
    {
      id: 'adega',
      name: 'Balcão Pro Adegas',
      shortName: 'Balcão Pro',
      path: '/adegas',
      subdomain: 'adegas.vancod.com.br',
      tagline: 'PDV ágil, controle de fiado e estoque de bebidas',
      summary: 'Sistema para adegas e distribuidoras com operação offline-first e controle prático de fiado.',
    },
    {
      id: 'restaurantes',
      name: 'Vancod Restaurantes',
      shortName: 'Restaurantes',
      path: '/restaurantes',
      subdomain: 'restaurantes.vancod.com.br',
      tagline: 'Comanda, KDS de cozinha e integração delivery',
      summary: 'Gestão de salão, mesas, telas KDS para cozinha e integração com pedidos de delivery.',
    },
    {
      id: 'olhare',
      name: 'Olhare Fotos & Eventos',
      shortName: 'Olhare',
      path: '/olhare',
      subdomain: 'olhare.vancod.com.br',
      tagline: 'Mural de fotos e recados ao vivo via QR Code',
      summary: 'Plataforma web para transmissão ao vivo de fotos dos convidados em telões e TVs de eventos.',
    }
  ]
};

/**
 * Gera link do WhatsApp com mensagem pré-formatada ou redireciona para contato
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = SITE_CONFIG.contact.whatsappNumber;
  const msg = encodeURIComponent(
    customMessage || 'Olá! Gostaria de conhecer as soluções da Vancod e agendar uma demonstração.'
  );

  if (!number) {
    return '/contato';
  }

  return `https://wa.me/${number}?text=${msg}`;
}
