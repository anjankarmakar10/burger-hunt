import BestSection from "@/components/BestSection";
import Chefs from "@/components/Chefs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PopularSection from "@/components/PopularSection";
import Reviews from "@/components/Reviews";
import Sponsors from "@/components/Sponsors";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main className="max-w-[1250px] px-4 mx-auto ">
      <Hero />
      <Sponsors />
      <Features />
      <BestSection />
      <PopularSection />
      <Chefs />
      <Reviews />
      <Subscribe />
    </main>
  );
}
