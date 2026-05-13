import type { Meta, StoryObj } from '@storybook/react-vite';
import { DojoXPBar } from './XPBar';

const meta = {
  title: 'Dojo/XPBar',
  component: DojoXPBar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { xp: 320, nextLevelXp: 500, level: 7 },
} satisfies Meta<typeof DojoXPBar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <div style={{ width: 360 }}>
      <DojoXPBar {...args} />
    </div>
  ),
};

export const NearLevelUp: Story = {
  args: { xp: 480, nextLevelXp: 500, level: 7 },
  render: args => (
    <div style={{ width: 360 }}>
      <DojoXPBar {...args} />
    </div>
  ),
};

export const Compact: Story = {
  args: { compact: true },
  render: args => (
    <div style={{ width: 240 }}>
      <DojoXPBar {...args} />
    </div>
  ),
};

export const Stack: Story = {
  render: () => (
    <div className='flex flex-col gap-4' style={{ width: 360 }}>
      <DojoXPBar xp={80} nextLevelXp={500} level={3} />
      <DojoXPBar xp={250} nextLevelXp={500} level={4} />
      <DojoXPBar xp={490} nextLevelXp={500} level={5} />
      <DojoXPBar xp={150} nextLevelXp={500} level={6} compact />
    </div>
  ),
  args: { xp: 0, nextLevelXp: 1, level: 1 },
};
