import FAQsThree from "@/components/faqs-3";

export default function LayananPage({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <FAQsThree></FAQsThree>
    </main>
  );
}
