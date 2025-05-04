import { SeoMetaData } from "@/types/types";
import postData from "@/utilts/postData";
import type { Metadata } from "next";


const data = await postData<SeoMetaData>('get-meta-data-accrording-to-page', {section:'blogs', lang:'en'});

export const metadata: Metadata = {
  title: data?.meta_title,
  description: data?.meta_description,
  keywords: data?.meta_keywords
};

export default function BlogsLayout({
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
