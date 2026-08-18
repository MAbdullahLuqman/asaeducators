import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadWizard from "@/components/LeadWizard";
import { destinations, getDestination } from "@/lib/destinations";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export function generateMetadata({ params }) {
  const destination = getDestination(params.slug);

  return {
    title: destination ? `Study in ${destination.country} | ASA Educators` : "Destination",
    description: destination?.copy
  };
}

export default function DestinationDetailPage({ params }) {
  const destination = getDestination(params.slug);

  if (!destination) {
    notFound();
  }

  const services = destination.services || [
    ["Application Planning", "Shortlist universities, confirm intake dates, and prepare the first application file."],
    ["Document Review", "Check academics, identity records, funding evidence, and course-specific requirements."],
    ["Visa Readiness", "Build a clean visa checklist around the selected country and institution route."]
  ];
  const compass = destination.compass || [
    ["Initial Consultation", "Review profile, budget, course interest, and destination fit."],
    ["Find Universities and Courses", "Compare realistic options by entry rules, tuition, and intake availability."],
    ["Apply and Receive Offers", "Submit applications and track offers, deposits, and next documents."]
  ];
  const admissions = destination.admissions || [
    "Academic transcripts and certificates for the selected study level.",
    "Passport, photographs, and identity documents.",
    "English language evidence where required by the institution.",
    "Financial and sponsor documents for visa preparation."
  ];
  const universities = destination.universities || destination.programs.map((program) => `${program} pathway institutions`);
  const work = destination.work || [
    "Work rules vary by country, city, institution, and visa category.",
    "ASA reviews current expectations with students before final program selection."
  ];

  return (
    <main className="bg-white">
      <section className="relative min-h-[430px] overflow-hidden bg-[#061120]">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85"
          alt={`Study in ${destination.country}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#061120]/80 to-[#061120]/40" />
        <div className="relative mx-auto flex min-h-[430px] max-w-7xl flex-col items-center justify-center px-4 pt-10 text-center text-white sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg sm:text-6xl">
            Study In {destination.country}
          </h1>
          <p className="mt-5 text-lg font-bold text-white/85">
            Home <span className="mx-2">•</span> Study In {destination.country}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight text-[#071326]">
              Study In {destination.country}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {destination.intro}
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {destination.copy}
            </p>
            <Link
              href="#lead-form"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a]"
            >
              Apply for {destination.country} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-2xl shadow-2xl shadow-gray-200/80">
            <Image
              src={destination.image}
              alt={`${destination.country} city and student lifestyle`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {services.map(([title, copy], index) => (
            <article key={title} className="rounded-2xl bg-white p-7 shadow-xl shadow-gray-200/70">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D71920] text-lg font-extrabold text-white">
                {index + 1}
              </span>
              <h2 className="mt-6 text-2xl font-extrabold text-[#0B2D57]">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
                Student Roadmap
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
                Let ASA be your compass from counselling to offer letter.
              </h2>
            </div>
            <p className="text-lg leading-8 text-gray-600">
              The process stays practical: choose the right course, prepare the right file, and keep every deadline visible.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {compass.map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <CheckCircle2 className="h-9 w-9 text-[#D71920]" />
                <h3 className="mt-5 text-xl font-extrabold text-[#0B2D57]">{title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B2D57] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
                Why {destination.country}?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                A strong destination when it fits your academic profile and budget.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {destination.why.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5 font-semibold text-white/90">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Admission Requirements
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              Documents students should prepare before applying.
            </h2>
            <div className="mt-8 grid gap-4">
              {admissions.map((item) => (
                <p key={item} className="flex gap-3 rounded-2xl bg-gray-50 p-5 font-bold text-[#0B2D57]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D71920]" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Top Universities
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              Institutions students commonly compare.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {universities.map((university) => (
                <span key={university} className="rounded-full bg-gray-50 px-5 py-3 text-sm font-bold text-[#0B2D57] shadow-sm">
                  {university}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Popular Fields
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              Programs students commonly explore in {destination.country}.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {destination.programs.map((program) => (
              <div key={program} className="rounded-2xl bg-white p-5 font-bold text-[#0B2D57] shadow-xl shadow-gray-200/70">
                {program}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#071326] px-6 py-10 text-white sm:px-8 lg:px-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
            Work and Career Planning
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Plan study choices with the next step in mind.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {work.map((item) => (
              <p key={item} className="rounded-2xl bg-white/10 p-5 font-semibold leading-7 text-white/85">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
