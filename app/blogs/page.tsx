import BlogCard from '@/components/blogCard/BlogCard';
import HeroCategories from '@/components/heroCategories/HeroCategories';
import { BlogPost } from '@/types/types';
import getData from '@/utilts/getData';
import React from 'react';

export default async function Page() {
  const data = await getData<BlogPost[]>(`get-blogs`);

  // تحقق إنو البيانات مصفوفة
  if (!Array.isArray(data)) {
    console.error("Expected array for blog posts but got:", data);
    return (
      <div className="w-full text-center py-8 font-bold text-red-600">
        Failed to load blog data
      </div>
    );
  }

  return (
    <div className="w-full">
      <HeroCategories background="bg-hero-categories-bg" />
      <div className="w-full flex flex-col gap-14 px-16 py-8">
        <h1 className="lg:text-2xl text-xl font-semibold text-secondary uppercase">
          Explore our blogs
        </h1>

        {data.map((ele) => (
          <BlogCard
            key={ele.id}
            created_at={ele.created_at}
            description={ele.description}
            image_alt={ele.image_alt}
            title={ele.title}
            image={ele.image}
            tag_name={ele.tag_name}
            link={`/blogs/${ele.slug}`}
          />
        ))}
      </div>
    </div>
  );
}

