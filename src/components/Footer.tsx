export default function Footer() {
  const whatsappUrl = 'https://wa.me/2290143405361';
  
  return (
    <footer className="bg-dark-navy py-14 px-5">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="flex flex-col items-center mb-4">
          <img src="/logo-o.png" alt="Logo" className="w-12 h-12 object-contain rounded-xl mb-3 shadow-lg shadow-white/5" />
          <p className="font-outfit font-black text-2xl text-primary-foreground tracking-tight">
            Obtiens<span className="text-yellow"> · </span>ton<span className="text-yellow"> · </span>Portfolio
          </p>
        </div>
        <p className="font-montserrat italic text-primary-foreground/50 text-sm mb-6">
          On apprend. On ajuste. On avance.
        </p>
        <div className="flex justify-center mb-8">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-montserrat text-sm text-primary-foreground/80 hover:text-yellow flex items-center gap-2 transition-colors duration-300 cursor-none"
          >
            <span className="text-lg">💬</span> Discutons sur WhatsApp
          </a>
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
