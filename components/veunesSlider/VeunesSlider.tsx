"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

export default function VeunesSlider() {
  
  const desktopPrev = useRef(null);
  const desktopNext = useRef(null);


  

  return (
    <div className="relative veune-swiper">
      {/* Swiper */}

        <Swiper
          grabCursor={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl:desktopNext.current,
            nextEl:desktopPrev.current,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            585: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            721: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            913: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          className="veunesSwiper"
        >
          {[...Array(11)].map((_, index) => (
            <SwiperSlide key={index} className="swiper-slide-custom">
              <Image
                className="rounded-xl"
                src="/veunes.png"
                alt="venue"
                width={450}
                height={278}
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-xl bg-[#17133f99] z-10">
                <h1 className="text-4xl text-white font-bold text-center">
                  City
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    

      {/* Desktop Arrows */}
      <div
        className="custom-swiper-button-prev "
        ref={desktopPrev}
      >
        <Image
          src="/arrow-right-blue.svg"
          className="rotate-180"
          alt="prev"
          width={25}
          height={25}
        />
      </div>
      <div
        className="custom-swiper-button-next"
        ref={desktopNext}
      >
        <Image
          src="/arrow-right-blue.svg"
          alt="next"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
}




