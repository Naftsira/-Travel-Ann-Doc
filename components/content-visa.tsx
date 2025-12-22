import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FocusCards } from "./ui/focus-cards";

export default function ContentSectionVisa() {
  const asiaCards = [
    { title: "China", src: "/layanan/visa/asia/china.jpg", href: "/layanan/visa/asia/china" },
    { title: "Korea", src: "/layanan/visa/asia/korea.jpg", href: "/layanan/visa/asia/korea" },
    { title: "Japan", src: "/layanan/visa/asia/japan.png", href: "/layanan/visa/asia/japan" },
    { title: "Taiwan", src: "/layanan/visa/asia/japan.png", href: "/layanan/visa/asia/taiwan" },
    { title: "India", src: "/layanan/visa/asia/india.png", href: "/layanan/visa/asia/india" },
    { title: "Saudi Arabia", src: "/layanan/visa/asia/saudi.jpg", href: "/layanan/visa/asia/saudi-arabia" },
    { title: "Uni Emirates Arab", src: "/layanan/visa/asia/uea.jpg", href: "/layanan/visa/asia/uni-emirates-arab" },
  ];
  const europeCards = [
    { title: "Ukraine", src: "/layanan/visa/eu/ukraine.jpg", href: "/layanan/visa/eu/ukraine" },
    { title: "Hungary", src: "/layanan/visa/eu/hungary.jpg", href: "/layanan/visa/eu/hungary" },
    { title: "Greece", src: "/layanan/visa/eu/greece.jpg", href: "/layanan/visa/eu/greece" },
    { title: "Germany", src: "/layanan/visa/eu/germany.jpg", href: "/layanan/visa/eu/germany" },
    { title: "France", src: "/layanan/visa/eu/france.jpg", href: "/layanan/visa/eu/france" },
    { title: "Finland", src: "/layanan/visa/eu/finland.jpg", href: "/layanan/visa/eu/finland" },
    { title: "Egypt", src: "/layanan/visa/eu/egypt.jpg", href: "/layanan/visa/eu/egypt" },
    { title: "Czech Republic", src: "/layanan/visa/eu/czech.jpg", href: "/layanan/visa/eu/czech" },
    { title: "Croatia", src: "/layanan/visa/eu/croatia.jpg", href: "/layanan/visa/eu/croatia" },
    { title: "Austria", src: "/layanan/visa/eu/austria.jpg", href: "/layanan/visa/eu/austria" },
    { title: "Netherlands", src: "/layanan/visa/eu/netherlands.jpg", href: "/layanan/visa/eu/netherlands" },
    { title: "Italy", src: "/layanan/visa/eu/italy.jpg", href: "/layanan/visa/eu/italy" },
    { title: "Russia", src: "/layanan/visa/eu/russia.jpg", href: "/layanan/visa/eu/russia" },
    { title: "Poland", src: "/layanan/visa/eu/poland.jpg", href: "/layanan/visa/eu/poland" },
    { title: "Norway", src: "/layanan/visa/eu/norway.jpg", href: "/layanan/visa/eu/norway" },
    { title: "Switzerland", src: "/layanan/visa/eu/switzerland.jpg", href: "/layanan/visa/eu/switzerland" },
    { title: "Sweden", src: "/layanan/visa/eu/sweden.jpg", href: "/layanan/visa/eu/sweden" },
    { title: "Spain", src: "/layanan/visa/eu/spain.jpg", href: "/layanan/visa/eu/spain" },
    { title: "Portugal", src: "/layanan/visa/eu/portugal.jpg", href: "/layanan/visa/eu/portugal" },
    { title: "United Kingdom", src: "/layanan/visa/eu/uk.jpg", href: "/layanan/visa/eu/united-kingdom" },
  ];
  const australiaCards = [
    { title: "Australia", src: "/layanan/visa/aus/australia.jpg", href: "/layanan/visa/aus/australia" },
    { title: "New Zealand", src: "/layanan/visa/aus/new-zealand.jpg", href: "/layanan/visa/aus/new-zealand" },
  ];
  const americaCards = [
    { title: "USA", src: "/layanan/visa/america/usa.jpg", href: "/layanan/visa/america/usa" },
    { title: "Canada", src: "/layanan/visa/america/canada.jpg", href: "/layanan/visa/america/canada" },
    { title: "Argentina", src: "/layanan/visa/america/argentina.jpg", href: "/layanan/visa/america/argentina" },
  ];
  const africaCards = [{ title: "South Africa", src: "/layanan/visa/africa/south-africa.jpg", href: "/layanan/visa/africa/south-africa" }];
  return (
    <section className="py-16 md:py-32 *:mb-32">
      {/* 1 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl mb-8">Asia</h2>
        <FocusCards cards={asiaCards}></FocusCards>
      </div>
      {/* 2 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl mb-8">Europe</h2>
        <FocusCards cards={europeCards}></FocusCards>
      </div>
      {/* 3 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl mb-8">Australia</h2>
        <FocusCards cards={australiaCards}></FocusCards>
      </div>
      {/* 4 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl mb-8">America</h2>
        <FocusCards cards={americaCards}></FocusCards>
      </div>
      {/* 5 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl mb-8">Africa</h2>
        <FocusCards cards={africaCards}></FocusCards>
      </div>
    </section>
  );
}
