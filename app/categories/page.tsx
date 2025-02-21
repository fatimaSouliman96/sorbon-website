import CardCategory from "@/components/cardCategory/CardCategory";
import CourseCard from "@/components/courseCard/CourseCard";
import HeroCategories from "@/components/heroCategories/HeroCategories";


export default function page() {
  return (
    <div className="w-full" >
      <HeroCategories categories={true} title="Explore courses that fuel your journey." descraption="each one a doorway to new skills, endless opportunities, and your next breakthrough." />
      <div className="grid 433max:grid-cols-1 585max:grid-cols-3 721max:grid-cols-4 913max:grid-cols-5 grid-cols-1 914min:grid-cols-6 gap-4 w-full bg-[#f0effa] px-12 py-8" >
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div>
      <div className=" w-full bg-[#f0effa] px-12 py-8">
        <h1 className='lg:text-4xl text-3xl font-semibold text-secondary'>Recommended for you</h1>
        <p className='text-sm font-normal pt-2 text-secondary' >Handpicked courses just for you</p>
        <div className="grid 433max:grid-cols-1 pt-12 585max:grid-cols-3 721max:grid-cols-4 913max:grid-cols-5 grid-cols-1 914min:grid-cols-6 gap-4 w-full" >
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  )
}
