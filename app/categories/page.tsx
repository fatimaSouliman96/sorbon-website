import CardCity from "@/components/cardCity/CardCity";
import HeroCategories from "@/components/heroCategories/HeroCategories";
import { CategoriesData } from "@/types/types";
import getData from "@/utilts/getData";
import Link from "next/link";
export default async function Page() {
  const data = await getData<CategoriesData[]>("get-all-categories?lang=en");
  const items = data || [];

  const visibleItems = items.slice(0, 9);
  const shouldShowToggle = items.length > 9;

  return (
    <div className="w-full">
      <HeroCategories background="bg-hero-categories-bg" />
      <div className="w-full bg-[#f0effa] px-12 py-8 flex flex-col">
        <h1 className="lg:text-4xl text-3xl font-semibold text-secondary">
          Explore courses that fuel your journey.
        </h1>

        <div className="grid pt-12 585max:grid-cols-1 721max:grid-cols-2 913max:grid-cols-3 grid-cols-1 914min:grid-cols-3 gap-4 w-full">
          {visibleItems.map((ele) => (
            <CardCity
              image={ele.image}
              imageAlt={ele.image_alt}
              key={ele.id}
              link={`categories/${ele.slug}`}
              category={true}
              title={ele.title}
              height="h-[184px]"
            />
          ))}
        </div>

        {shouldShowToggle && (
          <Link
            href="/categories/all" 
            className="transform transition-transform duration-200 border-2 p-2 w-[200px] m-auto mt-8 border-[#322A8D99] rounded-[8px] text-[#322a8d] text-lg font-medium text-center"
          >
            All Categories
          </Link>
        )}
      </div>
    </div>
  );
}

