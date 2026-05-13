'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { cn } from '@/shared/utils/utils';
import { DojoBadge } from './Badge';

export interface DojoXPBarProps {
  /** Current XP within the level (between 0 and `nextLevelXp`). */
  xp: number;
  /** XP threshold for next level. */
  nextLevelXp: number;
  level: number;
  className?: string;
  /** Render a compact version (smaller height, no label). */
  compact?: boolean;
}

export const DojoXPBar = ({
  xp,
  nextLevelXp,
  level,
  className,
  compact = false,
}: DojoXPBarProps) => {
  const ratio =
    nextLevelXp > 0 ? Math.max(0, Math.min(1, xp / nextLevelXp)) : 0;
  const reduce = useReducedMotion();

  return (
    <div className={cn('flex w-full items-center gap-3', className)}>
      <DojoBadge tone='gold' size={compact ? 'sm' : 'lg'}>
        {level}
      </DojoBadge>

      <div className='relative flex-1'>
        {!compact && (
          <div className='text-dojo-ink/80 mb-1 flex items-baseline justify-between text-xs font-bold'>
            <span className='inline-flex items-center gap-1'>
              <Zap size={12} className='text-dojo-gold-deep fill-current' />
              Level {level}
            </span>
            <span className='text-dojo-ink/60 tabular-nums'>
              {xp.toLocaleString()} / {nextLevelXp.toLocaleString()} XP
            </span>
          </div>
        )}

        <div
          role='progressbar'
          aria-label={`Level ${level} XP progress`}
          aria-valuemin={0}
          aria-valuemax={nextLevelXp}
          aria-valuenow={Math.round(xp)}
          className={cn(
            'rounded-dojo-pill relative w-full overflow-hidden',
            'border-dojo-ink bg-dojo-mist border-2',
            compact ? 'h-3' : 'h-5',
          )}
        >
          <motion.div
            className='rounded-dojo-pill bg-dojo-gold h-full'
            initial={{ width: 0 }}
            animate={{ width: `${ratio * 100}%` }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: 'spring', stiffness: 100, damping: 22 }
            }
          />
          {ratio > 0.05 && !compact && (
            <motion.span
              aria-hidden
              className='text-dojo-ink/70 pointer-events-none absolute inset-y-0 right-2 hidden items-center text-[10px] font-black sm:flex'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {Math.round(ratio * 100)}%
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
};
