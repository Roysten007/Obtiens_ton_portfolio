import RevealOnScroll from './RevealOnScroll';

export default function CTAFinalSection() {
  return (
    <section className="section-padding bg-navy text-center">
      <div className="container mx-auto max-w-2xl">
        <RevealOnScroll>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-primary-foreground mb-6 leading-tight">
            Ne laisse plus ton talent dans l'ombre.
          </h2>
          <p className="font-montserrat text-primary-foreground/70 mb-10 leading-relaxed">
            Rejoins le programme et obtiens enfin la vitrine en ligne que ton talent mérite.
          </p>
          <button
            onClick={() => document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-shimmer bg-yellow text-navy font-outfit font-bold px-7 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-lg hover:-translate-y-[3px] hover:shadow-xl hover:shadow-yellow/30 active:translate-y-0 transition-all duration-300 cursor-none"
          >
            Je veux mon portfolio →
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
