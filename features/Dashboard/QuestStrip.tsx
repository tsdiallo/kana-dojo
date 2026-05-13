'use client';

import { Flame, Sparkles, Star, Zap, type LucideIcon } from 'lucide-react';
import {
  DojoBadge,
  DojoCard,
  DojoCardEyebrow,
  DojoCardTitle,
  DojoProgressBar,
} from '@/shared/ui/dojo';

interface Quest {
  icon: LucideIcon;
  title: string;
  progress: number;
  reward: string;
}

const defaultQuests: readonly Quest[] = [
  { icon: Zap, title: 'Earn 30 XP', progress: 60, reward: '15 XP' },
  {
    icon: Flame,
    title: 'Complete 3 lessons',
    progress: 33,
    reward: 'Streak +1',
  },
  { icon: Star, title: 'Hit 85% accuracy', progress: 80, reward: '20 XP' },
] as const;

interface QuestStripProps {
  quests?: readonly Quest[];
}

const QuestStrip = ({ quests = defaultQuests }: QuestStripProps) => {
  return (
    <DojoCard radius='3xl' padding='lg'>
      <div className='mb-5 flex items-center justify-between gap-3'>
        <div>
          <DojoCardEyebrow>Daily quests</DojoCardEyebrow>
          <DojoCardTitle className='text-xl'>Three to go</DojoCardTitle>
        </div>
        <DojoBadge tone='gold' size='lg' icon={<Sparkles />} />
      </div>

      <ul className='flex flex-col gap-3'>
        {quests.map(q => (
          <li
            key={q.title}
            className='rounded-dojo-2xl border-dojo-ink/10 bg-dojo-mist/60 flex items-center gap-3 border-2 p-3'
          >
            <div className='rounded-dojo-lg border-dojo-ink bg-dojo-gold-light flex h-10 w-10 shrink-0 items-center justify-center border-b-4'>
              <q.icon
                className='text-dojo-gold-deep size-4 fill-current'
                aria-hidden
              />
            </div>
            <div className='flex flex-1 flex-col gap-1'>
              <div className='flex items-baseline justify-between gap-2'>
                <span className='text-sm font-black'>{q.title}</span>
                <span className='text-dojo-gold-deep text-xs font-black tracking-wide uppercase'>
                  +{q.reward}
                </span>
              </div>
              <DojoProgressBar value={q.progress} size='sm' tone='gold' />
            </div>
          </li>
        ))}
      </ul>
    </DojoCard>
  );
};

export default QuestStrip;
