import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/footer/Footer";
import { Work_Sans } from "next/font/google";
import { SeoMetaData } from "@/types/types";
import postData from "@/utilts/postData";
import Script from "next/script";


const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await postData<SeoMetaData>('get-meta-data-accrording-to-page', {
    section: 'home',
    lang: 'en',
  });

  return {
    title: data?.meta_title,
    description: data?.meta_description,
    keywords: data?.meta_keywords,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link href="https://cdn.example.com/fonts/MadaniArabic-Medium.css" rel="stylesheet" />
        <Script
          src="/nutrient-viewer/nutrient-viewer.js"
          strategy="beforeInteractive"
        />
        <meta name="robots" content="noindex,nofollow"/>
      </head>
      <body
        className={`${workSans.className} bg-[#f0effa] min-h-screen max-w-full grid grid-rows-[60px auto 80px] grid-cols-1  m-auto`}
      >
        <NavBar />
        <main className="flex max-w-full flex-col items-center sm:items-start">

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
