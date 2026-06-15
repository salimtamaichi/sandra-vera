import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Featured from "@/components/Featured";
import Bonuses from "@/components/Bonuses";
import Reviews from "@/components/Reviews";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Featured />
      <Bonuses />
      <Reviews />
      <CtaSection />
    </>
  );
}
