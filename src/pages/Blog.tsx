import { useState } from 'react';
import { Link } from 'react-router';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { articles, blogCategories } from '../data/blog';

export default function Blog() {
  const [cat, setCat] = useState('Tous');
  const list = cat === 'Tous' ? articles : articles.filter(a => a.category === cat);

  return (
    <>
      <Seo title="Blog — Conseils chirurgie esthétique Tunisie | Health Travel"
        description="Guides complets et honnêtes sur la chirurgie esthétique en Tunisie : liposuccion, BBL, rhinoplastie, nutrition post-opératoire, tourisme médical." />
      <section className="page-head" style={{ padding: '128px 0 48px' }}>
        <div className="container-ht" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span className="section-tag">Blog & conseils</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', margin: '10px 0 14px' }}>Nos guides et actualités</h1>
          <p className="text-muted" style={{ fontSize: 16 }}>Des guides complets et honnêtes, rédigés par notre équipe pour vous aider à décider en toute connaissance de cause.</p>
        </div>
      </section>

      <section style={{ padding: '16px 0 24px' }}>
        <div className="container-ht">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 36 }}>
            {blogCategories.map(c => (
              <button key={c} onClick={() => setCat(c)} className="btn"
                style={cat === c
                  ? { background: 'var(--ht-bleu)', color: '#fff', padding: '9px 18px', fontSize: 13.5 }
                  : { background: 'var(--ht-gris)', color: 'var(--ht-noir)', padding: '9px 18px', fontSize: 13.5 }}>
                {c}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {list.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.06}>
                <Link to={`/blog/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <span className="badge badge-bleu" style={{ alignSelf: 'flex-start', marginBottom: 14 }}>{a.category}</span>
                    <h2 style={{ fontSize: 18, marginBottom: 10, lineHeight: 1.4 }}>{a.title}</h2>
                    <p className="text-muted" style={{ fontSize: 14.5, flex: 1 }}>{a.excerpt}</p>
                    <div className="text-muted" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, fontSize: 13 }}>
                      <span>{a.author}</span>
                      <span style={{ color: 'var(--ht-bleu)', fontWeight: 500 }}>{a.readTime} →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {list.length === 0 && (
            <p className="text-muted" style={{ textAlign: 'center', padding: 40 }}>De nouveaux articles arrivent bientôt dans cette catégorie.</p>
          )}
        </div>
      </section>
    </>
  );
}
