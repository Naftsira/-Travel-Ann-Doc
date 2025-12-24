import { Logo } from "./logo";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl">
          <blockquote>
            <p className="text-lg font-semibold sm:text-xl md:text-3xl">Tim Antara dibentuk dari keyakinan bahwa kualitas, disiplin, dan kecepatan bukan pilihan, tapi kewajiban.</p>

            <div className="mt-12 flex items-center gap-6">
              <Logo></Logo>
              <div className="space-y-1 border-l pl-6">
                <cite className="font-medium">John Doe</cite>
                <span className="text-muted-foreground block text-sm">CEO, Ann Travel Doc</span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
