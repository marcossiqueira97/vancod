import { MessageSquareQuote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../lib/config';

export function TestimonialsSection() {
  const testimonials = SITE_CONFIG.testimonials || [];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Relatos & Experiências</span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            O que nossos clientes dizem
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            Acompanhamento contínuo e feedback real de quem opera no dia a dia.
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <p className="text-xs text-slate-700 italic mb-6 leading-relaxed">
                  "{item.testimonial}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  {item.photo ? (
                    <img src={item.photo} alt={item.name} className="w-9 h-9 rounded-full object-cover" />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                      {item.name[0]}
                    </div>
                  )}
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs">{item.name}</h5>
                    <p className="text-[11px] text-slate-500">{item.role} • {item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Honest fallback */
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-600">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Ainda estamos construindo nossa base de clientes parceiros.
            </h3>
            <p className="text-xs text-slate-600 max-w-lg mx-auto mb-5 leading-relaxed">
              Valorizamos a transparência e não publicamos relatos não autorizados. Quer conhecer a solução de perto e avaliar como ela atende sua empresa?
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xs shadow-xs transition-colors"
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
