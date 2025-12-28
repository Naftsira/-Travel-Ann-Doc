import { TextEffect } from "./ui/text-effect";
import { AnimatedGroup } from "./ui/animated-group";
import LogoCloud from "./logo-cloud";
import Image from "next/image";

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

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <TextEffect preset="fade-in-blur" speedSegment={0.3} as="h1" className="text-balance text-5xl font-medium md:text-6xl">
                Urus visa cepat, aman, dan profesional.
              </TextEffect>
              <TextEffect per="line" preset="fade-in-blur" speedSegment={0.3} delay={0.5} as="p" className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                Mayoritas Applicant kami di-approve. Duduk manis, tim kami yang kerjakan.
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
                <Image src="/passport.png" alt="hero-img" width={1000} height={1000} objectFit="cover" className="z-40" />
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5"></div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
        <LogoCloud />
      </main>
    </>
  );
}

const AppComponent = () => {
  return (
    <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
      <div className="flex items-center gap-1.5 text-orange-400"></div>
    </div>
  );
};
