import { useEffect, useState } from 'react';
import FloatingLines from './FloatingLines';
import { useCountUp, useScrollReveal } from '@/hooks/useAnimations';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const stat1 = useCountUp(5, 1500, true);
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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden noise-overlay" style={{ backgroundColor: 'hsl(240 80% 24%)' }}>
      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.1]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full z-0" style={{
        background: 'radial-gradient(circle, hsla(46,96%,50%,0.1) 0%, transparent 70%)',
      }} />
      
      <FloatingLines 
        linesGradient={['#ffffff', '#4c8bf5', '#00d4ff', '#ffffff']}
        lineCount={[8, 12, 8]}
        animationSpeed={0.4}
        parallax={true}
        parallaxStrength={0.08}
      />

      <div className="relative z-20 container mx-auto px-5 pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <span className="text-primary-foreground/90 font-montserrat text-sm">🚀 Programme Avril 2026 — Lancement</span>
          </div>

          {/* H1 */}
          <h1 className="font-outfit font-black text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-8 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <span className="text-primary-foreground">Combien de clients high ticket</span><br />
            <span className="text-primary-foreground">tu as </span>
            <span className="text-yellow">déjà perdus</span><br />
            <span className="text-primary-foreground">parce que tu n'avais rien à montrer ?</span>
          </h1>

          {/* Description */}
          <p className="font-montserrat text-primary-foreground/75 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up md:text-lg" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            Tu as du talent. Tu as des réalisations. Il te manque juste une adresse en ligne qui parle pour toi quand tu n'es pas là. C'est exactement ce que propose notre programme d'accompagnement.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-5 mb-16 animate-fade-up" style={{ animationDelay: '0.85s', animationFillMode: 'both' }}>
            <button
              onClick={() => scrollTo('#form')}
              className="btn-shimmer bg-yellow text-navy font-outfit font-bold px-5 py-2.5 text-sm md:px-8 md:py-3.5 md:text-base rounded-full hover:-translate-y-[3px] hover:shadow-xl hover:shadow-yellow/30 active:translate-y-0 transition-all duration-300 cursor-none"
            >
              DÉBLOQUER L'ACCÈS À MON PORTFOLIO →
            </button>
            <button
              onClick={() => scrollTo('#pricing')}
              className="border-2 border-primary-foreground/40 text-primary-foreground font-outfit font-bold px-5 py-2.5 text-sm md:px-8 md:py-3.5 md:text-base rounded-full hover:border-yellow hover:text-yellow hover:-translate-y-[3px] transition-all duration-300 cursor-none"
            >
              Découvrir le tarif
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 animate-fade-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
            {[
              { val: stat1, label: 'jours de livraison' },
              { val: 1, label: 'Accompagnement 1:1' },
              { val: stat3, suffix: '%', label: 'responsive garanti' },
            ].map((s, i) => (
              <div key={i} className="text-center min-w-[120px]">
                <div className="font-outfit font-black text-3xl md:text-4xl text-yellow">{s.val}{s.suffix || ''}</div>
                <div className="font-montserrat text-xs text-primary-foreground/50 mt-1 uppercase tracking-wider">{s.label}</div>
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
