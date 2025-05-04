import React from 'react'
import VeunesSlider from '../veunesSlider/VeunesSlider'
import getData from '@/utilts/getData';
import { citiesType } from '@/types/types';

export default async function Veunes() {
  const data = await getData<citiesType[]>("get-home-cities");
  return (
    <div className='veunes pt-8 bg-[#f0effa] w-full  pb-8' >
        <h1 className='lg:text-2xl px-12 text-xl font-semibold text-secondary uppercase' >Training Venues</h1>
        
        <VeunesSlider cities={data} />
    </div>
  )
}
