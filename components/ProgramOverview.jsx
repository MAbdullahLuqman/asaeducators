"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const spring = { type: "spring", stiffness: 300, damping: 30 };

const programs = [
  {
    name: "Cyprus Admissions",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
    courses: "Shortlists, applications, offers",
    rate: "Spring and Fall intake planning",
    className: "md:col-span-7 md:min-h-[520px]"
  },
  {
    name: "Visa Documentation",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
    courses: "File audits, financial evidence",
    rate: "Consistency-first review",
    className: "md:col-span-5 md:min-h-[360px]"
  },
  {
    name: "Scholarship Guidance",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85",
    courses: "Budget maps, awards, evidence",
    rate: "Family-ready planning",
    className: "md:col-span-5 md:min-h-[360px]"
  },
  {
    name: "Pre-Departure",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",
    courses: "Travel, enrollment, arrival",
    rate: "Final 30-day readiness",
    className: "md:col-span-7 md:min-h-[520px]"
  }
];

export default function ProgramOverview() {
  return (
    <section id="program-overview" className="bg-canvas py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive">
            Study Pathways
          </p>
          <h2 className="font-serif text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[1] text-ink">
            Every major step from first shortlist to final arrival.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-12">
          {programs.map((program) => (
            <motion.article
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={spring}
              className={`group relative min-h-[420px] overflow-hidden rounded-2xl bg-white shadow-soft ${program.className}`}
            >
              <Image
                src={program.image}
                alt={`${program.name} study abroad pathway`}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/86 via-espresso/28 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-none text-white">
                  {program.name}
                </h3>
              </div>
              <motion.div
                initial={false}
                className="absolute inset-x-4 bottom-4 rounded-2xl border border-line bg-ivory p-5 text-ink shadow-plush transition duration-300 md:translate-y-[110%] md:group-hover:translate-y-0 md:group-focus-within:translate-y-0 sm:inset-x-6 sm:bottom-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive">
                  Advisory Focus
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted">
                      Covers
                    </p>
                    <p className="mt-1 font-semibold">{program.courses}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted">
                      Planning Note
                    </p>
                    <p className="mt-1 font-semibold">{program.rate}</p>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
