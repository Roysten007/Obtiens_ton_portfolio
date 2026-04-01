export default function Footer() {
  return (
    <footer className="bg-dark-navy py-14 px-5">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="font-outfit font-black text-xl text-primary-foreground mb-2">
          R<span className="text-yellow">·</span>o<span className="text-yellow">·</span>y
          <span className="text-yellow mx-1">S</span>t<span className="text-yellow">·</span>e<span className="text-yellow">·</span>n
        </p>
        <p className="font-montserrat italic text-primary-foreground/50 text-sm mb-6">
          On apprend. On ajuste. On avance.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          {['Facebook', 'Instagram', 'LinkedIn'].map(s => (
            <a key={s} href="#" className="font-montserrat text-sm text-primary-foreground/50 hover:text-yellow transition-colors duration-300 cursor-none">
              {s}
            </a>
          ))}
        </div>
        <div className="h-px bg-yellow/20 mb-6" />
        <p className="font-montserrat text-xs text-primary-foreground/30">
          © 2026 Roy Sten Design — Tous droits réservés.
        </p>
        <p className="font-montserrat text-xs text-primary-foreground/30 mt-1">
          Propulsé par Roy Sten Design 🖤
        </p>
      </div>
    </footer>
  );
}
