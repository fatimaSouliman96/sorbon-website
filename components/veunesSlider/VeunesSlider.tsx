"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css"; // Ensure this file contains the new styles

export default function VeunesSlider() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={2} // Show the main slide + parts of side slides
      spaceBetween={50}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      breakpoints={{
        0: { // For screens <= 714px
          slidesPerView: 1,
          spaceBetween: 10,
        },
        721: { // For screens >= 1075px
          slidesPerView: 2,
          spaceBetween: 20,
        },
        913: { // For screens >= 1075px
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }} // Reduce gap between slides
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300, // Increase depth for better effect
        modifier: 0.6,
        slideShadows: false, // Keep clean look
      }}
      pagination={{ clickable: true }}
      navigation={true}
      
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="veunesSwiper"
    >
      {[...Array(11)].map((_, index) => (
        <SwiperSlide key={index} className="swiper-slide-custom">
          <Image
            className="rounded-xl"
            src="/veunes.png"
            alt="course"
            width={450}
            height={278}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

