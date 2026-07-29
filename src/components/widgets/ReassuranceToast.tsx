import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, X } from 'lucide-react';

/**
 * Toast de réassurance — apparaît en bas à gauche après 25 s, fermable.
 */
export default function ReassuranceToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 25000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 z-40 flex max-w-[320px] items-start gap-3 rounded-[20px] bg-cream p-4 pr-10 shadow-card"
          style={{ border: '1px solid rgba(217, 185, 130, 0.4)' }}
          role="status"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-peach-mist">
            <Star className="h-5 w-5 fill-star text-star" />
          </div>
          <p className="text-[13px] font-medium leading-snug text-plum-soft">
            <span className="font-bold text-plum">2 400+ patientes accompagnées</span>
            <br />
            Note moyenne 4,9/5
          </p>
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => {
              setVisible(false);
              setDismissed(true);
            }}
            className="absolute right-3 top-3 text-plum-faint transition-colors hover:text-plum"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
