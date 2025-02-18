import React from 'react'
import FiltterSearch from '../filtterSearch/FiltterSearch'

interface HeroProps {
    title: string,
    descraption: string,
    categories?: boolean
}
const HeroCategories: React.FC<HeroProps> = ({title, descraption, categories}) => {
    return (
        <div className='w-full relative h-[120vh] hero'>
            <div className={`${categories ? "bg-hero-categories-bg" : "bg-hero-cities-bg"} w-full h-full  pt-32 bg-center bg-cover bg-no-repeat`} >
            <FiltterSearch />
                <div className='flex flex-col w-full pt-12' >
                    <h1 className='sm:text-lg text-lg md:text-xl lg:text-4xl text-white sm:pt-8 lg:pt-20 md:pt-12 pt-8 font-light uppercase tracking-normal w-[100%] text-center'>{title}</h1>
                    <h1 className='sm:text-xs text-xs md:text-sm lg:text-base text-white font-normal uppercase tracking-light w-[100%] pt-8 px-96 text-center'>{descraption}</h1>

                </div>

            </div>
        </div>
    )
}

export default HeroCategories