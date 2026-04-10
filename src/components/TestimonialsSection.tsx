import { useState, useEffect, useCallback } from 'react';
import RevealOnScroll from './RevealOnScroll';

const testimonials = [
  { 
    name: 'DAKO Clovisse', 
    role: 'Étudiant en 2ème année BTP', 
    quote: 'Roy a su transformer mon parcours académique en une vitrine professionnelle percutante. Mon portfolio BTP attire désormais l\'attention des recruteurs dès le premier coup d\'œil.' 
  },
  { 
    name: 'KIKI Tchédrack', 
    role: 'Copywriter Expert Immobilier', 
    quote: 'En tant que copywriter, l\'image de marque est essentielle. Grâce à Roy, j\'ai enfin un portfolio qui reflète l\'élégance et la précision de mon travail dans l\'immobilier.' 
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="section-padding bg-navy overflow-hidden">
      <div className="container mx-auto max-w-3xl text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <h2 className="font-outfit font-black text-3xl md:text-4xl text-primary-foreground mb-14">
          Ce qu'ils en disent.
        </h2>

        <RevealOnScroll>
          <div className="relative">
            {/* Big quote */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow/20 font-outfit text-[120px] leading-none pointer-events-none select-none">"</span>

            <div className="relative z-10 transition-all duration-500" key={current}>
              <div className="w-16 h-16 rounded-full border-2 border-yellow bg-primary-foreground/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <p className="font-montserrat italic text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-lg mx-auto">
                "{testimonials[current].quote}"
              </p>
              <p className="font-outfit font-bold text-primary-foreground">{testimonials[current].name}</p>
              <p className="font-montserrat text-sm text-primary-foreground/50">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-none ${i === current ? 'bg-yellow w-7' : 'bg-primary-foreground/30'}`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
