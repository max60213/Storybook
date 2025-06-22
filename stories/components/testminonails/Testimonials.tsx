'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import './testimonials.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: "陳阿明",
      position: "藏逸拍賣會 藏逸員",
      avatar: "/api/placeholder/80/80",
      company: "藏逸拍賣會",
      testimonial: "藝信的驗證系統為畫廊提供了更高標準的藝術品鑑證機制，不僅強化交易的信任度，還讓作品來源更加透明可追溯。操作直覺，流程高效，為我們在市場上的專業形象與法律保障帶來了極大助益。"
    },
    {
      name: "李美華",
      position: "畫廊協會 理事長",
      avatar: "/api/placeholder/80/80",
      company: "畫廊協會",
      testimonial: "藝信的驗證系統不僅滿足畫廊協會在法律層面的需求，對於藝術品交易與管理而言，流程簡單直覺，業界夥伴皆能快速上手，大幅提升交易信任與保障。"
    },
    {
      name: "王志強",
      position: "拍賣會 總經理",
      avatar: "/api/placeholder/80/80",
      company: "拍賣會",
      testimonial: "藝信的驗證系統為拍賣會提供了可靠的藝術品鑑證支持，確保每件作品的來源與真實性，提升買家信心。高效的驗證流程讓我們能夠更順暢地運營，確保交易透明、公正，進一步提升市場競爭力。"
    },
    {
      name: "張雅芳",
      position: "藝術收藏家",
      avatar: "/api/placeholder/80/80",
      company: "私人收藏",
      testimonial: "藝信的驗證系統不僅滿足畫廊協會在法律層面的需求，對於藝術品交易與管理而言，流程簡單直覺，業界夥伴皆能快速上手，大幅提升交易信任與保障。"
    }
  ];

  // 外部 pagination 容器
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section section--dark overflow-hidden !px-0 testimonials">
      <div className="max-w-[1664px] mx-auto">
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
          }}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
            sensitivity: 1,
            thresholdDelta: 10,
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="!h-auto">
                <div className="p-8 lg:p-12 h-auto lg:h-[420px] flex flex-col">
                  {/* Header with Avatar and Info */}
                  <div className="flex items-center gap-4 mb-5 lg:mb-9">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-sm">頭像</span>
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
        {/* 外部 Pagination */}
        <div className="custom-swiper-pagination flex justify-center mt-8 lg:mt-12" ref={paginationRef} />
      </div>
    </section>
  );
};

export default Testimonials;