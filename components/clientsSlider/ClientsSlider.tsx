"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function ClientsSlider() {
    return (
        <>
            <Swiper
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="mySwiper"
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
                          spaceBetween: 10,
                        },
                        913: { // For screens >= 1075px
                          slidesPerView: 5,
                          spaceBetween: 50,
                        },
                      }}
            >
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
                <SwiperSlide>
                        <Image className='rounded ' src="/clients.png" fill alt="sorbon-logo" />
                </SwiperSlide>
            </Swiper>

        </>
    );
}
