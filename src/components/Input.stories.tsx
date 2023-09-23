import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio' },
    elevation: { control: 'boolean' },
    size: { control: 'inline-radio' },
    borderRadius: { control: 'inline-radio' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Variants

// Contained
export const Contained: Story = {
  args: {
    label: 'Label',
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    label: 'Label',
    variant: 'text',
  },
};

// Sizes
export const ExtraSmall: Story = {
  args: {
    label: 'Label',
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    label: 'Label',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'Label',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'Label',
    size: 'lg',
  },
};
