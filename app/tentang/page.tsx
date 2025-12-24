import ContentSection from "@/components/layanan";
import HeroSubSection from "@/components/hero-subsection";
import { GlobeDemo } from "@/components/theGlobe";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import TestimonialsSection from "@/components/testimonials";

export default function About() {
  return (
    <div className="h-full">
      <GlobeDemo></GlobeDemo>
      <StatsSection></StatsSection>
      <TestimonialsSection></TestimonialsSection>
      <TeamSection></TeamSection>
    </div>
  );
}
