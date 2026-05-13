'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-black tracking-wide uppercase',
    'border-2 border-dojo-ink',
    'transition-all duration-150 ease-out',
    'select-none whitespace-nowrap',
    'hover:cursor-pointer',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:active:translate-y-0',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dojo-gold/40',
    '[&_svg]:size-[1em] [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-dojo-gold text-dojo-ink',
          'border-b-[6px]',
          'active:mb-[6px] active:translate-y-[6px] active:border-b-0',
        ],
        secondary: [
          'bg-dojo-paper text-dojo-ink',
          'border-b-[6px]',
          'active:mb-[6px] active:translate-y-[6px] active:border-b-0',
          'hover:bg-dojo-mist',
        ],
        ghost: [
          'border-transparent bg-transparent text-dojo-ink',
          'hover:bg-dojo-mist',
        ],
        dark: [
          'bg-dojo-ink text-dojo-paper',
          'border-b-[6px]',
          'active:mb-[6px] active:translate-y-[6px] active:border-b-0',
        ],
        danger: [
          'border-dojo-ink bg-dojo-ruby text-white',
          'border-b-[6px]',
          'active:mb-[6px] active:translate-y-[6px] active:border-b-0',
        ],
      },
      size: {
        sm: 'h-9 rounded-dojo-lg px-3 text-xs',
        md: 'h-12 rounded-dojo-xl px-5 text-sm',
        lg: 'h-14 rounded-dojo-2xl px-7 text-base',
        xl: 'h-16 rounded-dojo-2xl px-8 text-lg',
      },
      fullWidth: { true: 'w-full' },
    },
    defaultVariants: { variant: 'primary', size: 'md', fullWidth: false },
  },
);

export interface DojoButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
}

export const DojoButton = forwardRef<HTMLButtonElement, DojoButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      iconLeft,
      iconRight,
      loading,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      >
        {loading ? (
          <span
            aria-hidden
            className='size-[1em] animate-spin rounded-full border-2 border-current border-t-transparent'
          />
        ) : (
          iconLeft
        )}
        <span>{children}</span>
        {!loading && iconRight}
      </button>
    );
  },
);
DojoButton.displayName = 'DojoButton';
