import { FileText, Shield, Headphones, Mail, Building, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../lib/config';

export function TransparencySection() {
  return (
    <section className="py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Compromisso Institucional</span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Transparência faz parte do produto.
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Acreditamos que a confiança se constrói com regras claras, respeito aos dados da sua empresa e canais de contato acessíveis.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-3">
              <Link 
                to="/termos"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Termos de Uso</span>
              </Link>
              <Link 
                to="/privacidade"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-2xs"
              >
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                <span>Política de Privacidade (LGPD)</span>
              </Link>
              <Link 
                to="/suporte"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-2xs"
              >
                <Headphones className="w-3.5 h-3.5 text-blue-600" />
                <span>Central de Atendimento</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Institutional Details Card (6 cols) */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
              <Building className="w-4 h-4 text-blue-600" />
              Identificação Institucional
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Empresa:</span>
                <span className="font-semibold text-slate-800">{SITE_CONFIG.name}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Localização:</span>
                <span className="font-semibold text-slate-800 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-blue-600" />
                  {SITE_CONFIG.company.city} — {SITE_CONFIG.company.state}, {SITE_CONFIG.company.country}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">E-mail de Contato:</span>
                <span className="font-semibold text-slate-800">{SITE_CONFIG.contact.email}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Cadastro Fiscal:</span>
                <span className="font-mono text-slate-600 text-[11px]">
                  {SITE_CONFIG.company.cnpj || 'CNPJ sob consulta comercial'}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 leading-relaxed">
              Atendimento e suporte técnico prestados diretamente por nossa equipe para todo o Brasil.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
