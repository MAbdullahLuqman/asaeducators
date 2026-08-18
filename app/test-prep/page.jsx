import Link from "next/link";
import LeadWizard from "@/components/LeadWizard";
import RequirementTable from "@/components/RequirementTable";
import { acceptedTests, courseFormats, scoreMatrix } from "@/lib/testPrep";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Test Prep | ASA College of English",
  description: "IELTS, PTE, Password Skills Test, LanguageCert, and Oxford ELLT preparation at ASA Educators."
};

export default function TestPrepPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#071326] px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
            ASA College of English
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl xl:text-[3.35rem]">
            English test preparation connected to your admission plan.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Prepare for IELTS, PTE, Password Skills Test, LanguageCert, and Oxford ELLT with mock tests, module coaching, and 1:1 speaking or writing feedback.
          </p>
          <Link href="#lead-form" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a]">
            Book Free Test Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1B65B9]">
              Accepted Tests
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0B2D57] sm:text-4xl">
              Choose the test your university accepts.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {acceptedTests.map((test) => (
              <article key={test.name} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-[#071326]">{test.name}</h3>
                <p className="mt-4 leading-7 text-gray-600">{test.summary}</p>
                <div className="mt-6 grid gap-2">
                  {test.formats.map((format) => (
                    <span key={format} className="flex gap-2 text-sm font-semibold text-[#0B2D57]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D71920]" />
                      {format}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1B65B9]">
              Score Matrix
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0B2D57] sm:text-4xl">
              Typical score requirements by study level.
            </h2>
          </div>
          <RequirementTable
            rows={scoreMatrix}
            columns={["Test Type", "Foundation Program", "Undergraduate Degree", "Postgraduate Degree", "Minimum Sectional Score"]}
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {courseFormats.map(([title, copy]) => (
            <article key={title} className="rounded-2xl bg-[#F7F3E8] p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#071326]">{title}</h3>
              <p className="mt-3 leading-7 text-gray-700">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
