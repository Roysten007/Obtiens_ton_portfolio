import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    subtitle: 'L\'essentiel pour démarrer.',
    badge: null,
    price: '29 000 FCFA',
    style: {
      bg: 'bg-white',
      border: 'border-slate-200',
      headerText: 'text-navy',
      descText: 'text-slate-500',
      priceMain: 'text-navy',
      featureText: 'text-slate-600',
      btn: 'bg-navy text-white hover:bg-navy/90 hover:shadow-xl hover:shadow-navy/20',
      iconBg: 'bg-navy/5 text-navy',
      accent: 'border-navy/10'
    },
    features: [
      'Portfolio 1 page',
      '2 projets présentés',
      'Design personnalisé (couleurs + police)',
      'Mise en ligne sur Vercel',
      'Livraison en 5 jours',
    ],
    btnText: 'Prendre le Starter',
  },
  {
    name: 'PRO',
    subtitle: 'Le choix idéal pour se démarquer.',
    badge: '⭐ RECOMMANDÉ',
    price: '59 000 FCFA',
    style: {
      bg: 'bg-navy',
      border: 'border-yellow/30 shadow-[0_0_20px_rgba(245,197,24,0.1)]',
      headerText: 'text-yellow',
      descText: 'text-white/60',
      priceMain: 'text-white',
      featureText: 'text-white/80',
      btn: 'bg-yellow text-navy hover:bg-white hover:text-navy hover:shadow-xl hover:shadow-yellow/40 btn-shimmer',
      iconBg: 'bg-yellow/10 text-yellow',
      accent: 'border-yellow/20'
    },
    features: [
      'Portfolio multi-pages (4 sections)',
      '3 projets présentés',
      'Design 100% sur-mesure',
      'Narration structurée (C → A → R)',
      'Optimisation LinkedIn + Instagram',
      'Script de prospection (3 messages)',
      'Livraison en 5 jours',
    ],
    btnText: 'Choisir l\'offre Pro',
    highlight: true
  },
  {
    name: 'SIGNATURE',
    subtitle: 'L\'expérience créative ultime.',
    badge: '👑 LE PACK COMPLET',
    price: '119 000 FCFA',
    style: {
      bg: 'bg-[#05051a]', // Ultra Dark Navy
      border: 'border-white/10',
      headerText: 'text-white',
      descText: 'text-white/40',
      priceMain: 'text-white',
      featureText: 'text-white/70',
      btn: 'bg-white text-navy hover:bg-navy hover:text-white border-2 border-transparent hover:border-white transition-all hover:shadow-2xl hover:shadow-white/20',
      iconBg: 'bg-white/10 text-white',
      accent: 'border-white/5'
    },
    features: [
      'Tout le Pack Pro inclus',
      '3 à 5 visuels publicitaires IA',
      'Vidéo avatar IA de présentation',
      'Page de lien personnalisée Vercel',
      'Suivi WhatsApp 30 jours',
      '1 révision gratuite à J+7',
    ],
    btnText: 'Offre Signature',
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
        <div className="text-center mb-16 px-4">
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-navy mb-4 tracking-tight leading-tight">
            <WordReveal text="Inaugure ton succès." />
          </h2>
          <RevealOnScroll delay={0.1}>
            <p className="font-montserrat text-slate-500 max-w-2xl mx-auto mb-8 text-lg leading-relaxed italic">
              Un portfolio professionnel est ton meilleur investissement. Choisis la formule qui te correspond et commence à attirer les bons clients dès cette semaine.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <RevealOnScroll key={i} delay={[0, 0.15, 0.3][i]}>
              <div
                className={`group relative h-full flex flex-col rounded-3xl border ${plan.style.border} ${plan.style.bg} ${plan.highlight ? 'ring-2 ring-yellow scale-[1.02] z-20 shadow-2xl' : 'z-10'} p-8 ${plan.badge ? 'pt-12' : 'pt-8'} transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
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

                <div className="mb-8 text-center md:text-left">
                  <h3 className={`font-outfit font-black text-2xl ${plan.style.headerText} mb-2`}>{plan.name}</h3>
                  <p className={`font-montserrat text-sm ${plan.style.descText}`}>{plan.subtitle}</p>
                </div>

                <div className="mb-8 flex items-baseline justify-center md:justify-start gap-2">
                   <div className="flex flex-col">
                      <span className={`font-outfit font-black text-4xl ${plan.style.priceMain}`}>{plan.price}</span>
                   </div>
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
          <div className="mt-20 max-w-3xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-yellow" />
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="text-5xl md:text-6xl">🛡️</div>
              <div className="text-center md:text-left">
                <h4 className="font-outfit font-black text-xl md:text-2xl text-navy mb-4">
                  Garantie sans risque — Portfolio livré en 5 jours ou remboursé
                </h4>
                <p className="font-montserrat text-slate-500 leading-relaxed text-sm md:text-base">
                  Je m'engage à te livrer un portfolio professionnel en ligne dans les 5 jours suivant le début du projet. Si ce n'est pas le cas dans les 7 jours, je te rembourse intégralement — sans question, sans condition.
                </p>
                <p className="font-montserrat font-bold text-navy mt-4 italic">
                  Je suis confiant dans ce que je livre. C'est toi qui prends zéro risque.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center space-y-2">
            <p className="font-montserrat text-slate-400 text-xs">
              Moyens de paiement acceptés : <span className="text-navy font-bold">MTN Money & Moov Money</span>
            </p>
            <p className="font-montserrat italic text-[11px] text-slate-400">
              * Modalités : 50% à la commande, 50% à la livraison finale.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
