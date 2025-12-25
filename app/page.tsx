import HeroSection from "@/components/hero-section";
import Features from "@/components/features-12";
import { TestiCloud } from "@/components/testi-cloud";
export default function Home() {
  return (
    <div className=" h-full">
      <HeroSection></HeroSection>
      <Features></Features>
      <TestiCloud></TestiCloud>
    </div>
  );
}
