import CardCity from "@/components/cardCity/CardCity";
import HeroCategories from "@/components/heroCategories/HeroCategories";


export default function page() {
  return (
    <div className="w-full" >
      <HeroCategories background="bg-hero-categories-bg" />
      <div className=" w-full bg-[#f0effa] px-12 py-8 flex flex-col">
        <h1 className='lg:text-4xl text-3xl font-semibold text-secondary'>Explore courses that fuel your journey.</h1>
        <div className="grid pt-12 585max:grid-cols-1 721max:grid-cols-2 913max:grid-cols-3 grid-cols-1 914min:grid-cols-3 gap-4 w-full" >
          <CardCity link="categories/category" category={true} title='Advanced Heat Exchanger Design with HTRI Software' height='h-[184px]' />
          <CardCity link="categories/category" category={true} title='Advanced Heat Exchanger Design with HTRI Software' height='h-[184px]' />
          <CardCity link="categories/category" category={true} title='Advanced Heat Exchanger Design with HTRI Software' height='h-[184px]' />
        </div>
        <button className='transform transition-transform duration-200 scal border-2  p-2 w-[200px] m-auto mt-8 border-[#322A8D99] rounded-[8px] text-[#322a8d] text-lg font-medium ' >
          All Categories
        </button>
      </div>
    </div>
  )
}
