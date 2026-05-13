import AppShell from '@/features/AppShell';
import Dashboard from '@/features/Dashboard';
import { routing } from '@/core/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export const metadata = {
  title: 'Dashboard — KanaDojo',
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <AppShell>
      <Dashboard />
    </AppShell>
  );
}
