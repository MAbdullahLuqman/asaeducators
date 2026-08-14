import LeadWizard from "@/components/LeadWizard";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const contact = [
  [Mail, "Email", "info@asaeducators.com"],
  [Clock, "Office Hours", "10:30 AM To 6:30 PM | Saturday, Sunday Off"],
  [Phone, "Phone", "Add your official phone number here"],
  [MapPin, "Office", "Add your complete office address here"]
];

export const metadata = {
  title: "Contact Us | ASA Educators",
  description: "Contact ASA Educators for study abroad counselling, IELTS/PTE training, admissions, and visa guidance."
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[#0B2D57] sm:text-5xl">
              Talk to ASA Educators about your next step.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you are choosing a country, preparing for IELTS/PTE, or
              building a visa file, our counsellors can help you understand what
              to do next.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {contact.map(([Icon, title, value]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/70">
                <Icon className="h-8 w-8 text-[#D71920]" />
                <h2 className="mt-5 text-xl font-extrabold text-[#0B2D57]">{title}</h2>
                <p className="mt-2 leading-7 text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["New Students", "Share your academic background and preferred destination so we can suggest a realistic study route."],
            ["Parents & Guardians", "Understand fees, timelines, document needs, and how to support the student before deadlines."],
            ["Test Preparation", "Ask about IELTS and PTE batches, mock tests, speaking practice, and score improvement plans."]
          ].map(([title, copy]) => (
            <article key={title} className="rounded-2xl bg-gray-50 p-7">
              <MessageCircle className="h-9 w-9 text-[#D71920]" />
              <h2 className="mt-5 text-2xl font-extrabold text-[#0B2D57]">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
