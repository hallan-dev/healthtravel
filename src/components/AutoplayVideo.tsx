import { useEffect, useRef, useState } from 'react';

/**
 * Vidéo en lecture automatique, robuste et légère sur mobile.
 *
 * 1. React n'applique pas toujours l'attribut `muted` comme propriété DOM.
 *    Sur iOS/Safari et Chrome Android, une vidéo non réellement muette
 *    ne peut PAS démarrer en autoplay → on force el.muted = true via ref.
 * 2. En mode économie d'énergie (iOS Low Power Mode), l'autoplay est bloqué
 *    même en muet → on réessaie play() au premier toucher/clic de l'utilisateur.
 * 3. Chargement paresseux : la source vidéo n'est injectée que lorsque
 *    l'élément approche de l'écran. Une vidéo masquée (display:none, ex.
 *    variante desktop d'une section) n'est jamais téléchargée.
 * 4. La lecture est mise en pause dès que la vidéo sort de l'écran :
 *    économie de données mobiles et de batterie.
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
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    installGlobalResume();
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true); // injecte la source → déclenche le téléchargement
            if (video.paused) tryPlay(video);
          } else if (!video.paused) {
            video.pause();
          }
        });
      },
      // Marge de 200px : la vidéo commence à charger juste avant d'entrer à l'écran
      { threshold: 0.15, rootMargin: '200px' },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      pendingVideos.delete(video);
    };
  }, []);

  // Dès que la source est injectée et que la vidéo est visible, on lance la lecture
  useEffect(() => {
    if (shouldLoad && videoRef.current) tryPlay(videoRef.current);
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="auto"
      {...props}
    />
  );
};

export default AutoplayVideo;
