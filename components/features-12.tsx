"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FastForward, TruckElectric, Handshake, ShieldCheck, Gem } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Features() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "/campaign/urus.webp",
      alt: "Services",
    },
    "item-2": {
      image: "/campaign/delivery.webp",
      alt: "Delivery",
    },
    "item-3": {
      image: "/campaign/partner.webp",
      alt: "Company Partners",
    },
    "item-4": {
      image: "/campaign/secure.webp",
      alt: "Security",
    },
    "item-5": {
      image: "/campaign/consult.webp",
      alt: "Consulting",
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">Solusi Lengkap Pengurusan Dokumen Perjalanan.</h2>
          <p>Dari konsultasi hingga dokumen selesai, kami bantu dengan proses yang efisien dan terpercaya.</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion type="single" value={activeItem} onValueChange={(value) => setActiveItem(value as ImageKey)} className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:cursor-pointer">
                <div className="flex items-center gap-2 text-base">
                  <FastForward className="size-4" />
                  Urus Visa Cepat, Aman, Profesional.
                </div>
              </AccordionTrigger>
              <AccordionContent>Proses pengurusan visa ditangani oleh tim berpengalaman dengan alur yang jelas, transparan, dan terkontrol sejak awal hingga selesai.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:cursor-pointer">
                <div className="flex items-center gap-2 text-base">
                  <TruckElectric className="size-4" />
                  Gratis Antar-Jemput Dokumen
                </div>
              </AccordionTrigger>
              <AccordionContent>Kami menyediakan layanan antar-jemput dokumen langsung ke lokasi Anda, sehingga Anda tidak perlu repot datang ke kantor.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:cursor-pointer">
                <div className="flex items-center gap-2 text-base">
                  <Handshake className="size-4" />
                  Corporate Partner Program
                </div>
              </AccordionTrigger>
              <AccordionContent>Solusi pengurusan visa, KITAS, dan izin kerja karyawan untuk perusahaan dengan sistem yang fleksibel dan terintegrasi.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:cursor-pointer">
                <div className="flex items-center gap-2 text-base">
                  <ShieldCheck className="size-4" />
                  Keamanan dokumen
                </div>
              </AccordionTrigger>
              <AccordionContent>Seluruh dokumen Anda dikelola dengan SOP ketat, akses terbatas, dan pengawasan tim terpercaya untuk menjaga kerahasiaan data.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="hover:cursor-pointer">
                <div className="flex items-center gap-2 text-base">
                  <Gem className="size-4" />
                  Konsultasi Gratis
                </div>
              </AccordionTrigger>
              <AccordionContent>Masih bingung menentukan kebutuhan visa atau izin tinggal? Konsultasikan gratis dengan tim kami sebelum memulai proses.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image src={images[activeItem].image} className="size-full object-cover object-left-top dark:mix-blend-lighten" alt={images[activeItem].alt} width={1207} height={929} />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam duration={6} size={200} className="from-transparent via-yellow-700 to-transparent dark:via-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
