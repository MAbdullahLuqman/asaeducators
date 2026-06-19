"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const spring = { type: "spring", stiffness: 300, damping: 30 };

const steps = [
  {
    label: "Destination",
    title: "Where do you want to study?",
    field: "destination",
    options: ["Australia", "Canada", "United Kingdom", "United States"]
  },
  {
    label: "Study Level",
    title: "What level are you applying for?",
    field: "level",
    options: ["Undergraduate", "Postgraduate", "Diploma", "PhD"]
  },
  {
    label: "Contact",
    title: "Where should an advisor reach you?",
    field: "contact",
    options: []
  }
];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function LeadWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    destination: "Australia",
    level: "Postgraduate",
    name: "",
    email: ""
  });

  const current = steps[step];
  const complete = step === steps.length - 1;
  const contactReady = values.name.trim().length > 1 && isValidEmail(values.email);

  function handleNext() {
    if (!complete) {
      setStep((value) => Math.min(steps.length - 1, value + 1));
      return;
    }

    if (!contactReady) {
      return;
    }

    const lead = {
      ...values,
      submittedAt: new Date().toISOString()
    };

    window.localStorage.setItem("asaeducators:lastLead", JSON.stringify(lead));
    setSubmitted(true);
  }

  return (
    <section id="lead-form" className="bg-canvas py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#9A7B35]">
            Start Your Plan
          </p>
          <h2 className="font-serif text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1]">
            A lighter way to begin.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#5A6374]">
            Three focused steps give the advisory team enough context to prepare
            a useful first consultation.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-plush sm:p-8">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col justify-center">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-olive">
                <Check size={24} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7B35]">
                Request received
              </p>
              <h3 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-[#1A1D24]">
                Your study plan has been saved.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#5A6374]">
                An advisor can now use your destination, study level, name, and
                email to prepare the first consultation.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(0);
                  setValues({
                    destination: "Australia",
                    level: "Postgraduate",
                    name: "",
                    email: ""
                  });
                }}
                className="mt-8 inline-flex min-h-12 w-fit items-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-olive transition hover:border-olive active:scale-[0.97]"
              >
                Start another request
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 flex gap-2">
                {steps.map((item, index) => (
                  <div
                    key={item.label}
                    className={`h-2 flex-1 rounded-full ${
                      index <= step ? "bg-olive" : "bg-[#EEE9DD]"
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={spring}
                  className="min-h-[330px]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7B35]">
                    Step {step + 1} / {current.label}
                  </p>
                  <h3 className="mt-5 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight text-[#1A1D24]">
                    {current.title}
                  </h3>

                  {current.options.length ? (
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {current.options.map((option) => {
                        const selected = values[current.field] === option;
                        return (
                          <button
                            type="button"
                            key={option}
                            onClick={() =>
                              setValues((previous) => ({
                                ...previous,
                                [current.field]: option
                              }))
                            }
                            className={`flex min-h-14 items-center justify-between rounded-xl border px-5 text-left text-base font-semibold transition active:scale-[0.98] ${
                              selected
                                ? "border-olive bg-gold-soft text-olive"
                                : "border-line bg-white text-[#3F4654] hover:border-olive"
                            }`}
                          >
                            {option}
                            {selected ? <Check size={18} /> : null}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="mt-8 grid gap-4">
                      <input
                        aria-label="Full name"
                        value={values.name}
                        onChange={(event) =>
                          setValues((previous) => ({
                            ...previous,
                            name: event.target.value
                          }))
                        }
                        placeholder="Full name"
                        className="min-h-14 rounded-xl border border-line bg-white px-5 text-base font-medium outline-none transition placeholder:text-[#98A1B2] focus:border-olive focus:ring-4 focus:ring-olive/15"
                      />
                      <input
                        aria-label="Email address"
                        value={values.email}
                        onChange={(event) =>
                          setValues((previous) => ({
                            ...previous,
                            email: event.target.value
                          }))
                        }
                        placeholder="Email address"
                        type="email"
                        className="min-h-14 rounded-xl border border-line bg-white px-5 text-base font-medium outline-none transition placeholder:text-[#98A1B2] focus:border-olive focus:ring-4 focus:ring-olive/15"
                      />
                      <div className="rounded-xl bg-canvas p-5 text-sm leading-6 text-[#5A6374]">
                        Preference: {values.destination} / {values.level}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((value) => Math.max(0, value - 1))}
                  disabled={step === 0}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-olive transition active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft size={18} /> Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={complete && !contactReady}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-olive px-6 text-sm font-semibold text-white shadow-soft transition hover:bg-olive-dark active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {complete ? "Submit Interest" : "Continue"}
                  {complete ? <Check size={18} /> : <ArrowRight size={18} />}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
