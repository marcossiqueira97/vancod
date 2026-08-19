import { Layers, Server, Headphones, ShieldCheck } from 'lucide-react';

export function WhyVancod() {
  const pillars = [
    {
      title: 'Produto Especializado',
      desc: 'Soluções desenvolvidas para operações específicas, em vez de tentar resolver todos os segmentos com um sistema genérico e inchado.',
      icon: <Layers className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Tecnologia Aplicada à Operação',
      desc: 'Arquitetura e interfaces pensadas para reduzir dependência desnecessária de processos manuais e garantir funcionamento local no caixa.',
      icon: <Server className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Suporte Próximo',
      desc: 'Contato direto com especialistas para implantação guiada, configuração de equipamentos, dúvidas e acompanhamento.',
      icon: <Headphones className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Transparência Comercial',
      desc: 'Informações claras sobre o produto, modelos de contratação sem comissão sobre faturamento e políticas de privacidade transparentes.',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Diferenciais Concretos</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Por que escolher a Vancod?
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Quatro compromissos que orientam nosso desenvolvimento e nosso relacionamento com clientes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 w-fit mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
