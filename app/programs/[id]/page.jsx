import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadWizard from "@/components/LeadWizard";
import { getProgram, getPrograms } from "@/lib/content";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  const programs = await getPrograms();
  return programs.map((program) => ({ id: program.id }));
}

export async function generateMetadata({ params }) {
  const program = await getProgram(params.id);

  return {
    title: program ? program.title : "Study Pathway",
    description: program?.summary
  };
}

export default async function ProgramPage({ params }) {
  const program = await getProgram(params.id);

  if (!program) {
    notFound();
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "ASA Educators",
      url: "https://asaeducators.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: program.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-canvas pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
        <Link
          href="/programs"
          className="mb-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-olive shadow-soft transition hover:-translate-y-0.5 hover:border-olive active:scale-[0.98]"
        >
          <ArrowLeft size={18} /> All pathways
        </Link>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white shadow-plush">
          <div className="relative min-h-[520px]">
            <Image
              src={program.image}
              alt={`${program.title} study abroad pathway`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/92 via-espresso/46 to-espresso/12" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive-soft">
                {program.category} / {program.duration}
              </p>
              <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1] text-white">
                {program.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
                {program.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-2xl border border-line bg-white p-7 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive">
            Student Outcomes
          </p>
          <div className="mt-7 grid gap-4">
            {program.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-olive" size={18} />
                <p className="leading-7 text-muted">{outcome}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6">
          <article className="rounded-2xl border border-line bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive">
              Pathway Modules
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {program.modules.map((module, index) => (
                <div key={module} className="rounded-xl bg-canvas p-5">
                  <p className="text-sm font-semibold text-olive">
                    Module {index + 1}
                  </p>
                  <p className="mt-2 font-semibold text-ink">{module}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-line bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive">
              Common Questions
            </p>
            <div className="mt-6 grid gap-4">
              {program.faqs.map((faq) => (
                <div key={faq.question}>
                  <h2 className="text-lg font-semibold text-ink">{faq.question}</h2>
                  <p className="mt-2 leading-7 text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
