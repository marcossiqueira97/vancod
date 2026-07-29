import { Check, X, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Caixa 100% Offline (Balcão Pro Adegas)",
      traditional: "Trava o caixa e impede vendas em quedas de sinal",
      traditionalOk: false,
      vancod: "PDV Desktop Nativo em Rust + SQLite (funciona 100% offline)",
      vancodOk: true,
    },
    {
      feature: "Acesso de Clientes & Convidados",
      traditional: "Exige baixar aplicativos pesados na Play/App Store",
      traditionalOk: false,
      vancod: "Zero Instalação: acesso por QR Code direto no navegador",
      vancodOk: true,
    },
    {
      feature: "Sincronização Estoque Físico + Loja Virtual",
      traditional: "Lenta, gerando vendas duplicadas e furos de estoque",
      traditionalOk: false,
      vancod: "Sincronização instantânea e automática em tempo real",
      vancodOk: true,
    },
    {
      feature: "Gestão de Cozinha & iFood (Restaurantes)",
      traditional: "Múltiplos tablets, impressoras presas e erros de pedido",
      traditionalOk: false,
      vancod: "KDS em telas inteligentes + integração nativa oficial iFood",
      vancodOk: true,
    },
    {
      feature: "Preço & Custos Ocultos",
      traditional: "Cobranças extras por terminal, por usuário e comissões",
      traditionalOk: false,
      vancod: "Preço claro, sem comissão por vendas e sem surpresas",
      vancodOk: true,
    },
  ];

  return (
    <section className="py-28 relative z-10 overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Comparativo de Engenharia
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Por que migrar para a <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Vancod?</span>
          </h2>
          <p className="text-xl text-slate-600 font-normal">
            Veja a diferença entre o ecossistema Vancod e os sistemas tradicionais obsoletos do mercado.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px] bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <thead>
              <tr className="border-b border-slate-200 text-sm font-bold">
                <th className="py-6 px-6 text-slate-700 w-1/3 bg-slate-100">Recurso / Diferencial</th>
                <th className="py-6 px-6 text-slate-600 w-1/3 bg-slate-100/80">Sistemas Tradicionais</th>
                <th className="py-6 px-6 text-slate-900 w-1/3 bg-blue-50 border-x border-blue-200">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-extrabold text-xs">V</div>
                    <span className="font-extrabold text-base text-blue-900">Vancod OS</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-5 px-6 font-bold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="py-5 px-6 bg-slate-50/50 text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-red-100 border border-red-300 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        <X className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{row.traditional}</span>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
