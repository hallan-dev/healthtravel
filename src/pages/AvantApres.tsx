import { useState } from 'react';
import { Link } from 'react-router';
import { ShieldCheck, CalendarCheck, ZoomIn } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';

const filtres = ['Toutes', 'Liposuccion', 'BBL', 'Seins', 'Visage', 'Greffe capillaire', 'Abdominoplastie'];

export default function AvantApres() {
  const [filtre, setFiltre] = useState('Toutes');
  return (
    <>
      <Seo title="Avant / Après — Résultats réels | Health Travel Tunisie"
        description="Galerie avant/après Health Travel : résultats réels, publiés avec consentement, sans retouche. Filtres par intervention, zoom HD." />
      <section className="page-head" style={{ padding: '128px 0 48px' }}>
        <div className="container-ht" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span className="section-tag">Avant / Après</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', margin: '10px 0 14px' }}>Résultats réels, patientes réelles</h1>
          <p className="text-muted" style={{ fontSize: 16 }}>
            Chaque photo est publiée avec le consentement écrit et éclairé de la patiente. Aucune retouche numérique. Résultats à 3, 6 et 12 mois post-opération.
          </p>
        </div>
      </section>

      <section style={{ padding: '16px 0 24px' }}>
        <div className="container-ht" style={{ maxWidth: 880 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 32 }}>
            {filtres.map(f => (
              <button key={f} onClick={() => setFiltre(f)} className="btn"
                style={filtre === f
                  ? { background: 'var(--ht-bleu)', color: '#fff', padding: '9px 18px', fontSize: 13.5 }
                  : { background: 'var(--ht-gris)', color: 'var(--ht-noir)', padding: '9px 18px', fontSize: 13.5 }}>
                {f}
              </button>
            ))}
          </div>

          <Reveal>
            <div className="card" style={{ padding: 'clamp(32px, 5vw, 56px)', textAlign: 'center' }}>
              <ShieldCheck size={40} style={{ color: 'var(--ht-vert)', margin: '0 auto 18px' }} />
              <h2 style={{ fontSize: 22, marginBottom: 12 }}>Confidentialité médicale d'abord</h2>
              <p className="text-muted" style={{ maxWidth: 560, margin: '0 auto 8px', fontSize: 15.5 }}>
                Par respect pour nos patientes, la galerie complète avant/après — filtrable par intervention, avec zoom HD — est présentée en toute confidentialité lors de votre consultation vidéo avec le chirurgien.
              </p>
              <p className="text-muted" style={{ maxWidth: 560, margin: '0 auto 28px', fontSize: 14 }}>
                {filtre !== 'Toutes'
                  ? `Notre galerie "${filtre}" vous sera présentée intégralement pendant votre consultation.`
                  : 'Nos résultats par intervention vous seront présentés pendant votre consultation.'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                <Link to="/rendez-vous" className="btn btn-primary"><CalendarCheck size={16} /> Réserver ma consultation vidéo</Link>
                <Link to="/devis" className="btn btn-outline"><ZoomIn size={16} /> Demander un devis</Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginTop: 28 }}>
              {[
                { t: 'Consentement écrit', d: 'Chaque photo publiée l\'est avec l\'accord écrit et éclairé de la patiente.' },
                { t: 'Aucune retouche', d: 'Nos photos ne sont jamais retouchées numériquement. Jamais.' },
                { t: 'Délais réels', d: 'Chaque photo indique le délai post-opératoire : 3, 6 ou 12 mois.' },
                { t: 'Attentes réalistes', d: 'Les résultats varient selon chaque morphologie. La consultation établit VOS attentes réalistes.' }
              ].map((x, i) => (
                <div key={i} className="card" style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 15, marginBottom: 8 }}>{x.t}</h3>
                  <p className="text-muted" style={{ fontSize: 13.5 }}>{x.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
