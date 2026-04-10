import RevealOnScroll from './RevealOnScroll';

export default function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div className="flex flex-col items-center justify-center">
              <div className="relative group mb-8">
                {/* Main circle with image */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-yellow p-2 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                    <img 
                      src="/Roysten.jpg.jpeg" 
                      alt="Roysten KOSSOU" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Badge at the bottom-left of the circle */}
                <div className="absolute bottom-6 -left-6 bg-navy text-primary-foreground font-outfit font-bold text-xs md:text-sm px-6 py-2.5 rounded-full shadow-xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
                  Designer & Dev No-code
                </div>
              </div>
              
              {/* Button added below the photo */}
              <a 
                href="https://roy-sten-design-portfolio.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow text-navy font-outfit font-bold px-6 py-2.5 rounded-full hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow/20 transition-all duration-300 text-sm cursor-none"
              >
                Voir mon site →
              </a>
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
              <div className="mt-10 pt-6 border-t border-muted">
                <p className="font-outfit font-black text-xl text-yellow mb-1">Roysten —</p>
                <p className="font-montserrat text-navy font-bold text-sm tracking-wide">On apprend. On ajuste. On avance.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
