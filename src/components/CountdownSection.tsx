import { useCountdown } from '@/hooks/useAnimations';
import RevealOnScroll from './RevealOnScroll';

const target = new Date('2026-04-30T23:59:00');

export default function CountdownSection() {
  const { timeLeft, flip } = useCountdown(target);

  const blocks = [
    { val: timeLeft.days, label: 'JOURS' },
    { val: timeLeft.hours, label: 'HEURES' },
    { val: timeLeft.minutes, label: 'MINUTES' },
    { val: timeLeft.seconds, label: 'SECONDES' },
  ];

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Subtle pulse bg */}
      <div className="absolute inset-0 opacity-5" style={{
        background: 'radial-gradient(circle at center, hsl(46,96%,50%) 0%, transparent 60%)',
        animation: 'pulse 4s ease-in-out infinite',
      }} />

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <RevealOnScroll>
          <p className="font-outfit font-black text-2xl md:text-3xl text-primary-foreground mb-10">
            ⏳ L'offre expire dans...
          </p>

          <div className="flex justify-center gap-4 md:gap-6 mb-8">
            {blocks.map((b, i) => (
              <div key={i} className="text-center">
                <div
                  className={`font-outfit font-black text-4xl md:text-5xl text-yellow bg-primary-foreground/5 rounded-xl px-4 py-4 md:px-6 border border-primary-foreground/10 ${flip && i === 3 ? 'animate-flip' : ''}`}
                  style={{ perspective: '200px' }}
                >
                  {String(b.val).padStart(2, '0')}
                </div>
                <p className="font-montserrat text-[10px] md:text-xs text-primary-foreground/50 mt-2 tracking-wider">{b.label}</p>
              </div>
            ))}
          </div>

          <p className="font-montserrat text-primary-foreground/60 mb-8">
            Après cette date, les prix normaux reprennent.
          </p>

          <button
            onClick={() => document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-shimmer bg-yellow text-navy font-outfit font-bold px-10 py-4 rounded-full text-lg hover:-translate-y-[3px] hover:shadow-xl hover:shadow-yellow/30 active:translate-y-0 transition-all duration-300 cursor-none"
          >
            Je veux mon portfolio →
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
