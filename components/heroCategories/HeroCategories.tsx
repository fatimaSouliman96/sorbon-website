import React from 'react'
import FiltterSearch from '../filtterSearch/FiltterSearch'

interface HeroProps {
    background: string

}
const HeroCategories: React.FC<HeroProps> = ({ background }) => {
    return (
        <div className={`${background} w-full bg-center bg-cover bg-no-repeat z-0 relative  max-h-fit`}>
            <div className={`flex flex-col items-center w-full h-fit pb-6 pt-32`} >
                <h1 className='lg:text-2xl py-3 text-xl font-semibold text-white text-center uppercase'>Discover Knowledge That Transforms Your Future</h1>
                <FiltterSearch />
            </div>
            <div className={`absolute top-0 left-0 w-full h-full z-[-1] bg-[#17133FA6] `}>
            </div>
        </div>
    )
}

export default HeroCategories