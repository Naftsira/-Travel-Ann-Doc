"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "clock",
      question: "Apa layanan utama Ann Travel Doc?",
      answer: "Kami membantu pengurusan dokumen perjalanan, visa, dan kebutuhan administratif terkait traveling secara cepat dan profesional.",
    },
    {
      id: "item-2",
      icon: "credit-card",
      question: "Apakah layanan tersedia untuk perusahaan?",
      answer: "Ya, kami melayani individu, keluarga, dan perusahaan dengan solusi praktis dan efisien untuk kebutuhan dokumen perjalanan mereka.",
    },
    {
      id: "item-3",
      icon: "truck",
      question: "Apakah ada konsultasi gratis?",
      answer: "Kami menyediakan konsultasi awal gratis untuk membantu Anda memahami kebutuhan dokumen perjalanan secara jelas.",
    },
    {
      id: "item-4",
      icon: "globe",
      question: "Bagaimana proses pengajuan visa?",
      answer: "Anda cukup menghubungi tim kami, kami akan memandu langkah demi langkah mulai dari pengumpulan dokumen hingga pengajuan visa.",
    },
    {
      id: "item-5",
      icon: "package",
      question: "Berapa lama proses dokumen?",
      answer: "Waktu proses bervariasi tergantung jenis dokumen, namun kami selalu berusaha memberikan layanan cepat dan tepat waktu.",
    },
    {
      id: "item-6",
      icon: "globe",
      question: "Bagaimana cara menghubungi Ann Travel Doc?",
      answer: "Anda dapat menghubungi kami melalui website, telepon, atau media sosial untuk mendapatkan bantuan dan informasi lebih lanjut.",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-50">
              <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-4">
                Can't find what you're looking for? Contact our{" "}
                <Link href="#" className="text-primary font-medium hover:underline">
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon name={item.icon} className="m-auto size-4" />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
