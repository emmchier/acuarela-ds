import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { AddCircleIcon } from './Icon';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio' },
    loading: { control: 'boolean' },
    elevation: { control: 'boolean' },
    size: { control: 'inline-radio' },
    borderRadius: { control: 'inline-radio' },
    disabled: { control: 'boolean' },
    iconLeft: {
      control: {
        type: 'select',
      },
      defaultValue: null,
    },
    iconRight: {
      control: {
        type: 'select',
      },
      defaultValue: null,
    },
    style: {
      control: {
        type: 'select',
      },
      defaultValue: null,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Variants

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};

export const IconLeft: Story = {
  args: {
    iconLeft: <AddCircleIcon />,
    children: 'Button',
  },
};

export const IconRight: Story = {
  args: {
    iconRight: <AddCircleIcon />,
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Button',
  },
};

export const IconButton: Story = {
  args: {
    iconButton: true,
    children: <AddCircleIcon />,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

// Sizes
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};
