import ClientsSection from "@/components/clientsSection/ClientsSection";
import Explore from "@/components/Explore/Explore";
import HeroCategories from "@/components/heroCategories/HeroCategories";
import TransferSection from "@/components/transferSection/TransferSection";
import Trustworthy from "@/components/Trustworthy/Trustworthy";
import Upcoming from "@/components/upcoming/Upcoming";
import Veunes from "@/components/vuneusSection/Veunes";

export default function Home() {

 

  return (

    < >
        <HeroCategories background="bg-hero-home-bg" />
        <Upcoming />
        <TransferSection />
        <Explore />
        <Trustworthy />
        <ClientsSection />
        <Veunes />
    
    </>
  );
}

