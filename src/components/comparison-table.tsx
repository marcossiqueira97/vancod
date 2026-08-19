import { useState } from 'react';
import { Check, X, Zap, UtensilsCrossed, Camera, Layers } from 'lucide-react';
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
    { id: 'todos', name: 'Visão Geral', icon: <Layers className="w-4 h-4" /> },
  ];

  const comparisonData: Record<string, ComparisonRow[]> = {
    adegas: [
      {
        category: 'Estabilidade no Caixa',
        feature: 'Operação de vendas quando a internet oscila',
        traditional: 'Sistemas que dependem 100% de conexão em nuvem travam a passagem de compras.',
        vancod: 'Operação Offline-First: o PDV roda no computador e continua registrando vendas e imprimindo comprovantes.',
      },
      {
        category: 'Controle de Fiado',
        feature: 'Acompanhamento de compras a prazo',
        traditional: 'Cadernos de papel e anotações manuais que geram esquecimentos e divergências.',
        vancod: 'Registro digital com limites de crédito por cliente e emissão de extrato para envio no WhatsApp.',
      },
      {
        category: 'Estoque de Bebidas',
        feature: 'Baixa de combos (garrafa + energéticos + gelo)',
        traditional: 'Necessidade de deduzir manualmente cada insumo individual do estoque.',
        vancod: 'Dedução automática de todos os insumos vinculados ao combo no momento da venda.',
      },
      {
        category: 'Licenciamento',
        feature: 'Custos por terminal e previsibilidade',
        traditional: 'Cobranças adicionais por cada máquina ou ponto de venda instalado.',
        vancod: 'Assinatura com valores claros e suporte técnico incluído.',
      },
    ],
    restaurantes: [
      {
        category: 'Comunicação com a Cozinha',
        feature: 'Envio e visualização de pedidos de mesas',
        traditional: 'Tickets de papel que podem se perder, manchar ou gerar atrasos na entrega.',
        vancod: 'Telas KDS divididas por praça de preparo (Cozinha, Bar, Forno) com indicação de tempo.',
      },
      {
        category: 'Centralização de Delivery',
        feature: 'Recepção de pedidos de canais digitais',
        traditional: 'Exigência de redigitar pedidos recebidos em tablets manualmente no caixa.',
        vancod: 'Integração de pedidos diretamente na fila de produção da cozinha sem retrabalho.',
      },
      {
        category: 'Divisão de Contas',
        feature: 'Fechamento de mesas com múltiplos pagantes',
        traditional: 'Cálculos manuais na calculadora que geram demora no fechamento da conta.',
        vancod: 'Divisão automatizada por número de pessoas ou itens consumidos na comanda.',
      },
      {
        category: 'Modelo Comercial',
        feature: 'Taxas sobre o faturamento do restaurante',
        traditional: 'Cobrança de percentual sobre cada pedido ou venda realizada.',
        vancod: 'Sem comissão percentual sobre suas vendas. Seu faturamento permanece integralmente com você.',
      },
    ],
    olhare: [
      {
        category: 'Acesso dos Convidados',
        feature: 'Participação no evento',
        traditional: 'Exigência de baixar e instalar aplicativos pesados nas lojas de apps.',
        vancod: 'Acesso instantâneo pelo navegador do celular através de leitura de QR Code na mesa.',
      },
      {
        category: 'Transmissão na TV',
        feature: 'Mural de fotos durante a festa',
        traditional: 'Processo manual de cópia de arquivos ou exibição sem moderação prévia.',
        vancod: 'Painel de moderação para aprovação das fotos antes da exibição ao vivo na Smart TV.',
      },
      {
        category: 'Armazenamento',
        feature: 'Acesso às fotos após o evento',
        traditional: 'Links temporários de transferência de arquivos que expiram em poucos dias.',
        vancod: 'Galeria completa com opção de download de todos os arquivos em alta qualidade.',
      },
    ],
    todos: [
      {
        category: 'Arquitetura',
        feature: 'Modelo de funcionamento dos sistemas',
        traditional: 'Sistemas genéricos que tentam atender todos os mercados sem foco.',
        vancod: 'Produtos especializados desenvolvidos para as regras específicas de cada segmento.',
      },
      {
        category: 'Transparência Comercial',
        feature: 'Modelo de contratação e suporte',
        traditional: 'Contratos com multas abusivas e suporte por robôs com filas de espera.',
        vancod: 'Planos transparentes, suporte humanizado e demonstração prévia sem compromisso.',
      },
    ],
  };

  return (
    <section className="py-24 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Comparativo Prático</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Como a Vancod se compara aos sistemas tradicionais.
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Selecione seu segmento abaixo para conferir as diferenças práticas de operação:
          </p>
        </div>

        {/* Segment Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {segments.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSegment(s.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeSegment === s.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {s.icon}
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px] bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-bold">
                <th className="py-4 px-5 text-slate-700 w-1/3 bg-slate-100/80">Recurso Operacional</th>
                <th className="py-4 px-5 text-slate-600 w-1/3 bg-slate-50">Sistemas Tradicionais</th>
                <th className="py-4 px-5 text-blue-900 w-1/3 bg-blue-50/80 border-x border-blue-100 font-bold">
                  Solução Vancod
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              <AnimatePresence mode="wait">
                {comparisonData[activeSegment]?.map((row, idx) => (
                  <motion.tr
                    key={`${activeSegment}-${idx}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-5 font-semibold text-slate-900">
                      <span className="block text-[10px] uppercase text-blue-600 font-bold mb-0.5">{row.category}</span>
                      <span className="text-slate-800 leading-snug">{row.feature}</span>
                    </td>
                    <td className="py-4 px-5 text-slate-600 bg-slate-50/40">
                      <div className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 bg-blue-50/30 border-x border-blue-100 text-slate-800 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.vancod}</span>
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
