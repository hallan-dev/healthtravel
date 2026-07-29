import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  surtitre: string;
  title: ReactNode;
  text?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

/**
 * En-tête de section partagé : surtitre filet or + H2 Fraunces + sous-texte.
 */
export default function SectionHeader({ surtitre, title, text, align = 'center', light = false }: SectionHeaderProps) {
  const centered = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-[720px] ${centered ? 'mx-auto text-center' : ''}`}
    >
      <p className={`surtitre ${centered ? 'justify-center' : ''} ${light ? '!text-gold-light' : ''}`}>{surtitre}</p>
      <h2
        className={`mt-5 text-[32px] font-medium leading-[1.12] tracking-[-0.01em] md:text-[46px] ${
          light ? '!text-ivory' : ''
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-[17px] leading-[1.7] md:text-[18px] ${light ? 'text-ivory/80' : 'text-plum-soft'}`}>
          {text}
        </p>
      )}
    </motion.div>
  );
}
