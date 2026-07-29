import { Link, useParams, Navigate } from 'react-router';
import { ArrowRight, Check, X, Clock, Plane, Video, ChevronRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { FaqAccordion } from '../components/Faq';
import { getIntervention, interventions } from '../data/interventions';
import { SejourMedicalSection, OffreCombineeSection } from '../components/OffreEtSejour';
import { interventionImage } from './Interventions';

export default function InterventionDetail() {
  const { slug } = useParams();
  const iv = getIntervention(slug || '');
  if (!iv) return <Navigate to="/interventions" replace />;

  const related = interventions.filter(x => x.slug !== iv.slug && x.category === iv.category).slice(0, 3);

  return (
    <>
      <Seo title={iv.metaTitle} description={iv.metaDesc} />

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '52vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: 'var(--ht-noir)' }}>
        <img src={interventionImage(iv.slug)} alt={`${iv.name} en Tunisie`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,20,40,.35), rgba(10,20,40,.85))' }} />
        <div className="container-ht" style={{ position: 'relative', zIndex: 2, padding: '150px 20px 56px', width: '100%' }}>
          <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', marginBottom: 16, display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Accueil</Link> <ChevronRight size={13} />
            <Link to="/interventions" style={{ color: 'inherit', textDecoration: 'none' }}>Interventions</Link> <ChevronRight size={13} />
            <span style={{ color: '#fff' }}>{iv.name}</span>
          </nav>
          <span className="badge" style={{ marginBottom: 14, background: 'rgba(212,175,55,.18)', color: '#F0D98C', border: '1px solid rgba(212,175,55,.45)' }}>{iv.category}</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 600, maxWidth: 720, lineHeight: 1.15 }}>
            {iv.name} en Tunisie
          </h1>
          <p style={{ color: 'rgba(255,255,255,.85)', maxWidth: 600, marginTop: 12, fontSize: 16 }}>{iv.tagline}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 24 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: 14 }}><Clock size={16} style={{ color: 'var(--ht-dore)' }} /> {iv.duree}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: 14 }}><Plane size={16} style={{ color: 'var(--ht-dore)' }} /> Séjour médical adapté</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: 14, fontWeight: 600 }}>{iv.prix}</span>
          </div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div style={{ position: 'sticky', top: 68, zIndex: 30, background: 'rgba(255,255,255,.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--ht-gris)' }}>
        <div className="container-ht" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, fontWeight: 500 }}>{iv.name} · <span style={{ color: 'var(--ht-dore)' }}>Tarif sur devis</span></span>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link to="/rendez-vous" className="btn btn-outline" style={{ padding: '9px 16px', fontSize: 13 }}><Video size={14} /> RDV vidéo</Link>
            <Link to="/devis" className="btn btn-primary" style={{ padding: '9px 16px', fontSize: 13 }}>Obtenir mon devis personnalisé</Link>
          </div>
        </div>
      </div>

      <div className="container-ht" style={{ maxWidth: 880, padding: '56px 20px 0' }}>
        {/* Description */}
        <Reveal>
          <h2 style={{ fontSize: 24, marginBottom: 16 }}>Qu'est-ce que {iv.name.toLowerCase().startsWith('le') || iv.name.toLowerCase().startsWith('la') ? iv.name : `l'intervention ${iv.name}`} ?</h2>
          {iv.description.map((p, i) => <p key={i} style={{ color: '#374151', marginBottom: 16, fontSize: 15.5 }}>{p}</p>)}
        </Reveal>

        {/* Indications & Contre-indications */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, margin: '44px 0' }}>
            <div className="card" style={{ padding: 26, borderTop: '3px solid var(--ht-vert)' }}>
              <h3 style={{ fontSize: 17, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Check size={18} style={{ color: 'var(--ht-vert)' }} /> Qui est candidat idéal ?
              </h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {iv.indications.map((x, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, alignItems: 'flex-start' }}>
                    <Check size={15} style={{ color: 'var(--ht-vert)', flexShrink: 0, marginTop: 3 }} /> {x}
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: 26, borderTop: '3px solid #EF4444' }}>
              <h3 style={{ fontSize: 17, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <X size={18} style={{ color: '#EF4444' }} /> Contre-indications
              </h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {iv.contreIndications.map((x, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14.5, alignItems: 'flex-start' }}>
                    <X size={15} style={{ color: '#EF4444', flexShrink: 0, marginTop: 3 }} /> {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Déroulement */}
        <Reveal>
          <h2 style={{ fontSize: 24, margin: '20px 0 24px' }}>Déroulement de l'intervention</h2>
          <div style={{ display: 'grid', gap: 0 }}>
            {iv.deroulement.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, position: 'relative', paddingBottom: i < iv.deroulement.length - 1 ? 28 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="tl-dot" style={{ background: 'var(--grad-miami)', color: '#fff', boxShadow: '0 4px 12px rgba(15,181,174,.3)' }}>{i + 1}</div>
                  {i < iv.deroulement.length - 1 && <div style={{ width: 2, flex: 1, background: 'var(--ht-bleu-light)', marginTop: 4 }} />}
                </div>
                <div style={{ paddingBottom: 4 }}>
                  <h3 style={{ fontSize: 16, marginBottom: 4 }}>{s.t}</h3>
                  <p className="text-muted" style={{ fontSize: 14.5 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 20, padding: '14px 18px', background: 'var(--ht-bleu-light)', borderRadius: 'var(--radius-md)', fontSize: 14.5 }}>
            <Clock size={16} style={{ color: 'var(--ht-bleu)' }} /> Durée de l'intervention : <strong>{iv.duree}</strong>
          </div>
        </Reveal>

        {/* Suites */}
        <Reveal>
          <h2 style={{ fontSize: 24, margin: '48px 0 24px' }}>Suites opératoires et convalescence</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {iv.suites.map((s, i) => (
              <div key={i} className="card" style={{ padding: 20 }}>
                <span className="badge badge-bleu" style={{ marginBottom: 10 }}>{s.phase}</span>
                <p style={{ fontSize: 14, color: '#374151' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Résultats */}
        <Reveal>
          <h2 style={{ fontSize: 24, margin: '48px 0 20px' }}>Résultats attendus</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {iv.resultats.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '16px 18px', background: 'var(--ht-vert-light)', borderRadius: 'var(--radius-md)', fontSize: 14.5 }}>
                <Check size={16} style={{ color: 'var(--ht-vert)', flexShrink: 0, marginTop: 3 }} /> {r}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Prix */}
        <Reveal>
          <div style={{
            margin: '48px 0', padding: 'clamp(28px, 4vw, 40px)', borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(140deg, var(--ht-dore-light), #fff)', border: '1px solid #F0E3B2'
          }}>
            <h2 style={{ fontSize: 22, marginBottom: 8 }}>Tarif & séjour médical</h2>
            <div className="grad-text-gold" style={{ fontFamily: 'Poppins', fontSize: 30, fontWeight: 700, marginBottom: 14 }}>{iv.prix}</div>
            <p className="text-muted" style={{ fontSize: 14.5, marginBottom: 8 }}>{iv.prixInclus}</p>
            <p style={{ fontSize: 13.5, color: '#92700e', fontWeight: 500, marginBottom: 22 }}>Chaque dossier étant unique, un devis personnalisé gratuit vous est proposé sous 24h, sans engagement.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link to="/devis" className="btn btn-primary">Obtenir mon devis personnalisé <ArrowRight size={15} /></Link>
              <a href="https://wa.me/21655000260" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp</a>
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <h2 style={{ fontSize: 24, margin: '48px 0 20px' }}>FAQ — {iv.name}</h2>
          <div className="card" style={{ padding: '8px 24px' }}>
            <FaqAccordion items={iv.faq} />
          </div>
        </Reveal>

        {/* Séjour médical + offre combinée */}
        <SejourMedicalSection />
        <OffreCombineeSection />

        {/* Related */}
        {related.length > 0 && (
          <Reveal>
            <h2 style={{ fontSize: 22, margin: '56px 0 20px' }}>Interventions associées</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
              {related.map(r => (
                <Link key={r.slug} to={`/interventions/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card" style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{r.name}</div>
                      <div className="text-muted" style={{ fontSize: 12.5, marginTop: 2 }}>Tarif sur devis personnalisé</div>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--ht-bleu)', flexShrink: 0 }} />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </>
  );
}
