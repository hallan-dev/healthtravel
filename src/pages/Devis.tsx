import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Upload, ShieldCheck, Clock, Lock } from 'lucide-react';
import { Seo } from '../components/Seo';
import { interventions } from '../data/interventions';

const steps = ['Intervention', 'Vos informations', 'Photos & message', 'Coordonnées', 'Récapitulatif'];

export default function Devis() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    intervention: '', age: '', poids: '', taille: '', message: '', photos: 0,
    nom: '', email: '', tel: '', pays: '', contact: 'WhatsApp', rgpd: false
  });

  const imc = useMemo(() => {
    const p = parseFloat(data.poids), t = parseFloat(data.taille) / 100;
    if (!p || !t) return null;
    return +(p / (t * t)).toFixed(1);
  }, [data.poids, data.taille]);

  const imcLabel = imc == null ? '' : imc < 18.5 ? 'Insuffisance pondérale' : imc < 25 ? 'Corpulence normale' : imc < 30 ? 'Surpoids' : 'Obésité — le chirurgien évaluera l\'éligibilité';

  const canNext =
    (step === 0 && data.intervention) ||
    (step === 1 && data.age && data.poids && data.taille) ||
    step === 2 ||
    (step === 3 && data.nom && data.email && data.rgpd) ||
    step === 4;

  const next = () => { if (step < 4) setStep(step + 1); else setDone(true); };

  if (done) {
    return (
      <section style={{ padding: '160px 20px 80px', maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
        <Seo title="Demande de devis envoyée | Health Travel" />
        <CheckCircle2 size={56} style={{ color: 'var(--ht-vert)', margin: '0 auto 20px' }} />
        <h1 style={{ fontSize: 28, marginBottom: 14 }}>Votre demande de devis est envoyée</h1>
        <p className="text-muted" style={{ fontSize: 16, marginBottom: 8 }}>
          Merci {data.nom.split(' ')[0]}. Vous recevrez votre devis personnalisé pour <strong>{data.intervention}</strong> sous 24h par {data.contact}.
        </p>
        <p className="text-muted" style={{ fontSize: 14.5, marginBottom: 28 }}>
          Un conseiller dédié vous contactera pour organiser votre consultation vidéo avec le chirurgien.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/rendez-vous" className="btn btn-primary">Réserver ma consultation vidéo</Link>
          <Link to="/" className="btn btn-outline">Retour à l'accueil</Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '128px 20px 80px' }}>
      <Seo title="Devis gratuit — Chirurgie esthétique Tunisie | Health Travel"
        description="Demandez votre devis personnalisé gratuit en 3 minutes. Réponse sous 24h, sans engagement. Chirurgie esthétique premium en Tunisie." />
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <span className="section-tag">Devis gratuit sous 24h</span>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', margin: '8px 0 10px' }}>Votre devis personnalisé</h1>
          <p className="text-muted" style={{ fontSize: 15 }}>3 minutes, 5 étapes, sans engagement.</p>
        </div>

        {/* Progress */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          {steps.map((s, i) => (
            <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? 'var(--ht-bleu)' : 'var(--ht-gris)', transition: 'background .3s' }} />
          ))}
        </div>
        <div className="text-muted" style={{ fontSize: 13, marginBottom: 24, display: 'flex', justifyContent: 'space-between' }}>
          <span>Étape {step + 1} sur 5 : <strong style={{ color: 'var(--ht-noir)' }}>{steps[step]}</strong></span>
          <span>{Math.round(((step + 1) / 5) * 100)} %</span>
        </div>

        <div className="card" style={{ padding: 'clamp(24px, 4vw, 36px)' }}>
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              {step === 0 && (
                <>
                  <h2 style={{ fontSize: 19, marginBottom: 18 }}>Quelle intervention vous intéresse ?</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
                    {interventions.map(iv => (
                      <button key={iv.slug} onClick={() => setData({ ...data, intervention: iv.name })}
                        style={{
                          padding: '14px 16px', borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: 'pointer', textAlign: 'left',
                          border: data.intervention === iv.name ? '2px solid var(--ht-bleu)' : '1.5px solid #E5E7EB',
                          background: data.intervention === iv.name ? 'var(--ht-bleu-light)' : '#fff', color: 'var(--ht-noir)'
                        }}>
                        {iv.name}
                        <div className="text-muted" style={{ fontSize: 12, fontWeight: 400, marginTop: 2 }}>{iv.prix}</div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <h2 style={{ fontSize: 19, marginBottom: 18 }}>Quelques informations médicales</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 6 }}>Âge *</label>
                      <input className="input" type="number" min="18" max="90" placeholder="Ex : 32" value={data.age} onChange={e => setData({ ...data, age: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 6 }}>Poids (kg) *</label>
                      <input className="input" type="number" placeholder="Ex : 68" value={data.poids} onChange={e => setData({ ...data, poids: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 6 }}>Taille (cm) *</label>
                      <input className="input" type="number" placeholder="Ex : 165" value={data.taille} onChange={e => setData({ ...data, taille: e.target.value })} />
                    </div>
                  </div>
                  {imc != null && (
                    <div style={{ marginTop: 16, padding: '14px 18px', background: 'var(--ht-bleu-light)', borderRadius: 10, fontSize: 14.5 }}>
                      Votre IMC : <strong style={{ color: 'var(--ht-bleu)' }}>{imc}</strong> — {imcLabel}
                    </div>
                  )}
                  <p className="text-muted" style={{ fontSize: 13, marginTop: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Lock size={14} /> Ces données médicales sont chiffrées et confidentielles (AES-256, RGPD).
                  </p>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 style={{ fontSize: 19, marginBottom: 8 }}>Photos & message (optionnel)</h2>
                  <p className="text-muted" style={{ fontSize: 14, marginBottom: 18 }}>
                    Des photos de la zone concernée permettent au chirurgien un devis plus précis. Upload chiffré, accès strictement limité à l'équipe médicale.
                  </p>
                  <label style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '36px 20px',
                    border: '2px dashed #D1D5DB', borderRadius: 12, cursor: 'pointer', background: '#FAFAFA', marginBottom: 18
                  }}>
                    <Upload size={26} style={{ color: 'var(--ht-bleu)' }} />
                    <span style={{ fontSize: 14.5, fontWeight: 500 }}>{data.photos > 0 ? `${data.photos} photo(s) ajoutée(s)` : 'Ajouter des photos'}</span>
                    <span className="text-muted" style={{ fontSize: 12.5 }}>JPG ou PNG — chiffrement automatique</span>
                    <input type="file" accept="image/*" multiple hidden onChange={e => setData({ ...data, photos: e.target.files?.length || 0 })} />
                  </label>
                  <textarea className="input" rows={4} placeholder="Décrivez votre projet, vos attentes, vos questions…" value={data.message} onChange={e => setData({ ...data, message: e.target.value })} />
                </>
              )}

              {step === 3 && (
                <>
                  <h2 style={{ fontSize: 19, marginBottom: 18 }}>Vos coordonnées</h2>
                  <div style={{ display: 'grid', gap: 14 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <input className="input" required placeholder="Nom complet *" value={data.nom} onChange={e => setData({ ...data, nom: e.target.value })} />
                      <input className="input" required type="email" placeholder="Email *" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <input className="input" placeholder="Téléphone / WhatsApp" value={data.tel} onChange={e => setForm({ ...data, tel: e.target.value })} />
                      <input className="input" placeholder="Pays de résidence" value={data.pays} onChange={e => setForm({ ...data, pays: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 500, display: 'block', marginBottom: 8 }}>Comment préférez-vous être contactée ?</label>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {['WhatsApp', 'Email', 'Appel téléphonique', 'Visioconférence'].map(c => (
                          <button key={c} type="button" onClick={() => setData({ ...data, contact: c })}
                            className="btn"
                            style={data.contact === c
                              ? { background: 'var(--ht-bleu)', color: '#fff', padding: '9px 16px', fontSize: 13 }
                              : { background: 'var(--ht-gris)', color: 'var(--ht-noir)', padding: '9px 16px', fontSize: 13 }}>
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                    <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, cursor: 'pointer' }}>
                      <input type="checkbox" checked={data.rgpd} onChange={e => setData({ ...data, rgpd: e.target.checked })} style={{ marginTop: 3 }} />
                      <span>J'accepte que mes données soient traitées par Health Travel pour ma demande de devis, conformément à la politique de confidentialité (RGPD). *</span>
                    </label>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h2 style={{ fontSize: 19, marginBottom: 18 }}>Récapitulatif</h2>
                  <div style={{ display: 'grid', gap: 10, fontSize: 14.5 }}>
                    {[
                      ['Intervention', data.intervention],
                      ['Âge', data.age + ' ans'],
                      ['IMC', imc ? `${imc} (${imcLabel})` : '—'],
                      ['Photos', data.photos > 0 ? `${data.photos} photo(s)` : 'Aucune'],
                      ['Message', data.message || '—'],
                      ['Nom', data.nom],
                      ['Email', data.email],
                      ['Contact préféré', data.contact]
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--ht-gris)' }}>
                        <span className="text-muted">{k}</span>
                        <span style={{ fontWeight: 500, textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 20, padding: '14px 18px', background: 'var(--ht-vert-light)', borderRadius: 10, fontSize: 14 }}>
                    <ShieldCheck size={18} style={{ color: 'var(--ht-vert)', flexShrink: 0 }} />
                    Envoi chiffré. Réponse garantie sous 24h ouvrées, sans engagement.
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28, gap: 12 }}>
            <button className="btn btn-outline" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
              style={{ opacity: step === 0 ? 0.4 : 1 }}>
              <ArrowLeft size={15} /> Retour
            </button>
            <button className="btn btn-primary" onClick={next} disabled={!canNext} style={{ opacity: canNext ? 1 : 0.5, padding: '12px 24px' }}>
              {step === 4 ? 'Envoyer ma demande' : 'Continuer'} <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
          {[{ icon: Clock, t: 'Réponse sous 24h' }, { icon: Lock, t: 'Données chiffrées' }, { icon: ShieldCheck, t: 'Sans engagement' }].map((x, i) => (
            <span key={i} className="text-muted" style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 13 }}>
              <x.icon size={14} style={{ color: 'var(--ht-vert)' }} /> {x.t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
