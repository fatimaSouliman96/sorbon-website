import ClientsSection from "@/components/clientsSection/ClientsSection";
import Explore from "@/components/Explore/Explore";
import HeroCategories from "@/components/heroCategories/HeroCategories";
import Trustworthy from "@/components/Trustworthy/Trustworthy";
import Veunes from "@/components/vuneusSection/Veunes";
import CategoriesSection from "@/components/CategoriesSection/CategoriesSection";
import UpcomingCourcesSection from "@/components/UpcomingCourcesSection/UpcomingCourcesSection";

export default async function Home() {
  return (
    <>
      <HeroCategories background="bg-hero-home-bg" />
      <CategoriesSection />
      <UpcomingCourcesSection />
      <Explore />
      <Trustworthy />
      <ClientsSection />
      <Veunes />
    </>
  );
}

