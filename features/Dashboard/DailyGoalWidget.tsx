'use client';

import { Target } from 'lucide-react';
import {
  DojoCard,
  DojoCardEyebrow,
  DojoCardTitle,
  DojoProgressRing,
} from '@/shared/ui/dojo';

interface DailyGoalWidgetProps {
  minutesDone: number;
  goalMinutes: number;
}

const DailyGoalWidget = ({
  minutesDone,
  goalMinutes,
}: DailyGoalWidgetProps) => {
  const safeGoal = Math.max(1, goalMinutes);
  const ratio = (minutesDone / safeGoal) * 100;

  return (
    <DojoCard radius='3xl' padding='lg'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex flex-col gap-1'>
          <DojoCardEyebrow>Today&apos;s goal</DojoCardEyebrow>
          <DojoCardTitle className='text-xl'>
            {minutesDone} / {goalMinutes} min
          </DojoCardTitle>
          <p className='text-dojo-ink/70 text-sm'>
            {minutesDone >= goalMinutes
              ? 'Goal hit. Bonus round?'
              : 'A few more minutes and the lion smiles.'}
          </p>
        </div>
        <DojoProgressRing value={ratio} size={96} thickness={10}>
          <Target className='text-dojo-gold-deep size-6' aria-hidden />
        </DojoProgressRing>
      </div>
    </DojoCard>
  );
};

export default DailyGoalWidget;
