'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Types
interface Testimonial {
  name: string;
  position: string;
  avatar?: string;
  company: string;
  testimonial: string;
}

interface TestimonialsSwiperProps {
  testimonials: Testimonial[];
  title?: string;
  className?: string;
  showTitle?: boolean;
  autoplayDelay?: number;
  enableAutoplay?: boolean;
  enableLoop?: boolean;
  speed?: number;
  showQuoteIcon?: boolean;
  customQuoteIcon?: React.ReactNode;
}

// Default Quote Icon SVG
const DefaultQuoteIcon = () => (
  <svg 
    width="120" 
    height="120" 
    viewBox="0 0 120 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="quote-icon"
  >
    <path 
      d="M29.5508 17.2002C36.3091 17.2003 42.0446 19.9736 46.7314 25.4756H46.7305C51.4237 30.7844 53.75 37.7085 53.75 46.2002C53.75 55.0706 51.9352 63.2459 48.2998 70.7188C44.6752 78.1693 39.9406 84.6172 34.0967 90.0596L34.0977 90.0605C28.4622 95.4947 22.4173 99.7274 15.9629 102.753L15.5391 102.951L15.3125 102.542L9.0127 91.1416L8.76465 90.6924L9.2207 90.4561L10.2168 89.9287C15.155 87.2563 19.4783 84.0635 23.1904 80.3525C27.1579 76.1862 30.2254 71.8298 32.3994 67.2842C34.4101 62.8951 35.4784 58.7809 35.6289 54.9375C34.8565 55.3893 33.8858 55.8335 32.7256 56.2686L32.707 56.2754L32.6875 56.2812C31.2389 56.6951 29.6924 56.9004 28.0508 56.9004C22.3327 56.9004 17.6001 55.0571 13.8965 51.3535L13.8867 51.3438L13.8779 51.334C10.3908 47.4366 8.65039 42.7153 8.65039 37.2002C8.65039 32.2703 10.4002 27.758 13.8691 23.6768C17.3879 19.336 22.6472 17.2002 29.5508 17.2002ZM87.1504 17.2002C93.906 17.2002 99.6394 19.9714 104.325 25.4688L104.759 25.9717C109.165 31.2132 111.351 37.9707 111.351 46.2002C111.351 55.0705 109.536 63.246 105.9 70.7188C102.275 78.1719 97.5382 84.6229 91.6914 90.0664C86.0576 95.4978 80.0146 99.7285 73.5625 102.753L73.1387 102.951L72.9131 102.542L66.6123 91.1416L66.3643 90.6924L66.8203 90.4561C72.1753 87.6794 76.8303 84.3109 80.79 80.3525C84.5096 76.4466 87.4382 72.3741 89.5811 68.1348L89.999 67.2842C92.0098 62.895 93.079 58.781 93.2295 54.9375C92.4571 55.3894 91.4865 55.8334 90.3262 56.2686L90.3066 56.2754L90.2881 56.2812C88.8344 56.6966 87.1865 56.9004 85.3506 56.9004C79.633 56.9004 74.9945 55.0571 71.4873 51.3438L71.4775 51.334C67.9904 47.4366 66.25 42.7153 66.25 37.2002C66.25 32.2702 68.0007 27.758 71.4697 23.6768C74.9885 19.3362 80.247 17.2002 87.1504 17.2002Z" 
      stroke="black"
    />
  </svg>
);

// Default Section Header Component
const SectionHeader: React.FC<{ title: string; className?: string }> = ({ title, className = '' }) => (
  <div className={`text-center mb-16 md:mb-24 mx-auto ${className}`}>
    <h2 className="mb-1.5 md:mb-4 text-3xl lg:text-4xl font-semibold font-serif tracking-wide">
      {title}
    </h2>
  </div>
);

const TestimonialsSwiper: React.FC<TestimonialsSwiperProps> = ({
  testimonials,
  title = "業界的信賴",
  className = "",
  showTitle = true,
  autoplayDelay = 3000,
  enableAutoplay = true,
  enableLoop = true,
  speed = 1000,
  showQuoteIcon = true,
  customQuoteIcon,
}) => {
  const paginationRef = useRef<HTMLDivElement>(null);

  const QuoteIcon = customQuoteIcon || <DefaultQuoteIcon />;

  return (
    <section className={`section section--dark overflow-hidden !px-0 testimonials ${className}`}>
      <div className="max-w-[1664px] mx-auto">
        {showTitle && (
          <SectionHeader title={title} />
        )}

        {/* Testimonials Swiper */}
        <Swiper
          modules={[Pagination, Mousewheel, Autoplay]}
          slidesPerView="auto"
          centeredSlides={true}
          breakpoints={{
            0: {
              spaceBetween: 24,
            },
            800: {
              spaceBetween: 40,
            },
            1200: {
              spaceBetween: 72,
            },
            1600: {
              spaceBetween: 128,
            },
          }}
          autoplay={enableAutoplay ? {
            delay: autoplayDelay,
            disableOnInteraction: false,
          } : false}
          loop={enableLoop}
          speed={speed}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
          }}
          mousewheel={{
            forceToAxis: true,
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="p-8 lg:p-12 h-auto lg:h-[418px] flex flex-col bg-white rounded-lg shadow-lg">
                {showQuoteIcon && QuoteIcon}
                
                {/* Header with Avatar and Info */}
                <div className="flex items-center gap-4 mb-5 lg:mb-9">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    {testimonial.avatar ? (
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-gray-600 text-sm">頭像</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xl lg:text-2xl font-semibold text-black font-serif">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm lg:text-base text-black/60">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 mb-5 lg:mb-9">
                  <p className="text-base lg:text-lg text-black/80 leading-[1.8] font-serif font-medium">
                    {testimonial.testimonial}
                  </p>
                </div>

                {/* Company Logo */}
                <div className="flex justify-end">
                  <div className="w-[144px] h-[30px] lg:w-[240px] lg:h-[50px] bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-600 text-sm">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* External Pagination */}
        <div className="custom-swiper-pagination flex justify-center mt-8 lg:mt-12" ref={paginationRef} />
      </div>
    </section>
  );
};

export default TestimonialsSwiper;
export type { Testimonial, TestimonialsSwiperProps }; 