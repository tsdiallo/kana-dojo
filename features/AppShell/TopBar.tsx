'use client';

import clsx from 'clsx';
import { Flame, Gem, Heart, Moon, Sun, Zap } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks/generic/useAudio';
import { useIsMounted } from '@/shared/hooks/useIsMounted';
import useGameStore from '@/shared/store/useGameStore';
import { useThemePreferences } from '@/features/Preferences';
import { DojoPill } from '@/shared/ui/dojo';

const TopBar = () => {
  const isMounted = useIsMounted();
  const { playClick } = useClick();
  const { theme, setTheme } = useThemePreferences();

  // Defaults shown during SSR / before hydration. The real values fade in
  // once the persisted store hydrates on the client.
  const streak = useGameStore(s => (isMounted ? s.streak : 0));
  const xp = useGameStore(s => (isMounted ? s.xp : 0));
  const gems = useGameStore(s => (isMounted ? s.gems : 0));
  const hearts = useGameStore(s => (isMounted ? s.hearts : 5));
  const maxHearts = useGameStore(s => s.maxHearts);

  return (
    <header
      className={clsx(
        'sticky top-0 z-30 w-full',
        'border-dojo-ink bg-dojo-paper/95 border-b-2 backdrop-blur-md',
      )}
    >
      <div
        className={clsx(
          'mx-auto flex h-14 items-center justify-between gap-3 px-3 sm:h-16 sm:px-6',
          'md:pl-24', // leave room for desktop sidebar
        )}
      >
        {/* Brand — hidden on md+ (sidebar holds the brand mark) */}
        <Link
          href='/'
          prefetch
          onClick={() => playClick()}
          className='flex items-center gap-2 md:hidden'
          aria-label='KanaDojo home'
        >
          <span
            className='rounded-dojo-lg border-dojo-ink bg-dojo-gold inline-flex h-9 w-9 items-center justify-center border-2 border-b-4'
            lang='ja'
          >
            <span className='text-dojo-ink text-base font-black'>道</span>
          </span>
          <span className='text-lg font-black tracking-tight'>
            Kana<span className='text-dojo-gold-deep'>Dojo</span>
          </span>
        </Link>

        {/* Stats */}
        <div className='flex items-center gap-2 sm:gap-3'>
          <DojoPill
            tone='flame'
            size='sm'
            icon={<Flame className='fill-current' />}
            aria-label={`Streak ${streak} days`}
          >
            {streak}
          </DojoPill>
          <DojoPill
            tone='gold'
            size='sm'
            icon={<Zap className='fill-current' />}
            className='xs:inline-flex hidden'
            aria-label={`XP ${xp}`}
          >
            {xp.toLocaleString()}
          </DojoPill>
          <DojoPill
            tone='ruby'
            size='sm'
            icon={<Heart className='fill-current' />}
            className='hidden sm:inline-flex'
            aria-label={`Hearts ${hearts} of ${maxHearts}`}
          >
            {hearts}
          </DojoPill>
          <DojoPill
            tone='sky'
            size='sm'
            icon={<Gem className='fill-current' />}
            className='hidden md:inline-flex'
            aria-label={`Gems ${gems}`}
          >
            {gems}
          </DojoPill>
        </div>

        {/* Quick actions */}
        <div className='flex items-center gap-2 sm:gap-3'>
          <button
            type='button'
            aria-label='Toggle theme'
            onClick={() => {
              playClick();
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            className={clsx(
              'rounded-dojo-lg hidden h-9 w-9 items-center justify-center sm:inline-flex',
              'text-dojo-ink/70 hover:bg-dojo-mist hover:text-dojo-ink transition-colors duration-150',
              'hover:cursor-pointer',
            )}
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href='https://github.com/lingdojo/kana-dojo'
            target='_blank'
            rel='noopener'
            aria-label='View on GitHub'
            onClick={() => playClick()}
            className={clsx(
              'rounded-dojo-lg hidden h-9 w-9 items-center justify-center sm:inline-flex',
              'text-dojo-ink/70 hover:bg-dojo-mist hover:text-dojo-ink transition-colors duration-150',
              'hover:cursor-pointer',
            )}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
