import CategoryCard from "../categoryCard/CategoryCard";


export default function CategorySection() {
    return (
        <div className="w-full bg-secondary min-h-fit px-12 py-4" >
            <div className="flex items-center justify-between" >
                <h1 className='sm:text-lg md:text-2xl lg:text-4xl text-lg  font-semibold text-white'>Our Courses by Category</h1>
                <span className="text-base font-normal text-thirdy underline" >View All</span>
            </div>
            <div className='433max:grid-cols-1 585max:grid-cols-2 721max:grid-cols-3 913max:grid-cols-4 grid-cols-1 914min:grid-cols-5 grid  gap-4 w-full pt-12'>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    )
}
