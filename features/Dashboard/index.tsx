'use client';

import { useEffect } from 'react';
import { Compass, Dumbbell } from 'lucide-react';
import { Link } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks/generic/useAudio';
import { useIsMounted } from '@/shared/hooks/useIsMounted';
import useGameStore from '@/shared/store/useGameStore';
import {
  DojoBadge,
  DojoButton,
  DojoCard,
  DojoCardBody,
  DojoCardEyebrow,
  DojoCardTitle,
  DojoXPBar,
} from '@/shared/ui/dojo';
import GoldenLion from '@/features/LandingPage/GoldenLion';
import ContinueCard from './ContinueCard';
import DailyGoalWidget from './DailyGoalWidget';
import LeagueWidget from './LeagueWidget';
import QuestStrip from './QuestStrip';

const QUICK_TILES: ReadonlyArray<{
  href: string;
  ja: string;
  label: string;
  icon: typeof Compass;
}> = [
  { href: '/kana', ja: 'あ', label: 'Kana', icon: Compass },
  { href: '/vocabulary', ja: '語', label: 'Vocab', icon: Compass },
  { href: '/kanji', ja: '字', label: 'Kanji', icon: Compass },
  { href: '/hiragana-practice', ja: '訓', label: 'Practice', icon: Dumbbell },
];

const Dashboard = () => {
  const isMounted = useIsMounted();
  const { playClick } = useClick();

  const xp = useGameStore(s => s.xp);
  const level = useGameStore(s => s.level);
  const nextLevelXp = useGameStore(s => s.nextLevelXp);
  const streak = useGameStore(s => s.streak);
  const dailyMinutesDone = useGameStore(s => s.dailyMinutesDone);
  const dailyGoalMin = useGameStore(s => s.dailyGoalMin);
  const tickDay = useGameStore(s => s.tickDay);

  useEffect(() => {
    tickDay();
  }, [tickDay]);

  return (
    <div className='flex flex-col gap-6'>
      {/* Greeting + XP bar */}
      <section className='flex items-center gap-4'>
        <div className='hidden shrink-0 sm:block'>
          <GoldenLion size={92} animated={false} />
        </div>
        <div className='flex flex-1 flex-col gap-3'>
          <div className='flex items-baseline gap-3'>
            <h1 className='text-2xl font-black tracking-tight sm:text-3xl'>
              Welcome back
            </h1>
            <DojoBadge tone='paper' size='sm'>
              Lv {isMounted ? level : 1}
            </DojoBadge>
          </div>
          <DojoXPBar
            xp={isMounted ? xp : 0}
            nextLevelXp={isMounted ? nextLevelXp : 500}
            level={isMounted ? level : 1}
          />
        </div>
      </section>

      <ContinueCard
        nextLabel='Hiragana · Set A'
        nextSub='あいうえお'
        nextHref='/learn-hiragana'
        streak={isMounted ? streak : 0}
      />

      <section className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <DailyGoalWidget
          minutesDone={isMounted ? dailyMinutesDone : 0}
          goalMinutes={isMounted ? dailyGoalMin : 10}
        />
        <div className='lg:col-span-2'>
          <QuestStrip />
        </div>
      </section>

      <section className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <LeagueWidget />

        <DojoCard radius='3xl' padding='lg'>
          <DojoCardEyebrow>Jump back in</DojoCardEyebrow>
          <DojoCardTitle className='text-xl'>Pick your path</DojoCardTitle>
          <DojoCardBody>4 tracks, 1 dojo.</DojoCardBody>
          <div className='mt-4 grid grid-cols-2 gap-3'>
            {QUICK_TILES.map(tile => (
              <Link
                key={tile.href}
                href={tile.href}
                prefetch
                onClick={() => playClick()}
                className='group rounded-dojo-2xl border-dojo-ink bg-dojo-paper flex items-center gap-3 border-2 border-b-[6px] px-3 py-3 transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0'
              >
                <span
                  lang='ja'
                  className='rounded-dojo-lg border-dojo-ink bg-dojo-gold text-dojo-ink flex h-10 w-10 items-center justify-center border-b-4 text-base font-black'
                >
                  {tile.ja}
                </span>
                <span className='text-sm font-black tracking-wide uppercase'>
                  {tile.label}
                </span>
              </Link>
            ))}
          </div>
        </DojoCard>
      </section>

      {/* Mini stats footer */}
      <section className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
        <MiniStat
          label='Streak'
          value={isMounted ? String(streak) : '0'}
          unit='days'
        />
        <MiniStat
          label='Level'
          value={isMounted ? String(level) : '1'}
          unit='dojo'
        />
        <MiniStat
          label='XP'
          value={isMounted ? xp.toLocaleString() : '0'}
          unit='this level'
        />
        <MiniStat
          label='Today'
          value={isMounted ? String(dailyMinutesDone) : '0'}
          unit='min'
        />
      </section>

      {/* Reset chip for QA — only after hydration */}
      {isMounted && (
        <section className='flex justify-center pt-2'>
          <DojoButton
            variant='ghost'
            size='sm'
            onClick={() => {
              playClick();
              useGameStore.getState().reset();
            }}
          >
            Reset dashboard data
          </DojoButton>
        </section>
      )}
    </div>
  );
};

const MiniStat = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) => (
  <div className='rounded-dojo-xl border-dojo-ink bg-dojo-paper flex flex-col items-start gap-1 border-2 px-4 py-3'>
    <span className='text-dojo-ink/50 text-[10px] font-black tracking-widest uppercase'>
      {label}
    </span>
    <span className='text-xl leading-none font-black tabular-nums'>
      {value}
    </span>
    <span className='text-dojo-ink/50 text-[10px] font-bold'>{unit}</span>
  </div>
);

export default Dashboard;
