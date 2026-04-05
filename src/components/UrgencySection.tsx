import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';
import { Calendar, Gift, Clock } from 'lucide-react';

const levers = [
  {
    icon: <Calendar className="w-8 h-8 text-yellow" />,
    title: "Prix de lancement — Jusqu'au 30 avril 2026",
    text: "Les tarifs actuels sont des prix de lancement. À partir du 1er mai 2026, tous les prix augmentent de 20 000 FCFA par formule. C'est une décision réelle liée à la montée en gamme de l'offre."
  },
  {
    icon: <Gift className="w-8 h-8 text-yellow" />,
    title: "Bonus de la semaine — Page de lien offerte",
    text: "Les 3 premiers clients de chaque semaine reçoivent la page de lien personnalisée gratuitement — normalement réservée à la formule Signature (valeur 25 000 FCFA). Premier arrivé, premier servi."
  },
  {
    icon: <Clock className="w-8 h-8 text-yellow" />,
    title: "Chaque semaine sans portfolio coûte des clients réels",
    text: "Des prospects cherchent en ce moment quelqu'un avec ton profil. Sans portfolio, tu n'existes pas pour eux. Ce n'est pas une peur abstraite — c'est une mission concrète qui part chez quelqu'un d'autre."
  }
];

export default function UrgencySection() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-white mb-6">
            <WordReveal text="Pourquoi agir maintenant ?" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
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
              onClick={() => document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' })}
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
