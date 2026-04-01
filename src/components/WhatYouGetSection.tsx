import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';

const cards = [
  { icon: '📱', title: 'Site 100% responsive', text: 'Parfait sur mobile, tablette et desktop. Tes clients te trouvent partout.' },
  { icon: '🎨', title: 'Design à ton image', text: 'Couleurs, typographie et identité visuelle qui te ressemblent vraiment.' },
  { icon: '🔎', title: 'Optimisé pour Google', text: 'Structure SEO intégrée dès le départ. Tu existes sur le web, pas juste sur Instagram.' },
];

export default function WhatYouGetSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-outfit font-black text-3xl md:text-4xl text-navy mb-4">
          <WordReveal text="Un site qui travaille pour toi, même quand tu dors." />
        </h2>
        <RevealOnScroll delay={0.1}>
          <p className="font-montserrat text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
            Pas un simple site. Un outil commercial. Une vitrine qui travaille 24h/24, inspire confiance en 3 secondes et transforme un inconnu en client.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <RevealOnScroll key={i} delay={i * 0.12}>
              <div className="group p-8 rounded-2xl border border-border bg-card hover:border-yellow hover:shadow-xl hover:shadow-yellow/10 hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-350">
                <div className="text-4xl mb-5">{c.icon}</div>
                <h3 className="font-outfit font-bold text-lg text-navy mb-3">{c.title}</h3>
                <p className="font-montserrat text-sm text-muted-foreground">{c.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
