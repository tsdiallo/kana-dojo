import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/utils';

const cardVariants = cva(
  'relative border-2 border-dojo-ink transition-transform duration-150',
  {
    variants: {
      variant: {
        flat: 'bg-dojo-paper',
        raised: 'border-b-[6px] bg-dojo-paper',
        gold: 'border-b-[6px] bg-dojo-gold text-dojo-ink',
        dark: 'border-b-[6px] bg-dojo-ink text-dojo-paper',
        outline: 'bg-transparent',
      },
      radius: {
        md: 'rounded-dojo-md',
        lg: 'rounded-dojo-lg',
        xl: 'rounded-dojo-xl',
        '2xl': 'rounded-dojo-2xl',
        '3xl': 'rounded-dojo-3xl',
      },
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-6',
        xl: 'p-8',
      },
      interactive: {
        true: 'hover:-translate-y-0.5 hover:cursor-pointer active:translate-y-0',
      },
    },
    defaultVariants: {
      variant: 'raised',
      radius: '2xl',
      padding: 'md',
      interactive: false,
    },
  },
);

export interface DojoCardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export const DojoCard = forwardRef<HTMLDivElement, DojoCardProps>(
  ({ className, variant, radius, padding, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, radius, padding, interactive }),
        className,
      )}
      {...props}
    />
  ),
);
DojoCard.displayName = 'DojoCard';

export const DojoCardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex items-center justify-between gap-3 pb-3', className)}
    {...props}
  />
);

export const DojoCardTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn('text-lg leading-tight font-black tracking-tight', className)}
    {...props}
  />
);

export const DojoCardEyebrow = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      'text-dojo-gold-deep text-xs font-black tracking-widest uppercase',
      className,
    )}
    {...props}
  />
);

export const DojoCardBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('text-dojo-ink/75 text-sm', className)} {...props} />
);

export const DojoCardFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-4 flex items-center justify-between gap-3', className)}
    {...props}
  />
);
