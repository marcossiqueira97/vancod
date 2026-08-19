import { useState } from 'react';
import { Calculator, TrendingUp, Clock, ShieldAlert, Sparkles, ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function RoiCalculator() {
  const [segment, setSegment] = useState<'adega' | 'restaurante' | 'eventos'>('adega');
  const [dailyOrders, setDailyOrders] = useState<number>(120);
  const [avgTicket, setAvgTicket] = useState<number>(45);

  // Calculations based on segment
  const monthlyRevenue = dailyOrders * avgTicket * 30;

  // Estimates
  const hoursSavedPerWeek = segment === 'adega' ? Math.round(dailyOrders * 0.08) : segment === 'restaurante' ? Math.round(dailyOrders * 0.12) : 15;
  const hoursSavedPerMonth = hoursSavedPerWeek * 4;
  
  // Traditional legacy systems often take 2-3% in fees or businesses lose 2-4% in paper mistakes/fiado losses
  const estimatedFiadoOrLossPrevented = segment === 'adega'
    ? Math.round(monthlyRevenue * 0.025) // Fiado uncollected & combo inventory mismatch
    : segment === 'restaurante'
    ? Math.round(monthlyRevenue * 0.035) // Kitchen order errors, iFood misplacements & manual splits
    : Math.round(dailyOrders * 35); // Event photo sales / tips

  const competitorCommissionSaved = Math.round(monthlyRevenue * 0.02); // 2% marketplace/system fee avoided

  const totalMonthlyGain = estimatedFiadoOrLossPrevented + competitorCommissionSaved;

  return (
    <section className="py-28 relative z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold mb-4 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5" /> Simulador de Retorno & Economia
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Calcule o impacto da <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Vancod no seu caixa.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light">
            Descubra quanto tempo e dinheiro você recupera ao trocar sistemas lentos e cadernos pelo ecossistema Vancod.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-2xl grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Segment Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Escolha o seu Segmento:
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
                        setDailyOrders(140);
                        setAvgTicket(38);
                      } else if (s.id === 'restaurante') {
                        setDailyOrders(95);
                        setAvgTicket(68);
                      } else {
                        setDailyOrders(350);
                        setAvgTicket(15);
                      }
                    }}
                    className={`py-3 px-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                      segment === s.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-102 border border-blue-400'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Daily Orders */}
            <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">
                  {segment === 'eventos' ? 'Convidados / Fotos por Evento' : 'Pedidos / Vendas por Dia:'}
                </span>
                <span className="font-mono text-xl font-bold text-cyan-400">
                  {dailyOrders} {segment === 'eventos' ? 'pessoas' : 'vendas/dia'}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max={segment === 'eventos' ? 1000 : 500}
                step="5"
                value={dailyOrders}
                onChange={(e) => setDailyOrders(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>20 {segment === 'eventos' ? 'convidados' : 'pedidos'}</span>
                <span>{segment === 'eventos' ? '1.000 convidados' : '500 pedidos'}</span>
              </div>
            </div>

            {/* Slider 2: Average Ticket */}
            <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">
                  {segment === 'eventos' ? 'Ticket Médio de Contratação:' : 'Ticket Médio por Venda (R$):'}
                </span>
                <span className="font-mono text-xl font-bold text-emerald-400">
                  R$ {avgTicket.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={segment === 'eventos' ? 5 : 10}
                max={segment === 'eventos' ? 100 : 250}
                step="1"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>R$ {segment === 'eventos' ? '5' : '10'}</span>
                <span>R$ {segment === 'eventos' ? '100' : '250'}</span>
              </div>
            </div>

            {/* Micro Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero comissão por pedido</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Suporte humanizado no WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Dynamic Results Card (Right 6 Cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-blue-900/40 via-slate-800/60 to-indigo-900/40 border border-blue-500/30 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Estimativa Mensal de Ganhos
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                ROI Positivo no 1º Mês
              </span>
            </div>

            {/* Big Highlight Number */}
            <div className="mb-8">
              <div className="text-sm text-slate-300 font-medium mb-1">Economia + Receita Recuperada Estimada:</div>
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-mono">
                + R$ {totalMonthlyGain.toLocaleString('pt-BR')}<span className="text-lg text-slate-300 font-sans font-normal">/mês</span>
              </div>
              <div className="text-xs text-slate-400 mt-2">
                *Cálculo baseado na eliminação de perdas de fiado, erros manuais de comanda e zero cobrança por porcentagem de venda.
              </div>
            </div>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold mb-1">
                  <Clock className="w-4 h-4" /> Tempo Economizado
                </div>
                <div className="text-2xl font-extrabold text-white font-mono">
                  ~{hoursSavedPerMonth}h<span className="text-xs text-slate-400 font-sans font-normal">/mês</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Fechamento de caixa & pedidos sem burocracia</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                  <TrendingUp className="w-4 h-4" /> Giro Operacional
                </div>
                <div className="text-2xl font-extrabold text-white font-mono">
                  +35%<span className="text-xs text-slate-400 font-sans font-normal"> veloz</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Atendimento imediato nos horários de pico</p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="space-y-3">
              <Link
                to="/contato"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-extrabold text-base shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Quero Destravar Essa Economia</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-center text-xs text-slate-400">
                Sem fidelidade abusiva • Demonstração guiada gratuita
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
