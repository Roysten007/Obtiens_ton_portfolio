import RevealOnScroll from './RevealOnScroll';
import { Check, TrendingUp, Zap, Shield } from 'lucide-react';

const pricingSteps = [
  {
    period: '10 au 20 Avril',
    price: '49 000 FCFA',
    diff: 'Maintenant',
    active: true,
  },
  {
    period: '21 au 30 Avril',
    price: '59 000 FCFA',
    diff: '+10 000',
    active: false,
  },
  {
    period: '1 au 10 Mai',
    price: '69 000 FCFA',
    diff: '+10 000',
    active: false,
  },
  {
    period: 'À partir du 11 Mai',
    price: '79 000 FCFA',
    diff: 'Prix définitif',
    active: false,
  },
];

const deliverables = [
  'Portfolio multi-pages design 100% sur-mesure',
  'Narration structurée de tes projets (contexte → action → résultat)',
  'Mise en ligne et déploiement sur Vercel',
  'Optimisation profil LinkedIn + Instagram (bio, bannière, titre)',
  'Script de prospection personnalisé',
  'Livré en 5 jours maximum',
  'Garanti — portfolio en ligne en 7 jours ou remboursé intégralement',
];

export default function PricingSection() {
  const scrollToForm = () => {
    document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/message/R62SF7EMQH3VC1';

  return (
    <section id="pricing" className="section-padding bg-navy overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, hsla(46,96%,50%,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, hsla(240,100%,60%,0.08) 0%, transparent 70%)' }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      <div className="container mx-auto max-w-5xl relative z-10 px-4">

        {/* ── Header ── */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-outfit font-black text-3xl md:text-5xl text-white mb-5 leading-tight tracking-tight">
              Un seul prix.{' '}
              <span className="text-yellow">Transparent.</span>{' '}
              Qui monte.
            </h2>
            <p className="font-montserrat text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Plus tu attends, plus tu paies. C'est simple, c'est réel, c'est annoncé maintenant.
            </p>
          </div>
        </RevealOnScroll>

        {/* ── Main Price Block ── */}
        <RevealOnScroll delay={0.1}>
          <div className="relative mb-12 flex justify-center">
            <div className="relative w-full max-w-lg text-center rounded-3xl border-2 border-yellow/50 p-10 md:p-12 shadow-2xl shadow-yellow/10"
              style={{ background: 'linear-gradient(145deg, #0d0d2e 0%, #0a1040 100%)' }}>
              {/* Top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, hsl(46,96%,50%), transparent)' }} />

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/30 text-yellow font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Zap size={12} />
                Prix de lancement · Valable jusqu'au 20 avril
              </div>

              {/* Price */}
              <div className="mb-3">
                <span className="font-outfit font-black text-6xl md:text-7xl text-yellow leading-none">
                  49 000
                </span>
                <span className="font-outfit font-black text-2xl md:text-3xl text-yellow/80 ml-2">FCFA</span>
              </div>

              <p className="font-montserrat text-white/40 text-sm mb-8">
                Valeur réelle estimée : <span className="line-through text-white/30">295 000 FCFA</span>
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-block w-full py-4 rounded-2xl font-outfit font-black text-sm md:text-base tracking-wide bg-yellow text-navy hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow/40 active:scale-95 transition-all duration-300"
              >
                Je veux mon portfolio maintenant →
              </a>

              {/* Countdown hint */}
              <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-xs font-montserrat">
                <TrendingUp size={12} />
                <span>Le prix monte le 21 avril — réserve ta place maintenant</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── Pricing Progression Table ── */}
        <RevealOnScroll delay={0.2}>
          <div className="mb-16">
            <h3 className="font-outfit font-black text-center text-white/70 text-sm uppercase tracking-widest mb-6">
              Tableau de progression des prix
            </h3>

            {/* Desktop table */}
            <div className="hidden md:block rounded-2xl overflow-hidden border border-white/10">
              <table className="w-full">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <th className="font-montserrat text-xs text-white/40 font-semibold uppercase tracking-widest px-6 py-4 text-left">Période</th>
                    <th className="font-montserrat text-xs text-white/40 font-semibold uppercase tracking-widest px-6 py-4 text-center">Prix</th>
                    <th className="font-montserrat text-xs text-white/40 font-semibold uppercase tracking-widest px-6 py-4 text-right">Évolution</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingSteps.map((step, i) => (
                    <tr
                      key={i}
                      className={`border-t border-white/5 transition-colors ${step.active ? '' : 'opacity-60'}`}
                      style={step.active ? { background: 'linear-gradient(90deg, rgba(245,197,24,0.08) 0%, rgba(245,197,24,0.04) 100%)' } : { background: 'rgba(255,255,255,0.02)' }}
                    >
                      <td className="px-6 py-5 text-left">
                        <div className="flex items-center gap-3">
                          {step.active && (
                            <span className="w-2 h-2 rounded-full bg-yellow animate-pulse flex-shrink-0" />
                          )}
                          <span className={`font-montserrat text-sm font-semibold ${step.active ? 'text-white' : 'text-white/50'}`}>
                            {step.period}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className={`font-outfit font-black text-lg ${step.active ? 'text-yellow' : 'text-white/50'}`}>
                          {step.price}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className={`font-outfit font-bold text-sm px-3 py-1 rounded-full ${
                          step.active
                            ? 'bg-yellow/15 text-yellow border border-yellow/30'
                            : step.diff === 'Prix définitif'
                            ? 'bg-white/5 text-white/40 border border-white/10'
                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {step.diff}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {pricingSteps.map((step, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-4 flex items-center justify-between gap-4 transition-all ${
                    step.active
                      ? 'border-yellow/40 shadow-lg shadow-yellow/10'
                      : 'border-white/10 opacity-60'
                  }`}
                  style={step.active
                    ? { background: 'linear-gradient(135deg, rgba(245,197,24,0.1) 0%, rgba(245,197,24,0.04) 100%)' }
                    : { background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {step.active && <span className="w-2 h-2 rounded-full bg-yellow animate-pulse flex-shrink-0" />}
                    <div className="min-w-0">
                      <p className={`font-montserrat text-xs font-semibold truncate ${step.active ? 'text-white' : 'text-white/50'}`}>
                        {step.period}
                      </p>
                      <p className={`font-outfit font-black text-xl ${step.active ? 'text-yellow' : 'text-white/40'}`}>
                        {step.price}
                      </p>
                    </div>
                  </div>
                  <span className={`font-outfit font-bold text-xs px-3 py-1.5 rounded-full flex-shrink-0 ${
                    step.active
                      ? 'bg-yellow/15 text-yellow border border-yellow/30'
                      : step.diff === 'Prix définitif'
                      ? 'bg-white/5 text-white/40 border border-white/10'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    {step.diff}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* ── Deliverables ── */}
        <RevealOnScroll delay={0.3}>
          <div className="rounded-3xl border border-white/10 p-8 md:p-10 mb-10"
            style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)' }}>
            <h3 className="font-outfit font-black text-xl md:text-2xl text-white mb-8 text-center">
              Ce que tu reçois pour{' '}
              <span className="text-yellow">49 000 FCFA</span>
            </h3>

            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full p-1.5 flex-shrink-0 bg-yellow/15 text-yellow">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-montserrat text-sm text-white/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Value phrase */}
            <div className="border-t border-white/10 pt-6 text-center">
              <p className="font-montserrat text-white/60 text-sm leading-relaxed max-w-2xl mx-auto italic">
                Valeur réelle estimée :{' '}
                <span className="line-through text-white/40">295 000 FCFA</span>.{' '}
                Tu paies <span className="text-yellow font-bold not-italic">49 000 FCFA</span>.{' '}
                Parce que l'objectif c'est de te prouver que ça marche — pas de te faire payer le prix fort.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── Guarantee ── */}
        <RevealOnScroll delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-5 rounded-2xl border border-white/10 px-6 py-5 mb-10"
            style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="text-4xl flex-shrink-0">🛡️</div>
            <div className="text-center sm:text-left">
              <p className="font-outfit font-black text-white text-base mb-1">
                Garanti — portfolio en ligne en 7 jours ou remboursé intégralement
              </p>
              <p className="font-montserrat text-white/50 text-sm">
                Sans question, sans condition. Tu prends zéro risque.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── CTA ── */}
        <RevealOnScroll delay={0.5}>
          <div className="text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-block bg-yellow text-navy font-outfit font-black px-10 py-4 rounded-full text-base md:text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow/40 active:scale-95 transition-all duration-300"
            >
              Je veux mon portfolio maintenant →
            </a>
            <div className="mt-5 flex flex-wrap justify-center gap-6 text-white/40 text-xs font-montserrat">
              <span>✓ Paiement via MTN Money & Moov Money</span>
              <span>✓ 50% à la commande · 50% à la livraison</span>
            </div>
          </div>
        </RevealOnScroll>

      </div>

      {/* Wave separator to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30C360 65 720 0 1080 35C1260 52 1380 58 1440 50V80H0V30Z" fill="hsl(0,0%,100%)" />
        </svg>
      </div>
    </section>
  );
}
