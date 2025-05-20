"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import type { Swiper as SwiperClass } from 'swiper';
import { clientsData } from '@/constant/staticData';

export default function ClientsSlider() {
  const refNext = useRef<HTMLDivElement | null>(null);
  const refPrev = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      refNext.current &&
      refPrev.current &&
      typeof swiperInstance.params.navigation === 'object' &&
      swiperInstance.navigation
    ) {
      swiperInstance.params.navigation.prevEl = refPrev.current;
      swiperInstance.params.navigation.nextEl = refNext.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }

  }, [swiperInstance]);



  return (
    <div className="relative client-swiper">
      {/* Navigation Buttons */}
      <div
        ref={refPrev}
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
        ref={refNext}
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
        grabCursor
        loop
        centeredSlides
        initialSlide={Math.floor(clientsData.length / 2)}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          585: { slidesPerView: 2, spaceBetween: 10 },
          721: { slidesPerView: 3, spaceBetween: 10 },
          913: { slidesPerView: 5, spaceBetween: 50 },
        }}
      >
        {clientsData.map((ele, index) => (
          <SwiperSlide key={index}>
            <div  className="relative w-full h-[150px]">
              <Image
                className="rounded"
                src={ele.img}
                fill
                alt="sorbon-logo"
               style={{ objectFit: 'fill' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}




