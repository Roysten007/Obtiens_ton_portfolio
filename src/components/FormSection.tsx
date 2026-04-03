import { useState, FormEvent, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Check } from 'lucide-react';

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
    prenom: '', nom: '', metier: '', lien: '', message: '', formule: '', paiement: '',
  });

  useEffect(() => {
    const handleSelectPlan = (e: any) => {
      const plan = e.detail;
      setFormData(prev => ({ ...prev, formule: plan }));
    };
    window.addEventListener('select-plan', handleSelectPlan);
    return () => window.removeEventListener('select-plan', handleSelectPlan);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { prenom, nom, metier, formule, paiement } = formData;
    if (!prenom || !nom || !metier || !formule || !paiement) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setLoading(true);
    // WhatsApp pre-filled message
    const text = `Bonjour ! Je souhaite commander la formule ${formule}. Mon nom est ${prenom} ${nom}, je suis ${metier}. Ma motivation : ${formData.message || 'Non précisée'}. Paiement via ${paiement}.`;
    const encodedText = encodeURIComponent(text);
    setTimeout(() => {
      setLoading(false);
      window.open(`https://wa.me/2290143405361?text=${encodedText}`, '_blank');
    }, 1500);
  };

  const set = (key: string, val: string) => setFormData(p => ({ ...p, [key]: val }));

  return (
    <section id="form" className="section-padding bg-slate-50">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-outfit font-black text-3xl md:text-5xl text-navy mb-6 tracking-tight">
          Obtiens toi aussi ton portfolio.
        </h2>
        <RevealOnScroll>
          <p className="font-montserrat text-slate-500 mb-12 text-lg">
            Ta future vitrine en ligne commence ici. Remplis ce court formulaire et je te recontacte sous 24h pour lancer ton projet.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className={`bg-white border border-slate-200 rounded-[2rem] shadow-2xl shadow-navy/5 p-8 md:p-12 text-left space-y-8 ${shake ? 'animate-shake' : ''}`}
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
              <label className="block font-outfit font-bold text-navy text-sm ml-1 mb-1">Ton métier</label>
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

            <div className="float-label-group">
              <input type="url" placeholder=" " value={formData.lien} onChange={e => set('lien', e.target.value)} />
              <label>Lien vers tes travaux (Instagram, Drive...)</label>
            </div>

            <div className="float-label-group">
              <textarea rows={3} placeholder=" " value={formData.message} onChange={e => set('message', e.target.value)} />
              <label>Pourquoi as-tu besoin d'un portfolio ?</label>
            </div>

            <div className="pt-2">
              <p className="font-outfit font-black text-navy mb-4 text-sm flex items-center gap-2">
                <span className="w-6 h-6 bg-navy text-white text-[10px] flex items-center justify-center rounded-full">1</span>
                Formule choisie
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['ESSENTIEL', 'PREMIUM', 'VIP'].map(f => (
                  <label
                    key={f}
                    className={`border-2 rounded-2xl p-4 text-center cursor-pointer transition-all duration-300 relative overflow-hidden group ${formData.formule === f ? 'border-yellow bg-yellow/5' : 'border-slate-100 hover:border-yellow/30'}`}
                  >
                    <input type="radio" name="formule" value={f} className="sr-only" onChange={() => set('formule', f)} checked={formData.formule === f} />
                    <span className={`font-outfit font-black text-sm transition-colors ${formData.formule === f ? 'text-navy' : 'text-slate-400 group-hover:text-navy'}`}>{f}</span>
                    {formData.formule === f && <div className="absolute top-0 right-0 w-8 h-8 bg-yellow text-navy flex items-center justify-center rounded-bl-xl"><Check size={12} strokeWidth={4} /></div>}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-outfit font-black text-navy mb-4 text-sm flex items-center gap-2">
                <span className="w-6 h-6 bg-navy text-white text-[10px] flex items-center justify-center rounded-full">2</span>
                Moyen de paiement
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['MTN Mobile Money', 'Moov Mobile Money'].map(p => (
                  <label
                    key={p}
                    className={`border-2 rounded-2xl p-4 text-center cursor-pointer transition-all duration-300 ${formData.paiement === p ? 'border-navy bg-navy text-white shadow-xl shadow-navy/20' : 'border-slate-100 hover:border-navy/30'}`}
                  >
                    <input type="radio" name="paiement" value={p} className="sr-only" onChange={() => set('paiement', p)} />
                    <span className="font-montserrat font-bold text-sm tracking-tight">{p}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-shimmer relative w-full bg-yellow text-navy font-outfit font-black py-5 rounded-2xl text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow/40 active:translate-y-0 transition-all duration-300 disabled:opacity-70 cursor-pointer overflow-hidden flex items-center justify-center gap-4 group"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  <span>Préparation de ton projet...</span>
                </div>
              ) : (
                <>
                  <span>Obtenir mon portfolio</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </>
              )}
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
