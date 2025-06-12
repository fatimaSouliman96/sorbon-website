import { baseUrl } from "@/constant/baseUrl";

export async function generateMetadata({params}: {params: Promise<{ slug: string }>}) {
  const res = await fetch(`${baseUrl}get-blog/${(await params).slug}`);
  const data = await res.json();

  return {
    title: `Sorbon | ${data?.meta_title || "Blog"}`,
    description: `Explore top courses and categories in ${data?.meta_description || ""}.`,
    keywords: data?.meta_keywords,
    robots: data?.meta_robots,
  };
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

