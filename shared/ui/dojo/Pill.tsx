import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/utils';

const pillVariants = cva(
  [
    'inline-flex items-center gap-1.5',
    'rounded-dojo-pill border-2 border-dojo-ink',
    'border-b-4',
    'font-black tabular-nums',
    'transition-colors duration-150',
  ],
  {
    variants: {
      tone: {
        neutral: 'bg-dojo-paper text-dojo-ink',
        gold: 'bg-dojo-paper text-dojo-ink [&_[data-icon]]:text-dojo-gold-deep',
        flame: 'bg-dojo-paper text-dojo-ink [&_[data-icon]]:text-dojo-flame',
        ruby: 'bg-dojo-paper text-dojo-ink [&_[data-icon]]:text-dojo-ruby',
        jade: 'bg-dojo-paper text-dojo-ink [&_[data-icon]]:text-dojo-jade',
        sky: 'bg-dojo-paper text-dojo-ink [&_[data-icon]]:text-dojo-sky',
        solid: 'bg-dojo-gold text-dojo-ink',
        dark: 'bg-dojo-ink text-dojo-paper',
      },
      size: {
        sm: 'h-7 px-2.5 text-xs [&_svg]:size-3.5',
        md: 'h-8 px-3 text-sm [&_svg]:size-4',
        lg: 'h-10 px-4 text-base [&_svg]:size-5',
      },
    },
    defaultVariants: { tone: 'neutral', size: 'md' },
  },
);

export interface DojoPillProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof pillVariants> {
  icon?: ReactNode;
}

export const DojoPill = forwardRef<HTMLSpanElement, DojoPillProps>(
  ({ className, tone, size, icon, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(pillVariants({ tone, size }), className)}
      {...props}
    >
      {icon && <span data-icon>{icon}</span>}
      <span>{children}</span>
    </span>
  ),
);
DojoPill.displayName = 'DojoPill';
