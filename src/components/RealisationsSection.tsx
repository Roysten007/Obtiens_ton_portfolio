import RevealOnScroll from './RevealOnScroll';

const projects = [
  { 
    name: 'DAKO Clovisse', 
    role: 'Étudiant en 2ème année BTP', 
    image: '/dako_real.png', 
    link: 'https://dako-clovisse.vercel.app/' 
  },
  { 
    name: 'KIKI Tchédrack', 
    role: 'Copywriter Expert Immobilier', 
    image: '/kiki_real.png', 
    link: 'https://tchedrack-kiki.vercel.app' 
  },
];

export default function RealisationsSection() {
  return (
    <section id="realisations" className="section-padding bg-navy">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="font-outfit font-black text-3xl md:text-4xl text-primary-foreground mb-4">
          Ils ont sauté le pas.
        </h2>
        <RevealOnScroll>
          <p className="font-montserrat text-primary-foreground/60 mb-14">
            Des créatifs qui ont choisi d'être visibles.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {projects.map((p, i) => (
            <RevealOnScroll key={i} delay={i * 0.15}>
              <div className="group bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow/10 transition-all duration-350">
                <div className="aspect-[4/3] bg-primary-foreground/5 flex items-center justify-center overflow-hidden">
                  {p.image ? (
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <span className="text-primary-foreground/20 text-6xl">🖥</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-outfit font-bold text-primary-foreground mb-1">{p.name}</h3>
                  <p className="font-montserrat text-sm text-primary-foreground/50 mb-4">{p.role}</p>
                  <a 
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-yellow/50 text-yellow font-montserrat text-sm px-4 py-2 rounded-full hover:bg-yellow hover:text-navy transition-all duration-300 cursor-none"
                  >
                    Voir le site
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <p className="font-montserrat italic text-sm text-primary-foreground/40 mt-10">
            Portfolios réalisés dans le cadre du programme Obtiens ton Portfolio.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
