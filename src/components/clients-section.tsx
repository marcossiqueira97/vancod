import { ArrowRight, Building2, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../lib/config';

export function ClientsSection() {
  const clients = SITE_CONFIG.clients || [];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Comunidade & Parceiros</span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Empresas que escolhem a Vancod para sua operação
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            Soluções desenvolvidas para acompanhar a rotina real de pequenos e médios negócios.
          </p>
        </div>

        {clients.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-200 text-center shadow-xs">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-10 mx-auto object-contain mb-3" />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-700 font-bold">
                    {client.name[0]}
                  </div>
                )}
                <h4 className="font-bold text-slate-900 text-sm">{client.name}</h4>
                <p className="text-xs text-slate-500">{client.segment}</p>
              </div>
            ))}
          </div>
        ) : (
          /* Honest fallback when client logos are not yet authorized */
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              A Vancod está construindo seu ecossistema junto aos primeiros negócios parceiros.
            </h3>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
              Trabalhamos lado a lado com cada cliente desde a implantação inicial, adaptando fluxos de atendimento e garantindo que o software funcione sem atritos na rotina diária.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-xs transition-colors"
            >
              <span>Quero conhecer a Vancod</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
