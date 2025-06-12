import React from 'react';
import TransformCard from '../transformCard/TransformCard';
import { CategoriesData } from '@/types/types';
import getData from '@/utilts/getData';




const CategoriesSection = async () => {
  const data = await getData<CategoriesData[]>("get-all-categories");


  if (!Array.isArray(data)) {

    return (
      <div className='text-center font-extrabold pt-8'>

      </div>
    );
  }

  return (
    <div className='bg-[#f0effa] px-10 w-full pb-4 pt-8'>
      {data.length !== 0 && <h1 className='lg:text-2xl text-xl font-semibold text-secondary uppercase'>
        Discover Knowledge That Transforms Your Future
      </h1>}
      <div className='585max:grid-cols-1 grid-cols-2 grid gap-4 w-full pt-4'>
        {data.map((ele, index) => (
          <TransformCard
            link={`categories/${ele.slug}`}
            key={ele.id}
            title={ele.title}
            image={ele.image}
            image_alt={ele.image_alt}
            index={index}
            length={data.length}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection

