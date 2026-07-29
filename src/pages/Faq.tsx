import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { FaqAccordion } from '../components/Faq';
import { faqThemes } from '../data/faq';

export default function Faq() {
  const [theme, setTheme] = useState('Tous');
  const [query, setQuery] = useState('');

  const shown = useMemo(() => {
    let themes = theme === 'Tous' ? faqThemes : faqThemes.filter(t => t.theme === theme);
    if (query.trim()) {
      const q = query.toLowerCase();
      themes = themes.map(t => ({ ...t, items: t.items.filter(i => (i.q + ' ' + i.a).toLowerCase().includes(q)) })).filter(t => t.items.length > 0);
    }
    return themes;
  }, [theme, query]);

  const total = faqThemes.reduce((n, t) => n + t.items.length, 0);

  return (
    <>
      <Seo title="FAQ — 100 questions sur la chirurgie esthétique en Tunisie | Health Travel"
        description="100 réponses d'experts : interventions, prix, séjour en Tunisie, sécurité, résultats, suivi post-opératoire. Health Travel." />
      <section className="page-head" style={{ padding: '128px 0 40px' }}>
        <div className="container-ht" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span className="section-tag">Centre d'aide</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 44px)', margin: '10px 0 14px' }}>Questions fréquentes</h1>
          <p className="text-muted" style={{ fontSize: 16 }}>{total} questions-réponses, classées par thème. Et si vous ne trouvez pas votre réponse, notre équipe vous répond sur WhatsApp en moins de 2 heures.</p>
          <div style={{ position: 'relative', maxWidth: 480, margin: '24px auto 0' }}>
            <Search size={17} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--ht-gris-text)' }} />
            <input className="input" style={{ paddingLeft: 40 }} placeholder="Rechercher une question…" value={query} onChange={e => setQuery(e.target.value)} />
          </div>
        </div>
      </section>

      <section style={{ padding: '16px 0 24px' }}>
        <div className="container-ht" style={{ maxWidth: 840 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 36 }}>
            {['Tous', ...faqThemes.map(t => t.theme)].map(t => (
              <button key={t} onClick={() => setTheme(t)} className="btn"
                style={theme === t
                  ? { background: 'var(--ht-bleu)', color: '#fff', padding: '9px 16px', fontSize: 13 }
                  : { background: 'var(--ht-gris)', color: 'var(--ht-noir)', padding: '9px 16px', fontSize: 13 }}>
                {t}
              </button>
            ))}
          </div>
          {shown.map(t => (
            <Reveal key={t.theme}>
              <div style={{ marginBottom: 36 }}>
                <h2 style={{ fontSize: 20, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                  {t.theme} <span className="badge badge-bleu">{t.items.length} questions</span>
                </h2>
                <div className="card" style={{ padding: '8px 24px' }}>
                  <FaqAccordion items={t.items} />
                </div>
              </div>
            </Reveal>
          ))}
          {shown.length === 0 && (
            <p className="text-muted" style={{ textAlign: 'center', padding: 40 }}>Aucune question ne correspond à votre recherche. Essayez un autre mot-clé ou contactez-nous sur WhatsApp.</p>
          )}
        </div>
      </section>
    </>
  );
}
