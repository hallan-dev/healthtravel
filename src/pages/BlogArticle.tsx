import { Link, useParams, Navigate } from 'react-router';
import { ChevronRight, ArrowRight, Video } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { getArticle, articles } from '../data/blog';

export default function BlogArticle() {
  const { slug } = useParams();
  const a = getArticle(slug || '');
  if (!a) return <Navigate to="/blog" replace />;
  const related = articles.filter(x => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <Seo title={a.metaTitle} description={a.metaDesc} />
      <section className="page-head" style={{ padding: '128px 0 32px' }}>
        <div className="container-ht" style={{ maxWidth: 760, margin: '0 auto' }}>
          <nav style={{ fontSize: 13, color: 'var(--ht-gris-text)', marginBottom: 18, display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Accueil</Link> <ChevronRight size={13} />
            <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link> <ChevronRight size={13} />
            <span style={{ color: 'var(--ht-noir)' }}>{a.category}</span>
          </nav>
          <span className="badge badge-bleu" style={{ marginBottom: 14 }}>{a.category}</span>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.2, marginBottom: 14 }}>{a.title}</h1>
          <div className="text-muted" style={{ fontSize: 14 }}>Par {a.author} · {a.date} · {a.readTime} de lecture</div>
        </div>
      </section>

      <article className="container-ht prose-ht" style={{ maxWidth: 760, padding: '32px 20px 0' }}>
        <p style={{ fontSize: 17, color: '#111827', fontWeight: 500, marginBottom: 28 }}>{a.intro}</p>
        {a.blocks.map((b, i) => (
          <Reveal key={i}>
            <div>
              {b.h2 && <h2>{b.h2}</h2>}
              {b.p && b.p.map((p, j) => <p key={j}>{p}</p>)}
              {b.list && <ul>{b.list.map((li, j) => <li key={j}>{li}</li>)}</ul>}
              {b.table && (
                <div style={{ overflowX: 'auto' }}>
                  <table>
                    <thead><tr>{b.table.head.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
                    <tbody>{b.table.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
            </div>
          </Reveal>
        ))}
        <Reveal>
          <p style={{ fontWeight: 500, color: 'var(--ht-noir)', fontSize: 16, borderLeft: '3px solid var(--ht-dore)', paddingLeft: 16, margin: '32px 0' }}>{a.conclusion}</p>
        </Reveal>

        <Reveal>
          <div style={{ background: 'linear-gradient(140deg, var(--ht-bleu-dark), var(--ht-bleu))', borderRadius: 'var(--radius-lg)', padding: '32px 28px', color: '#fff', margin: '40px 0', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: 20, margin: '0 0 10px' }}>Une question sur votre projet ?</h2>
            <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 14.5, marginBottom: 20 }}>Consultation vidéo gratuite avec notre équipe, sans engagement.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/devis" className="btn btn-white" style={{ padding: '12px 22px', fontSize: 14 }}>Devis gratuit <ArrowRight size={15} /></Link>
              <Link to="/rendez-vous" className="btn btn-ghost-light" style={{ padding: '12px 22px', fontSize: 14 }}><Video size={15} /> RDV vidéo</Link>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2 style={{ marginTop: 8 }}>À lire également</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {related.map(r => (
              <Link key={r.slug} to={`/blog/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card" style={{ padding: 20 }}>
                  <span className="badge badge-bleu" style={{ marginBottom: 10 }}>{r.category}</span>
                  <div style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.4 }}>{r.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </article>
    </>
  );
}
