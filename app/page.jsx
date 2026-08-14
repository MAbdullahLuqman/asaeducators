"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import LeadWizard from "@/components/LeadWizard";
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
  "Student Recruitment",
  "3,000+ Students Trained for IELTS & PTE",
  "Unlock Global Opportunities"
];

const destinations = [
  {
    country: "Cyprus",
    image:
      "https://images.unsplash.com/photo-1603811397408-9197fa02b6be?auto=format&fit=crop&w=900&q=80"
  },
  {
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80"
  },
  {
    country: "UK",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80"
  },
  {
    country: "Sweden",
    image:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=900&q=80"
  },
  {
    country: "Malaysia",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80"
  },
  {
    country: "Turkey",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=900&q=80"
  }
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
  "Free profile assessment",
  "Destination and course shortlist",
  "Application and offer management",
  "Visa file preparation",
  "Interview and pre-departure briefing"
];

export default function HomePage() {
  const [activeSlogan, setActiveSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveSlogan((index) => (index + 1) % slogans.length),
      2800
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white">
      <section className="bg-gray-50">
        <div className="mx-auto grid min-h-[calc(100vh-116px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="min-h-[9.5rem] sm:min-h-[8.75rem] lg:min-h-[10.5rem]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={slogans[activeSlogan]}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="text-4xl font-extrabold leading-tight text-[#0B2D57] sm:text-5xl lg:text-6xl"
                >
                  {slogans[activeSlogan]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-700 sm:text-lg">
              ASA Educators connects ambitious students with world-class
              universities through expert counselling, admissions guidance, test
              preparation, and visa support.
            </p>

            <Link
              href="/lead-form"
              className="mt-8 inline-flex rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#b9141a]"
            >
              Apply Now
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 rounded-full bg-white/80 blur-2xl" />
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-200/70 sm:h-[520px]">
              <Image
                src={heroImage}
                alt="Students planning study abroad applications"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D57]/65 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-lg">
                <p className="text-3xl font-extrabold text-[#D71920]">3,000+</p>
                <p className="mt-1 text-sm font-semibold text-[#0B2D57]">
                  IELTS, PTE and admissions students trained
                </p>
              </div>
            </div>
          </div>
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
              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl lg:text-5xl">
                Popular Destinations For International Students
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-gray-500 lg:justify-self-end">
              Are you ready to launch the next phase of your academic and
              professional growth?
            </p>
          </div>

          <div className="mt-10 flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {destinations.map((destination) => (
              <article
                key={destination.country}
                className="group relative h-[360px] min-w-[280px] overflow-hidden rounded-2xl shadow-xl shadow-gray-200/80 sm:min-w-[340px] lg:min-w-0"
              >
                <Image
                  src={destination.image}
                  alt={`${destination.country} destination`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 340px"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-extrabold text-white">
                  Study in {destination.country}
                </h3>
              </article>
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
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl lg:text-5xl">
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
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl lg:text-5xl">
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

      <section className="bg-[#0B2D57] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
              Why ASA Educators
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
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
