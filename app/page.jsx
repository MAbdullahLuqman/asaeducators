import Hero from "@/components/Hero";
import ProgramOverview from "@/components/ProgramOverview";
import ServicesBento from "@/components/ServicesBento";
import LeadWizard from "@/components/LeadWizard";
import { getStats } from "@/lib/content";

export default async function HomePage() {
  const stats = await getStats();

  return (
    <main className="overflow-hidden bg-canvas">
      <Hero />
      <section aria-label="ASA Educators results" className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-line px-5 py-4">
              <p className="text-4xl font-semibold tracking-[-0.04em] text-olive">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#7C8597]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ProgramOverview />
      <ServicesBento />
      <LeadWizard />
    </main>
  );
}
