import RevealOnScroll from './RevealOnScroll';

const whatsappUrl = 'https://wa.me/2290143405361?text=Bonjour%20!%20Je%20souhaite%20obtenir%20mon%20portfolio.';

export default function CTAFinalSection() {
  return (
    <section className="section-padding bg-navy text-center relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsla(46,96%,50%,0.08) 0%, transparent 70%)' }}
        />
      </div>
      <div className="container mx-auto max-w-2xl relative z-10">
        <RevealOnScroll>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-primary-foreground mb-6 leading-tight">
            Ne laisse plus ton talent dans l'ombre.
          </h2>
          <p className="font-montserrat text-primary-foreground/70 mb-10 leading-relaxed text-lg">
            Rejoins le programme et obtiens enfin la vitrine en ligne que ton talent mérite.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 bg-yellow text-navy font-outfit font-black px-10 py-5 rounded-full text-base md:text-xl hover:-translate-y-[4px] hover:shadow-2xl hover:shadow-yellow/40 active:translate-y-0 transition-all duration-300 cursor-none shadow-xl"
          >
            <span>💬</span>
            <span>Je veux mon portfolio maintenant →</span>
          </a>
          <p className="font-montserrat text-primary-foreground/30 text-xs mt-6">
            Tu seras redirigé vers WhatsApp pour finaliser ta demande en moins de 2 minutes.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
