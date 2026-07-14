"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const spring = { type: "spring", duration: 0.7, bounce: 0.12 };

const heroImage =
  "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=2200&q=90";

const cardImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=88";

export default function Hero() {
  return (
    <section className="bg-canvas px-0 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 lg:px-8">
      <div className="relative mx-auto min-h-[calc(100svh-5rem)] max-w-7xl overflow-hidden border-y border-line bg-espresso shadow-[0_28px_90px_rgba(23,26,31,0.18)] sm:min-h-[calc(100vh-7rem)] sm:rounded-[2rem] sm:border">
        <Image
          src={heroImage}
          alt="International city skyline representing study abroad pathways"
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover object-[58%_44%] saturate-[1.08] sm:object-[center_44%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/58 to-espresso/86 sm:bg-gradient-to-t sm:from-espresso/86 sm:via-espresso/18 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/72 via-espresso/32 to-olive/24 sm:from-espresso/54 sm:via-espresso/10 sm:to-olive/16" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(36,56,41,0.42),transparent_32rem),radial-gradient(circle_at_86%_16%,rgba(229,238,231,0.16),transparent_28rem)]" />

        <div className="relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-start px-6 pb-8 pt-12 sm:min-h-[calc(100vh-7rem)] sm:justify-end sm:p-9 lg:p-12">
          <div className="max-w-4xl pb-2 sm:pb-2 lg:pb-6">
            <h1 className="max-w-[18rem] font-serif text-[clamp(2.65rem,15vw,4.65rem)] font-semibold leading-[0.92] text-white sm:max-w-5xl sm:text-[clamp(3rem,7vw,6.5rem)] sm:leading-[0.95] sm:text-canvas">
              Your trusted pathway to study in Europe.
            </h1>
          </div>

          <div className="mt-8 flex w-full max-w-[24rem] flex-col gap-3 sm:mt-9 sm:w-auto sm:max-w-none sm:flex-row">
            <Link
              href="#lead-form"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-white shadow-button ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-olive-dark active:scale-[0.98]"
            >
              Start My Application
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/programs"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 bg-white/14 px-6 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 active:scale-[0.98]"
            >
              Explore Pathways
            </Link>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.14 }}
          className="relative z-20 mx-6 mb-6 hidden overflow-hidden rounded-2xl border border-white/16 bg-espresso/88 p-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:absolute sm:bottom-8 sm:right-8 sm:m-0 sm:block sm:w-[22rem]"
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
              Cyprus Spring 2026
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/68">
              Recent approvals across American University of Cyprus and
              Alexander College with dedicated counselor support.
            </p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-white/56">Visa pathway snapshot</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous program"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-white transition hover:bg-white/16 active:scale-[0.96]"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next program"
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
