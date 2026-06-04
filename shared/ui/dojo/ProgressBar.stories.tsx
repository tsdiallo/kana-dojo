import type { Meta, StoryObj } from '@storybook/react-vite';
import { DojoProgressBar } from './ProgressBar';

const meta = {
  title: 'Dojo/ProgressBar',
  component: DojoProgressBar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { value: 60 },
} satisfies Meta<typeof DojoProgressBar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Gold: Story = {
  args: { tone: 'gold', label: 'Daily goal', showValue: true, value: 60 },
  render: args => (
    <div style={{ width: 320 }}>
      <DojoProgressBar {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-4' style={{ width: 320 }}>
      <DojoProgressBar size='sm' value={20} />
      <DojoProgressBar size='md' value={45} />
      <DojoProgressBar size='lg' value={70} />
      <DojoProgressBar size='xl' value={92} showValue />
    </div>
  ),
  args: { value: 0 },
};

export const Tones: Story = {
  render: () => (
    <div className='flex flex-col gap-3' style={{ width: 320 }}>
      <DojoProgressBar tone='gold' label='XP' showValue value={68} />
      <DojoProgressBar tone='flame' label='Streak' showValue value={42} />
      <DojoProgressBar tone='ruby' label='Hearts' showValue value={20} />
      <DojoProgressBar tone='jade' label='Mastery' showValue value={88} />
      <DojoProgressBar tone='sky' label='Gems' showValue value={55} />
      <DojoProgressBar tone='dark' label='Total' showValue value={75} />
    </div>
  ),
  args: { value: 0 },
};
