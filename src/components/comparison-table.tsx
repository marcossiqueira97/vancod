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
    <section className="py-28 relative z-10 overflow-hidden bg-black border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-mono font-bold mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            <Sparkles className="w-3.5 h-3.5" /> COMPARATIVO DE ENGENHARIA
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-serif">
            Por que migrar para a <span className="bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">Vancod?</span>
          </h2>
          <p className="text-xl text-slate-400 font-normal">
            Veja a diferença entre o ecossistema Vancod e os sistemas tradicionais obsoletos do mercado.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px] bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-bold uppercase tracking-wider">
                <th className="py-6 px-6 text-slate-300 w-1/3 bg-slate-900">Recurso / Diferencial</th>
                <th className="py-6 px-6 text-slate-500 w-1/3 bg-slate-950">Sistemas Tradicionais</th>
                <th className="py-6 px-6 text-white w-1/3 bg-red-950/40 border-x border-red-500/30">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-red-600 text-white flex items-center justify-center font-extrabold text-xs">V</div>
                    <span className="font-extrabold text-base text-red-400 font-serif">Vancod OS</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-5 px-6 font-bold text-white">
                    {row.feature}
                  </td>
                  <td className="py-5 px-6 bg-slate-950/80 text-slate-400 font-sans">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-red-950 border border-red-700 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        <X className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 bg-red-950/20 border-x border-red-500/30 text-slate-100 font-semibold font-sans">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-600 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed text-slate-100">{row.vancod}</span>
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
