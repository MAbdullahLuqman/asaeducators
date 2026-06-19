import Hero from "@/components/Hero";
import DestinationsGrid from "@/components/DestinationsGrid";
import ServicesBento from "@/components/ServicesBento";
import LeadWizard from "@/components/LeadWizard";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-canvas">
      <Hero />
      <DestinationsGrid />
      <ServicesBento />
      <LeadWizard />
    </main>
  );
}
