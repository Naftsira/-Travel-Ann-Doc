import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";
import Image from "next/image";

export const TestiCloud = () => {
  return (
    <section className=" pb-16 md:pb-32 bg-slate-150 overflow-x-hidden">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-lg ">Apa Kata Mereka?</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={15} speed={20} gap={70}>
              <div className="flex">
                <Image className="mx-auto h-120 w-fit dark:invert hover:cursor-pointer" src="/testimoni/testi1.avif" alt="testi1" width={1} height={1} />
              </div>

              <div className="flex">
                <Image className="mx-auto h-120 w-fit dark:invert hover:cursor-pointer" src="/testimoni/testi2.avif" alt="testi2" width={1} height={1} />
              </div>
              <div className="flex">
                <Image className="mx-auto h-120 w-fit dark:invert hover:cursor-pointer" src="/testimoni/testi3.avif" alt="testi3" width={1} height={1} />
              </div>
              <div className="flex">
                <Image className="mx-auto h-120 w-fit dark:invert hover:cursor-pointer" src="/testimoni/testi4.avif" alt="testi4" width={1} height={1} />
              </div>
              <div className="flex">
                <Image className="mx-auto h-120 w-fit dark:invert hover:cursor-pointer" src="/testimoni/testi5.avif" alt="testi5" width={1} height={1} />
              </div>
              <div className="flex">
                <Image className="mx-auto h-120 w-fit dark:invert hover:cursor-pointer" src="/testimoni/testi6.avif" alt="testi6" width={1} height={1} />
              </div>
              <div className="flex">
                <Image className="mx-auto h-120 w-fit dark:invert hover:cursor-pointer" src="/testimoni/testi7.avif" alt="testi7" width={5} height={30} />
              </div>
              <div className="flex">
                <Image className="mx-auto h-120 w-fit dark:invert hover:cursor-pointer " src="/testimoni/testi8.avif" alt="testi8" width={5} height={30} />
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
};
