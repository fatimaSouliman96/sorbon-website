// File: app/about/layout.tsx
// import { SeoMetaData } from "@/types/types";
// import postData from "@/utilts/postData";
// import type { Metadata } from "next";

// export async function generateMetadata(): Promise<Metadata> {
//   const data = await postData<SeoMetaData>('get-meta-data-accrording-to-page', { section: 'about', lang: 'en'});

//   return {
//     title: data?.meta_title || 'Default Title',
//     description: data?.meta_description || 'Default description',
//     keywords: data?.meta_keywords,
//   };
// }

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

