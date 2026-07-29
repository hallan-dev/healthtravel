import { Link } from 'react-router';
import { BadgeCheck, Star, ArrowRight, Languages, GraduationCap, Activity } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { chirurgiens } from '../data/content';

export default function Chirurgiens() {
  return (
    <>
      <Seo title="Nos chirurgiens — Équipe certifiée | Health Travel Tunisie"
        description="Chirurgiens partenaires Health Travel : diplômes vérifiés, plus de 10 ans d'expérience, formation internationale. Fiches publiques et transparentes." />
      <section className="page-head" style={{ padding: '128px 0 48px' }}>
        <div className="container-ht" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span className="section-tag">Notre équipe médicale</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', margin: '10px 0 14px' }}>Nos chirurgiens</h1>
          <p className="text-muted" style={{ fontSize: 16 }}>
            Chaque chirurgien partenaire est soigneusement sélectionné : diplômes vérifiés, expérience internationale, spécialisation confirmée. Leurs fiches sont publiques et transparentes.
          </p>
        </div>
      </section>

      <section style={{ padding: '24px 0 24px' }}>
        <div className="container-ht" style={{ maxWidth: 900 }}>
          {chirurgiens.map((c, i) => (
            <Reveal key={i} delay={0.05}>
              <div className="card" style={{ marginBottom: 24, overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                  <img src={c.photo} alt={`${c.name}, chirurgien partenaire Health Travel`} loading="lazy"
                    style={{ width: '100%', height: '100%', minHeight: 280, objectFit: 'cover' }} />
                  <div style={{ padding: 32 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <h2 style={{ fontSize: 21 }}>{c.name}</h2>
                      <BadgeCheck size={20} style={{ color: 'var(--ht-vert)' }} />
                    </div>
                    <p className="text-muted" style={{ fontSize: 14.5, marginBottom: 18 }}>{c.speciality}</p>
                    <div style={{ display: 'grid', gap: 10, fontSize: 14.5 }}>
                      <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Activity size={16} style={{ color: 'var(--ht-bleu)' }} /> <strong>{c.exp}</strong> · {c.interventions} interventions réalisées</span>
                      <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><GraduationCap size={16} style={{ color: 'var(--ht-bleu)' }} /> {c.diplomas}</span>
                      <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Languages size={16} style={{ color: 'var(--ht-bleu)' }} /> {c.langues}</span>
                      <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <Star size={16} fill="var(--ht-dore)" color="var(--ht-dore)" /> 4,9/5 — avis patients vérifiés
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '18px 0 22px' }}>
                      {c.focus.map(f => <span key={f} className="badge badge-bleu">{f}</span>)}
                    </div>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      <Link to="/rendez-vous" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13.5 }}>Consultation vidéo</Link>
                      <Link to="/devis" className="btn btn-outline" style={{ padding: '10px 18px', fontSize: 13.5 }}>Devis <ArrowRight size={14} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="card" style={{ padding: 28, textAlign: 'center', background: 'var(--ht-bleu-light)', border: 'none' }}>
              <p style={{ fontSize: 15, color: '#374151', maxWidth: 620, margin: '0 auto' }}>
                Vous souhaitez vérifier les diplômes de nos chirurgiens ? Toutes les fiches incluent les universités et numéros d'inscription à l'ordre des médecins. Les documents complets vous sont fournis sur simple demande.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
