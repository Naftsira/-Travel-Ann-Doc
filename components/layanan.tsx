import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      {/* 1 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Pengurusan Visa</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image src="/layanan/visa.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Layanan pengajuan visa dengan proses terstruktur, cepat, dan akurat. Seluruh dokumen disiapkan sesuai regulasi negara tujuan untuk meminimalkan risiko penolakan dan mempercepat persetujuan.{" "}
            </p>

            <div className="pt-6">
              <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                <Link href="/layanan/visa">
                  <span>Learn More</span>
                  <ChevronRight className="size-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 pt-32 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Pengurusan Paspor</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image src="/layanan/paspor.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">Pendampingan pengurusan paspor baru maupun perpanjangan dengan alur jelas dan efisien. Kami memastikan kelengkapan dokumen agar proses berjalan lancar tanpa hambatan administratif. </p>

            <div className="pt-6">
              <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                <Link href="/layanan/paspor">
                  <span>Learn More</span>
                  <ChevronRight className="size-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 pt-32 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Pengurusan Dokumen TKA</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image src="/layanan/tka.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">Solusi profesional untuk pengurusan dokumen Tenaga Kerja Asing, mulai dari persiapan hingga legalitas final. Proses disesuaikan dengan ketentuan hukum dan kebutuhan perusahaan Anda. </p>

            <div className="pt-6">
              <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                <Link href="/layanan/tka">
                  <span>Learn More</span>
                  <ChevronRight className="size-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 pt-32 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">SIM Internasional</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image src="/layanan/drive-permit.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">Pengurusan SIM Internasional yang praktis dan terpercaya, memastikan Anda dapat berkendara secara legal dan aman di luar negeri tanpa proses yang berbelit. </p>

            <div className="pt-6">
              <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                <Link href="/layanan/sim">
                  <span>Learn More</span>
                  <ChevronRight className="size-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 pt-32 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Private / Incentive Tour</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image src="/layanan/tour.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Perjalanan eksklusif yang dirancang khusus sesuai kebutuhan Anda. Mulai dari itinerary personal hingga layanan premium, kami menghadirkan pengalaman perjalanan yang nyaman, berkesan, dan bernilai lebih.{" "}
            </p>

            <div className="pt-6">
              <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                <Link href="/layanan/tour">
                  <span>Learn More</span>
                  <ChevronRight className="size-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
