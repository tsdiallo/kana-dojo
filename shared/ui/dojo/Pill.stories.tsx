import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flame, Gem, Heart, Trophy, Zap } from 'lucide-react';
import { DojoPill } from './Pill';

const meta = {
  title: 'Dojo/Pill',
  component: DojoPill,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DojoPill>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Streak: Story = {
  args: {
    tone: 'flame',
    icon: <Flame className='fill-current' />,
    children: '7',
  },
};

export const XP: Story = {
  args: {
    tone: 'gold',
    icon: <Zap className='fill-current' />,
    children: '1,250',
  },
};

export const Hearts: Story = {
  args: {
    tone: 'ruby',
    icon: <Heart className='fill-current' />,
    children: '5',
  },
};

export const Gems: Story = {
  args: {
    tone: 'sky',
    icon: <Gem className='fill-current' />,
    children: '320',
  },
};

export const Solid: Story = {
  args: { tone: 'solid', icon: <Trophy />, children: 'Gold' },
};

export const Gallery: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-3'>
      <DojoPill tone='flame' icon={<Flame className='fill-current' />}>
        7
      </DojoPill>
      <DojoPill tone='gold' icon={<Zap className='fill-current' />}>
        1,250
      </DojoPill>
      <DojoPill tone='ruby' icon={<Heart className='fill-current' />}>
        5
      </DojoPill>
      <DojoPill tone='sky' icon={<Gem className='fill-current' />}>
        320
      </DojoPill>
      <DojoPill tone='jade'>Mastered</DojoPill>
      <DojoPill tone='solid' icon={<Trophy />}>
        Gold
      </DojoPill>
      <DojoPill tone='dark'>N5</DojoPill>
    </div>
  ),
  args: { children: '' },
};
