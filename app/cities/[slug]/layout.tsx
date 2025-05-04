
import { baseUrl } from "@/constant/baseUrl";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetch(`${baseUrl}get-city-courses-and-categories/${slug}`);
  const data = await res.json();

 
  const meta_title = data?.city.meta_title 
  const meta_description = data?.city.meta_description 
  const meta_keywords = data?.city.meta_keywords 
  const meta_robots = data?.city.meta_robots 

  return {
    title: `Sorbon | ${meta_title}`,
    description: `Explore top courses and categories in ${meta_description}.`,
    keywords: meta_keywords,
    robots: meta_robots,

  };
}


type Props = {
  children: React.ReactNode;
};

export default function CityLayout({ children }: Props) {
  return <>{children}</>;
}



