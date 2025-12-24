export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+150</div>
            <p>Applications di-approved</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">5 Years</div>
            <p>of experience</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+32</div>
            <p>Negara dijangkau</p>
          </div>
        </div>
      </div>
    </section>
  );
}
