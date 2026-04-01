import { useEffect, useState } from 'react';
import HeroParticles from './HeroParticles';
import { useCountUp, useScrollReveal } from '@/hooks/useAnimations';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const stat1 = useCountUp(48, 1500, true);
  const stat2 = useCountUp(3, 1500, true);
  const stat3 = useCountUp(100, 1500, true);

  const fadeUp = (delay: number) => ({
    opacity: 1,
    transform: 'translateY(0)',
    animation: `fade-up 0.9s cubic-bezier(0.4,0,0.2,1) ${delay}s both`,
  });

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-navy overflow-hidden noise-overlay">
      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.06]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* Radial glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full z-0" style={{
        background: 'radial-gradient(circle, hsla(46,96%,50%,0.08) 0%, transparent 70%)',
      }} />
      <HeroParticles />

      <div className="relative z-10 container mx-auto px-5 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <span className="text-primary-foreground/90 font-montserrat text-sm">🚀 Programme Avril 2026 — Lancement</span>
          </div>

          {/* H1 */}
          <h1 className="font-outfit font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <span className="text-primary-foreground">Arrête d'être</span><br />
            <span className="text-yellow">invisible.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-outfit font-light text-xl md:text-2xl text-primary-foreground/50 mb-4 animate-fade-up" style={{ animationDelay: '0.55s', animationFillMode: 'both' }}>
            Ton talent existe. Ta vitrine, pas encore.
          </p>

          {/* Description */}
          <p className="font-montserrat text-primary-foreground/75 max-w-xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            Tu as du talent. Tu as des réalisations. Il te manque juste une adresse en ligne qui parle pour toi quand tu n'es pas là. C'est exactement ce que fait ce programme.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.85s', animationFillMode: 'both' }}>
            <button
              onClick={() => scrollTo('#form')}
              className="btn-shimmer bg-yellow text-navy font-outfit font-bold px-8 py-3.5 rounded-full hover:-translate-y-[3px] hover:shadow-xl hover:shadow-yellow/30 active:translate-y-0 transition-all duration-300 cursor-none"
            >
              Je veux mon portfolio maintenant →
            </button>
            <button
              onClick={() => scrollTo('#pricing')}
              className="border-2 border-primary-foreground/40 text-primary-foreground font-outfit font-bold px-8 py-3.5 rounded-full hover:border-yellow hover:text-yellow hover:-translate-y-[3px] transition-all duration-300 cursor-none"
            >
              Voir les formules
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 md:gap-16 animate-fade-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
            {[
              { val: stat1, label: 'heures livraison VIP' },
              { val: stat2, label: 'formules disponibles' },
              { val: stat3, suffix: '%', label: 'responsive garanti' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-outfit font-black text-3xl md:text-4xl text-yellow">{s.val}{s.suffix || ''}</div>
                <div className="font-montserrat text-xs text-primary-foreground/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 70 1440 60V100H0V40Z" fill="hsl(0,0%,100%)" />
        </svg>
      </div>
    </section>
  );
}
