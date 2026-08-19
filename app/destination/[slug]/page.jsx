import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadWizard from "@/components/LeadWizard";
import RequirementTable from "@/components/RequirementTable";
import { destinations, getDestination } from "@/lib/destinations";
import { ArrowRight, BookOpenCheck, BriefcaseBusiness, CheckCircle2, FileCheck2, GraduationCap, Handshake, Search } from "lucide-react";

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
  const requirements = destination.requirements || [];
  const universities = destination.universities || [];
  const whyDetails = destination.whyDetails || destination.why.map((item) => [item, destination.copy]);
  const work = destination.work || [
    "Work rules vary by country, city, institution, and visa category.",
    "ASA reviews current expectations with students before final program selection."
  ];
  const applicationProcess = destination.applicationProcess || [
    "Confirm study level, budget, intake, and English evidence.",
    "Shortlist universities and courses by entry requirements and fees.",
    "Prepare academic, identity, financial, and application documents.",
    "Submit applications and track offer conditions.",
    "Prepare visa documents and pre-departure steps."
  ];
  const workPermit = destination.workPermit || work.map((item) => ["Career planning", item]);
  const compassIcons = [Handshake, Search, FileCheck2];
  const serviceIcons = [BriefcaseBusiness, FileCheck2, GraduationCap];

  return (
    <main className="bg-white">
      <section className="relative min-h-[260px] overflow-hidden bg-[#061120]">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85"
          alt={`Study in ${destination.country}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#061120]/80 to-[#061120]/40" />
        <div className="relative mx-auto flex min-h-[260px] max-w-7xl flex-col items-center justify-center px-4 pt-8 text-center text-white sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight drop-shadow-lg sm:text-[2.75rem]">
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
            <h2 className="text-3xl font-bold leading-tight text-[#071326] sm:text-[2.75rem]">
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

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {services.map(([title, copy], index) => {
            const Icon = serviceIcons[index] || FileCheck2;
            return (
            <article key={title} className="relative min-h-[330px] rounded-xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-200/80 transition hover:-translate-y-1 hover:shadow-2xl">
              <span className="absolute right-7 top-5 text-5xl font-bold text-gray-100">
                {index + 1}
              </span>
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#1B65B9]">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="text-lg font-bold text-[#071326]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-gray-600">{copy}</p>
            </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#071326] sm:text-4xl">
              Let Us Be Your Compass in the World of Immigration
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              We have in-depth knowledge of the complex immigration systems,
              regulations, and student admission processes for {destination.country}.
            </p>
          </div>

          <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            <div className="pointer-events-none absolute left-[18%] right-[18%] top-10 hidden border-t-2 border-dashed border-gray-300 md:block" />
            {compass.map(([title, copy], index) => {
              const Icon = compassIcons[index] || Handshake;
              return (
              <article key={title} className="relative rounded-2xl border border-gray-100 bg-white px-6 pb-7 pt-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#5DB7E8] text-white shadow-lg shadow-blue-100">
                  <Icon className="h-9 w-9" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#071326]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#071326] sm:text-4xl">
              Why Study in {destination.country}?
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              {destination.copy} ASA Educators helps students compare this destination
              by quality of education, affordability, English-taught routes, visa
              readiness, and long-term career planning.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid border-b border-gray-200 text-center text-xs font-bold text-gray-500 sm:grid-cols-4">
              {[
                ["Why Cyprus?", BookOpenCheck],
                ["Admission Requirements", FileCheck2],
                ["Top Universities", GraduationCap],
                ["Post Study Work", BriefcaseBusiness]
              ].map(([label, Icon], index) => (
                <a
                  key={label}
                  href={index === 0 ? "#why" : index === 1 ? "#admission-requirements" : index === 2 ? "#top-universities" : "#post-study-work"}
                  className={`flex min-h-16 items-center justify-center gap-2 border-b border-gray-100 px-3 transition hover:bg-gray-50 hover:text-[#D71920] sm:border-b-0 sm:border-r last:sm:border-r-0 ${
                    index === 0 ? "text-[#1B65B9]" : ""
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </a>
              ))}
            </div>

            <div id="why" className="p-6 sm:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                {whyDetails.map(([title, copy]) => (
                  <article key={title}>
                    <h3 className="text-lg font-bold text-[#071326]">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="admission-requirements" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1B65B9]">
              Admission Requirements
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0B2D57] sm:text-4xl">
              What international students should prepare.
            </h2>
          </div>
          <RequirementTable rows={requirements} />
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#071326]">Application Process</h3>
            <div className="mt-5 grid gap-3">
              {applicationProcess.map((item, index) => (
                <p key={item} className="flex gap-3 text-sm font-semibold leading-7 text-gray-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D71920] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="top-universities" className="bg-[#E8EEF5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              University Admissions
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              Application support for trusted university routes in {destination.country}.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {universities.map((university) => (
              <div
                key={university.name}
                className="flex min-h-[104px] items-center rounded-2xl border border-gray-300 bg-[#F7F3E8] px-6 py-5 text-lg font-extrabold leading-tight text-[#071326] shadow-sm transition hover:-translate-y-0.5 hover:border-[#1B65B9]/35 hover:shadow-md sm:text-xl"
              >
                {university.name}
              </div>
            ))}
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

      <section id="post-study-work" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#071326] px-6 py-10 text-white sm:px-8 lg:px-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
            Work and Career Planning
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Post-study work visa and career opportunities.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-white/80">
            {destination.postStudy}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {workPermit.map(([title, copy]) => (
              <article key={title} className="rounded-2xl bg-white/10 p-5">
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-white/80">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              Questions about studying in {destination.country}.
            </h2>
            <Link href="#lead-form" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#b9141a]">
              Get Free Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            {(destination.faqs || []).map(([question, answer]) => (
              <article key={question} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0B2D57]">{question}</h3>
                <p className="mt-3 leading-7 text-gray-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
