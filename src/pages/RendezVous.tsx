import { useState } from 'react';
import { Video, CheckCircle2, CalendarDays, Clock, ShieldCheck } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';

const creneaux = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30'];

function nextDays(n: number) {
  const days: Date[] = [];
  const d = new Date();
  while (days.length < n) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0) days.push(new Date(d));
  }
  return days;
}

export default function RendezVous() {
  const [day, setDay] = useState<Date | null>(null);
  const [slot, setSlot] = useState('');
  const [form, setForm] = useState({ nom: '', email: '', sujet: '' });
  const [done, setDone] = useState(false);
  const days = nextDays(7);
  const fmt = new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });

  return (
    <>
      <Seo title="Rendez-vous vidéo — Consultation gratuite | Health Travel"
        description="Réservez votre consultation vidéo gratuite avec un chirurgien Health Travel. 30 minutes, sans engagement, dans votre langue." />
      <section className="page-head" style={{ padding: '128px 0 48px' }}>
        <div className="container-ht" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span className="section-tag">Consultation vidéo</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', margin: '10px 0 14px' }}>Prenez rendez-vous avec un chirurgien</h1>
          <p className="text-muted" style={{ fontSize: 16 }}>30 minutes en visioconférence, gratuites et sans engagement. Analyse de votre projet, réponses à vos questions, devis précis à la clé.</p>
        </div>
      </section>

      <section style={{ padding: '16px 0 24px' }}>
        <div className="container-ht" style={{ maxWidth: 720, margin: '0 auto' }}>
          {done ? (
            <Reveal>
              <div className="card" style={{ padding: 40, textAlign: 'center' }}>
                <CheckCircle2 size={52} style={{ color: 'var(--ht-vert)', margin: '0 auto 18px' }} />
                <h2 style={{ fontSize: 22, marginBottom: 10 }}>Rendez-vous confirmé</h2>
                <p className="text-muted" style={{ fontSize: 15.5 }}>
                  {day && fmt.format(day)} à {slot} — le lien visioconférence vous sera envoyé à {form.email} avec un rappel 1h avant.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="card" style={{ padding: 'clamp(24px, 4vw, 36px)' }}>
                <h2 style={{ fontSize: 18, marginBottom: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
                  <CalendarDays size={18} style={{ color: 'var(--ht-bleu)' }} /> 1. Choisissez un jour
                </h2>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                  {days.map((d, i) => (
                    <button key={i} onClick={() => { setDay(d); setSlot(''); }}
                      className="btn"
                      style={day?.getTime() === d.getTime()
                        ? { background: 'var(--ht-bleu)', color: '#fff', padding: '10px 16px', fontSize: 13.5, textTransform: 'capitalize' }
                        : { background: 'var(--ht-gris)', color: 'var(--ht-noir)', padding: '10px 16px', fontSize: 13.5, textTransform: 'capitalize' }}>
                      {fmt.format(d)}
                    </button>
                  ))}
                </div>

                {day && (
                  <>
                    <h2 style={{ fontSize: 18, marginBottom: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
                      <Clock size={18} style={{ color: 'var(--ht-bleu)' }} /> 2. Choisissez un horaire (heure de Tunis)
                    </h2>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                      {creneaux.map(c => (
                        <button key={c} onClick={() => setSlot(c)} className="btn"
                          style={slot === c
                            ? { background: 'var(--ht-bleu)', color: '#fff', padding: '10px 18px', fontSize: 14 }
                            : { background: 'var(--ht-gris)', color: 'var(--ht-noir)', padding: '10px 18px', fontSize: 14 }}>
                          {c}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {slot && (
                  <>
                    <h2 style={{ fontSize: 18, marginBottom: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
                      <Video size={18} style={{ color: 'var(--ht-bleu)' }} /> 3. Vos informations
                    </h2>
                    <div style={{ display: 'grid', gap: 14, marginBottom: 24 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                        <input className="input" placeholder="Nom complet *" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} />
                        <input className="input" type="email" placeholder="Email *" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <input className="input" placeholder="Sujet de la consultation (ex : rhinoplastie)" value={form.sujet} onChange={e => setForm({ ...form, sujet: e.target.value })} />
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%', padding: 14, fontSize: 15 }}
                      disabled={!form.nom || !form.email} onClick={() => setDone(true)}>
                      Confirmer mon rendez-vous vidéo
                    </button>
                  </>
                )}
              </div>
            </Reveal>
          )}

          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
              {['Gratuit et sans engagement', 'Lien Zoom/Meet envoyé par email', 'Chirurgien francophone et anglophone'].map((t, i) => (
                <span key={i} className="text-muted" style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 13 }}>
                  <ShieldCheck size={14} style={{ color: 'var(--ht-vert)' }} /> {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
