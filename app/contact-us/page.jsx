import ContactInquiryForm from "@/components/ContactInquiryForm";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const contact = [
  [Mail, "Email", "info@asaeducators.com"],
  [Clock, "Office Hours", "10:30 AM To 6:30 PM | Saturday, Sunday Off"],
  [Phone, "Phone", "+92 300 1304726 | +92 300 1025752"],
  [MapPin, "Office", "ASA Educators, Al-Arabia Tower, Harianwala Chowk, D Ground Block B People's Colony No 1, Faisalabad."]
];

export const metadata = {
  title: "Contact Us | ASA Educators",
  description: "Contact ASA Educators for study abroad counselling, IELTS/PTE training, admissions, and visa guidance."
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-14">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Contact Us
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#0B2D57] sm:text-4xl lg:text-5xl xl:text-[3.35rem]">
              Talk to ASA Educators about your next step.
            </h1>
            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1B65B9]">
              Inquiry Form
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0B2D57] sm:text-4xl">
              Share your country, course, and current qualification.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              A counselor will use this information to suggest the next realistic step for admissions, test preparation, or visa documentation.
            </p>
          </div>
          <ContactInquiryForm />
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
    </main>
  );
}
