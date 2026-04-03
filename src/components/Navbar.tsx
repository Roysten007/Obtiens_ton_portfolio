import { useEffect, useState } from 'react';
import { useScrollProgress } from '@/hooks/useAnimations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Programme', href: '#problem' },
    { label: 'Pour qui', href: '#pour-qui' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Candidater', href: '#form' },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <div className="h-[3px] bg-yellow transition-all duration-100" style={{ width: `${progress}%` }} />

      <nav
        className="container mx-auto flex items-center justify-between px-5 py-4 transition-all duration-400"
        style={{
          backgroundColor: scrolled ? 'hsl(240,100%,29.4%)' : 'transparent',
          backdropFilter: scrolled ? 'none' : 'blur(8px)',
        }}
      >
        {/* Logo */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-outfit font-black text-xl text-primary-foreground animate-fade-up flex items-center gap-2" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <img src="/logo-o.png" alt="Logo" className="w-8 h-8 object-contain rounded-lg" />
          <span>Obtiens<span className="text-yellow"> · </span>ton<span className="text-yellow"> · </span>Portfolio</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="font-montserrat text-sm text-primary-foreground/80 hover:text-yellow transition-colors duration-300 cursor-none">
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#form')}
          className="hidden md:block bg-yellow text-navy font-outfit font-bold text-sm px-5 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/30 active:translate-y-0 transition-all duration-300 animate-fade-up cursor-none"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          Obtenir mon portfolio
        </button>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary-foreground cursor-none" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy px-5 pb-6 flex flex-col gap-4">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="font-montserrat text-primary-foreground/80 hover:text-yellow transition-colors text-left cursor-none">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#form')} className="bg-yellow text-navy font-outfit font-bold px-5 py-2.5 rounded-full w-fit cursor-none">
            Obtenir mon portfolio
          </button>
        </div>
      )}
    </header>
  );
}
