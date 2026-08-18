import Link from "next/link";
import LeadWizard from "@/components/LeadWizard";
import { universities } from "@/lib/universities";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Universities | ASA Educators",
  description: "University admission routes supported by ASA Educators for study abroad applicants."
};

export default function UniversityPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#071326] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
            Universities
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Find the right university route for your profile.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            ASA Educators helps students compare institutions by course fit, tuition, intake availability, entry requirements, and visa relevance.
          </p>
          <Link
            href="#lead-form"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a]"
          >
            Get University Advice <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#E8EEF5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
                University Options
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
                Institutions students commonly explore.
              </h2>
            </div>
            <p className="text-lg leading-8 text-gray-600">
              The final shortlist depends on grades, English evidence, budget, course, and intake deadlines.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {universities.map((university) => (
              <article key={university} className="flex items-center gap-4 rounded-2xl border border-gray-300 bg-[#F7F3E8] px-6 py-5">
                <Building2 className="h-6 w-6 shrink-0 text-[#D71920]" />
                <h3 className="text-lg font-extrabold text-[#071326]">{university}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            "Profile-based university shortlisting",
            "Course and intake comparison",
            "Admission and visa document planning"
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-gray-50 p-7 shadow-sm">
              <CheckCircle2 className="h-9 w-9 text-[#D71920]" />
              <p className="mt-5 text-xl font-extrabold text-[#0B2D57]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
