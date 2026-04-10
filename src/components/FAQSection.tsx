import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const faqs = [
  { q: "C'est quoi ce programme ?", a: "Obtiens ton Portfolio est un programme qui te crée un site web professionnel, responsive et optimisé SEO. C'est ta vitrine en ligne, conçue pour inspirer confiance et convertir des visiteurs en clients." },
  { q: 'Quel est le délai de livraison ?', a: 'Le délai est de 5 jours maximum après validation de ton brief et réception du premier paiement.' },
  { q: "Pas de réalisations, c'est un problème ?", a: "Pas du tout. On peut créer ton portfolio avec tes compétences et tes projets personnels. L'important c'est de montrer ton style et ce que tu es capable d'apporter." },
  { q: 'Comment se passe le paiement ?', a: 'Le règlement se fait en deux étapes : 50% à la commande pour lancer la production, et 50% à la livraison finale.' },
  { q: 'Et après la livraison ?', a: "Tu ne restes pas seul. Tu bénéficies d'un suivi pour t'assurer que tu es 100% satisfait de ton nouvel outil de travail en ligne." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-navy">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="font-outfit font-black text-3xl md:text-4xl text-primary-foreground text-center mb-12">
          Questions fréquentes.
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="border border-primary-foreground/10 rounded-xl overflow-hidden bg-white/5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-none"
                >
                  <span className="font-outfit font-bold text-primary-foreground">{faq.q}</span>
                  <span
                    className="text-yellow text-xl transition-transform duration-400"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{ maxHeight: open === i ? '200px' : '0px' }}
                >
                  <p className="font-montserrat text-sm text-primary-foreground/70 px-5 pb-5 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
