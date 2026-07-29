import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { interventions, categories } from '../data/interventions';
import { SejourMedicalSection, OffreCombineeSection } from '../components/OffreEtSejour';

const imgs: Record<string, string> = {
  'liposuccion': '/assets/interventions/liposuccion.webp',
  'bbl': '/assets/interventions/bbl.webp',
  'abdominoplastie': '/assets/interventions/abdominoplastie.webp',
  'mommy-makeover': '/assets/interventions/mommy-makeover.webp',
  'augmentation-mammaire': '/assets/interventions/augmentation-mammaire.webp',
  'reduction-mammaire': '/assets/interventions/reduction-mammaire.webp',
  'lifting-mammaire': '/assets/interventions/lifting-mammaire.webp',
  'rhinoplastie': '/assets/interventions/rhinoplastie.webp',
  'blepharoplastie': '/assets/interventions/blepharoplastie.webp',
  'lifting-visage': '/assets/interventions/lifting-visage.webp',
  'lifting-bras': '/assets/interventions/lifting-bras.webp',
  'lifting-cuisses': '/assets/interventions/lifting-cuisses.webp',
  'lipodeme': '/assets/interventions/lipodeme.webp',
  'greffe-capillaire': '/assets/interventions/greffe-capillaire.webp',
  'chirurgie-intime': '/assets/interventions/chirurgie-intime.webp',
  'sleeve': '/assets/interventions/sleeve.webp',
  'bypass': '/assets/interventions/bypass.webp',
  'body-lift': '/assets/interventions/body-lift.webp',
  'nymphoplastie': '/assets/interventions/nymphoplastie.webp',
  'implants-dentaires': '/assets/interventions/implants-dentaires.webp',
  'facettes-dentaires': '/assets/interventions/facettes-dentaires.webp',
  'fiv': '/assets/interventions/fiv.webp',
  'botox': '/assets/interventions/botox.webp'
};

const catBadge: Record<string, string> = {
  'Silhouette': 'badge-lagoon', 'Seins': 'badge-sunset', 'Visage': 'badge-violet',
  'Cheveux': 'badge-miami', 'Intime': 'badge-rose',
  'Obésité': 'badge-bleu', 'Dentaire': 'badge-vert', 'Fertilité': 'badge-gold', 'Médecine esthétique': 'badge-miami'
};

export function interventionImage(slug: string) {
  return imgs[slug] || '/assets/founder.webp';
}

export default function Interventions() {
  const [cat, setCat] = useState<string>('Toutes');
  const list = cat === 'Toutes' ? interventions : interventions.filter(i => i.category === cat);

  return (
    <>
      <Seo title="Nos interventions — Chirurgie esthétique Tunisie | Health Travel"
        description="Liposuccion, BBL, abdominoplastie, rhinoplastie, augmentation mammaire, greffe capillaire… Découvrez nos 15 interventions de chirurgie esthétique en Tunisie." />
      <section className="page-head" style={{ padding: '128px 0 40px' }}>
        <div className="container-ht" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span className="section-tag">Chirurgie esthétique en Tunisie</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', margin: '10px 0 14px' }}>Nos interventions</h1>
          <p className="text-muted" style={{ fontSize: 16 }}>
            Chaque intervention est réalisée par un chirurgien spécialisé, dans une clinique certifiée, avec un protocole de sécurité strict et un suivi post-opératoire illimité.
          </p>
        </div>
      </section>

      <section style={{ padding: '24px 0 24px' }}>
        <div className="container-ht">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 36 }}>
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)} className="btn"
                style={cat === c
                  ? { background: 'var(--ht-bleu)', color: '#fff', padding: '9px 18px', fontSize: 13.5 }
                  : { background: 'var(--ht-gris)', color: 'var(--ht-noir)', padding: '9px 18px', fontSize: 13.5 }}>
                {c}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {list.map((iv, i) => (
              <Reveal key={iv.slug} delay={(i % 3) * 0.06}>
                <Link to={`/interventions/${iv.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card-glow" style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: 180, overflow: 'hidden' }}>
                      <img src={interventionImage(iv.slug)} alt={`${iv.name} en Tunisie — Health Travel`} loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 18%' }} />
                    </div>
                    <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <h2 style={{ fontSize: 16.5 }}>{iv.name}</h2>
                        <span className={`badge ${catBadge[iv.category] || 'badge-miami'}`}>{iv.category}</span>
                      </div>
                      <p className="text-muted" style={{ fontSize: 14, flex: 1 }}>{iv.tagline}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                        <span style={{ fontSize: 13, color: 'var(--ht-dore)', fontWeight: 600 }}>Tarif sur devis</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13.5, color: 'var(--ht-bleu)', fontWeight: 500 }}>
                          Découvrir <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Séjour médical + offre interventions combinées */}
      <section style={{ padding: '8px 0 16px' }}>
        <div className="container-ht" style={{ maxWidth: 980 }}>
          <SejourMedicalSection />
          <OffreCombineeSection />
        </div>
      </section>
    </>
  );
}
