import React from 'react'
import FiltterSearch from '../filtterSearch/FiltterSearch'

interface HeroProps {
    background: string

}
const HeroCategories: React.FC<HeroProps> = ({ background }) => {
    return (
        <div className={`${background} w-full bg-center bg-cover bg-no-repeat relative lg:h-[60vh] h-[77vh]`}>

            <div className={`absolute top-0 left-0 w-full h-full pt-32`} >
                <h1 className='lg:text-2xl text-xl font-semibold text-white text-center uppercase'>Discover Knowledge That Transforms Your Future</h1>
                <FiltterSearch />
            </div>
            <div className={`w-full h-full bg-[#17133FA6] `}>
            </div>
        </div>
    )
}

export default HeroCategories