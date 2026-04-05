import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';

const inclusions = [
  {
    icon: "🎨",
    title: "Design portfolio sur-mesure",
    description: "Un portfolio à ton image — couleurs, typographie, ambiance. Pas un template générique.",
  },
  {
    icon: "✍️",
    title: "Narration de tes projets",
    description: "Chaque projet raconté en 3 parties : problème → solution → résultat. La structure qui convainc en 30 secondes.",
  },
  {
    icon: "🌐",
    title: "Mise en ligne & déploiement",
    description: "Ton portfolio publié en ligne, optimisé mobile. Un lien propre à partager immédiatement.",
  },
  {
    icon: "📱",
    title: "Optimisation LinkedIn / Instagram",
    description: "Ta bio, ton titre, ta photo de couverture alignés avec ton portfolio. Cohérence totale sur tous tes canaux.",
  },
  {
    icon: "💬",
    title: "Script de prospection adapté",
    description: "Un message calibré pour ton profil — pour décrocher tes premières missions sur WhatsApp, LinkedIn ou Instagram.",
  },
];

export default function InclusionsSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 px-4">
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-navy mb-4 tracking-tight leading-tight">
            <WordReveal text="Tout ce qu'il faut pour être enfin visible." />
          </h2>
        </div>

        <div className="space-y-6 px-4">
          {inclusions.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="bg-slate-50/80 backdrop-blur-sm border-l-4 border-yellow rounded-xl md:rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 group hover:-translate-x-1">
                <div className="text-3xl md:text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-xl text-navy mb-2 group-hover:text-yellow transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-montserrat text-sm md:text-base text-slate-500 leading-relaxed italic border-l-border pl-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
