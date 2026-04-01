import { useState, FormEvent } from 'react';
import RevealOnScroll from './RevealOnScroll';

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { prenom, nom, metier, formule, paiement } = formData;
    if (!prenom || !nom || !metier || !formule || !paiement) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const set = (key: string, val: string) => setFormData(p => ({ ...p, [key]: val }));

  return (
    <section id="form" className="section-padding bg-background">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-outfit font-black text-3xl md:text-4xl text-navy mb-4">
          Prêt(e) à te démarquer ?
        </h2>
        <RevealOnScroll>
          <p className="font-montserrat text-muted-foreground mb-10">
            Tu es à un formulaire de ta vitrine en ligne. Remplis ça en 2 minutes. Je reviens sous 24h.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className={`bg-card rounded-2xl shadow-xl p-8 md:p-10 text-left space-y-5 ${shake ? 'animate-shake' : ''}`}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="float-label-group">
                <input type="text" placeholder=" " value={formData.prenom} onChange={e => set('prenom', e.target.value)} />
                <label>Prénom</label>
              </div>
              <div className="float-label-group">
                <input type="text" placeholder=" " value={formData.nom} onChange={e => set('nom', e.target.value)} />
                <label>Nom</label>
              </div>
            </div>

            <div className="float-label-group">
              <select value={formData.metier} onChange={e => set('metier', e.target.value)} required>
                <option value="" disabled>Choisis ton métier</option>
                {metiers.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              <label>Métier</label>
            </div>

            <div className="float-label-group">
              <input type="url" placeholder=" " value={formData.lien} onChange={e => set('lien', e.target.value)} />
              <label>Lien vers tes réseaux / travaux</label>
            </div>

            <div className="float-label-group">
              <textarea rows={3} placeholder=" " value={formData.message} onChange={e => set('message', e.target.value)} />
              <label>Pourquoi tu veux ton portfolio</label>
            </div>

            {/* Formule radio cards */}
            <div>
              <p className="font-outfit font-bold text-navy mb-3 text-sm">Formule choisie</p>
              <div className="grid grid-cols-3 gap-3">
                {['Essentiel', 'Premium', 'VIP'].map(f => (
                  <label
                    key={f}
                    className={`border-2 rounded-xl p-3 text-center cursor-none transition-all duration-300 ${formData.formule === f ? 'border-yellow bg-yellow/10' : 'border-border hover:border-yellow/50'}`}
                  >
                    <input type="radio" name="formule" value={f} className="sr-only" onChange={() => set('formule', f)} />
                    <span className="font-outfit font-bold text-sm text-navy">{f}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Paiement */}
            <div>
              <p className="font-outfit font-bold text-navy mb-3 text-sm">Moyen de paiement</p>
              <div className="grid grid-cols-2 gap-3">
                {['MTN Mobile Money', 'Moov Mobile Money'].map(p => (
                  <label
                    key={p}
                    className={`border-2 rounded-xl p-3 text-center cursor-none transition-all duration-300 ${formData.paiement === p ? 'border-yellow bg-yellow/10' : 'border-border hover:border-yellow/50'}`}
                  >
                    <input type="radio" name="paiement" value={p} className="sr-only" onChange={() => set('paiement', p)} />
                    <span className="font-montserrat text-sm text-navy">{p}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-shimmer w-full bg-yellow text-navy font-outfit font-bold py-4 rounded-full text-lg hover:-translate-y-[2px] hover:shadow-lg hover:shadow-yellow/30 active:translate-y-0 transition-all duration-300 disabled:opacity-70 cursor-none flex items-center justify-center gap-2"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              ) : null}
              {loading ? 'Envoi en cours...' : 'Envoyer ma candidature →'}
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
