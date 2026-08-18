import Link from "next/link";
import LeadWizard from "@/components/LeadWizard";
import {
  ArrowRight,
  BookOpenCheck,
  Clock3,
  FileCheck2,
  GraduationCap,
  Mic,
  PenLine
} from "lucide-react";

const courses = [
  {
    icon: BookOpenCheck,
    title: "IELTS Preparation Course",
    duration: "2 months",
    copy:
      "Intensive training across listening, reading, writing, and speaking with strategies, practice materials, and personalised feedback.",
    points: ["Band target planning", "Full mock tests", "Writing correction", "Speaking practice"]
  },
  {
    icon: GraduationCap,
    title: "PTE Preparation Course",
    duration: "1 month",
    copy:
      "Focused preparation for PTE Academic covering speaking, writing, listening, and reading so students can pursue goals with confidence.",
    points: ["Speaking fluency", "Template practice", "Timed modules", "Score strategy"]
  },
  {
    icon: Mic,
    title: "LanguageCert",
    duration: "2 weeks",
    copy:
      "Specialized speaking-focused preparation with one-on-one sessions and authentic practice materials.",
    points: ["Interview confidence", "Pronunciation drills", "Live feedback", "Test format guidance"]
  },
  {
    icon: PenLine,
    title: "Oxford ELLT",
    duration: "2 weeks",
    copy:
      "Tutor-led preparation for the Oxford English Language Level Test with practical support for speaking performance.",
    points: ["Speaking portion", "Question practice", "Tutor review", "Fast readiness plan"]
  }
];

const features = [
  ["Small batches", "Focused classes where students can ask questions and receive practical correction."],
  ["Result tracking", "Progress is measured through mocks, written tasks, speaking reviews, and weekly feedback."],
  ["Application link", "Test preparation is connected with your university and visa timeline, not treated separately."],
  ["Parent updates", "Families get clear guidance on fees, documents, deadlines, and next decisions."]
];

export const metadata = {
  title: "Courses | ASA Educators",
  description: "IELTS, PTE, and admissions counselling courses for study abroad students."
};

export default function CoursesPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-14">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Courses
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-[#0B2D57] sm:text-4xl lg:text-5xl xl:text-[3.35rem]">
              Training that prepares students for global study.
            </h1>
            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              ASA Educators combines IELTS, PTE, and admissions counselling so
              students prepare for tests with a clear destination, course, and
              intake plan in mind.
            </p>
            <Link
              href="#lead-form"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a]"
            >
              Join a Course <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["3,000+", "students trained"],
              ["4", "English test routes"],
              ["1:1", "speaking feedback"],
              ["A-Z", "test and admission planning"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/70">
                <p className="text-4xl font-extrabold text-[#D71920]">{value}</p>
                <p className="mt-2 font-bold text-[#0B2D57]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <article key={course.title} className="rounded-3xl border border-gray-200 bg-[#F7F3E8] p-7 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-10 w-10 text-[#D71920]" />
                    <span className="rounded-full bg-[#D7DEE8] px-4 py-2 text-sm font-extrabold text-[#071326]">
                      {course.duration}
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl font-extrabold text-[#071326]">{course.title}</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-700">{course.copy}</p>
                  <div className="mt-6 grid gap-3">
                    {course.points.map((point) => (
                      <p key={point} className="flex items-center gap-3 font-semibold text-[#0B2D57]">
                        <span className="h-2 w-2 rounded-full bg-[#D71920]" />
                        {point}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Test Preparation
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              Practical classes built around test performance and admission deadlines.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Students can prepare for a full English test route or choose a short speaking-focused track when the university accepts it.
            </p>
          </div>
          <div className="grid gap-5">
            {features.map(([title, copy], index) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/70">
                <div className="flex items-start gap-4">
                  {[Clock3, Mic, PenLine, FileCheck2].map((Icon, iconIndex) =>
                    iconIndex === index ? <Icon key={title} className="h-7 w-7 shrink-0 text-[#D71920]" /> : null
                  )}
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0B2D57]">{title}</h3>
                    <p className="mt-2 leading-7 text-gray-600">{copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
