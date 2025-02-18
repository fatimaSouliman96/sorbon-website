"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperSlider() {
  return (
    <>
      <Swiper pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"  >
        <SwiperSlide><Image src="/hero-image.png" fill alt="sorbon-logo" /></SwiperSlide>
        <SwiperSlide><Image src="/hero-image.png" fill alt="sorbon-logo" /></SwiperSlide>
        <SwiperSlide><Image src="/hero-image.png" fill alt="sorbon-logo" /></SwiperSlide>
      </Swiper>
    </>
  );
}
