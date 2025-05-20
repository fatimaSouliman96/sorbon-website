import CardCity from '@/components/cardCity/CardCity'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import { citiesType } from '@/types/types';
import getData from '@/utilts/getData';
import Link from 'next/link';



export default async function Page() {
  
  const data = await getData<citiesType[]>("get-all-cities");
  const cities = data || [];
  
  if (!Array.isArray(cities)) {
    console.error("Expected array for blog posts but got:", cities);
    return (
      <div className="w-full text-center py-8 font-bold text-red-600">
        Failed to load blog data
      </div>
    );
  }
  const visibleItems = cities.slice(0, 9);
  const shouldShowToggle = cities.length > 9;


  return (
    <div className="w-full">
      <HeroCategories background='bg-hero-cities-bg' />
      <div className="w-full bg-[#f0effa] px-12 py-8 flex flex-col">
        <h1 className="lg:text-2xl text-xl font-semibold text-secondary uppercase">
          Featured Courses in Selected Cities
        </h1>

        <div className="grid 433max:grid-cols-1 585max:grid-cols-1 721max:grid-cols-2 913max:grid-cols-3 grid-cols-1 914min:grid-cols-4 gap-4 w-full pt-12">
          {visibleItems.map((city, index) => (
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
        {shouldShowToggle && (
          <Link
            href="/categories/all" 
            className="transform transition-transform duration-200 border-2 p-2 w-[200px] m-auto mt-8 border-[#322A8D99] rounded-[8px] text-[#322a8d] text-lg font-medium text-center"
          >
            All Cities
          </Link>
        )}
      </div>
    </div>
  );
}
