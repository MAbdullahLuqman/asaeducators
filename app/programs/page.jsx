import Image from "next/image";
import Link from "next/link";
import LeadWizard from "@/components/LeadWizard";
import { getPrograms } from "@/lib/content";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Study Pathways",
  description:
    "Explore ASA Educators study abroad pathways for admissions, visa documentation, scholarship guidance, and pre-departure support."
};

export default async function ProgramsPage() {
  const programs = await getPrograms();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does ASA recommend a study pathway?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "ASA Educators starts with the student's academic profile, budget, preferred intake, destination goals, and document readiness before recommending a pathway."
        }
      },
      {
        "@type": "Question",
        name: "Can services be combined?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Students can combine admissions processing, visa documentation review, scholarship guidance, and pre-departure support."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-canvas pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive">
          Study Pathways
        </p>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1] text-ink">
            Premium guidance from first shortlist to final arrival.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[#5A6374]">
            Each pathway combines counselor expertise, document discipline,
            deadline control, and family-ready communication.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 sm:px-8 md:grid-cols-2">
        {programs.map((program) => (
          <article
            key={program.id}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-plush"
          >
            <div className="relative min-h-72">
              <Image
                src={program.image}
                alt={`${program.title} program`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive">
                {program.category} / {program.level}
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-ink">
                {program.title}
              </h2>
              <p className="mt-4 leading-7 text-muted">{program.summary}</p>
              <div className="mt-6 grid gap-3">
                {program.outcomes.slice(0, 2).map((outcome) => (
                  <div key={outcome} className="flex gap-3 text-sm font-semibold text-olive">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                    {outcome}
                  </div>
                ))}
              </div>
              <Link
                href={`/programs/${program.id}`}
                className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-olive px-5 text-sm font-semibold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-olive-dark active:scale-[0.98]"
              >
                View pathway <ArrowRight size={18} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <LeadWizard />
    </main>
  );
}
