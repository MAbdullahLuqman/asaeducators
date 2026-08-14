"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  destination: "Cyprus",
  level: "Undergraduate",
  intake: "Upcoming intake",
  message: ""
};

const destinations = ["Cyprus", "Australia", "UK", "Sweden", "Malaysia", "Turkey", "Not sure yet"];
const levels = ["Undergraduate", "Postgraduate", "Diploma", "Foundation", "IELTS/PTE"];
const intakes = ["Upcoming intake", "January/February", "May/June", "September/October", "Flexible"];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function LeadWizard() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [stored, setStored] = useState("");

  const ready =
    values.name.trim().length > 1 &&
    isValidEmail(values.email) &&
    values.phone.trim().length > 6;

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!ready) return;

    setStatus("submitting");
    setStored("");

    try {
      const { submitLead } = await import("@/lib/leads");
      const result = await submitLead(values);
      setStored(result.stored);
      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      console.error("Lead submission failed", error);
      setStatus("error");
    }
  }

  return (
    <section id="lead-form" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
            Free Consultation
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl lg:text-5xl">
            Get a personalised study abroad plan.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Tell us where you want to study, your current education level, and
            your preferred intake. ASA Educators will review your profile and
            guide you on universities, documents, tests, and visa preparation.
          </p>
          <div className="mt-8 grid gap-4 text-sm font-semibold text-[#0B2D57] sm:grid-cols-2">
            {["Profile assessment", "University shortlist", "Document checklist", "Visa file guidance"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-[#D71920]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-2xl shadow-gray-200/70 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
              Full name
              <input
                value={values.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Your name"
                className="min-h-[52px] rounded-xl border border-gray-200 px-4 py-3 font-medium text-gray-800 outline-none transition focus:border-[#D71920] focus:ring-4 focus:ring-red-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
              Phone number
              <input
                value={values.phone}
                onChange={(event) => update("phone", event.target.value)}
                placeholder="+92 300 0000000"
                className="min-h-[52px] rounded-xl border border-gray-200 px-4 py-3 font-medium text-gray-800 outline-none transition focus:border-[#D71920] focus:ring-4 focus:ring-red-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#0B2D57] sm:col-span-2">
              Email address
              <input
                type="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="you@example.com"
                className="min-h-[52px] rounded-xl border border-gray-200 px-4 py-3 font-medium text-gray-800 outline-none transition focus:border-[#D71920] focus:ring-4 focus:ring-red-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
              Destination
              <select
                value={values.destination}
                onChange={(event) => update("destination", event.target.value)}
                className="min-h-[52px] rounded-xl border border-gray-200 px-4 py-3 font-medium text-gray-800 outline-none transition focus:border-[#D71920] focus:ring-4 focus:ring-red-100"
              >
                {destinations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
              Study level
              <select
                value={values.level}
                onChange={(event) => update("level", event.target.value)}
                className="min-h-[52px] rounded-xl border border-gray-200 px-4 py-3 font-medium text-gray-800 outline-none transition focus:border-[#D71920] focus:ring-4 focus:ring-red-100"
              >
                {levels.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#0B2D57] sm:col-span-2">
              Preferred intake
              <select
                value={values.intake}
                onChange={(event) => update("intake", event.target.value)}
                className="min-h-[52px] rounded-xl border border-gray-200 px-4 py-3 font-medium text-gray-800 outline-none transition focus:border-[#D71920] focus:ring-4 focus:ring-red-100"
              >
                {intakes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#0B2D57] sm:col-span-2">
              Message
              <textarea
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="Tell us about your education, budget, or preferred course."
                className="min-h-32 rounded-xl border border-gray-200 px-4 py-3 font-medium text-gray-800 outline-none transition focus:border-[#D71920] focus:ring-4 focus:ring-red-100"
              />
            </label>
          </div>

          {status === "success" ? (
            <p className="mt-5 rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700">
              Your request has been saved{stored === "local" ? " locally until Firebase keys are added" : ""}.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">
              Submission failed. Check Firebase keys and Firestore permissions.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={!ready || status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {status === "submitting" ? "Submitting..." : "Submit Consultation Request"}
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
