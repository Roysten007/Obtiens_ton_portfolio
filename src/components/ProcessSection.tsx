import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';

const steps = [
  {
    number: "1",
    title: "On sélectionne",
    text: "On choisit ensemble 2 à 3 projets que tu as déjà réalisés — même s'ils te semblent pas assez bons. On identifie ce qui fait leur valeur.",
    badge: "Jour 1",
  },
  {
    number: "2",
    title: "On raconte",
    text: "On structure chaque projet : le contexte client, ce que tu as fait, le résultat. On crée la narration qui transforme un projet en preuve de compétence.",
    badge: "Jours 2 – 3",
  },
  {
    number: "3",
    title: "On déploie",
    text: "Ton portfolio est designé, mis en ligne et optimisé. Tu repars avec un lien professionnel prêt à partager.",
    badge: "Jours 4 – 5",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-navy mb-4 tracking-tight">
            <WordReveal text="Le processus en 3 étapes" />
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 0.15} className="h-full">
                <div className="relative flex flex-col items-center text-center h-full">
                  {/* Number Circle */}
                  <div className="w-20 h-20 rounded-full bg-yellow text-navy flex items-center justify-center font-outfit font-black text-2xl shadow-xl shadow-yellow/20 mb-8 border-4 border-white relative z-10 transition-transform duration-300 hover:scale-110 shrink-0">
                    {step.number}
                  </div>

                  {/* Content Card */}
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-yellow/30 transition-all duration-300 group hover:shadow-xl hover:shadow-slate-200/50 flex-grow w-full">
                    <div className="inline-block bg-navy text-white text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold mb-4 shadow-sm">
                      {step.badge}
                    </div>
                    <h3 className="font-outfit font-black text-xl text-navy mb-4 group-hover:text-yellow transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-montserrat text-sm text-slate-500 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
