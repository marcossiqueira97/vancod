import { ArrowRight, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, ClientItem } from '../lib/config';

export function ClientsSection() {
  const rawClients = SITE_CONFIG.clients || [];
  // Safeguard: only show authorized clients with a non-empty name
  const clients = rawClients.filter((c): c is ClientItem => Boolean(c && c.name && c.name.trim() && c.isAuthorized));

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
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-200 text-center shadow-xs flex flex-col justify-between items-center">
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={`Logo da empresa ${client.name}`} 
                    className="h-10 max-w-[140px] mx-auto object-contain mb-3"
                    loading="lazy" 
                  />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-700 font-bold">
                    {client.name.trim().charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{client.name}</h4>
                  {client.segment && (
                    <p className="text-xs text-slate-500 mt-0.5">{client.segment}</p>
                  )}
                </div>
                {client.url && (
                  <a 
                    href={client.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Visitar site
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Honest fallback when client logos are not yet published */
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
              Estamos construindo nosso ecossistema junto aos primeiros negócios parceiros.
            </h3>
            <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto mb-3 leading-relaxed">
              Trabalhamos lado a lado com cada cliente desde a implantação inicial, adaptando fluxos de atendimento e garantindo que o software funcione sem atritos na rotina diária.
            </p>
            <p className="text-xs text-slate-500 mb-6">
              Quer conhecer a solução antes de contratar? Agende uma demonstração.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-xs transition-colors shadow-xs"
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
