import {
  Compass,
  Dumbbell,
  Home,
  type LucideIcon,
  Settings,
  TrendingUp,
} from 'lucide-react';

export interface NavItem {
  key: string;
  label: string;
  href: string;
  icon: LucideIcon;
  /** Match prefix to highlight as active. */
  matchPrefix?: string;
}

export const navItems: readonly NavItem[] = [
  { key: 'home', label: 'Home', href: '/', icon: Home, matchPrefix: '/' },
  {
    key: 'learn',
    label: 'Learn',
    href: '/kana',
    icon: Compass,
    matchPrefix: '/kana',
  },
  {
    key: 'practice',
    label: 'Practice',
    href: '/hiragana-practice',
    icon: Dumbbell,
    matchPrefix: '/hiragana-practice',
  },
  {
    key: 'progress',
    label: 'Progress',
    href: '/progress',
    icon: TrendingUp,
    matchPrefix: '/progress',
  },
  {
    key: 'more',
    label: 'More',
    href: '/preferences',
    icon: Settings,
    matchPrefix: '/preferences',
  },
] as const;

export const isActive = (pathname: string, item: NavItem) => {
  if (!item.matchPrefix) return false;
  if (item.matchPrefix === '/') return pathname === '/' || pathname === '';
  return pathname.startsWith(item.matchPrefix);
};
