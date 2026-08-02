import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Seo } from '../components/Seo';
import { Reveal } from '../components/Reveal';
import { legalPages } from '../data/legal';

export default function Legal() {
  const { slug } = useParams();
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) return <Navigate to="/" replace />;

  return (
    <>
      <Seo title={page.metaTitle} description={page.metaDesc} />
      <section style={{ padding: '140px 0 80px', background: 'linear-gradient(180deg, #FDFBF6, #F6F1E5)' }}>
        <div className="container-ht" style={{ maxWidth: 820 }}>
          <Reveal>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--ht-bleu)', textDecoration: 'none', marginBottom: 20 }}>
              <ArrowLeft size={15} /> Retour à l’accueil
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <ShieldCheck size={30} style={{ color: 'var(--ht-vert)' }} />
              <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', margin: 0 }}>{page.title}</h1>
            </div>
            <p className="text-muted" style={{ fontSize: 13.5 }}>Dernière mise à jour : {page.updated}</p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#374151', marginTop: 20 }}>{page.intro}</p>
          </Reveal>

          <div className="card" style={{ padding: 'clamp(24px, 4vw, 44px)', marginTop: 36 }}>
            {page.sections.map((s, i) => (
              <div key={i} style={{ marginBottom: i === page.sections.length - 1 ? 0 : 32 }}>
                <h2 style={{ fontSize: 20, marginBottom: 12 }}>{s.h2}</h2>
                {s.p?.map((para, j) => (
                  <p key={j} style={{ fontSize: 15, lineHeight: 1.75, color: '#4B5563', marginBottom: 10 }}>{para}</p>
                ))}
                {s.list && (
                  <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 8 }}>
                    {s.list.map((item, j) => (
                      <li key={j} style={{ fontSize: 15, lineHeight: 1.7, color: '#4B5563' }}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <Reveal style={{ marginTop: 32, textAlign: 'center' }}>
            <p className="text-muted" style={{ fontSize: 14, marginBottom: 16 }}>
              Une question sur vos données ou vos droits ?
            </p>
            <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
