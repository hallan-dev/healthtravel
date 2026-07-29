import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^([^\d]*)([\d\s.,]+)(.*)$/);
    if (!match) { setDisplay(value); return; }
    const [, prefix, numPart, suffix] = match;
    const target = parseFloat(numPart.replace(/[\s]/g, '').replace(',', '.'));
    if (isNaN(target)) { setDisplay(value); return; }
    const isFloat = numPart.includes(',') || numPart.includes('.');
    const hasSpace = numPart.includes(' ');
    const dur = 1600;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = target * eased;
      let txt = isFloat ? cur.toFixed(1).replace('.', ',') : Math.round(cur).toString();
      if (hasSpace && !isFloat) txt = Math.round(cur).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      setDisplay(prefix + txt + suffix);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}
