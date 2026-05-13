'use client';

import { motion } from 'framer-motion';
import { cn } from '@/shared/utils/utils';

interface GoldenLionProps {
  size?: number;
  className?: string;
  /** Subtle bobbing animation */
  animated?: boolean;
}

/**
 * Mascot for KanaDojo — a friendly golden lion (sensei of the dojo).
 * Pure SVG, no external assets. Uses solid black/white/gold palette.
 */
const GoldenLion = ({
  size = 200,
  className,
  animated = true,
}: GoldenLionProps) => {
  const manePoints = [
    { cx: 100, cy: 30, r: 22 },
    { cx: 132, cy: 36, r: 22 },
    { cx: 158, cy: 56, r: 22 },
    { cx: 174, cy: 86, r: 22 },
    { cx: 178, cy: 118, r: 22 },
    { cx: 170, cy: 148, r: 22 },
    { cx: 150, cy: 170, r: 22 },
    { cx: 120, cy: 180, r: 22 },
    { cx: 80, cy: 180, r: 22 },
    { cx: 50, cy: 170, r: 22 },
    { cx: 30, cy: 148, r: 22 },
    { cx: 22, cy: 118, r: 22 },
    { cx: 26, cy: 86, r: 22 },
    { cx: 42, cy: 56, r: 22 },
    { cx: 68, cy: 36, r: 22 },
  ];

  const Mascot = (
    <svg
      viewBox='0 0 200 200'
      width={size}
      height={size}
      className={cn('drop-shadow-xl', className)}
      role='img'
      aria-label='KanaDojo golden lion mascot'
    >
      <defs>
        <radialGradient id='maneGradient' cx='50%' cy='50%' r='50%'>
          <stop offset='0%' stopColor='#FFD96A' />
          <stop offset='100%' stopColor='#D4A017' />
        </radialGradient>
        <radialGradient id='faceGradient' cx='50%' cy='40%' r='60%'>
          <stop offset='0%' stopColor='#FFE7A8' />
          <stop offset='100%' stopColor='#F5C04A' />
        </radialGradient>
        <linearGradient id='maneStroke' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop offset='0%' stopColor='#B8860B' />
          <stop offset='100%' stopColor='#8B6508' />
        </linearGradient>
      </defs>

      {/* Mane — overlapping golden tufts */}
      <g>
        {manePoints.map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill='url(#maneGradient)'
            stroke='url(#maneStroke)'
            strokeWidth='2'
          />
        ))}
      </g>

      {/* Inner mane ring for depth */}
      <circle
        cx='100'
        cy='105'
        r='62'
        fill='url(#maneGradient)'
        stroke='#8B6508'
        strokeWidth='2.5'
      />

      {/* Ears */}
      <circle cx='66' cy='72' r='14' fill='#D4A017' />
      <circle cx='134' cy='72' r='14' fill='#D4A017' />
      <circle cx='66' cy='73' r='7' fill='#F5C04A' />
      <circle cx='134' cy='73' r='7' fill='#F5C04A' />

      {/* Face */}
      <ellipse
        cx='100'
        cy='112'
        rx='48'
        ry='44'
        fill='url(#faceGradient)'
        stroke='#8B6508'
        strokeWidth='2.5'
      />

      {/* Cheeks (cream lower face) */}
      <ellipse cx='100' cy='130' rx='32' ry='22' fill='#FFF6E0' />

      {/* Eyes */}
      <ellipse cx='82' cy='105' rx='6' ry='7' fill='#1a1a1a' />
      <ellipse cx='118' cy='105' rx='6' ry='7' fill='#1a1a1a' />
      {/* Eye highlights */}
      <circle cx='84' cy='102' r='2' fill='#fff' />
      <circle cx='120' cy='102' r='2' fill='#fff' />

      {/* Nose */}
      <path d='M 92 122 Q 100 116 108 122 Q 100 132 92 122 Z' fill='#1a1a1a' />

      {/* Mouth — friendly smile */}
      <path
        d='M 100 130 L 100 138'
        stroke='#1a1a1a'
        strokeWidth='2.5'
        strokeLinecap='round'
      />
      <path
        d='M 100 138 Q 88 148 80 142'
        stroke='#1a1a1a'
        strokeWidth='2.5'
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M 100 138 Q 112 148 120 142'
        stroke='#1a1a1a'
        strokeWidth='2.5'
        fill='none'
        strokeLinecap='round'
      />

      {/* Whiskers */}
      <g stroke='#8B6508' strokeWidth='1.5' strokeLinecap='round' opacity='0.7'>
        <line x1='60' y1='124' x2='78' y2='128' />
        <line x1='60' y1='132' x2='78' y2='132' />
        <line x1='140' y1='124' x2='122' y2='128' />
        <line x1='140' y1='132' x2='122' y2='132' />
      </g>

      {/* Forehead tuft */}
      <path d='M 92 78 Q 100 68 108 78 Q 100 84 92 78 Z' fill='#B8860B' />
    </svg>
  );

  if (!animated) return Mascot;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      className='inline-block'
    >
      {Mascot}
    </motion.div>
  );
};

export default GoldenLion;
