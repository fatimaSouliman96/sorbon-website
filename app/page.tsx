import CategorySection from "@/components/categorySection/CategorySection";
import ClientsSection from "@/components/clientsSection/ClientsSection";
import Explore from "@/components/Explore/Explore";
import Hero from "@/components/hero/Hero";
import Trustworthy from "@/components/Trustworthy/Trustworthy";
import Upcoming from "@/components/upcoming/Upcoming";
import Veunes from "@/components/vuneusSection/Veunes";

export default function Home() {

 

  return (

    < >
        <Hero />
        <Upcoming />
        <Explore />
        <Trustworthy />
        <ClientsSection />
        <CategorySection />
        <Veunes />
    
    </>
  );
}

