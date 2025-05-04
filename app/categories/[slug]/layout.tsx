import { baseUrl } from "@/constant/baseUrl";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetch(`${baseUrl}get-category-courses/${slug}`);
  const data = await res.json();


  const meta_title = data?.category.meta_title 
  const meta_description = data?.category.meta_description 
  const meta_keywords = data?.category.meta_keywords 
  const meta_robots = data?.category.meta_robots 

  return {
    title: `Sorbon | ${meta_title}`,
    description: `Explore top courses and categories in ${meta_description}.`,
    keywords: meta_keywords,
    robots: meta_robots,
    
  };
}


export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
          {children}
    </>
  );
}
