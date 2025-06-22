import type { Meta, StoryObj } from '@storybook/react';
import Testimonials from './Testimonials';
import './testimonials.css';

const meta: Meta<typeof Testimonials> = {
  title: 'Components/Testimonials',
  component: Testimonials,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Testimonials 是一個客戶推薦輪播組件，展示來自不同客戶的推薦內容，支援自動播放和分頁導航。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '預設的推薦輪播組件，包含四個客戶推薦內容。',
      },
    },
  },
};

export const WithDarkBackground: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    docs: {
      description: {
        story: '在深色背景下的推薦輪播組件效果。',
      },
    },
  },
}; 