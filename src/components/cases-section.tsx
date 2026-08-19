import { ArrowRight, FolderKanban } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, CaseItem } from '../lib/config';

export function CasesSection() {
  const rawCases = SITE_CONFIG.cases || [];
  // Safeguard: only render cases that have at least company and solution
  const cases = rawCases.filter((c): c is CaseItem => Boolean(c && c.company && c.company.trim() && c.solution));

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Casos de Uso</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Resultados na prática
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Veja como a tecnologia pode simplificar processos, reduzir retrabalho e organizar a operação.
          </p>
        </div>

        {cases.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-900">{item.company}</span>
                    {item.segment && (
                      <span className="text-[11px] text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {item.segment}
                      </span>
                    )}
                  </div>
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={`Estudo de caso da empresa ${item.company}`} 
                      className="rounded-xl mb-4 w-full h-40 object-cover border border-slate-200"
                      loading="lazy" 
                    />
                  )}
                  <div className="space-y-2 text-xs text-slate-600 mb-6 leading-relaxed">
                    {item.challenge && (
                      <p><strong className="text-slate-800">Desafio:</strong> {item.challenge}</p>
                    )}
                    {item.solution && (
                      <p><strong className="text-slate-800">Solução:</strong> {item.solution}</p>
                    )}
                    {item.result && (
                      <p><strong className="text-slate-800">Resultado:</strong> {item.result}</p>
                    )}
                  </div>
                  {item.testimonial && (
                    <blockquote className="text-xs italic text-slate-700 bg-white p-3 rounded-xl border border-slate-200 mb-4">
                      "{item.testimonial}"
                    </blockquote>
                  )}
                </div>
                {item.ctaUrl && (
                  <Link to={item.ctaUrl} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 pt-2 border-t border-slate-200/60">
                    <span>{item.ctaText || 'Ver detalhes'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Honest fallback when no published case studies yet */
          <div className="max-w-3xl mx-auto bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center mx-auto mb-4 text-blue-600">
              <FolderKanban className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Seu negócio pode ser nosso próximo case.
            </h3>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
              Traga a rotina da sua adega, restaurante ou evento para uma demonstração guiada. Mostramos na tela como nossos sistemas resolvem gargalos de estoque, comandas ou transmissão ao vivo.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xs shadow-xs transition-all"
            >
              <span>Agendar demonstração</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
