export async function generateStaticParams() {
  const blogs = await getData<courseDetails>('get-category-courses');

  if (!Array.isArray(blogs)) return [];

  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

import CourseCard from "@/components/courseCard/CourseCard";
import CourseCity from "@/components/courseCity/CourseCity";
import HeroCategories from "@/components/heroCategories/HeroCategories";
import { Course, SessionCource } from "@/types/types";
import getData from "@/utilts/getData";




type courseDetails = {
  category: Category,
  courses: Course[]
}
type Category = {
  id: number;
  title: string;
  lang: string;
  description: string;
  image: string;
  image_alt: string;
  image_title: string;
  slug: string;
  h1: string;
  icon: string;
  canonical: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_robots: string;
  meta_image: string;
  meta_image_size: string;
  meta_type: string;
  meta_site_name: string;
  meta_site: string;
  meta_local: string;
  meta_card: string;
  created_at: string; // ISO 8601 datetime string
  updated_at: string; // ISO 8601 datetime string
};

export default async function page({ params }: { params: Promise<{ slug: string }> }) {



  const data = await getData<courseDetails>(`get-category-courses/${(await params).slug}`);
  const dataCourses = await getData<SessionCource[]>("get-upcoming-courses");

  if (!data) {

    return (
      <div className="w-full text-center py-8 font-bold text-red-600">
        Failed to load category data
      </div>
    );
  }

  if (!dataCourses) {

    return (
      <div className="w-full text-center py-8 font-bold text-red-600">
        Failed to load cources data
      </div>
    );
  }
  return (
    <div className='w-full' >
      <HeroCategories background='bg-hero-cities-bg' />
      <div className='px-12 py-8 w-full bg-[#f0effa]' >
        <div className='flex justify-between items-center' >
          <h1 className='lg:text-xl text-lg  font-semibold text-secondary uppercase '>
            {data?.category.h1}
          </h1>
          {/* <div className='relative w-[35%]' >
            <Image alt='search' width={24} height={24} src='/search-blue.svg' className='left-0 absolute bottom-1' />
            <input type='search' placeholder='Search For keywords' className='text-sm font-normal w-full text-secondary pl-8 outline-none border-b-[1px] border-secondary bg-transparent' />
          </div> */}
        </div>
        <div className='w-full pt-10 flex flex-col gap-3' >
          {
            data?.courses.map(ele => {
              return <CourseCity link={`/course/${ele.slug}`} title={ele.title} key={ele.id} />
            })
          }

        </div>
        <div className='pt-14' >
          <h1 className='lg:text-2xl text-xl  font-semibold text-secondary uppercase '>
            recommended for you
          </h1>
          <p className='text-sm font-normal pt-2 text-secondary'>
            Handpicked courses just for you
          </p>
          <div className=' grid-cols-1 1249max&600min:grid-cols-2 1250min:grid-cols-3 grid gap-4 w-full pt-8'>
            {
              dataCourses?.map((ele) => {
                return <CourseCard alt={ele.image_alt} cite={ele.city_title} date={ele.date_from} image={ele.course_image} title={ele.course_title} key={ele.id} link={`/course/${ele.course_slug}`} />
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}
