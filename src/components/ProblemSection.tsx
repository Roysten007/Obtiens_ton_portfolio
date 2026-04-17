import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';

const blocks = [
  { icon: '💨', title: 'Tes posts s\'évaporent.', text: 'Une story dure 24h. Un portfolio dure toujours.' },
  { icon: '🏃', title: 'Tes concurrents avancent.', text: 'Pendant que tu hésites, ils décrochent tes clients.' },
  { icon: '🔍', title: 'Tu mérites d\'être trouvé(e).', text: 'Un client cherche sur Google. Il doit tomber sur toi.' },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-outfit font-black text-3xl md:text-4xl text-navy mb-8">
          <WordReveal text="Ton talent mérite une vitrine à sa hauteur." />
        </h2>
        <RevealOnScroll delay={0.15}>
          <blockquote className="font-montserrat italic text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
            "Chaque jour sans portfolio, c'est un client potentiel qui passe à quelqu'un d'autre. Pas parce que tu es moins bon. Juste parce qu'il ne te trouve pas."
          </blockquote>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {blocks.map((b, i) => (
            <RevealOnScroll key={i} delay={i * 0.12}>
              <div className="group p-8 rounded-2xl border border-border hover:border-yellow hover:shadow-lg hover:shadow-yellow/10 hover:-translate-y-1.5 transition-all duration-350 cursor-default">
                <div className="text-4xl mb-4">{b.icon}</div>
                <div className="w-8 h-0.5 bg-border group-hover:bg-yellow group-hover:w-12 transition-all duration-300 mx-auto mb-4" />
                <h3 className="font-outfit font-bold text-lg text-navy mb-2">{b.title}</h3>
                <p className="font-montserrat text-sm text-muted-foreground">{b.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
