'use client';

import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/shared/utils/utils';

type Tone = 'gold' | 'flame' | 'ruby' | 'jade' | 'sky' | 'dark';

const strokeForTone: Record<Tone, string> = {
  gold: 'var(--color-dojo-gold)',
  flame: 'var(--color-dojo-flame)',
  ruby: 'var(--color-dojo-ruby)',
  jade: 'var(--color-dojo-jade)',
  sky: 'var(--color-dojo-sky)',
  dark: 'var(--color-dojo-ink)',
};

export interface DojoProgressRingProps {
  /** Value 0–100, clamped. */
  value: number;
  /** Outer pixel size of the ring. */
  size?: number;
  /** Stroke thickness in pixels. */
  thickness?: number;
  tone?: Tone;
  /** Accessible label. */
  label?: string;
  className?: string;
  /** Optional content rendered at the center (e.g. number, icon). */
  children?: ReactNode;
}

export const DojoProgressRing = ({
  value,
  size = 96,
  thickness = 10,
  tone = 'gold',
  label,
  className,
  children,
}: DojoProgressRingProps) => {
  const clamped = Math.max(0, Math.min(100, value));
  const reduce = useReducedMotion();
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center',
        className,
      )}
      style={{ width: size, height: size }}
      role='progressbar'
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className='-rotate-90'
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke='var(--color-dojo-mist)'
          strokeWidth={thickness}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke={strokeForTone[tone]}
          strokeWidth={thickness}
          strokeLinecap='round'
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: 'spring', stiffness: 90, damping: 20 }
          }
        />
      </svg>
      {children && (
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
          {children}
        </div>
      )}
    </div>
  );
};
