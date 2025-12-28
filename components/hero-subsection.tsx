"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedGroup } from "./ui/animated-group";
import { TextEffect } from "./ui/text-effect";
import Link from "next/link";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

export default function HeroSubSection() {
  return (
    <>
      <main>
        <section className="overflow-hidden pt-32">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <TextEffect preset="fade-in-blur" speedSegment={0.3} as="h1" className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
                  Layanan Dokumen Perjalanan Lengkap.
                </TextEffect>
                <TextEffect per="line" preset="fade-in-blur" speedSegment={0.3} delay={0.5} as="p" className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                  Kami menyediakan layanan pengurusan visa, paspor, KITAS, dan izin kerja dengan proses yang terstruktur, aman, dan efisien. Mulai dari konsultasi awal, pengumpulan dokumen, hingga penyelesaian akhir, semua ditangani oleh
                  tim berpengalaman agar Anda tidak membuang waktu dan tenaga untuk proses yang rumit.
                </TextEffect>
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12"
                >
                  <div>
                    <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
                      <Button asChild size="lg">
                        <Link href="/">
                          <span>Konsultasikan Sekarang!</span>
                        </Link>
                      </Button>
                    </div>

                    <ul className="list-inside list-disc space-y-2 mt-12">
                      <li>Cepat & Terstruktur</li>
                      <li>Standar Profesional</li>
                      <li>Disesuaikan Kebutuhan Anda</li>
                    </ul>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
            <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
              <div className="relative">
                <div className="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-40%"></div>
                <Image className="hidden dark:block" src="/awdaw.png" alt="app illustration" width={2796} height={2008} />
                <Image className="dark:hidden" src="/awdaw.png" alt="app illustration" width={2796} height={2008} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
