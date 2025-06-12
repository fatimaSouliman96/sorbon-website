import CardCity from "@/components/cardCity/CardCity";
import HeroCategories from "@/components/heroCategories/HeroCategories";
import { CategoriesData } from "@/types/types";
import getData from "@/utilts/getData";



export default async function Page() {


  const data = await getData<CategoriesData[]>("get-all-categories");

  if (!Array.isArray(data)) {

    return (
      <div className="w-full text-center py-8 font-bold text-red-600">

      </div>
    );
  }



  return (
    <div className="w-full">
      <HeroCategories background="bg-hero-categories-bg" />
      <div className="w-full bg-[#f0effa] px-12 py-8 flex flex-col">
        <h1 className="lg:text-4xl text-3xl font-semibold text-secondary">
          Explore courses that fuel your journey.
        </h1>

        <div className="grid pt-12 585max:grid-cols-1 721max:grid-cols-2 913max:grid-cols-3 grid-cols-1 914min:grid-cols-3 gap-4 w-full">
          {
            data.length == 0 ?
              <h1 className="lg:text-xl text-lg font-semibold text-black">
                No categories available.
              </h1>
              :
              data.map((ele) => (
                <CardCity
                  image={ele.image}
                  imageAlt={ele.image_alt}
                  key={ele.id}
                  link={`categories/${ele.slug}`}
                  category={true}
                  title={ele.title}
                  height="h-[184px]"
                />
              ))
          }
        </div>

      </div>
    </div>
  );
}

