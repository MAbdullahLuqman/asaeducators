"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DestinationCard from "@/components/DestinationCard";
import LeadWizard from "@/components/LeadWizard";
import { destinations } from "@/lib/destinations";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Plane,
  ShieldCheck,
  UsersRound
} from "lucide-react";

const slogans = [
  "3,000+ Students Trained for IELTS & PTE",
  "End-to-End Student Recruitment & University Admissions",
  "1:1 Profile Evaluation & Visa File Guidance"
];

const heroImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85";

const stats = [
  ["3,000+", "students trained for IELTS & PTE"],
  ["6", "priority study destinations"],
  ["1:1", "profile-based counselling"],
  ["A-Z", "admissions and visa support"]
];

const services = [
  {
    icon: UsersRound,
    title: "Student Counselling",
    copy: "We evaluate academics, budget, destination preference, and career goals before recommending a study route."
  },
  {
    icon: GraduationCap,
    title: "University Admissions",
    copy: "Shortlisting, application forms, personal statements, offer tracking, and intake planning are handled with clear deadlines."
  },
  {
    icon: BookOpenCheck,
    title: "IELTS & PTE Training",
    copy: "Focused preparation for speaking, writing, reading, and listening with practical scoring strategies."
  },
  {
    icon: FileCheck2,
    title: "Visa Documentation",
    copy: "A structured checklist helps students prepare financial, academic, identity, and travel documents before submission."
  }
];

const pathway = [
  "Profile Assessment",
  "Destination and course shortlisting",
  "Test Prep",
  "Application tracking",
  "Visa Documentation",
  "Pre-departure briefing"
];

export default function HomePage() {
  const [activeSlogan, setActiveSlogan] = useState(0);
  const [fading, setFading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      timeoutRef.current = setTimeout(() => {
        setActiveSlogan((index) => (index + 1) % slogans.length);
        setFading(false);
      }, 220);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <main className="bg-white">
      <section className="bg-[#F8F7F1]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-2 lg:px-8 lg:py-12">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              ASA Educators
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-snug text-[#071326] sm:text-4xl md:text-5xl lg:text-6xl">
              Keep your study abroad plan on track
              <span className="mt-2 block h-2 w-44 rounded-full bg-[#D71920]" />
            </h1>
            <p
              className={`mt-5 max-w-xl text-base font-semibold leading-7 text-[#1B65B9] transition duration-300 ease-out sm:text-lg ${
                fading ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              {slogans[activeSlogan]}
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-gray-600">
              Counseling, admissions, English test preparation, and visa
              guidance for students who want clear next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/lead-form"
                className="inline-flex justify-center rounded-xl bg-[#D71920] px-8 py-4 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#b9141a]"
              >
                Apply Now
              </Link>
              <Link
                href="/destination"
                className="inline-flex justify-center rounded-xl border border-gray-200 bg-white px-8 py-4 text-sm font-extrabold text-[#0B2D57] transition hover:border-[#1B65B9] hover:text-[#1B65B9]"
              >
                Explore Destinations
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-gray-500">Best guidance</p>
                <p className="mt-1 text-2xl font-extrabold text-[#071326]">1:1 profile review</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-gray-500">Students trained</p>
                <p className="mt-1 text-2xl font-extrabold text-[#071326]">3,000+</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] bg-[#24887E] p-4 sm:p-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-gray-200/70">
              <Image
                src={heroImage}
                alt="Student ready for international education"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                priority
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:absolute sm:bottom-8 sm:left-0 sm:max-w-[270px]">
              <p className="text-sm font-bold text-gray-500">Trusted support</p>
              <p className="mt-2 text-xl font-extrabold leading-snug text-[#071326]">
                Transforming students into confident applicants
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1B65B9]">
              Agency Overview
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-snug text-[#0B2D57] sm:text-4xl md:text-5xl lg:text-6xl">
              A counseling office built for clear decisions.
            </h2>
          </div>
          <p className="text-lg leading-8 text-gray-600">
            ASA Educators works with students and families from profile evaluation to
            English test preparation, university admissions, visa documentation, and
            pre-departure planning. The process is designed around practical advice,
            visible checklists, and destination-specific guidance.
          </p>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-gray-50 p-6">
              <p className="text-4xl font-extrabold text-[#D71920]">{value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-[#0B2D57]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="destinations" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
                Favourite Destination
              </p>
              <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-snug text-[#0B2D57] sm:text-4xl md:text-5xl lg:text-6xl">
                Popular Destinations For International Students
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-gray-500 lg:justify-self-end">
              Are you ready to launch the next phase of your academic and
              professional growth?
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              What We Do
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-snug text-[#0B2D57] sm:text-4xl md:text-5xl lg:text-6xl">
              Complete guidance for every stage of your study abroad journey.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-2xl bg-white p-7 shadow-xl shadow-gray-200/70">
                  <Icon className="h-10 w-10 text-[#D71920]" />
                  <h3 className="mt-6 text-xl font-extrabold text-[#0B2D57]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-gray-600">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-200/70">
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85"
              alt="Student travelling for international education"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D57]/75 to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 text-white">
              <Plane className="mb-4 h-10 w-10" />
              <p className="text-2xl font-extrabold">From first counselling call to airport readiness.</p>
            </div>
          </div>
          <div className="self-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Study Pathway
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-snug text-[#0B2D57] sm:text-4xl md:text-5xl lg:text-6xl">
              A practical process students and parents can follow.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              International admissions can feel complicated because every
              country, university, and visa route has different requirements.
              ASA Educators turns the process into a visible checklist.
            </p>
            <div className="mt-8 grid gap-4">
              {pathway.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4 font-bold text-[#0B2D57]">
                  <CheckCircle2 className="h-5 w-5 text-[#D71920]" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/study-pathway"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a]"
            >
              View Study Pathway <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0B2D57] px-4 py-12 text-white sm:px-6 md:px-8 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
              Why ASA Educators
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-snug sm:text-4xl md:text-5xl lg:text-6xl">
              Advice that protects your time, money, and application chances.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Country-specific guidance for Cyprus, Australia, UK, Sweden, Malaysia, and Turkey.",
              "Clear document planning before applications and visa files are submitted.",
              "Test preparation support for students who need stronger IELTS or PTE scores.",
              "Family-friendly counselling so budgets, deadlines, and options stay transparent."
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-6">
                <ShieldCheck className="mb-4 h-7 w-7 text-[#D71920]" />
                <p className="leading-7 text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
