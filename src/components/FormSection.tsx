import { useState, FormEvent } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { useLaunchOffer } from '@/hooks/useLaunchOffer';

const metiers = [
  'Graphiste / Designer',
  'Photographe',
  'Créateur de contenu',
  'Community Manager',
  'Monteur Vidéo',
  'Copywriter / Rédacteur',
  'Consultant / Coach',
  'Développeur / No-code',
  'Autre',
];

export default function FormSection() {
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [formData, setFormData] = useState({
    prenom: '', nom: '', metier: '',
  });
  const { isExpired, formattedPrice } = useLaunchOffer();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { prenom, nom, metier } = formData;
    if (!prenom || !nom || !metier) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setLoading(true);
    
    // WhatsApp message
    const text = `Bonjour ! Je souhaite obtenir mon portfolio (${isExpired ? 'Offre en cours' : 'Offre Lancement'} ${formattedPrice} FCFA). \n\nPrénom : ${prenom} \nNom : ${nom} \nProfession : ${metier}`;
    const encodedText = encodeURIComponent(text);
    
    setTimeout(() => {
      setLoading(false);
      window.open(`https://wa.me/2290143405361?text=${encodedText}`, '_blank');
    }, 1500);
  };

  const set = (key: string, val: string) => setFormData(p => ({ ...p, [key]: val }));

  return (
    <section id="form" className="section-padding bg-slate-50">
      <div className="container mx-auto max-w-2xl text-center px-4">
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-navy mb-6 tracking-tight">
          Réserve ta place maintenant.
        </h2>
        <RevealOnScroll>
          <p className="font-montserrat text-slate-500 mb-12 text-lg">
            Ta future vitrine en ligne commence ici. Remplis ces 3 informations et je te recontacte sur WhatsApp sous 24h.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className={`bg-white border border-slate-200 rounded-[3rem] shadow-2xl shadow-navy/5 p-8 md:p-14 text-left space-y-8 ${shake ? 'animate-shake' : ''}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="float-label-group">
                <input type="text" placeholder=" " value={formData.prenom} onChange={e => set('prenom', e.target.value)} required />
                <label>Prénom</label>
              </div>
              <div className="float-label-group">
                <input type="text" placeholder=" " value={formData.nom} onChange={e => set('nom', e.target.value)} required />
                <label>Nom</label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-outfit font-bold text-navy text-sm ml-1 mb-1">Ton métier (Profession)</label>
              <div className="relative">
                <select 
                  className="w-full h-14 px-5 rounded-2xl border-2 border-slate-100 bg-slate-50/50 font-montserrat text-navy focus:border-yellow outline-none transition-all appearance-none"
                  value={formData.metier} 
                  onChange={e => set('metier', e.target.value)} 
                  required
                >
                  <option value="" disabled>Que fais-tu dans la vie ?</option>
                  {metiers.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-navy/40">
                   <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                   </svg>
                </div>
              </div>
            </div>

            {/* Fixed Offer Display */}
            <div className="bg-navy rounded-3xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="font-outfit font-black text-lg text-[#C9A84C]">{isExpired ? 'Offre en cours' : 'Offre Lancement'}</p>
                <p className="font-montserrat text-xs text-white/60">Livraison en 5 jours</p>
              </div>
              <div className="text-3xl font-outfit font-black text-[#C9A84C]">
                {formattedPrice} <span className="text-sm font-normal text-[#C9A84C]/70">FCFA</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-shimmer relative w-full bg-yellow text-navy font-outfit font-black py-6 rounded-2xl text-xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,204,0,0.4)] active:scale-95 transition-all duration-300 disabled:opacity-70 cursor-pointer overflow-hidden flex items-center justify-center gap-4 group shadow-xl"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  <span>Mise en relation...</span>
                </div>
              ) : (
                <>
                  <span>🚀 Réserver ma place maintenant</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </>
              )}
            </button>
            <p className="text-center font-montserrat text-[10px] text-slate-400">
               * Tu seras redirigé vers WhatsApp pour finaliser ta demande.
            </p>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
