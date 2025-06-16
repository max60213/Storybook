import type { Meta, StoryObj } from '@storybook/react';
import CTAButton from './CTAButton';

const meta: Meta<typeof CTAButton> = {
  title: 'Components/CTAButton',
  component: CTAButton,
  tags: ['autodocs'], // ✅ 啟用 Autodocs
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CTAButton 是一個帶箭頭的行動呼籲按鈕，可導向指定連結。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CTAButton>;

export const Default: Story = {
  args: {
    children: '了解更多',
    href: '/about',
  },
};