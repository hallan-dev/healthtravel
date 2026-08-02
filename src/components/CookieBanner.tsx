import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'ht_cookie_consent';

type Prefs = { necessary: true; analytics: boolean; marketing: boolean };

declare global {
  interface Window {
    htConsent?: Prefs;
  }
}

function loadConsent(): { prefs: Prefs; decided: boolean } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const prefs = JSON.parse(raw);
      return { prefs: { necessary: true, analytics: !!prefs.analytics, marketing: !!prefs.marketing }, decided: true };
    }
  } catch {
    /* ignore */
  }
  return { prefs: { necessary: true, analytics: false, marketing: false }, decided: false };
}

function saveConsent(prefs: Prefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  window.htConsent = prefs;
  // Ici : activer les outils (Analytics, etc.) uniquement si prefs.analytics === true
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    const { prefs: loaded, decided } = loadConsent();
    setPrefs(loaded);
    window.htConsent = loaded;
    if (!decided) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  // Permet d'ouvrir le bandeau depuis « Gérer mes cookies » (footer)
  useEffect(() => {
    const open = () => { setCustomizing(true); setVisible(true); };
    window.addEventListener('ht:open-cookies', open);
    return () => window.removeEventListener('ht:open-cookies', open);
  }, []);

  if (!visible) return null;

  const acceptAll = () => { const p = { necessary: true as const, analytics: true, marketing: true }; saveConsent(p); setVisible(false); };
  const refuseAll = () => { const p = { necessary: true as const, analytics: false, marketing: false }; saveConsent(p); setVisible(false); };
  const saveCustom = () => { saveConsent(prefs); setVisible(false); };

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,.98)', backdropFilter: 'blur(10px)',
        borderTop: '1px solid #E5E7EB', boxShadow: '0 -8px 32px rgba(0,0,0,.12)',
        padding: '20px 0',
      }}
    >
      <div className="container-ht" style={{ maxWidth: 900 }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <Cookie size={28} style={{ color: 'var(--ht-dore)', flexShrink: 0, marginTop: 2 }} />
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 17, marginBottom: 6 }}>Nous respectons votre vie privée</h2>
            <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.6, marginBottom: customizing ? 16 : 14 }}>
              Nous utilisons des cookies pour faire fonctionner le site et, avec votre accord, mesurer l’audience et améliorer votre expérience. Vous pouvez accepter, refuser ou personnaliser. Consultez notre{' '}
              <Link to="/legal/politique-cookies" style={{ color: 'var(--ht-bleu)' }}>politique des cookies</Link>.
            </p>

            {customizing && (
              <div style={{ display: 'grid', gap: 10, marginBottom: 16 }}>
                {[
                  { key: 'necessary' as const, label: 'Cookies strictement nécessaires', desc: 'Indispensables au fonctionnement du site.', locked: true },
                  { key: 'analytics' as const, label: 'Mesure d’audience', desc: 'Nous aident à comprendre l’usage du site (ex. Google Analytics).', locked: false },
                  { key: 'marketing' as const, label: 'Contenus tiers', desc: 'Vidéos, réseaux sociaux et contenus externes.', locked: false },
                ].map((c) => (
                  <label key={c.key} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, cursor: c.locked ? 'not-allowed' : 'pointer', background: '#FAFAF9' }}>
                    <input
                      type="checkbox"
                      disabled={c.locked}
                      checked={c.key === 'necessary' ? true : prefs[c.key]}
                      onChange={(e) => !c.locked && setPrefs({ ...prefs, [c.key]: e.target.checked })}
                      style={{ marginTop: 3 }}
                    />
                    <span>
                      <span style={{ fontSize: 14.5, fontWeight: 600, display: 'block' }}>{c.label}{c.locked && ' (toujours actifs)'}</span>
                      <span className="text-muted" style={{ fontSize: 13 }}>{c.desc}</span>
                    </span>
                  </label>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <button onClick={acceptAll} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>Tout accepter</button>
              <button onClick={refuseAll} className="btn btn-outline" style={{ padding: '10px 20px', fontSize: 14 }}>Tout refuser</button>
              {customizing ? (
                <button onClick={saveCustom} className="btn btn-outline" style={{ padding: '10px 20px', fontSize: 14 }}>Enregistrer mes choix</button>
              ) : (
                <button onClick={() => setCustomizing(true)} className="btn btn-outline" style={{ padding: '10px 20px', fontSize: 14 }}>Personnaliser</button>
              )}
            </div>
          </div>
          <button onClick={refuseAll} aria-label="Fermer et refuser" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: 4 }}>
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
