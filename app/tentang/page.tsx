"use client";

import dynamic from "next/dynamic";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import TestimonialsSection from "@/components/testimonials";

// Ganti import standar dengan dynamic import
const GlobeDemo = dynamic(() => import("@/components/theGlobe").then((mod) => mod.GlobeDemo), {
  ssr: false, // Ini kunci untuk menghilangkan error VERTEX
  loading: () => (
    <div className="h-[500px] w-full bg-slate-900/50 flex items-center justify-center rounded-xl">
      <div className="text-blue-500 animate-pulse font-medium">Memuat Visualisasi Global...</div>
    </div>
  ),
});

export default function AboutPage() {
  return (
    <div className="h-full">
      <GlobeDemo />

      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
    </div>
  );
}
