import { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Zap, Check, ShieldCheck } from 'lucide-react';

export default function PricingSection() {
  const whatsappUrl = 'https://wa.me/22946305190';

  // Countdown logic for 15 days
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // For a real app, this should be a fixed target date. 
    // For this design demo, we'll just show 15 days remaining or a fixed target.
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deliverables = [
    'Portfolio multi-pages design 100% sur-mesure',
    'Narration structurée de tes projets (contexte → action → résultat)',
    'Mise en ligne et déploiement sur Vercel',
    'Optimisation profil LinkedIn + Instagram (bio, bannière, titre)',
    'Script de prospection personnalisé',
    'Livré en 5 jours maximum',
    'Garanti — portfolio en ligne en 7 jours ou remboursé intégralement',
  ];

  return (
    <section id="pricing" className="section-padding overflow-hidden relative" style={{ backgroundColor: '#000096' }}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, hsla(46,96%,50%,0.05) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, hsla(240,100%,60%,0.05) 0%, transparent 70%)' }} />

      <div className="container mx-auto max-w-4xl relative z-10 px-4">

        {/* ── Header ── */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-outfit font-black text-3xl md:text-5xl text-white mb-5 leading-tight tracking-tight">
              Un seul prix.{' '}
              <span className="text-yellow">Transparent.</span>
            </h2>
            <p className="font-montserrat text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Plus tu attends, plus tu paies. Le prix augmente de <span className="text-yellow font-bold">10 000 FCFA</span> tous les 15 jours.
            </p>
          </div>
        </RevealOnScroll>

        {/* ── Countdown ── */}
        <RevealOnScroll delay={0.1}>
          <div className="flex justify-center gap-4 mb-10">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-w-[70px] backdrop-blur-sm">
                  <span className="font-outfit font-black text-2xl md:text-3xl text-yellow">{String(value).padStart(2, '0')}</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 mt-2 font-montserrat">{label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* ── Single Unified Card (Narrower Width) ── */}
        <RevealOnScroll delay={0.2}>
          <div className="relative max-w-xl mx-auto rounded-[2.5rem] border-2 border-yellow/40 overflow-hidden shadow-2xl p-8 md:p-12 text-center"
            style={{ background: 'linear-gradient(145deg, #05052e 0%, #0a0a4a 100%)' }}>
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/30 text-yellow font-montserrat font-bold text-[10px] md:text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-10">
              <Zap size={14} className="fill-current" />
              Offre limitée · Hausse de prix imminente
            </div>

            {/* Price Area */}
            <div className="mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="font-outfit font-black text-6xl md:text-7xl text-yellow leading-none tracking-tighter">
                  59 000
                </span>
                <span className="font-outfit font-black text-2xl text-yellow/80 mt-2">FCFA</span>
              </div>
              <p className="font-montserrat text-white/40 text-sm">
                Valeur réelle estimée : <span className="line-through text-white/20 italic">295 000 FCFA</span>
              </p>
            </div>

            {/* Deliverables List */}
            <div className="text-left mb-10">
              <h3 className="font-outfit font-black text-base text-white mb-6 uppercase tracking-widest text-center opacity-70">
                Ce que tu reçois :
              </h3>
              <ul className="space-y-4">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-yellow/20 flex items-center justify-center text-yellow">
                      <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="font-montserrat text-sm text-white/80 group-hover:text-white transition-colors leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Guarantee Bloc ── */}
            <div className="bg-yellow/5 border border-yellow/20 rounded-2xl p-6 mb-10 flex flex-col items-center text-center">
              <ShieldCheck className="text-yellow mb-3" size={32} />
              <h4 className="font-outfit font-bold text-white mb-2">Garantie 100% Sérénité</h4>
              <p className="font-montserrat text-xs text-white/60 leading-relaxed">
                Ton portfolio en ligne sous 7 jours maximum, ou tu es intégralement remboursé. Sans poser de questions.
              </p>
            </div>

            {/* Big CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer flex items-center justify-center w-full py-5 rounded-2xl font-outfit font-black text-base md:text-lg tracking-wide bg-yellow text-navy hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow/40 active:scale-95 transition-all duration-300 mb-6"
            >
              Je veux mon portfolio maintenant →
            </a>

            <p className="font-montserrat text-white/40 text-[10px] leading-relaxed italic px-4">
              "L'objectif c'est de te prouver que ça marche — pas de te faire payer le prix fort."
            </p>
          </div>
        </RevealOnScroll>

        {/* ── Footer Info (Removed Mobile Money) ── */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/30 text-[10px] md:text-xs font-montserrat uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2">🛡️ Garantie Satisfait ou Remboursé</span>
          <span className="flex items-center gap-2">⚡ Livraison sous 5 jours</span>
          <span className="flex items-center gap-2">🌍 Accès à vie</span>
        </div>

      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30C360 65 720 0 1080 35C1260 52 1380 58 1440 50V80H0V30Z" fill="hsl(0,0%,100%)" />
        </svg>
      </div>
    </section>
  );
}
