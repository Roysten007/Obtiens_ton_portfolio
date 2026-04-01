import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';

const roles = [
  'Influenceur / Créateur de contenu',
  'Graphiste / Designer',
  'Copywriter / Rédacteur',
  'Photographe',
  'Community Manager',
  'Monteur Vidéo',
  'Consultant / Coach',
  'Développeur / No-code',
];

export default function ForWhoSection() {
  return (
    <section id="pour-qui" className="section-padding bg-navy">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-outfit font-black text-3xl md:text-4xl text-primary-foreground mb-4">
          <WordReveal text="Tu as une compétence digitale ?" />
        </h2>
        <RevealOnScroll delay={0.1}>
          <p className="font-montserrat text-primary-foreground/75 mb-12 max-w-xl mx-auto">
            Ce programme est fait pour toi. Peu importe où tu en es.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {roles.map((role, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 hover:bg-primary-foreground/10 hover:border-yellow/50 hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-350 cursor-default">
                <p className="font-montserrat text-sm text-primary-foreground/90">{role}</p>
              </div>
            </RevealOnScroll>
          ))}
          <RevealOnScroll delay={roles.length * 0.08}>
            <div className="bg-yellow/10 border-2 border-yellow animate-pulse-border rounded-xl p-5 col-span-2 md:col-span-1 hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-350 cursor-default">
              <p className="font-montserrat text-sm text-yellow font-medium">
                Toute personne avec une compétence digitale à valoriser ✦
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
