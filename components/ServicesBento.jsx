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
    title: "Profile Review",
    icon: BriefcaseBusiness,
    kicker: "01 / Discovery",
    detail:
      "A structured review of academics, budget, preferred intake, destination fit, and long-term goals.",
    span: "md:col-span-2"
  },
  {
    title: "Admissions Processing",
    icon: FileSignature,
    kicker: "02 / Offers",
    detail:
      "Application sequencing, document checklists, statement review, submission support, and offer tracking.",
    span: "md:col-span-1"
  },
  {
    title: "Visa Readiness",
    icon: ShieldCheck,
    kicker: "03 / File Review",
    detail:
      "Financial evidence, sponsor documents, intent clarity, and file consistency reviewed before submission.",
    span: "md:col-span-1"
  },
  {
    title: "Scholarship Strategy",
    icon: Landmark,
    kicker: "04 / Funding",
    detail:
      "Funding routes, tuition planning, merit evidence, deadline mapping, and realistic budget guidance.",
    span: "md:col-span-2"
  },
  {
    title: "SOP & Documents",
    icon: GraduationCap,
    kicker: "05 / Documents",
    detail:
      "Statement of purpose, academic documents, recommendation planning, and institution-specific file prep.",
    span: "md:col-span-1"
  },
  {
    title: "Pre-Departure",
    icon: Plane,
    kicker: "06 / Arrival",
    detail:
      "Enrollment tasks, accommodation planning, travel documents, and first-week arrival preparation.",
    span: "md:col-span-1"
  }
];

export default function ServicesBento() {
  const [active, setActive] = useState("Profile Review");

  return (
    <section className="bg-canvas py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-espresso px-5 py-12 shadow-plush sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(229,238,231,0.16),transparent_26rem),radial-gradient(circle_at_85%_75%,rgba(63,74,47,0.38),transparent_28rem)]" />
          <div className="relative mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive-soft">
                Services
              </p>
              <h2 className="max-w-3xl font-serif text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1] text-white">
                A complete advisory system around every applicant.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              Each service is designed as a visible checkpoint, so families know
              what has been reviewed, what is pending, and what moves the file
              forward.
            </p>
          </div>

          <div className="relative grid gap-5 md:grid-cols-4">
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
                  className={`${service.span} group relative min-h-[250px] overflow-hidden rounded-2xl border p-6 text-left transition duration-300 hover:-translate-y-1 ${
                    selected
                      ? "border-olive-soft/24 bg-olive text-white shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
                      : "border-white/10 bg-white/8 text-white shadow-[0_18px_55px_rgba(0,0,0,0.16)] hover:bg-white/12"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition ${
                      selected ? "bg-olive-soft/18" : "bg-white/8"
                    }`}
                  />
                  <motion.div layout className="relative flex items-start justify-between gap-5">
                    <div
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
                        selected
                          ? "border-olive-soft/24 bg-white/10 text-olive-soft"
                          : "border-white/12 bg-white/10 text-olive-soft"
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                        selected ? "bg-white/14 text-olive-soft" : "bg-white/10 text-white/62"
                      }`}
                    >
                      {selected ? "Open" : "View"}
                    </span>
                  </motion.div>
                  <p
                    className={`relative mt-8 text-xs font-bold uppercase tracking-[0.18em] ${
                      selected ? "text-olive-soft" : "text-olive-soft"
                    }`}
                  >
                    {service.kicker}
                  </p>
                  <motion.h3
                    layout
                    className={`relative mt-3 text-[clamp(1.25rem,2.2vw,1.7rem)] font-semibold leading-tight ${
                      selected ? "text-white" : "text-white"
                    }`}
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
                        className="relative mt-5 max-w-xl text-base leading-7 text-white/76"
                      >
                        {service.detail}
                      </motion.p>
                    ) : (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={spring}
                        className="relative mt-5 line-clamp-2 text-sm leading-6 text-white/58"
                      >
                        {service.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
