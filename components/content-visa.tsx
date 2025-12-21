import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FocusCards } from "./ui/focus-cards";

export default function ContentSectionVisa() {
  const visaCards = [
    { title: "China", src: "/awdaw.png", href: "/layanan/visa/china" },
    { title: "Korea", src: "/awdaw.png", href: "/layanan/visa/korea" },
    { title: "Japan", src: "/japan.png", href: "/layanan/visa/japan" },
    { title: "Taiwan", src: "/awdaw.png", href: "/layanan/visa/taiwan" },
    { title: "India", src: "/awdaw.png", href: "/layanan/visa/india" },
    { title: "Saudi Arabia", src: "/awdaw.png", href: "/layanan/visa/saudi-arabia" },
    { title: "Uni Emirates Arab", src: "/awdaw.png", href: "/layanan/visa/uni-emirates-arab" },
  ];
  return (
    <section className="py-16 md:py-32">
      {/* 1 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl mb-8">Pengurusan Visa</h2>
      </div>
      <FocusCards cards={visaCards}></FocusCards>
    </section>
  );
}
