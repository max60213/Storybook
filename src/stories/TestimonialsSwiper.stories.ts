import type { Meta, StoryObj } from '@storybook/react';
import TestimonialsSwiper from './TestimonialsSwiper';
import type { TestimonialsSwiperProps, Testimonial } from './TestimonialsSwiper';
import './TestimonialsSwiper.css';

const meta: Meta<typeof TestimonialsSwiper> = {
  title: 'Components/TestimonialsSwiper',
  component: TestimonialsSwiper,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive testimonials carousel component built with Swiper.js and Tailwind CSS.',
      },
    },
  },
  argTypes: {
    testimonials: {
      description: 'Array of testimonial objects',
      control: 'object',
    },
    title: {
      description: 'Section title',
      control: 'text',
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text',
    },
    showTitle: {
      description: 'Show/hide the section title',
      control: 'boolean',
    },
    autoplayDelay: {
      description: 'Autoplay delay in milliseconds',
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
    },
    enableAutoplay: {
      description: 'Enable/disable autoplay',
      control: 'boolean',
    },
    enableLoop: {
      description: 'Enable/disable loop',
      control: 'boolean',
    },
    speed: {
      description: 'Transition speed in milliseconds',
      control: { type: 'number', min: 300, max: 3000, step: 100 },
    },
    showQuoteIcon: {
      description: 'Show/hide quote icon',
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialsSwiper>;

// Sample testimonials data
const sampleTestimonials: Testimonial[] = [
  {
    name: "陳阿明",
    position: "藏逸員",
    company: "藏逸拍賣會",
    testimonial: "藝信的驗證系統為畫廊提供了更高標準的藝術品鑑證機制，不僅強化交易的信任度，還讓作品來源更加透明可追溯。操作直覺，流程高效，為我們在市場上的專業形象與法律保障帶來了極大助益。"
  },
  {
    name: "李美華",
    position: "理事長",
    company: "畫廊協會",
    testimonial: "藝信的驗證系統不僅滿足畫廊協會在法律層面的需求，對於藝術品交易與管理而言，流程簡單直覺，業界夥伴皆能快速上手，大幅提升交易信任與保障。"
  },
  {
    name: "Wang Zhiqiang",
    position: "General Manager",
    company: "Auction House",
    testimonial: "The Art Trust verification system provides reliable art authentication support for auction houses, ensuring the provenance and authenticity of each piece, boosting buyer confidence. The efficient verification process allows us to operate more smoothly, ensuring transparent and fair transactions."
  },
  {
    name: "張雅芳",
    position: "藝術收藏家",
    company: "私人收藏",
    testimonial: "藝信的驗證系統不僅滿足畫廊協會在法律層面的需求，對於藝術品交易與管理而言，流程簡單直覺，業界夥伴皆能快速上手，大幅提升交易信任與保障。"
  }
];

const sampleTestimonialsWithAvatars: Testimonial[] = sampleTestimonials.map((testimonial, index) => ({
  ...testimonial,
  avatar: `https://i.pravatar.cc/160?img=${index + 1}`,
}));

// Default story
export const Default: Story = {
  args: {
    testimonials: sampleTestimonials,
    title: "業界的信賴",
    showTitle: true,
    enableAutoplay: true,
    autoplayDelay: 3000,
    enableLoop: true,
    speed: 1000,
    showQuoteIcon: true,
  },
};

// Story with avatars
export const WithAvatars: Story = {
  args: {
    ...Default.args,
    testimonials: sampleTestimonialsWithAvatars,
    title: "客戶見證",
  },
};

// Story without title
export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    showTitle: false,
  },
};

// Story without autoplay
export const WithoutAutoplay: Story = {
  args: {
    ...Default.args,
    enableAutoplay: false,
    title: "手動瀏覽見證",
  },
};

// Story without quote icon
export const WithoutQuoteIcon: Story = {
  args: {
    ...Default.args,
    showQuoteIcon: false,
    title: "簡潔版見證",
  },
};

// Story with custom settings
export const CustomSettings: Story = {
  args: {
    ...Default.args,
    title: "快速輪播見證",
    autoplayDelay: 1500,
    speed: 500,
    enableLoop: false,
  },
};

// Single testimonial
export const SingleTestimonial: Story = {
  args: {
    testimonials: [sampleTestimonialsWithAvatars[0]],
    title: "單一見證",
    enableLoop: false,
    enableAutoplay: false,
  },
};

// English testimonials
export const EnglishTestimonials: Story = {
  args: {
    testimonials: [
      {
        name: "John Smith",
        position: "Art Director",
        company: "Modern Gallery",
        avatar: "https://i.pravatar.cc/160?img=5",
        testimonial: "The Art Trust verification system has revolutionized how we authenticate artwork. The transparency and traceability it provides gives both galleries and collectors unprecedented confidence in their transactions."
      },
      {
        name: "Sarah Johnson",
        position: "Curator",
        company: "Metropolitan Arts",
        avatar: "https://i.pravatar.cc/160?img=6",
        testimonial: "Finally, a scientific approach to art authentication. The digital fingerprinting technology combined with blockchain ensures that every piece we handle has an immutable record of authenticity."
      },
      {
        name: "Michael Chen",
        position: "Private Collector",
        company: "Chen Collection",
        avatar: "https://i.pravatar.cc/160?img=7",
        testimonial: "As a collector, I've always been concerned about provenance. This system gives me the peace of mind I need when making significant art investments."
      }
    ],
    title: "Global Trust & Recognition",
    autoplayDelay: 4000,
  },
}; 