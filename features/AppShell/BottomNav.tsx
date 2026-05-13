'use client';

import clsx from 'clsx';
import { Link, usePathname } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks/generic/useAudio';
import { isActive, navItems } from './navItems';

const BottomNav = () => {
  const pathname = usePathname();
  const { playClick } = useClick();

  return (
    <nav
      aria-label='Primary'
      className={clsx(
        'fixed right-0 bottom-0 left-0 z-40 md:hidden',
        'border-dojo-ink border-t-2',
        'bg-dojo-paper/95 backdrop-blur-md',
        'pb-[max(env(safe-area-inset-bottom),0.25rem)]',
      )}
    >
      <ul className='mx-auto flex max-w-xl items-stretch justify-around px-1 pt-1'>
        {navItems.map(item => {
          const active = isActive(pathname, item);
          return (
            <li key={item.key} className='flex-1'>
              <Link
                href={item.href}
                prefetch
                onClick={() => playClick()}
                aria-current={active ? 'page' : undefined}
                className={clsx(
                  'rounded-dojo-lg flex flex-col items-center gap-0.5 px-1 py-1.5',
                  'transition-colors duration-150',
                  active
                    ? 'text-dojo-ink'
                    : 'text-dojo-ink/55 hover:text-dojo-ink',
                )}
              >
                <span
                  className={clsx(
                    'rounded-dojo-lg flex h-9 w-12 items-center justify-center transition-all duration-150',
                    active &&
                      'border-dojo-ink bg-dojo-gold border-2 border-b-4',
                  )}
                >
                  <item.icon className='size-5' />
                </span>
                <span className='text-[10px] font-black tracking-wide uppercase'>
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
