import Image from "next/image";
import Link from "next/link";
import LeadWizard from "@/components/LeadWizard";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Profile Assessment",
    copy: "We review your academics, English level, budget, work history, preferred course, and family expectations."
  },
  {
    title: "Destination Strategy",
    copy: "Your counsellor compares country options by fees, living cost, visa route, intakes, and academic fit."
  },
  {
    title: "University Shortlist",
    copy: "We prepare a realistic shortlist based on entry requirements, course match, deadlines, and offer potential."
  },
  {
    title: "Application Submission",
    copy: "Forms, statements, transcripts, references, and application updates are managed through a visible checklist."
  },
  {
    title: "Visa File Preparation",
    copy: "Students receive guidance on financial evidence, academic records, identity documents, and interview readiness."
  },
  {
    title: "Pre-Departure Support",
    copy: "We help students understand travel planning, accommodation, packing, arrival steps, and campus expectations."
  }
];

const documents = [
  "Passport and identity documents",
  "Academic transcripts and certificates",
  "English test score or training plan",
  "Statement of purpose or personal statement",
  "Financial documents and sponsor details",
  "Offer letter, deposits, and visa forms"
];

export const metadata = {
  title: "Study Pathway | ASA Educators",
  description: "ASA Educators study abroad pathway from counselling to university arrival."
};

export default function StudyPathwayPage() {
  return (
    <main className="bg-white">
      <section className="asa-page-hero">
        <div className="asa-page-hero-inner">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Study Pathway
            </p>
            <h1 className="asa-page-title">
              A clear route from counselling to campus.
              <span className="asa-title-bar" />
            </h1>
            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Study abroad decisions involve deadlines, documents, payments,
              tests, and visa expectations. ASA Educators keeps every step clear
              so students know what to do next.
            </p>
            <Link
              href="#lead-form"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a]"
            >
              Start Your Pathway <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-200/70 sm:min-h-[400px] xl:min-h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
              alt="Students planning university pathway"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D57]/75 to-transparent" />
            <p className="absolute bottom-7 left-7 right-7 text-2xl font-extrabold text-white">
              One plan. Every deadline. No guesswork.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              Six steps that keep your application moving.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl bg-gray-50 p-7 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D71920] text-lg font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-[#0B2D57]">{step.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Document Readiness
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              We help students prepare the right file before deadlines become urgent.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Most delays happen because documents are incomplete, inconsistent,
              or prepared too late. ASA Educators keeps the checklist visible
              from the start.
            </p>
          </div>
          <div className="grid gap-4">
            {documents.map((item) => (
              <p key={item} className="flex gap-3 rounded-2xl bg-white p-5 font-bold text-[#0B2D57] shadow-xl shadow-gray-200/70">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D71920]" />
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
