import Image from "next/image";
import LeadWizard from "@/components/LeadWizard";
import {
  BadgeCheck,
  BookOpenCheck,
  ClipboardCheck,
  Handshake,
  Lightbulb,
  ShieldCheck
} from "lucide-react";

export const metadata = {
  title: "About ASA Educators"
};

const values = [
  {
    icon: BookOpenCheck,
    title: "Practice Makes Perfect",
    copy:
      "Experience has taught us that preparation is everything. ASA Educators refines each step of the application process, from choosing universities to preparing statements, scholarship files, and visa documents."
  },
  {
    icon: Lightbulb,
    title: "Lucidity",
    copy:
      "We believe in clarity at every turn. Students receive simple explanations of entry requirements, deadlines, scholarship criteria, and document expectations before they make decisions."
  },
  {
    icon: ShieldCheck,
    title: "Devoted",
    copy:
      "Your goals become our goals. Our counselors listen first, understand your ambitions and constraints, then build a practical roadmap for your success."
  },
  {
    icon: Handshake,
    title: "Global Partners",
    copy:
      "ASA Educators works with trusted education routes across Cyprus, the UK, Australia, Sweden, Malaysia, Turkey, and more, giving students reliable options and smoother admissions planning."
  },
  {
    icon: ClipboardCheck,
    title: "Astute Team",
    copy:
      "Our team includes education counselors, application reviewers, English test trainers, and visa file specialists who review every case carefully."
  },
  {
    icon: BadgeCheck,
    title: "Ever Lasting Accord",
    copy:
      "Our commitment does not end when an application is submitted. We guide students through offers, visa readiness, pre-departure steps, and future planning."
  }
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="asa-page-hero">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
            ASA Educators
          </p>
          <h1 className="asa-page-title">
            About Us
            <span className="asa-title-bar" />
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              About Us
            </p>
            <h2 className="mt-2 max-w-4xl text-3xl font-extrabold leading-snug text-[#071326] sm:text-4xl md:text-5xl lg:text-6xl">
              Study Abroad Consultants
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              Education is a driving force that develops reflective thinking,
              practical ability, and confidence. ASA Educators exists to help
              students make informed decisions about international education
              through careful counseling, test preparation, admissions planning,
              and visa document guidance.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              We provide expert guidance on educational pathways, universities,
              scholarships, and application requirements so students can access
              study options that match their ambitions.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
            <Image
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=85"
              alt="Student using laptop for study planning"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[3/4] w-[72%] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85"
                alt="International student on campus"
                fill
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[-24px] right-0 aspect-[16/9] w-[58%] overflow-hidden rounded-lg bg-[#E9A51A] p-3 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=700&q=85"
                alt="Students holding books"
                fill
                sizes="(min-width: 1024px) 28vw, 60vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-extrabold leading-snug text-[#071326] sm:text-4xl md:text-5xl lg:text-6xl">
              Why Choose ASA Educators?
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              We stand out because our counseling is specific, honest, and
              practical. Instead of giving every student the same answer, we
              review academics, budget, destination fit, English requirements,
              and long-term goals before recommending a route.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              From first consultation to offer tracking and visa readiness, ASA
              Educators keeps students and families updated with clear steps and
              realistic expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="grid gap-5 sm:grid-cols-[48px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F1F4FF] text-[#1B65B9]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#071326]">{value.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">{value.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
