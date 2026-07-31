import { useEffect, useRef } from 'react';

/**
 * Vidéo en lecture automatique, robuste sur mobile.
 *
 * Pourquoi ce composant existe :
 * 1. React n'applique pas toujours l'attribut `muted` comme propriété DOM.
 *    Sur iOS/Safari et Chrome Android, une vidéo non réellement muette
 *    ne peut PAS démarrer en autoplay → on force el.muted = true via ref.
 * 2. En mode économie d'énergie (iOS Low Power Mode), l'autoplay est bloqué
 *    même en muet → on réessaie play() au premier toucher/clic de l'utilisateur.
 */
const pendingVideos = new Set<HTMLVideoElement>();
let globalListenerInstalled = false;

function tryPlay(video: HTMLVideoElement) {
  video.muted = true; // propriété DOM, pas seulement l'attribut
  const p = video.play();
  if (p && typeof p.catch === 'function') {
    p.then(() => pendingVideos.delete(video)).catch(() => {
      // Autoplay bloqué : on réessaiera au premier geste utilisateur
      pendingVideos.add(video);
    });
  }
}

function installGlobalResume() {
  if (globalListenerInstalled || typeof document === 'undefined') return;
  globalListenerInstalled = true;
  const resume = () => {
    pendingVideos.forEach((v) => {
      v.muted = true;
      v.play().then(() => pendingVideos.delete(v)).catch(() => {});
    });
  };
  ['touchstart', 'pointerdown', 'click', 'scroll'].forEach((evt) =>
    document.addEventListener(evt, resume, { passive: true }),
  );
}

interface AutoplayVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const AutoplayVideo = ({ src, ...props }: AutoplayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    installGlobalResume();
    const video = videoRef.current;
    if (!video) return;
    tryPlay(video);
    // Certains navigateurs déclenchent l'autoplay uniquement quand la vidéo est visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.paused) tryPlay(video);
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      pendingVideos.delete(video);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="auto"
      {...props}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default AutoplayVideo;
