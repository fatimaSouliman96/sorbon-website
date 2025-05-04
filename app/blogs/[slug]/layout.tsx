import { baseUrl } from "@/constant/baseUrl";




export async function generateMetadata({params}: {params: Promise<{ slug: string }>}) {
  
  
  const res = await fetch(`${baseUrl}get-blog/${(await params).slug}`);
  const data = await res.json();
  
  const meta_title = data?.meta_title 
  const meta_description = data?.meta_description 
  const meta_keywords = data?.meta_keywords 
  const meta_robots = data?.meta_robots 

  return {
    title: `Sorbon | ${meta_title}`,
    description: `Explore top courses and categories in ${meta_description}.`,
    keywords: meta_keywords,
    robots: meta_robots,
    
  };
}


export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
