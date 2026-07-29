import { useState } from 'react';
import { Play } from 'lucide-react';

export function YoutubeLite({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: '#000' }}>
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      ) : (
        <button onClick={() => setPlay(true)} aria-label={`Lire la vidéo : ${title}`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, cursor: 'pointer', padding: 0, background: '#111' }}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={title} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
          <span style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 64, height: 64, borderRadius: '50%', background: 'rgba(37,99,235,.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,.35)'
          }}>
            <Play size={26} color="#fff" fill="#fff" style={{ marginLeft: 3 }} />
          </span>
        </button>
      )}
    </div>
  );
}
