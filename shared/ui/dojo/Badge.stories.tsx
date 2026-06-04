import type { Meta, StoryObj } from '@storybook/react-vite';
import { Crown, Flame, Heart, Star, Trophy } from 'lucide-react';
import { DojoBadge } from './Badge';

const meta = {
  title: 'Dojo/Badge',
  component: DojoBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DojoBadge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Gold: Story = {
  args: { tone: 'gold', icon: <Trophy />, size: 'lg' },
};

export const StreakBadge: Story = {
  args: { tone: 'flame', icon: <Flame className='fill-current' />, size: 'lg' },
};

export const Count: Story = { args: { tone: 'ruby', children: '5' } };

export const LeagueRow: Story = {
  render: () => (
    <div className='flex items-center gap-3'>
      <DojoBadge tone='paper' icon={<Crown />} size='xl' />
      <DojoBadge tone='gold' icon={<Trophy />} size='xl' />
      <DojoBadge
        tone='flame'
        icon={<Flame className='fill-current' />}
        size='xl'
      />
      <DojoBadge
        tone='ruby'
        icon={<Heart className='fill-current' />}
        size='xl'
      />
      <DojoBadge
        tone='jade'
        icon={<Star className='fill-current' />}
        size='xl'
      />
      <DojoBadge tone='dark' icon={<Crown />} size='xl' />
    </div>
  ),
  args: {},
};

export const SizeRow: Story = {
  render: () => (
    <div className='flex items-end gap-3'>
      <DojoBadge size='xs'>1</DojoBadge>
      <DojoBadge size='sm'>12</DojoBadge>
      <DojoBadge size='md'>123</DojoBadge>
      <DojoBadge size='lg' icon={<Trophy />} />
      <DojoBadge size='xl' icon={<Crown />} />
    </div>
  ),
  args: {},
};
