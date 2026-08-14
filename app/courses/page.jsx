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
    title: "IELTS Preparation",
    copy:
      "Structured training for listening, reading, writing, and speaking with score-focused practice and feedback.",
    points: ["Band target planning", "Mock tests", "Writing correction"]
  },
  {
    icon: GraduationCap,
    title: "PTE Preparation",
    copy:
      "Computer-based test preparation covering speaking fluency, pronunciation, writing templates, and timed practice.",
    points: ["Speaking drills", "Score strategy", "Timed modules"]
  },
  {
    icon: FileCheck2,
    title: "Admissions Counselling",
    copy:
      "Course, university, intake, and document guidance for students applying to international institutions.",
    points: ["Profile review", "Shortlisting", "Application plan"]
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Courses
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-[#0B2D57] sm:text-5xl">
              Training that prepares students for global study.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ASA Educators combines IELTS, PTE, and admissions counselling so
              students prepare for tests with a clear destination, course, and
              intake plan in mind.
            </p>
            <Link
              href="#lead-form"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a]"
            >
              Join a Course <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["3,000+", "students trained"],
              ["IELTS", "academic and general support"],
              ["PTE", "computer-based test practice"],
              ["1:1", "admissions guidance"]
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
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <article key={course.title} className="rounded-2xl bg-gray-50 p-7 shadow-sm">
                  <Icon className="h-10 w-10 text-[#D71920]" />
                  <h2 className="mt-6 text-2xl font-extrabold text-[#0B2D57]">{course.title}</h2>
                  <p className="mt-4 leading-7 text-gray-600">{course.copy}</p>
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
              Training Format
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              Practical classes built around test performance and admissions deadlines.
            </h2>
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
