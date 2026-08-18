import LeadWizard from "@/components/LeadWizard";

export const metadata = {
  title: "Start Your Application",
  description:
    "Share your study plans with ASA Educators and receive guidance on admissions, visas, scholarships, and pre-departure planning."
};

export default function LeadFormPage() {
  return (
    <main className="min-h-screen bg-white">
      <LeadWizard />
    </main>
  );
}
