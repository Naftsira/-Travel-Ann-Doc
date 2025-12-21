import ContentSection from "@/components/layanan";
import ContentSectionVisa from "@/components/content-visa";
import HeroSubSection from "@/components/hero-subsection";

export default function About() {
  return (
    <div className="h-full">
      <HeroSubSection></HeroSubSection>
      <ContentSectionVisa></ContentSectionVisa>
    </div>
  );
}
