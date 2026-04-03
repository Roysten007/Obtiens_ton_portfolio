import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'ESSENTIEL',
    subtitle: 'La base solide pour ta présence.',
    badge: null,
    oldPrice: '25 000 FCFA',
    price: '18 750 FCFA',
    discount: '-25%',
    style: {
      bg: 'bg-white',
      border: 'border-slate-200',
      headerText: 'text-navy',
      descText: 'text-slate-500',
      priceMain: 'text-navy',
      priceOld: 'text-slate-400',
      featureText: 'text-slate-600',
      btn: 'bg-navy text-white hover:bg-navy/90 hover:shadow-xl hover:shadow-navy/20',
      iconBg: 'bg-navy/5 text-navy',
      accent: 'border-navy/10'
    },
    features: [
      'Site one-page responsive',
      'Design clean & moderne',
      'Hero, À propos, Services, Contact',
      'Formulaire de contact intégré',
      'SEO de base optimisé',
      '1 série de révisions',
      'Livraison en 5 jours',
    ],
    btnText: 'Prendre l\'Essentiel',
  },
  {
    name: 'PREMIUM',
    subtitle: 'Le choix des professionnels ambitieux.',
    badge: '⭐ LE PLUS CHOISI',
    oldPrice: '50 000 FCFA',
    price: '37 500 FCFA',
    discount: '-25%',
    style: {
      bg: 'bg-navy',
      border: 'border-yellow/30 shadow-[0_0_20px_rgba(245,197,24,0.1)]',
      headerText: 'text-yellow',
      descText: 'text-white/60',
      priceMain: 'text-white',
      priceOld: 'text-white/30',
      featureText: 'text-white/80',
      btn: 'bg-yellow text-navy hover:bg-white hover:text-navy hover:shadow-xl hover:shadow-yellow/40 btn-shimmer',
      iconBg: 'bg-yellow/10 text-yellow',
      accent: 'border-yellow/20'
    },
    features: [
      'Tout l\'Essentiel inclus',
      'Design identité visuelle complète',
      'Section témoignages clients',
      'SEO avancé (balises & structure)',
      '3 séries de révisions',
      'Suivi technique 15 jours',
      'Livraison en 3 jours',
    ],
    btnText: 'Passer au Premium',
    highlight: true
  },
  {
    name: 'VIP',
    subtitle: 'L\'expérience ultime sans limite.',
    badge: '👑 EXPÉRIENCE COMPLÈTE',
    oldPrice: '75 000 FCFA',
    price: '56 250 FCFA',
    discount: '-25%',
    style: {
      bg: 'bg-[#05051a]', // Ultra Dark Navy
      border: 'border-white/10',
      headerText: 'text-white',
      descText: 'text-white/40',
      priceMain: 'text-white',
      priceOld: 'text-white/20',
      featureText: 'text-white/70',
      btn: 'bg-white text-navy hover:bg-navy hover:text-white border-2 border-transparent hover:border-white transition-all hover:shadow-2xl hover:shadow-white/20',
      iconBg: 'bg-white/10 text-white',
      accent: 'border-white/5'
    },
    features: [
      'Tout le Pack Premium',
      'Livraison express 48h chrono',
      'SEO advanced + Google Console',
      'Révisions illimitées 30 jours',
      'Suivi & Coaching 1 mois',
      'Stratégie digitale sur mesure',
      'Support prioritaire 24/7',
    ],
    btnText: 'Expérience VIP',
    gradient: true
  },
];

export default function PricingSection() {
  const scrollToForm = (planName?: string) => {
    if (planName) {
      window.dispatchEvent(new CustomEvent('select-plan', { detail: planName }));
    }
    document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="section-padding bg-slate-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-outfit font-black text-4xl md:text-5xl text-navy mb-6 tracking-tight">
            <WordReveal text="Inaugure ton succès." />
          </h2>
          <RevealOnScroll delay={0.1}>
            <p className="font-montserrat text-slate-500 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Un portfolio professionnel coûte en moyenne 150 000 FCFA sur le marché. Ici, pendant tout le mois d'avril, tu l'obtiens à partir de 18 750 FCFA. Cette offre ne reviendra pas.
            </p>
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full pl-2 pr-5 py-2 shadow-sm">
              <span className="bg-yellow text-navy font-outfit font-black text-xs px-3 py-1.5 rounded-full animate-pulse">OFFRE</span>
              <span className="font-montserrat text-sm text-navy font-semibold">-25% jusqu'au 30 Avril</span>
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <RevealOnScroll key={i} delay={[0, 0.15, 0.3][i]}>
              <div
                className={`group relative h-full flex flex-col rounded-3xl border ${plan.style.border} ${plan.style.bg} ${plan.highlight ? 'ring-2 ring-yellow scale-[1.02] z-20' : 'z-10'} p-8 ${plan.badge ? 'pt-12' : 'pt-8'} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
                style={plan.gradient ? { background: 'linear-gradient(145deg, #05051a 0%, #0a0a2e 100%)' } : {}}
              >
                {/* Visual Glow for Highlighted Card */}
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow via-white to-yellow opacity-50" />
                )}

                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow text-navy font-outfit font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-b-xl shadow-md z-30 whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`font-outfit font-black text-2xl ${plan.style.headerText} mb-2`}>{plan.name}</h3>
                  <p className={`font-montserrat text-sm ${plan.style.descText}`}>{plan.subtitle}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-2">
                   <div className="flex flex-col">
                      <span className={`font-montserrat text-sm line-through ${plan.style.priceOld} opacity-60`}>{plan.oldPrice}</span>
                      <span className={`font-outfit font-black text-4xl ${plan.style.priceMain}`}>{plan.price}</span>
                   </div>
                   <span className="bg-yellow/10 text-yellow text-[10px] font-black px-2 py-1 rounded-md mb-2">{plan.discount}</span>
                </div>

                <div className={`w-full h-px ${plan.style.accent} border-b mb-8`} />

                <ul className="flex-grow space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-3 font-montserrat text-[13px] leading-snug ${plan.style.featureText}`}>
                      <div className={`mt-0.5 rounded-full p-1 flex-shrink-0 ${plan.style.iconBg}`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => scrollToForm(plan.name)} 
                  className={`w-full py-4 rounded-2xl font-outfit font-black text-sm tracking-wide transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 ${plan.style.btn}`}
                >
                  {plan.btnText}
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <div className="mt-16 text-center space-y-2">
            <p className="font-montserrat text-slate-400 text-xs">
              Moyens de paiement acceptés : <span className="text-navy font-bold">MTN Money & Moov Money</span>
            </p>
            <p className="font-montserrat italic text-[11px] text-slate-400">
              * Modalités : 50% à la commande, 50% à la livraison finale. Garantie satisfaction incluse.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
