import RevealOnScroll from './RevealOnScroll';

export default function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-yellow bg-muted flex items-center justify-center">
                  <span className="text-6xl text-muted-foreground/30">👤</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-navy text-primary-foreground font-montserrat text-xs px-4 py-1.5 rounded-full">
                  Designer & Dev No-code
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div>
              <h2 className="font-outfit font-black text-3xl md:text-4xl text-navy mb-6">
                Pourquoi me faire confiance ?
              </h2>
              <div className="font-montserrat text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Je suis Roysten KOSSOU — designer, créateur de contenu et développeur web no-code basé à Bohicon, Bénin.
                </p>
                <p>
                  J'ai lancé mon propre portfolio créatif grâce à Phantom Build de Carlos Djanato. Depuis, j'aide les créatifs digitaux à obtenir une vraie présence en ligne.
                </p>
                <p>
                  Pas un site ordinaire. Un outil qui te représente et qui convertit.
                </p>
              </div>
              <p className="font-outfit italic text-yellow text-lg mt-6">Roysten —</p>
              <p className="font-montserrat text-sm text-navy mt-1">On apprend. On ajuste. On avance.</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
