import LeadWizard from "@/components/LeadWizard";
import {
  BadgeDollarSign,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  Plane
} from "lucide-react";

export const metadata = {
  title: "Services | ASA Educators"
};

const services = [
  {
    icon: GraduationCap,
    title: "Career and Course Counselling",
    copy:
      "We connect academic history, interests, budget, and career goals to realistic destinations and programs.",
    deliverables: ["Profile review", "Course shortlist", "Intake strategy"]
  },
  {
    icon: ClipboardList,
    title: "Admission Processing",
    copy:
      "Applications are sequenced around deadlines, document quality, statements, recommendation letters, and offer tracking.",
    deliverables: ["Document checklist", "Application submission", "Offer tracking"]
  },
  {
    icon: BadgeDollarSign,
    title: "Scholarship Strategy",
    copy:
      "Funding routes are mapped by eligibility, academic evidence, leadership proof, and essay positioning.",
    deliverables: ["Award mapping", "Essay review", "Evidence packaging"]
  },
  {
    icon: FileCheck2,
    title: "Visa Guidance",
    copy:
      "Visa files are reviewed for financial traceability, study intent, document consistency, and interview readiness.",
    deliverables: ["Visa checklist", "SOP review", "Mock interview"]
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    copy:
      "Students receive guidance on enrollment tasks, arrival planning, accommodation, travel documents, and campus readiness.",
    deliverables: ["Arrival checklist", "Enrollment tasks", "Travel readiness"]
  }
];

const faqs = [
  {
    question: "Can ASA help if I have not chosen a country yet?",
    answer:
      "Yes. The first step is a fit review that compares destinations by course availability, budget, timelines, and long-term pathway goals."
  },
  {
    question: "Do you help with scholarships?",
    answer:
      "Yes. We map merit and institutional awards, then help package evidence, essays, and timelines around each scholarship route."
  },
  {
    question: "Is visa support included?",
    answer:
      "Visa guidance is available after the admission strategy is clear, because the strongest visa files are built from consistent academic, financial, and intent evidence."
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-canvas pt-24">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#9A7B35]">
          Core Services
        </p>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1]">
            Complete support from first shortlist to final arrival.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[#5A6374]">
            Every service is designed to move a student from uncertainty to a
            documented plan with clear tasks, owners, and deadlines.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
        <div className="grid gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="grid gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft md:grid-cols-[auto_1fr_0.85fr] md:items-start md:p-8"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft p-4 text-olive">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9A7B35]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-[#5A6374]">
                    {service.copy}
                  </p>
                </div>
                <div className="grid gap-3">
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-gold-soft px-4 py-3 text-sm font-semibold text-olive"
                    >
                      <CheckCircle2 size={17} />
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#9A7B35]">
            Questions
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1]">
            What students usually ask before starting.
          </h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-[#5A6374]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
