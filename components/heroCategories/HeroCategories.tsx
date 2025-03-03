import React from 'react'
import FiltterSearch from '../filtterSearch/FiltterSearch'
import './hero.css'
interface HeroProps {
    background: string

}
const HeroCategories: React.FC<HeroProps> = ({ background}) => {
    return (
        <div className={`${background} w-full  relative h-[70vh] hero `}>
            <div className={` absolute top-0 left-0 w-full h-full pt-28 bg-center bg-cover bg-no-repeat`} >
            <FiltterSearch />
            </div>
            <div className={`w-full h-full bg-[#17133FA6] `}>
            </div>
        </div>
    )
}

export default HeroCategories