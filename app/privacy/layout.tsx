import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sorbon | Privacy",
  description: "Privacy",
};

export default function PrivacyLayout({
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
