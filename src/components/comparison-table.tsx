import { useState } from 'react';
import { Check, X, Sparkles, Zap, UtensilsCrossed, Camera, ShoppingBag, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ComparisonRow {
  category: string;
  feature: string;
  traditional: string;
  vancod: string;
}

export function ComparisonTable() {
  const [activeSegment, setActiveSegment] = useState<string>('adegas');

  const segments = [
    { id: 'adegas', name: 'Balcão Pro Adegas', icon: <Zap className="w-4 h-4" /> },
    { id: 'restaurantes', name: 'Vancod Restaurantes', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { id: 'olhare', name: 'Olhare Fotos & Eventos', icon: <Camera className="w-4 h-4" /> },
    { id: 'commerce', name: 'Vancod Commerce', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'todos', name: 'Visão Geral', icon: <Layers className="w-4 h-4" /> },
  ];

  const comparisonData: Record<string, ComparisonRow[]> = {
    adegas: [
      {
        category: 'Estabilidade do Caixa',
        feature: 'Operação de Balcão e Vendas em Quedas de Internet',
        traditional: 'O sistema trava na hora de fechar a venda no sábado à noite, gerando filas gigantescas no caixa.',
        vancod: 'Software Desktop 100% Offline em Rust + SQLite. Fecha vendas em 0ms mesmo se o cabo de internet for cortado.',
      },
      {
        category: 'Controle de Fiado',
        feature: 'Gestão de Caderneta de Fiado & Cobrança Automática',
        traditional: 'Cadernos de papel, planilhas perdidas e cobranças constrangedoras que causam calotes.',
        vancod: 'Controle digital de fiado com emissão de fatura profissional e envio automático pelo WhatsApp.',
      },
      {
        category: 'Controle de Estoque de Bebidas',
        feature: 'Baixa de Estoque em Combos & Vasilhames Retornáveis',
        traditional: 'Baixa manual que gera erros de contagem em geladeiras e estoques de fardos de cerveja.',
        vancod: 'Desmembramento automático de combos (Garrafa + Energéticos) e controle rigoroso de vasilhames.',
      },
      {
        category: 'Licenciamento & Preço',
        feature: 'Cobrança por Máquina / Terminal de Caixa',
        traditional: 'Cobram taxas mensais extras por cada computador ou máquina de caixa adicional.',
        vancod: 'Preço fixo e transparente. Instale nos terminais da sua distribuidora sem custo por máquina extra.',
      },
    ],
    restaurantes: [
      {
        category: 'Comunicação com a Cozinha',
        feature: 'Envio de Pedidos de Comanda para a Cozinha',
        traditional: 'Papéis impressos engordurados, impressoras que travam e garçons correndo de um lado para o outro.',
        vancod: 'Telas KDS Inteligentes divididas por setor de preparo (Bar, Chapa, Forno) atualizadas instantaneamente.',
      },
      {
        category: 'Integração Delivery',
        feature: 'Sincronização com o iFood & Pedidos de Delivery',
        traditional: 'Exige ter um tablet separado para aceitar iFood e reescrever o pedido manualmente no caixa.',
        vancod: 'Integração Oficial direta no PDV. Aceite e despache pedidos do iFood automaticamente sem digitação manual.',
      },
      {
        category: 'Gestão de Mesas e Comandas',
        feature: 'Fechamento e Divisão de Conta entre Amigos',
        traditional: 'Cálculos manuais na calculadora que demoram e causam confusão no atendimento presencial.',
        vancod: 'Divisão automática de conta por pessoa ou consumo individual na comanda eletrônica.',
      },
      {
        category: 'Comissão por Pedido',
        feature: 'Taxa Percentual sobre Faturamento das Vendas',
        traditional: 'Sistemas que cobram 1% a 3% sobre cada pedido faturado no seu restaurante.',
        vancod: 'Zero comissão por pedido. Seu faturamento é 100% seu.',
      },
    ],
    olhare: [
      {
        category: 'Acesso de Convidados',
        feature: 'Experiência de Uso em Casamentos e Eventos',
        traditional: 'O convidado precisa baixar um aplicativo pesado na Play Store ou App Store e se cadastrar.',
        vancod: 'Zero Instalação: o convidado escaneia o QR Code na mesa e usa direto no navegador do celular.',
      },
      {
        category: 'Transmissão ao Vivo na TV',
        feature: 'Mural de Fotos ao Vivo no Telão da Festa',
        traditional: 'Processo manual de cópia de pendrive ou fotos desorganizadas sem controle de exibição.',
        vancod: 'Painel com Moderação ao Vivo em Tempo Real. Transmita fotos selecionadas diretamente na TV em HD.',
      },
      {
        category: 'Livro de Memórias',
        feature: 'Guarda das Fotos após o Fim do Evento',
        traditional: 'Links expirados no WeTransfer ou arquivos espalhados em grupos do WhatsApp.',
        vancod: 'Galeria digital permanente com download fácil para todos os convidados e organizadores.',
      },
    ],
    commerce: [
      {
        category: 'Sincronização de Estoque',
        feature: 'Integração do Estoque Físico com a Loja Virtual',
        traditional: 'Sync demorado que vende produtos na internet que já foram comprados no balcão da loja.',
        vancod: 'Sincronização bidirecional em tempo real (0ms). Baixa automática no e-commerce ao vender na loja física.',
      },
      {
        category: 'Velocidade da Loja Virtual',
        feature: 'Tempo de Carregamento & Checkout',
        traditional: 'Lojas virtuais lentas em WordPress/WooCommerce que travam no celular e perdem vendas.',
        vancod: 'Arquitetura E-Commerce Headless ultraveloz com checkout de alta conversão.',
      },
    ],
    todos: [
      {
        category: 'Engenharia de Software',
        feature: 'Arquitetura do Ecossistema',
        traditional: 'Sistemas legados em nuvem que travam quando a internet oscila.',
        vancod: 'Arquitetura híbrida (Rust Desktop + Edge Cloud Serverless).',
      },
      {
        category: 'Transparência de Custos',
        feature: 'Modelo de Cobrança',
        traditional: 'Mensalidades abusivas, taxas por terminal e comissões por venda.',
        vancod: 'Planos claros, previsíveis e sem custos escondidos.',
      },
    ],
  };

  return (
    <section className="py-28 relative z-10 overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Comparativo por Segmento
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Por que escolher a <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Vancod?</span>
          </h2>
          <p className="text-xl text-slate-600 font-normal">
            Selecione o seu segmento abaixo para ver como superamos os sistemas tradicionais na sua operação:
          </p>
        </div>

        {/* Segment Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {segments.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSegment(s.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                activeSegment === s.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105 ring-2 ring-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {s.icon}
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px] bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <thead>
              <tr className="border-b border-slate-200 text-sm font-bold">
                <th className="py-5 px-6 text-slate-700 w-1/3 bg-slate-100/90">Diferencial Operacional</th>
                <th className="py-5 px-6 text-slate-600 w-1/3 bg-slate-100/50">Sistemas Tradicionais do Mercado</th>
                <th className="py-5 px-6 text-slate-900 w-1/3 bg-blue-50/90 border-x border-blue-200">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-extrabold text-xs">V</div>
                    <span className="font-extrabold text-base text-blue-900">Solução Vancod</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              <AnimatePresence mode="wait">
                {comparisonData[activeSegment]?.map((row, idx) => (
                  <motion.tr
                    key={`${activeSegment}-${idx}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-slate-900">
                      <span className="block text-[10px] uppercase tracking-wider text-blue-600 font-extrabold mb-1">{row.category}</span>
                      <span className="text-base text-slate-900 leading-snug">{row.feature}</span>
                    </td>
                    <td className="py-5 px-6 bg-slate-50/50 text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-100 border border-red-300 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-relaxed text-slate-600">{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 bg-blue-50/40 border-x border-blue-200 text-slate-900 font-semibold">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-relaxed text-slate-900">{row.vancod}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
