import { useState } from 'react';
import { Calculator, Clock, ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RoiCalculator() {
  const [segment, setSegment] = useState<'adega' | 'restaurante' | 'eventos'>('adega');
  const [dailyOrders, setDailyOrders] = useState<number>(120);
  const [avgTicket, setAvgTicket] = useState<number>(45);

  const monthlyRevenue = dailyOrders * avgTicket * 30;

  // Practical illustrative operational time savings
  const hoursSavedPerWeek = segment === 'adega' ? Math.round(dailyOrders * 0.05) : segment === 'restaurante' ? Math.round(dailyOrders * 0.07) : 10;
  const hoursSavedPerMonth = Math.max(12, hoursSavedPerWeek * 4);
  
  // Estimated losses avoided (untracked fiado, miscalculated combos, kitchen paper errors)
  const estimatedLossPrevented = segment === 'adega'
    ? Math.round(monthlyRevenue * 0.015) // Redução de perdas de fiado desorganizado
    : segment === 'restaurante'
    ? Math.round(monthlyRevenue * 0.02) // Redução de erros de pedido de cozinha e redigitação
    : Math.round(dailyOrders * 12);

  return (
    <section className="py-24 relative z-10 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4 border border-slate-700">
            <Calculator className="w-3.5 h-3.5 text-blue-400" /> Simulação Operacional
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Simule o impacto na sua rotina.
          </h2>
          <p className="text-base md:text-lg text-slate-300">
            Estime o tempo de trabalho economizado e a redução de falhas operacionais com a automatização correta.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-xl grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                1. Selecione o segmento da sua empresa:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'adega', label: 'Balcão / Adega' },
                  { id: 'restaurante', label: 'Restaurante / Bar' },
                  { id: 'eventos', label: 'Eventos / Olhare' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSegment(s.id as any);
                      if (s.id === 'adega') {
                        setDailyOrders(120);
                        setAvgTicket(40);
                      } else if (s.id === 'restaurante') {
                        setDailyOrders(80);
                        setAvgTicket(65);
                      } else {
                        setDailyOrders(250);
                        setAvgTicket(15);
                      }
                    }}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                      segment === s.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Volume */}
            <div className="space-y-2.5 bg-slate-900 p-4 rounded-xl border border-slate-800/80">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">
                  {segment === 'eventos' ? 'Convidados estimados por evento:' : 'Média de atendimentos/pedidos por dia:'}
                </span>
                <span className="font-mono text-sm font-bold text-blue-400">
                  {dailyOrders} {segment === 'eventos' ? 'convidados' : 'pedidos'}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max={segment === 'eventos' ? 800 : 400}
                step="5"
                value={dailyOrders}
                onChange={(e) => setDailyOrders(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Slider 2: Ticket */}
            <div className="space-y-2.5 bg-slate-900 p-4 rounded-xl border border-slate-800/80">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">
                  {segment === 'eventos' ? 'Valor médio por convidado (R$):' : 'Ticket médio estimado por venda (R$):'}
                </span>
                <span className="font-mono text-sm font-bold text-emerald-400">
                  R$ {avgTicket.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={segment === 'eventos' ? 5 : 10}
                max={segment === 'eventos' ? 80 : 200}
                step="1"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Planos mensais transparentes sem taxas ocultas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Demonstração prática guiada antes de qualquer decisão</span>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 relative">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
              Estimativa de Ganho Operacional
            </span>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> Tempo Poupado
                </div>
                <div className="text-2xl font-bold text-white font-mono">
                  ~{hoursSavedPerMonth}h<span className="text-xs font-sans text-slate-500 font-normal">/mês</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Menos tempo gasto em fechamento e digitação manual</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                  <Info className="w-3.5 h-3.5 text-emerald-400" /> Prevenção de Falhas
                </div>
                <div className="text-2xl font-bold text-emerald-400 font-mono">
                  R$ {estimatedLossPrevented.toLocaleString('pt-BR')}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Redução de perdas com fiado esquecido ou erros de comanda</p>
              </div>
            </div>

            <div className="mb-6 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Nota informativa:</strong> Estimativa simulada baseada nas informações inseridas. Os resultados reais variam conforme o volume, modelo operacional e particularidades de cada empresa.
            </div>

            <Link
              to="/contato"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-sm transition-all"
            >
              <span>Agendar demonstração da solução</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
