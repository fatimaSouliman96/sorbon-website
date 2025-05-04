import { BlogPost } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const formatDate = (dateStr?: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }); // e.g. "August 13, 2021"
};

const BlogCard: React.FC<BlogPost> = ({ description, image, image_alt, title, tag_name, created_at, link }) => {

  const rawImg = image;

  const isValidRemote =
    typeof rawImg === "string" &&
    (rawImg.startsWith("/") ||
     rawImg.startsWith("http://") ||
     rawImg.startsWith("https://"));


  const imageSrc = isValidRemote ? rawImg : "/blog.png"
  return (
    <Link href={link??"#"} className="flex w-full lg:flex-nowrap flex-wrap">
      <div className="lg:w-[70%] w-full pr-4">
        <div className="w-[260px] flex items-center">
          <p className="text-[13px] rounded-l-md w-1/2 text-center font-semibold text-secondary bg-[#EBF2FE] p-2">
            {tag_name}
          </p>
          <p className="text-[13px] rounded-r-md w-1/2 text-center font-semibold text-secondary bg-white p-2">
            {formatDate(created_at)}
          </p>
        </div>
        <h1 className="transform transition-transform duration-200 scal pt-4 lg:text-[28px] text-base font-bold text-secondary">
          {title}
        </h1>
        <p className="text-sm font-normal text-secondary pt-2 lg:pr-96 pr-8 leading-[150%]">
          {description}
        </p>
      </div>
      <div className="lg:w-[30%] w-full h-[210px] rounded-lg relative">
        <Image className="rounded-lg" alt={image_alt ?? ''} fill src={imageSrc} />
      </div>
    </Link>
  );
};

export default BlogCard;
