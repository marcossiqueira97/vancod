/**
 * Configurações Institucionais e Comerciais da Vancod Tecnologia
 * Centralização de contatos, links e informações da empresa.
 */

export const SITE_CONFIG = {
  name: 'Vancod Tecnologia',
  shortName: 'Vancod',
  tagline: 'Soluções de software especializadas para a operação do seu negócio',
  description: 'Desenvolvemos sistemas focados em resolver problemas reais de adegas, restaurantes e eventos com agilidade e confiabilidade.',
  url: 'https://vancod.com.br',
  
  // Contatos comerciais e institucionais
  contact: {
    email: 'contato@vancod.com.br',
    suporteEmail: 'suporte@vancod.com.br',
    // IMPORTANTE: Definir o número oficial no formato DDI + DDD + Número (ex: '5511999999999')
    whatsappNumber: '', // Preencher com o número oficial real
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    cnpj: '', // Preencher com o CNPJ oficial quando disponível
  },

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
} as const;

/**
 * Gera link do WhatsApp com mensagem pré-formatada
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = SITE_CONFIG.contact.whatsappNumber;
  const msg = encodeURIComponent(
    customMessage || 'Olá! Gostaria de conhecer as soluções da Vancod e agendar uma demonstração.'
  );

  if (!number) {
    // Se o número ainda não estiver configurado, redireciona para a página de contato
    return '/contato';
  }

  return `https://wa.me/${number}?text=${msg}`;
}
