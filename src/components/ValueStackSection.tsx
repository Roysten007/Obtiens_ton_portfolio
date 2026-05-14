import RevealOnScroll from './RevealOnScroll';
import WordReveal from './WordReveal';
import { useLaunchOffer } from '@/hooks/useLaunchOffer';

const items = [
  { label: '🎨 Design portfolio sur-mesure', price: '80 000 FCFA' },
  { label: '✍️ Narration structurée des 3 projets', price: '40 000 FCFA' },
  { label: '🌐 Développement + déploiement Vercel', price: '60 000 FCFA' },
  { label: '📱 Optimisation LinkedIn + Instagram', price: '40 000 FCFA' },
  { label: '💬 Script de prospection personnalisé', price: '35 000 FCFA' },
  { label: '🛡️ Garantie satisfaction + révision', price: '40 000 FCFA' },
];

export default function ValueStackSection() {
  const { formattedPrice, currentPrice } = useLaunchOffer();
  const savingsMultiplier = Math.floor(295000 / currentPrice);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10 px-4">
        <div className="text-center mb-16 px-4">
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-navy mb-4 tracking-tight leading-tight">
            <WordReveal text={`Ce que tu reçois vraiment pour ${formattedPrice} FCFA`} />
          </h2>
        </div>

        <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-[2rem] p-6 md:p-12 shadow-2xl shadow-slate-200/50">
          <div className="space-y-6">
            {items.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="flex justify-between items-center gap-4 py-2 border-b border-dashed border-slate-200 group hover:border-yellow transition-colors duration-300">
                  <span className="font-montserrat text-sm md:text-lg text-slate-700 font-medium">
                    {item.label}
                  </span>
                  <span className="font-outfit text-sm md:text-lg text-navy font-black whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t-2 border-navy">
             <div className="flex justify-between items-center gap-4 mb-4">
                <span className="font-outfit font-bold text-lg md:text-xl text-slate-400">
                  Valeur totale empilée :
                </span>
                <span className="font-outfit font-black text-lg md:text-xl text-slate-400 line-through">
                  295 000 FCFA
                </span>
             </div>
             <div className="flex justify-between items-center gap-4 bg-navy text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <span className="font-outfit font-black text-xl md:text-2xl">
                  Tu paies seulement :
                </span>
                <span className="font-outfit font-black text-3xl md:text-4xl text-yellow">
                  {formattedPrice} FCFA
                </span>
             </div>
          </div>

          <div className="mt-12 text-center">
             <RevealOnScroll delay={0.6}>
               <p className="font-montserrat text-slate-400 leading-relaxed italic text-sm md:text-base max-w-3xl mx-auto border-l-4 border-yellow pl-6 py-2">
                {`"Soit ${savingsMultiplier} fois moins que la valeur réelle. Parce que l'objectif n'est pas de te faire payer le prix fort — c'est de te prouver que ça marche."`}
               </p>
             </RevealOnScroll>
          </div>
          
          <div className="mt-12 text-center">
             <button
              onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group font-outfit font-black text-navy hover:text-yellow text-lg inline-flex items-center gap-2 transition-all"
            >
              Réserver ma place 
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
