import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';

const plans = [
  {
    name: 'ESSENTIEL',
    badge: null,
    oldPrice: '25 000 FCFA',
    price: '18 750 FCFA',
    discount: '-25%',
    bg: 'bg-card',
    border: 'border-border',
    textColor: 'text-navy',
    priceColor: 'text-yellow',
    oldPriceColor: 'text-muted-foreground',
    features: [
      'Site one-page responsive',
      'Design clean aux couleurs du client',
      'Hero, À propos, Services, Contact',
      'Formulaire de contact intégré',
      'SEO de base',
      '1 révision incluse',
      'Livraison 5 jours',
    ],
    btnClass: 'border-2 border-navy text-navy hover:bg-navy hover:text-primary-foreground',
    btnText: 'Choisir Essentiel',
    premium: false,
  },
  {
    name: 'PREMIUM',
    badge: '⭐ LE PLUS CHOISI',
    oldPrice: '50 000 FCFA',
    price: '37 500 FCFA',
    discount: '-25%',
    bg: 'bg-navy',
    border: 'border-yellow border-2 animate-pulse-border',
    textColor: 'text-primary-foreground',
    priceColor: 'text-yellow',
    oldPriceColor: 'text-primary-foreground/50',
    features: [
      'Tout l\'Essentiel',
      'Design selon identité visuelle',
      'Section témoignages',
      'SEO optimisé',
      '3 révisions',
      'Suivi 15 jours',
      'Livraison 3 jours',
    ],
    btnClass: 'bg-yellow text-navy btn-shimmer hover:shadow-lg hover:shadow-yellow/30',
    btnText: 'Choisir Premium',
    premium: true,
  },
  {
    name: 'VIP',
    badge: '👑 EXPÉRIENCE COMPLÈTE',
    oldPrice: '75 000 FCFA',
    price: '56 250 FCFA',
    discount: '-25%',
    bg: '',
    border: 'border-primary-foreground/20',
    textColor: 'text-primary-foreground',
    priceColor: 'text-primary-foreground',
    oldPriceColor: 'text-primary-foreground/50',
    features: [
      'Tout le Premium',
      'Livraison express 48h',
      'SEO avancé + Google Search Console',
      'Révisions illimitées 30 jours',
      'Suivi personnalisé 1 mois',
      'Appel stratégique brief',
      'Priorité absolue',
    ],
    btnClass: 'bg-primary-foreground text-navy hover:shadow-lg',
    btnText: 'Choisir VIP',
    premium: false,
    gradient: true,
  },
];

export default function PricingSection() {
  const scrollToForm = () => document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="font-outfit font-black text-3xl md:text-4xl text-navy mb-4">
          <WordReveal text="Choisis ta formule." />
        </h2>
        <RevealOnScroll delay={0.1}>
          <p className="font-montserrat text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Un portfolio professionnel coûte en moyenne 150 000 FCFA sur le marché. Ici, pendant tout le mois d'avril, tu l'obtiens à partir de 18 750 FCFA. Cette offre ne reviendra pas.
          </p>
          <div className="inline-block bg-yellow/10 border border-yellow/30 rounded-full px-5 py-2 mb-14">
            <span className="font-montserrat text-sm text-yellow font-medium">🎉 Offre de lancement -25% — Expire le 30 avril 2026</span>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <RevealOnScroll key={i} delay={[0, 0.15, 0.3][i]}>
              <div
                className={`relative rounded-2xl border p-8 ${plan.border} ${plan.bg} hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-350`}
                style={plan.gradient ? { background: 'linear-gradient(180deg, hsl(240,100%,29.4%) 0%, hsl(240,100%,12.5%) 100%)' } : {}}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow text-navy font-outfit font-bold text-xs px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <h3 className={`font-outfit font-bold text-lg ${plan.textColor} mb-4 mt-2`}>{plan.name}</h3>
                <div className={`font-montserrat text-sm line-through ${plan.oldPriceColor} mb-1`}>{plan.oldPrice}</div>
                <div className={`font-outfit font-black text-3xl ${plan.priceColor} mb-1`}>{plan.price}</div>
                <span className="inline-block bg-yellow/20 text-yellow font-outfit font-bold text-xs px-2 py-0.5 rounded mb-6">{plan.discount}</span>
                <ul className="text-left space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`font-montserrat text-sm ${plan.textColor === 'text-navy' ? 'text-muted-foreground' : 'text-primary-foreground/80'} flex items-start gap-2`}>
                      <span className="text-yellow mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToForm} className={`w-full py-3 rounded-full font-outfit font-bold transition-all duration-300 hover:-translate-y-[2px] cursor-none ${plan.btnClass}`}>
                  {plan.btnText}
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <p className="font-montserrat italic text-sm text-muted-foreground mt-10">
            Paiement MTN ou Moov Mobile Money. 50% commande · 50% livraison. Prix normaux reprennent le 1er mai 2026.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
