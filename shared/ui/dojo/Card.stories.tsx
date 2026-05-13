import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sparkles, Trophy } from 'lucide-react';
import {
  DojoCard,
  DojoCardBody,
  DojoCardEyebrow,
  DojoCardFooter,
  DojoCardHeader,
  DojoCardTitle,
} from './Card';
import { DojoButton } from './Button';

const meta = {
  title: 'Dojo/Card',
  component: DojoCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DojoCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Raised: Story = {
  args: {
    children: (
      <>
        <DojoCardHeader>
          <div>
            <DojoCardEyebrow>Today</DojoCardEyebrow>
            <DojoCardTitle>Daily quests</DojoCardTitle>
          </div>
          <span className='rounded-dojo-xl border-dojo-ink bg-dojo-gold text-dojo-ink inline-flex h-10 w-10 items-center justify-center border-b-4'>
            <Sparkles size={18} />
          </span>
        </DojoCardHeader>
        <DojoCardBody>3 quests · 1 completed · 2 to go.</DojoCardBody>
        <DojoCardFooter>
          <span className='text-dojo-ink/60 text-xs font-bold'>
            +45 XP available
          </span>
          <DojoButton size='sm'>View</DojoButton>
        </DojoCardFooter>
      </>
    ),
    style: { width: 360 },
  },
};

export const Gold: Story = {
  args: {
    variant: 'gold',
    children: (
      <>
        <DojoCardHeader>
          <DojoCardTitle>Gold league</DojoCardTitle>
          <Trophy size={20} />
        </DojoCardHeader>
        <DojoCardBody className='text-dojo-ink/80'>
          3 days left. Stay top 50 % to keep your spot.
        </DojoCardBody>
      </>
    ),
    style: { width: 360 },
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: (
      <>
        <DojoCardEyebrow className='text-dojo-gold'>Bonus</DojoCardEyebrow>
        <DojoCardTitle className='text-dojo-paper'>Master tier</DojoCardTitle>
        <DojoCardBody className='text-dojo-paper/70'>
          Reach Diamond league three weeks in a row to unlock.
        </DojoCardBody>
      </>
    ),
    style: { width: 360 },
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    children: <DojoCardTitle>Tap me</DojoCardTitle>,
    style: { width: 280 },
  },
};
