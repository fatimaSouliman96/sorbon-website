import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Category",
  description: "Generated by create next app",
};

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
