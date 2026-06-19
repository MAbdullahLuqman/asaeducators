"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";

const spring = { type: "spring", duration: 0.7, bounce: 0.12 };

const heroImage =
  "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=2200&q=90";

const cardImage =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=88";

export default function Hero() {
  return (
    <section className="bg-canvas px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto min-h-[calc(100vh-7rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-espresso shadow-[0_28px_90px_rgba(43,36,24,0.18)]">
        <Image
          src={heroImage}
          alt="New York skyline at golden hour"
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover object-[center_44%] saturate-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/86 via-espresso/18 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/46 via-espresso/8 to-olive/12" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(192,138,62,0.34),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(248,249,250,0.14),transparent_28%)]" />

        <div className="relative z-10 flex min-h-[calc(100vh-7rem)] flex-col justify-end p-6 sm:p-9 lg:p-12">
          <div className="max-w-4xl pb-2 lg:pb-6">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-canvas/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-olive shadow-soft">
              <GraduationCap size={16} />
              Study abroad advisory
            </p>
            <h1 className="max-w-4xl text-[clamp(2.8rem,7vw,5.7rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-canvas">
              Live the city where your future studies.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/86 sm:text-lg">
              Premium guidance for admissions, scholarships, visa readiness,
              and destination planning across top global study hubs.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#lead-form"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-canvas px-6 text-sm font-semibold text-espresso shadow-soft transition hover:bg-white active:scale-[0.97]"
            >
              Start My Plan
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/landing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/18 active:scale-[0.97]"
            >
              Explore Destinations
            </Link>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.14 }}
          className="relative z-20 mx-6 mb-6 overflow-hidden rounded-2xl border border-white/16 bg-espresso/88 p-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:absolute sm:bottom-8 sm:right-8 sm:m-0 sm:w-[22rem]"
        >
          <div className="relative h-44 overflow-hidden rounded-xl">
            <Image
              src={cardImage}
              alt="Graduates celebrating on campus"
              fill
              sizes="22rem"
              className="object-cover object-[center_42%] saturate-[1.04]"
            />
            <div className="absolute left-3 top-3 rounded-full bg-white/82 px-3 py-1 text-xs font-semibold text-espresso">
              Featured
            </div>
          </div>
          <div className="px-2 pb-2 pt-4">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">
              City Campus Plan
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/68">
              Shortlists built around course fit, budget, intake timing, and
              post-study outcomes.
            </p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-white/56">Last entries</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous destination"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-white transition hover:bg-white/16 active:scale-[0.96]"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next destination"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-white transition hover:bg-white/16 active:scale-[0.96]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
