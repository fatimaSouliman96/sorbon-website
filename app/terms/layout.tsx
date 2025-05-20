import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sorbon | Terms",
  description: "Terms",
};

export default function TermsLayout({
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
