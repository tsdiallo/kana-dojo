import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/utils';

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center',
    'border-2 border-dojo-ink',
    'font-black tabular-nums',
    'shrink-0',
  ],
  {
    variants: {
      tone: {
        gold: 'bg-dojo-gold text-dojo-ink border-b-4',
        flame: 'bg-dojo-flame text-white border-b-4',
        ruby: 'bg-dojo-ruby text-white border-b-4',
        jade: 'bg-dojo-jade text-white border-b-4',
        dark: 'bg-dojo-ink text-dojo-paper border-b-4',
        paper: 'bg-dojo-paper text-dojo-ink border-b-4',
      },
      shape: {
        circle: 'rounded-full aspect-square',
        square: 'rounded-dojo-md',
      },
      size: {
        xs: 'h-6 min-w-6 px-1.5 text-[10px] [&_svg]:size-3',
        sm: 'h-7 min-w-7 px-1.5 text-xs [&_svg]:size-3.5',
        md: 'h-9 min-w-9 px-2 text-sm [&_svg]:size-4',
        lg: 'h-11 min-w-11 px-2.5 text-base [&_svg]:size-5',
        xl: 'h-14 min-w-14 px-3 text-lg [&_svg]:size-6',
      },
    },
    defaultVariants: { tone: 'gold', shape: 'circle', size: 'md' },
  },
);

export interface DojoBadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  icon?: ReactNode;
}

export const DojoBadge = forwardRef<HTMLSpanElement, DojoBadgeProps>(
  ({ className, tone, shape, size, icon, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ tone, shape, size }), className)}
      {...props}
    >
      {icon}
      {children}
    </span>
  ),
);
DojoBadge.displayName = 'DojoBadge';
