import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Pelanggan Setia Kami</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <Image className="mx-auto h-40 w-fit dark:invert " src="/partners/andamas.avif" alt="Andamas Tour & Travel" height={1} width={1} />
              </div>

              <div className="flex">
                <Image className="mx-auto h-40 w-fit dark:invert " src="/partners/charcoal.avif" alt="House of Charcoal" height={1} width={1} />
              </div>
              <div className="flex">
                <Image className="mx-auto h-40 w-fit dark:invert " src="/partners/hikari.avif" alt="Hikari Abadi Teknik" height={1} width={1} />
              </div>
              <div className="flex">
                <Image className="mx-auto h-40 w-fit dark:invert " src="/partners/sanwa.avif" alt="Sanwa Seiki" height={1} width={1} />
              </div>
              <div className="flex">
                <Image className="mx-auto h-40 w-fit dark:invert " src="/partners/yos.avif" alt="Yos Travel Service" height={1} width={1} />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
            <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
