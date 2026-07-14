import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, Globe2, UsersRound } from "lucide-react";

export const metadata = {
  title: "About ASA Educators"
};

const values = [
  {
    icon: ClipboardCheck,
    title: "Evidence first",
    copy:
      "Every recommendation is tied to academic history, budget, destination logic, deadlines, and document readiness."
  },
  {
    icon: Globe2,
    title: "Destination aware",
    copy:
      "Advice changes by country, institution, intake, visa expectation, and long-term student pathway."
  },
  {
    icon: UsersRound,
    title: "One coordinated team",
    copy:
      "Counselors, application reviewers, and documentation specialists work from one shared plan."
  }
];

const process = [
  "Profile review and destination fit",
  "Institution shortlist and intake strategy",
  "Admissions documents and offer tracking",
  "Visa file review and pre-departure readiness"
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive">
            About ASA Educators
          </p>
          <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1] text-[#1A1D24]">
            Study abroad guidance built on precision, trust, and follow-through.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5A6374]">
            ASA Educators helps students move from uncertainty to a clear,
            evidence-led plan for admissions, documentation, visas, and arrival.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-olive px-6 text-sm font-semibold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-olive-dark active:scale-[0.98]"
            >
              Explore pathways <ArrowRight size={18} />
            </Link>
            <Link
              href="#lead-form"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-olive shadow-soft transition hover:border-olive active:scale-[0.97]"
            >
              Start a consultation
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white bg-white shadow-plush">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=86"
            alt="Students discussing international education options"
            fill
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/72 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/92 p-5 backdrop-blur-md">
            <p className="text-4xl font-semibold text-olive">2,400+</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#7C8597]">
              students advised
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-soft"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-olive">
                  <Icon size={22} />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                  {value.title}
                </h2>
                <p className="mt-4 leading-7 text-[#5A6374]">{value.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive">
            How We Work
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1]">
            A simple workflow for complex study decisions.
          </h2>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-4">
            {process.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl bg-canvas p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-[#1A1D24]">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5A6374]">
                    Each step ends with a visible checklist so students know
                    what is complete, pending, and blocking the next milestone.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-form" className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
              Build your first shortlist with an advisor.
            </h2>
          </div>
          <Link
            href="/programs#lead-form"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-olive px-6 text-sm font-semibold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-olive-dark active:scale-[0.98]"
          >
            Book consultation <CheckCircle2 size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
