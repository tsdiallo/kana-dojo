import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, Flame, Heart, Sparkles } from 'lucide-react';
import { DojoButton } from './Button';

const meta = {
  title: 'Dojo/Button',
  component: DojoButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'ghost', 'dark', 'danger'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'xl'] },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof DojoButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Start training', variant: 'primary', size: 'md' },
};

export const Secondary: Story = {
  args: { children: 'I have an account', variant: 'secondary' },
};

export const Dark: Story = {
  args: { children: 'Continue', variant: 'dark' },
};

export const Danger: Story = {
  args: { children: 'Reset progress', variant: 'danger' },
};

export const Ghost: Story = { args: { children: 'Cancel', variant: 'ghost' } };

export const WithIcons: Story = {
  args: {
    children: 'Get started',
    variant: 'primary',
    size: 'lg',
    iconLeft: <Sparkles />,
    iconRight: <ArrowRight />,
  },
};

export const Loading: Story = {
  args: { children: 'Saving', variant: 'primary', loading: true },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col items-start gap-3'>
      <DojoButton size='sm' iconLeft={<Heart />}>
        Small
      </DojoButton>
      <DojoButton size='md' iconLeft={<Heart />}>
        Medium
      </DojoButton>
      <DojoButton size='lg' iconLeft={<Heart />}>
        Large
      </DojoButton>
      <DojoButton size='xl' iconLeft={<Heart />}>
        X-Large
      </DojoButton>
    </div>
  ),
  args: { children: '' },
};

export const Gallery: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-4'>
      <DojoButton iconLeft={<Flame />}>Streak</DojoButton>
      <DojoButton variant='secondary' iconLeft={<Sparkles />}>
        Demo
      </DojoButton>
      <DojoButton variant='dark'>Continue</DojoButton>
      <DojoButton variant='ghost'>Skip</DojoButton>
      <DojoButton variant='danger'>Reset</DojoButton>
      <DojoButton variant='primary' loading>
        Saving
      </DojoButton>
    </div>
  ),
  args: { children: '' },
};
