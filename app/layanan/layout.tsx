import FAQsThree from "@/components/faqs-3";

export default function LayananLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <FAQsThree></FAQsThree>
    </main>
  );
}
