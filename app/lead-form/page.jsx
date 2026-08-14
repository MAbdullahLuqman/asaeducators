import LeadWizard from "@/components/LeadWizard";

export const metadata = {
  title: "Start Your Application",
  description:
    "Share your study plans with ASA Educators and receive guidance on admissions, visas, scholarships, and pre-departure planning."
};

export default function LeadFormPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
            Apply Now
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[#0B2D57] sm:text-5xl">
            Start your study abroad consultation.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Complete the form below and ASA Educators will review your study
            goals, destination preferences, intake timeline, and training needs
            before contacting you.
          </p>
        </div>
      </section>
      <LeadWizard />
    </main>
  );
}
