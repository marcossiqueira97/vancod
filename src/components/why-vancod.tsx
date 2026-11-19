import { Layers, Headphones } from 'lucide-react';

export function WhyVancod() {
  const pillars = [
    {
      title: 'Um sistema para cada segmento',
      desc: 'Adega, restaurante e evento têm sistemas próprios, em vez de um sistema genérico que tenta servir a todos.',
      icon: <Layers className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Quem implanta é quem programa',
      desc: 'Configuração, treinamento e suporte ficam com a mesma equipe que escreve o sistema.',
      icon: <Headphones className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-slate-900 mb-3">
            Duas promessas que dá para cobrar da gente.
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 w-fit mb-4 shadow-2xs">
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
