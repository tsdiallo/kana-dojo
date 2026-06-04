'use client';

import { type ReactNode } from 'react';
import clsx from 'clsx';
import BottomNav from './BottomNav';
import DesktopSidebar from './DesktopSidebar';
import TopBar from './TopBar';

interface AppShellProps {
  children: ReactNode;
  /** Adds the bottom-nav safe-area padding. Default true. */
  bottomNavPadding?: boolean;
  /** Pass-through class on the inner content area. */
  className?: string;
}

const AppShell = ({
  children,
  bottomNavPadding = true,
  className,
}: AppShellProps) => {
  return (
    <div className='bg-dojo-mist text-dojo-ink relative min-h-[100dvh] w-full'>
      <DesktopSidebar />
      <div className='md:pl-20'>
        <TopBar />
        <main
          className={clsx(
            'mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8',
            bottomNavPadding && 'pb-28 md:pb-12',
            className,
          )}
        >
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
};

export default AppShell;
