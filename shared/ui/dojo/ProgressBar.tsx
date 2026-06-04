'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/utils';

const trackVariants = cva(
  'relative w-full overflow-hidden rounded-dojo-pill border-2 border-dojo-ink bg-dojo-mist',
  {
    variants: {
      size: {
        sm: 'h-2.5',
        md: 'h-3.5',
        lg: 'h-5',
        xl: 'h-7',
      },
    },
    defaultVariants: { size: 'md' },
  },
);

const fillToneClass: Record<
  NonNullable<DojoProgressBarProps['tone']>,
  string
> = {
  gold: 'bg-dojo-gold',
  flame: 'bg-dojo-flame',
  ruby: 'bg-dojo-ruby',
  jade: 'bg-dojo-jade',
  sky: 'bg-dojo-sky',
  dark: 'bg-dojo-ink',
};

export interface DojoProgressBarProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, 'role'>,
    VariantProps<typeof trackVariants> {
  /** Progress value 0–100. Values outside are clamped. */
  value: number;
  tone?: 'gold' | 'flame' | 'ruby' | 'jade' | 'sky' | 'dark';
  /** Accessible label, e.g. "Daily goal progress". */
  label?: string;
  /** Render the value as a small caption on the right. */
  showValue?: boolean;
}

export const DojoProgressBar = forwardRef<HTMLDivElement, DojoProgressBarProps>(
  (
    { className, size, value, tone = 'gold', label, showValue, ...props },
    ref,
  ) => {
    const clamped = Math.max(0, Math.min(100, value));
    const reduce = useReducedMotion();
    return (
      <div className='flex w-full flex-col gap-1.5' ref={ref}>
        {(label || showValue) && (
          <div className='text-dojo-ink/80 flex items-baseline justify-between text-xs font-bold'>
            {label && <span>{label}</span>}
            {showValue && (
              <span className='text-dojo-ink/60 tabular-nums'>
                {Math.round(clamped)}%
              </span>
            )}
          </div>
        )}
        <div
          role='progressbar'
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(clamped)}
          aria-label={label}
          className={cn(trackVariants({ size }), className)}
          {...props}
        >
          <motion.div
            className={cn('rounded-dojo-pill h-full', fillToneClass[tone])}
            initial={{ width: 0 }}
            animate={{ width: `${clamped}%` }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: 'spring', stiffness: 120, damping: 22 }
            }
          />
        </div>
      </div>
    );
  },
);
DojoProgressBar.displayName = 'DojoProgressBar';
