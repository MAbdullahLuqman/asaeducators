"use client";

import { X } from "lucide-react";
import { useState } from "react";
import LeadWizard from "@/components/LeadWizard";

export default function LeadFormModal({ label = "Apply Now" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#D71920] px-6 text-sm font-bold text-white transition hover:bg-[#b9141a]"
      >
        {label}
      </button>
      {open ? (
        <div className="fixed inset-0 z-[80] overflow-y-auto bg-black/55 p-4">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <p className="font-bold text-[#0B2D57]">Free Consultation</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close consultation form"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#0B2D57]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <LeadWizard compact />
          </div>
        </div>
      ) : null}
    </>
  );
}
