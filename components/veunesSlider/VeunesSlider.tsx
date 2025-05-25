"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import type { Swiper as SwiperClass } from 'swiper';
import { citiesType } from "@/types/types";

interface data {
  cities: citiesType[] | undefined
}


const VeunesSlider: React.FC<data> = ({ cities }) => {
  const desktopPrev = useRef<HTMLDivElement | null>(null);
  const desktopNext = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const getBreakpoints = () => {
    const base = {
      0: { slidesPerView: 1, spaceBetween: 60 },
      585: { slidesPerView: 2, spaceBetween: 20 },
      721: { slidesPerView: 4, spaceBetween: 30 },
    };


    return base;
  };


  useEffect(() => {
    if (
      swiperInstance &&
      desktopNext.current &&
      desktopPrev.current &&
      typeof swiperInstance.params.navigation === 'object' &&
      swiperInstance.navigation
    ) {
      swiperInstance.params.navigation.prevEl = desktopPrev.current;
      swiperInstance.params.navigation.nextEl = desktopNext.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }

  }, [swiperInstance]);

  return (
    <div className="relative veune-swiper">
      {/* Custom Navigation Buttons */}
      <div
        ref={desktopPrev}
        className="custom-swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer"
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
        ref={desktopNext}
        className="custom-swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <Image
          src="/arrow-right-blue.svg"
          alt="next"
          width={25}
          height={25}
        />
      </div>

      {/* Swiper */}
      <Swiper
        grabCursor={true}
        pagination={{ clickable: true }}
        loop={cities && cities.length > 5}
        centeredSlides={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={getBreakpoints()}
        initialSlide={cities && cities.length > 0 ? Math.floor(cities.length / 2) : 0}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="veunesSwiper"
      >
        {cities?.map((ele) => (
          <SwiperSlide key={ele.id} className="swiper-slide-custom h-[278px] w-full  relative">
            <Image
              unoptimized
              className="rounded-xl"
              src={ele.image ?? "/veunes.png"}
              alt="venue"
              fill
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-xl bg-[#17133f99] z-10">
              <h1 className="text-4xl text-white font-bold text-center">
                {ele.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VeunesSlider 