'use client';

import { Trophy } from 'lucide-react';
import {
  DojoBadge,
  DojoCard,
  DojoCardEyebrow,
  DojoCardTitle,
} from '@/shared/ui/dojo';

interface Player {
  rank: number;
  name: string;
  xp: number;
  you?: boolean;
}

const defaultPlayers: readonly Player[] = [
  { rank: 1, name: 'Hikari', xp: 4820 },
  { rank: 2, name: 'You', xp: 4310, you: true },
  { rank: 3, name: 'Kenji', xp: 3995 },
  { rank: 4, name: 'Aoi', xp: 3712 },
] as const;

interface LeagueWidgetProps {
  players?: readonly Player[];
  daysLeft?: number;
}

const LeagueWidget = ({
  players = defaultPlayers,
  daysLeft = 3,
}: LeagueWidgetProps) => {
  return (
    <DojoCard
      variant='dark'
      radius='3xl'
      padding='lg'
      className='relative overflow-hidden'
    >
      <div
        aria-hidden
        className='bg-dojo-gold/20 pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full blur-2xl'
      />

      <div className='mb-5 flex items-center justify-between gap-3'>
        <div>
          <DojoCardEyebrow className='text-dojo-gold'>
            This week
          </DojoCardEyebrow>
          <DojoCardTitle className='text-dojo-paper text-xl'>
            Gold league
          </DojoCardTitle>
        </div>
        <DojoBadge tone='gold' size='lg' icon={<Trophy />} />
      </div>

      <ul className='flex flex-col gap-1.5'>
        {players.map(p => (
          <li
            key={p.rank}
            className={`rounded-dojo-xl flex items-center gap-3 px-2 py-1.5 ${
              p.you ? 'bg-white/10' : ''
            }`}
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                p.rank === 1
                  ? 'bg-dojo-gold text-dojo-ink'
                  : 'text-dojo-paper/80 bg-white/10'
              }`}
            >
              {p.rank}
            </span>
            <span
              className={`flex-1 truncate text-sm font-bold ${
                p.you
                  ? 'text-dojo-gold underline decoration-2'
                  : 'text-dojo-paper'
              }`}
            >
              {p.name}
            </span>
            <span className='text-dojo-paper/60 text-xs font-bold tabular-nums'>
              {p.xp.toLocaleString()} XP
            </span>
          </li>
        ))}
      </ul>

      <p className='text-dojo-paper/60 mt-3 text-xs'>
        {daysLeft} day{daysLeft === 1 ? '' : 's'} left · stay top 50 % to be
        promoted
      </p>
    </DojoCard>
  );
};

export default LeagueWidget;
