//
export async function generateStaticParams() {
  const blogs = await getData<BlogPost[]>('get-blog');

  if (!Array.isArray(blogs)) return [];

  return blogs.map((post) => ({
    slug: post.slug,
  }));
}
import HeroCategories from '@/components/heroCategories/HeroCategories';
import { BlogPost } from '@/types/types';
import getData from '@/utilts/getData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';



export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  const data = await getData<BlogPost>(`get-blog/${(await params).slug}`);

  if (!data) notFound();

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const imageSrc =
    typeof data.image === 'string' &&
    (data.image.startsWith('/') ||
      data.image.startsWith('http://') ||
      data.image.startsWith('https://'))
      ? data.image
      : '/show-blog.jpg';

  return (
    <div className="w-full">
      <HeroCategories background="bg-hero-categories-bg" />
      <div className="w-full flex flex-col gap-8 px-16 py-8">
        <h1 className="lg:text-4xl text-3xll font-semibold text-secondary uppercase">
          {data?.h1}
        </h1>
        <div className="w-full h-[288px] relative">
          <Image src={imageSrc} alt="blog" fill />
        </div>
        <div className="w-[251px] self-end flex items-center">
          <p className="text-[13px] rounded-l-md w-1/2 text-center font-semibold text-secondary bg-[#EBF2FE] p-2">
            {data?.tag_name}
          </p>
          <p className="text-[13px] rounded-r-md w-1/2 text-center font-semibold text-secondary bg-white p-2">
            {formatDate(data?.created_at)}
          </p>
        </div>
        <p className="text-secondary text-base font-medium">
          {data?.description}
        </p>
      </div>
    </div>
  );
}




