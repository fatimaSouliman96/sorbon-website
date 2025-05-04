import { baseUrl } from "@/constant/baseUrl";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetch(`${baseUrl}get-timings-by-course/${slug}`);
  const data = await res.json();


  const meta_title = data?.course.meta_title 
  const meta_description = data?.course.meta_description 
  const meta_keywords = data?.course.meta_keywords 
  const meta_robots = data?.course.meta_robots 

  return {
    title: `Sorbon | ${meta_title}`,
    description: `Explore top courses and categories in ${meta_description}.`,
    keywords: meta_keywords,
    robots: meta_robots,
    
  };
}

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    < >

          
          {children}

     
    </>
  );
}
