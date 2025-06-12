import CardCity from '@/components/cardCity/CardCity'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import { citiesType } from '@/types/types';
import getData from '@/utilts/getData';



export default async function Page() {


  const data = await getData<citiesType[]>("get-all-cities");


  if (!Array.isArray(data)) {

    return (
      <div className="w-full text-center py-8 font-bold text-red-600">
        Failed to load blog data
      </div>
    );
  }



  return (
    <div className="w-full">
      <HeroCategories background='bg-hero-cities-bg' />
      <div className="w-full bg-[#f0effa] px-12 py-8 flex flex-col">
        <h1 className="lg:text-2xl text-xl font-semibold text-secondary uppercase">
          Featured Courses in Selected Cities
        </h1>

        <div className="grid 433max:grid-cols-1 585max:grid-cols-1 721max:grid-cols-2 913max:grid-cols-3 grid-cols-1 914min:grid-cols-4 gap-4 w-full pt-12">
          {data.map((city, index) => (
            <CardCity
              image={city.image}
              imageAlt={city.slug}
              key={index}
              link={`cities/${city.slug}/`} // replace as needed
              title={city.title || 'City Name'}
              height="h-[112px]"
            />
          ))}
        </div>

      </div>
    </div>
  );
}
