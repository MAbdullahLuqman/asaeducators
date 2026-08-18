"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  destination: "Cyprus",
  level: "Undergraduate",
  message: ""
};

const destinations = ["Cyprus", "UK", "Australia", "Sweden", "Malaysia", "Turkey", "Not sure yet"];
const levels = ["Foundation", "Undergraduate", "Postgraduate", "IELTS/PTE", "LanguageCert / Oxford ELLT"];

export default function ContactInquiryForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");

  const ready = values.name.trim() && values.email.includes("@") && values.phone.trim().length > 6;

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    if (!ready) return;
    setStatus("submitting");
    try {
      const { submitLead } = await import("@/lib/leads");
      await submitLead({ ...values, intake: "Contact page inquiry" });
      setValues(initialValues);
      setStep(1);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/70 sm:p-8">
      <div className="mb-6 flex gap-2">
        {[1, 2].map((item) => (
          <span key={item} className={`h-2 flex-1 rounded-full ${step >= item ? "bg-[#D71920]" : "bg-gray-200"}`} />
        ))}
      </div>

      {step === 1 ? (
        <div className="grid gap-5">
          <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
            Full name
            <input value={values.name} onChange={(event) => update("name", event.target.value)} className="min-h-[52px] rounded-xl border border-gray-200 px-4 outline-none focus:border-[#D71920]" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
            Email
            <input type="email" value={values.email} onChange={(event) => update("email", event.target.value)} className="min-h-[52px] rounded-xl border border-gray-200 px-4 outline-none focus:border-[#D71920]" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
            Phone
            <input value={values.phone} onChange={(event) => update("phone", event.target.value)} className="min-h-[52px] rounded-xl border border-gray-200 px-4 outline-none focus:border-[#D71920]" />
          </label>
          <button type="button" onClick={() => setStep(2)} disabled={!ready} className="min-h-12 rounded-full bg-[#D71920] px-6 text-sm font-bold text-white disabled:opacity-50">
            Continue
          </button>
        </div>
      ) : (
        <div className="grid gap-5">
          <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
            Preferred country
            <select value={values.destination} onChange={(event) => update("destination", event.target.value)} className="min-h-[52px] rounded-xl border border-gray-200 px-4 outline-none focus:border-[#D71920]">
              {destinations.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
            Course / level
            <select value={values.level} onChange={(event) => update("level", event.target.value)} className="min-h-[52px] rounded-xl border border-gray-200 px-4 outline-none focus:border-[#D71920]">
              {levels.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#0B2D57]">
            Message
            <textarea value={values.message} onChange={(event) => update("message", event.target.value)} className="min-h-32 rounded-xl border border-gray-200 p-4 outline-none focus:border-[#D71920]" />
          </label>
          {status === "success" ? <p className="text-sm font-bold text-green-700">Inquiry submitted.</p> : null}
          {status === "error" ? <p className="text-sm font-bold text-red-700">Unable to submit right now.</p> : null}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => setStep(1)} className="min-h-12 rounded-full border border-gray-200 px-6 text-sm font-bold text-[#0B2D57]">
              Back
            </button>
            <button type="submit" disabled={status === "submitting"} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D71920] px-6 text-sm font-bold text-white disabled:opacity-50">
              {status === "submitting" ? "Submitting..." : "Submit Inquiry"} <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
