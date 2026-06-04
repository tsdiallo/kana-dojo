'use client';

import clsx from 'clsx';
import { Link, usePathname } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks/generic/useAudio';
import { isActive, navItems } from './navItems';

const DesktopSidebar = () => {
  const pathname = usePathname();
  const { playClick } = useClick();

  return (
    <aside
      aria-label='Primary'
      className={clsx(
        'fixed top-0 bottom-0 left-0 z-30 hidden md:flex',
        'w-20 flex-col items-center gap-2',
        'border-dojo-ink bg-dojo-paper border-r-2',
        'py-4',
      )}
    >
      <Link
        href='/'
        prefetch
        onClick={() => playClick()}
        aria-label='KanaDojo home'
        className='rounded-dojo-xl border-dojo-ink bg-dojo-gold mb-4 flex h-12 w-12 items-center justify-center border-2 border-b-4 hover:cursor-pointer'
      >
        <span lang='ja' className='text-dojo-ink text-xl font-black'>
          道
        </span>
      </Link>

      <ul className='flex flex-col gap-2'>
        {navItems.map(item => {
          const active = isActive(pathname, item);
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                prefetch
                onClick={() => playClick()}
                aria-current={active ? 'page' : undefined}
                aria-label={item.label}
                title={item.label}
                className={clsx(
                  'group rounded-dojo-xl flex h-12 w-12 items-center justify-center',
                  'transition-all duration-150 hover:cursor-pointer',
                  active
                    ? 'border-dojo-ink bg-dojo-gold text-dojo-ink border-2 border-b-4'
                    : 'text-dojo-ink/60 hover:bg-dojo-mist hover:text-dojo-ink',
                )}
              >
                <item.icon className='size-5' />
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default DesktopSidebar;
