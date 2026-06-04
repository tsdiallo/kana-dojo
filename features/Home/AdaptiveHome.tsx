'use client';

import { useIsMounted } from '@/shared/hooks/useIsMounted';
import useGameStore from '@/shared/store/useGameStore';
import AppShell from '@/features/AppShell';
import Dashboard from '@/features/Dashboard';
import LandingPage from '@/features/LandingPage';

/**
 * Decides what to render on `/`:
 * - First-time visitor (or pre-hydration on SSR): `<LandingPage />`
 * - Returning visitor with `hasStarted = true`: `<Dashboard />` inside `<AppShell />`
 *
 * The Landing keeps its own header/footer; only the Dashboard sits inside
 * the AppShell so the rest of the app stays untouched for now.
 */
const AdaptiveHome = () => {
  const isMounted = useIsMounted();
  const hasStarted = useGameStore(s => s.hasStarted);

  if (!isMounted || !hasStarted) {
    return <LandingPage />;
  }

  return (
    <AppShell>
      <Dashboard />
    </AppShell>
  );
};

export default AdaptiveHome;
