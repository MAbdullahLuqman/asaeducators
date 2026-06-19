"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FileSignature,
  GraduationCap,
  Landmark,
  Plane,
  ShieldCheck
} from "lucide-react";
import { useState } from "react";

const spring = { type: "spring", stiffness: 300, damping: 30 };

const services = [
  {
    title: "Career Counselling",
    icon: BriefcaseBusiness,
    detail:
      "A structured pathway review that connects grades, interests, budget, course rigor, and employability outcomes.",
    span: "md:col-span-2"
  },
  {
    title: "Admission Processing",
    icon: FileSignature,
    detail:
      "Document checklists, application sequencing, statement editing, offer tracking, and deadline control.",
    span: "md:col-span-1"
  },
  {
    title: "Visa Guidance",
    icon: ShieldCheck,
    detail:
      "Financial documentation, intent framing, sponsor evidence, interview prep, and file consistency review.",
    span: "md:col-span-1"
  },
  {
    title: "Scholarship Strategy",
    icon: Landmark,
    detail:
      "Award mapping, merit positioning, essay strategy, and evidence packaging for competitive funding routes.",
    span: "md:col-span-2"
  },
  {
    title: "Course Matching",
    icon: GraduationCap,
    detail:
      "Program comparison across curriculum, accreditation, cost, intake timing, ranking, and post-study direction.",
    span: "md:col-span-1"
  },
  {
    title: "Pre-Departure",
    icon: Plane,
    detail:
      "Arrival planning, accommodation guidance, enrollment tasks, travel documents, and campus readiness.",
    span: "md:col-span-1"
  }
];

export default function ServicesBento() {
  const [active, setActive] = useState("Career Counselling");

  return (
    <section className="bg-canvas py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#9A7B35]">
            Services
          </p>
          <h2 className="font-serif text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1]">
            Everything a serious application needs.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const selected = active === service.title;
            return (
              <motion.button
                key={service.title}
                type="button"
                layout
                transition={spring}
                onClick={() => setActive(service.title)}
                className={`${service.span} min-h-[230px] rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-plush`}
              >
                <motion.div layout className="flex items-start justify-between gap-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-soft text-olive">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full bg-canvas px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7C8597]">
                    {selected ? "Open" : "View"}
                  </span>
                </motion.div>
                <motion.h3
                  layout
                  className="mt-8 text-[clamp(1.25rem,2.2vw,1.7rem)] font-semibold leading-tight text-[#1A1D24]"
                >
                  {service.title}
                </motion.h3>
                <AnimatePresence initial={false}>
                  {selected ? (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={spring}
                      className="mt-5 text-base leading-7 text-[#5A6374]"
                    >
                      {service.detail}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
