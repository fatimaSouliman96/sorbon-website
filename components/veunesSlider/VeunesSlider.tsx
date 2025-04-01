"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css"; // Ensure this file contains the new styles

export default function VeunesSlider() {
  // const isDecimal = (num) => num % 1 !== 0;
  //   const roundNumber = (num) => Math.round(num);
  return (
    <Swiper
      grabCursor={true}
      pagination={true}
      navigation={true}
      modules={[Navigation, Autoplay, Pagination]}
      initialSlide={(11/2) - 0.5}
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      breakpoints={{
        0: { // For screens <= 714px
          slidesPerView: 1,
          spaceBetween: 10,
        },
        585: { // For screens between 714px and 1074px
          slidesPerView: 2,
          spaceBetween: 20,
        },
        721: { // For screens >= 1075px
          slidesPerView: 3,
          spaceBetween: 20,
        },
        913: { // For screens >= 1075px
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
            alt="course"
            width={450}
            height={278}
          />
          <div className="absolute top-0 left-0 w-full h-full flex  items-center justify-center rounded-xl bg-[#17133f99] z-10" >
            <h1 className="text-4xl text-white font-bold texy-center ">City</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

