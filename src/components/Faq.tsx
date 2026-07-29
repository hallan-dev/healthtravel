import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((it, i) => (
        <div className="faq-item" key={i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{it.q}</span>
            <ChevronDown size={18} style={{ flexShrink: 0, transition: 'transform .3s', transform: open === i ? 'rotate(180deg)' : 'none', color: 'var(--ht-bleu)' }} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div className="faq-a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <p className="text-muted" style={{ padding: '0 32px 18px 4px', fontSize: 15 }}>{it.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
