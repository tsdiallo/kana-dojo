import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flame } from 'lucide-react';
import { DojoProgressRing } from './ProgressRing';

const meta = {
  title: 'Dojo/ProgressRing',
  component: DojoProgressRing,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { value: 65, size: 120, thickness: 12 },
} satisfies Meta<typeof DojoProgressRing>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DailyGoal: Story = {
  args: {
    value: 65,
    label: 'Daily goal',
    children: (
      <div className='flex flex-col items-center'>
        <span className='text-2xl font-black tabular-nums'>13</span>
        <span className='text-dojo-ink/60 text-[10px] font-bold tracking-widest uppercase'>
          / 20 min
        </span>
      </div>
    ),
  },
};

export const Streak: Story = {
  args: {
    value: 80,
    tone: 'flame',
    children: <Flame size={28} className='text-dojo-flame fill-current' />,
  },
};

export const SmallRow: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <DojoProgressRing value={25} size={64} thickness={8} tone='gold'>
        <span className='text-xs font-black'>25%</span>
      </DojoProgressRing>
      <DojoProgressRing value={55} size={64} thickness={8} tone='flame'>
        <span className='text-xs font-black'>55%</span>
      </DojoProgressRing>
      <DojoProgressRing value={75} size={64} thickness={8} tone='jade'>
        <span className='text-xs font-black'>75%</span>
      </DojoProgressRing>
      <DojoProgressRing value={100} size={64} thickness={8} tone='sky'>
        <span className='text-xs font-black'>100%</span>
      </DojoProgressRing>
    </div>
  ),
  args: { value: 0 },
};
