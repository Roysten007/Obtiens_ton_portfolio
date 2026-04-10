import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const levers = [
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow" />,
    title: "Hausse de prix tous les 15 jours",
    text: "Le prix actuel de 59 000 FCFA est une opportunité temporaire. Tous les 15 jours, l'offre augmente de 10 000 FCFA. Plus tu attends, plus l'investissement sera important."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow" />,
    title: "3 places disponibles par semaine",
    text: "Pour garantir une livraison en 5 jours et une qualité artisanale, je n'accepte que 3 nouveaux clients par semaine. Une fois ce quota atteint, les réservations sont reportées."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow" />,
    title: "Le coût de l'invisibilité",
    text: "Chaque prospect qui ne te trouve pas en ligne est une mission qui part chez tes concurrents. Ce n'est pas une théorie, c'est ton chiffre d'affaires qui stagne pendant que d'autres avancent."
  }
];

export default function UrgencySection() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto max-w-5xl relative z-10 px-4">
        <div className="text-center mb-16 px-4">
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-white mb-6">
            <WordReveal text="Pourquoi agir maintenant ?" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levers.map((lever, i) => (
            <RevealOnScroll key={i} delay={i * 0.15}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl h-full flex flex-col hover:bg-white/10 transition-all duration-300">
                <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {lever.icon}
                </div>
                <h3 className="font-outfit font-bold text-xl text-yellow mb-4 leading-tight">
                  {lever.title}
                </h3>
                <p className="font-montserrat text-sm text-white/60 leading-relaxed">
                  {lever.text}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={0.5}>
          <div className="mt-16 text-center">
             <button
              onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-shimmer bg-yellow text-navy font-outfit font-bold px-10 py-4 rounded-full text-lg hover:-translate-y-[3px] hover:shadow-xl hover:shadow-yellow/30 active:translate-y-0 transition-all duration-300 cursor-none"
            >
              Je saisis l'opportunité →
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
