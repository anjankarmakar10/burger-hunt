import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="max-w-[1250px] px-4 mx-auto ">
      <Hero />
      <Sponsors />
      <Features />
    </main>
  );
}
