'use client';

import { ArrowRight, Flame } from 'lucide-react';
import { Link } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks/generic/useAudio';
import { DojoCard, DojoCardEyebrow, DojoCardTitle } from '@/shared/ui/dojo';

interface ContinueCardProps {
  nextLabel: string;
  nextSub: string;
  nextHref: string;
  streak: number;
}

const ContinueCard = ({
  nextLabel,
  nextSub,
  nextHref,
  streak,
}: ContinueCardProps) => {
  const { playClick } = useClick();

  return (
    <Link
      href={nextHref}
      prefetch
      onClick={() => playClick()}
      className='group block'
      aria-label={`Continue with ${nextLabel}`}
    >
      <DojoCard
        variant='gold'
        radius='3xl'
        padding='lg'
        interactive
        className='relative overflow-hidden'
      >
        <div
          aria-hidden
          className='pointer-events-none absolute -top-16 -right-12 h-48 w-48 rounded-full bg-white/30 blur-2xl'
        />
        <div className='relative flex items-center gap-5'>
          <div className='rounded-dojo-2xl border-dojo-ink bg-dojo-paper flex h-16 w-16 shrink-0 items-center justify-center border-2 border-b-[6px]'>
            <span lang='ja' className='text-dojo-ink text-2xl font-black'>
              あ
            </span>
          </div>
          <div className='flex flex-1 flex-col gap-0.5'>
            <DojoCardEyebrow className='text-dojo-ink/70'>
              Continue training
            </DojoCardEyebrow>
            <DojoCardTitle className='text-dojo-ink text-xl sm:text-2xl'>
              {nextLabel}
            </DojoCardTitle>
            <span className='text-dojo-ink/70 text-sm font-bold' lang='ja'>
              {nextSub}
            </span>
          </div>
          <ArrowRight
            className='text-dojo-ink size-6 shrink-0 transition-transform duration-150 group-hover:translate-x-1'
            aria-hidden
          />
        </div>

        <div className='border-dojo-ink/20 text-dojo-ink/70 relative mt-5 flex items-center justify-between border-t-2 border-dashed pt-4 text-sm font-bold'>
          <span className='inline-flex items-center gap-1.5'>
            <Flame className='text-dojo-flame size-4 fill-current' />
            {streak > 0
              ? `${streak}-day streak going`
              : 'Start your streak today'}
          </span>
          <span className='hidden text-xs font-black tracking-widest uppercase sm:inline'>
            Tap to go
          </span>
        </div>
      </DojoCard>
    </Link>
  );
};

export default ContinueCard;
