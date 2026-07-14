import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  GraduationCap,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound
} from "lucide-react";

export const metadata = {
  title: "Success Stories",
  description:
    "See ASA Educators student visa approvals and admissions success stories for Cyprus, Europe 2026 intakes."
};

const successStories = [
  {
    studentName: "Ahmad Hussain",
    university: "American University of Cyprus",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Mehreen CH",
    contact: "+92 300 1304726"
  },
  {
    studentName: "Hussain Ahmad",
    university: "Alexander College",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Mehreen CH",
    contact: "+92 300 1304726"
  },
  {
    studentName: "M Tayyab Raza",
    university: "American University of Cyprus",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Sadia Asim",
    contact: "+92 300 1025752"
  },
  {
    studentName: "Behroze Ali Khan",
    university: "American University of Cyprus",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Sadia Asim",
    contact: "+92 300 1025752"
  },
  {
    studentName: "Shehzad Tanveer",
    university: "Alexander College",
    destination: "Cyprus, Europe",
    intake: "2026 Intake",
    counselor: "Mehreen CH",
    contact: "+92 300 1304726"
  },
  {
    studentName: "Samar Hayat",
    university: "Alexander College",
    destination: "Cyprus, Europe",
    intake: "Spring 2026",
    counselor: "Sadia Asim",
    contact: "+92 300 1025752"
  },
  {
    studentName: "M Usama",
    university: "Alexander College",
    destination: "Cyprus, Europe",
    intake: "2026 Intake",
    counselor: "Sadia Asim",
    contact: "+92 300 1025752"
  }
];

const institutions = [
  {
    name: "American University of Cyprus",
    summary:
      "A modern Cyprus pathway for students seeking European academic exposure, practical programs, and international student support.",
    count: successStories.filter(
      (story) => story.university === "American University of Cyprus"
    ).length
  },
  {
    name: "Alexander College",
    summary:
      "A focused destination for students planning a European education route with guided admissions and visa documentation.",
    count: successStories.filter((story) => story.university === "Alexander College").length
  }
];

const counselors = [
  {
    name: "Mehreen CH",
    phone: "+92 300 1304726",
    approvals: successStories.filter((story) => story.counselor === "Mehreen CH").length
  },
  {
    name: "Sadia Asim",
    phone: "+92 300 1025752",
    approvals: successStories.filter((story) => story.counselor === "Sadia Asim").length
  }
];

function SuccessCard({ story }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-plush">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-olive">
          <GraduationCap size={22} aria-hidden="true" />
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-olive px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
          <BadgeCheck size={15} aria-hidden="true" />
          Visa Granted
        </span>
      </div>

      <div className="mt-7 flex-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive">
          {story.intake}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#1A1D24]">
          {story.studentName}
        </h3>

        <div className="mt-6 grid gap-4 text-sm leading-6 text-[#5A6374]">
          <p className="flex gap-3">
            <Building2 className="mt-0.5 shrink-0 text-olive" size={18} aria-hidden="true" />
            <span>
              <span className="block font-semibold text-[#1A1D24]">University</span>
              {story.university}
            </span>
          </p>
          <p className="flex gap-3">
            <MapPin className="mt-0.5 shrink-0 text-olive" size={18} aria-hidden="true" />
            <span>
              <span className="block font-semibold text-[#1A1D24]">Destination</span>
              {story.destination}
            </span>
          </p>
          <p className="flex gap-3">
            <UserRound className="mt-0.5 shrink-0 text-olive" size={18} aria-hidden="true" />
            <span>
              <span className="block font-semibold text-[#1A1D24]">Counselor</span>
              {story.counselor}
            </span>
          </p>
        </div>
      </div>

      <Link
        href={`tel:${story.contact.replaceAll(" ", "")}`}
        className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-canvas px-5 text-sm font-semibold text-olive transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-gold-soft active:scale-[0.98]"
      >
        <Phone size={17} aria-hidden="true" />
        Contact counselor
      </Link>
    </article>
  );
}

function InstitutionCard({ institution }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-7 shadow-soft">
      <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-olive">
        <Building2 size={25} aria-hidden="true" />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive">
        {institution.count} recent approvals
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#1A1D24]">
        {institution.name}
      </h3>
      <p className="mt-5 leading-7 text-[#5A6374]">{institution.summary}</p>
    </article>
  );
}

function CounselorCard({ counselor }) {
  return (
    <article className="rounded-2xl border border-white/12 bg-white/8 p-6 text-white shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive-soft">
            Counselor
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
            {counselor.name}
          </h3>
        </div>
        <span className="rounded-full bg-gold px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
          {counselor.approvals} wins
        </span>
      </div>
      <Link
        href={`tel:${counselor.phone.replaceAll(" ", "")}`}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-espresso transition duration-300 hover:-translate-y-0.5 hover:bg-gold-soft active:scale-[0.98]"
      >
        <Phone size={17} aria-hidden="true" />
        WhatsApp / Phone: {counselor.phone}
      </Link>
    </article>
  );
}

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <section className="relative isolate overflow-hidden bg-espresso px-6 pb-20 pt-36 text-white sm:px-8 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(36,56,41,0.48),transparent_30rem),linear-gradient(135deg,rgba(63,74,47,0.78),rgba(23,26,31,0.98)_52%,rgba(23,26,31,1))]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-canvas to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-olive-soft ring-1 ring-white/14">
              <ShieldCheck size={16} aria-hidden="true" />
              Verified student outcomes
            </p>
            <h1 className="max-w-5xl font-serif text-[clamp(2.7rem,6vw,5.8rem)] leading-[1]">
              ASA Educators Success Stories: Your Pathway to Europe
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/82">
              See how we&apos;ve helped ambitious students secure their visas and
              admissions to top institutions in Cyprus for the 2026 intakes.
            </p>
            <Link
              href="/programs#lead-form"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-white shadow-button transition duration-300 hover:-translate-y-0.5 hover:bg-olive-dark active:scale-[0.98]"
            >
              Start Your Application Today
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/10 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive-soft">
              Spring 2026 snapshot
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-4xl font-semibold">{successStories.length}</p>
                <p className="mt-2 text-sm text-white/70">recent approvals</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-4xl font-semibold">2</p>
                <p className="mt-2 text-sm text-white/70">Cyprus institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="font-serif text-[clamp(2.3rem,4.8vw,4.4rem)] leading-[1] text-[#1A1D24]">
            Recent Visa Approvals: Spring 2026 Intake
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[#5A6374]">
            We handle the complexity of admissions, documentation, and visa
            processing so our students can focus on their future.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {successStories.map((story) => (
            <SuccessCard
              key={`${story.studentName}-${story.university}-${story.counselor}`}
              story={story}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive">
              Institution Spotlight
            </p>
            <h2 className="font-serif text-[clamp(2.3rem,4.8vw,4.2rem)] leading-[1] text-[#1A1D24]">
              Top Destinations in Cyprus
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {institutions.map((institution) => (
              <InstitutionCard key={institution.name} institution={institution} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso px-6 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive-soft">
                Meet Our Counselors
              </p>
              <h2 className="font-serif text-[clamp(2.3rem,4.8vw,4.2rem)] leading-[1]">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                Speak with an ASA counselor for admissions planning, document
                preparation, and Cyprus visa guidance for upcoming intakes.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {counselors.map((counselor) => (
                <CounselorCard key={counselor.name} counselor={counselor} />
              ))}
            </div>
          </div>

          <address className="mt-12 flex gap-3 rounded-2xl border border-white/12 bg-white/8 p-5 text-sm not-italic leading-6 text-white/76">
            <MapPin className="mt-0.5 shrink-0 text-olive-soft" size={18} aria-hidden="true" />
            ASA Educators, Al-Arabia Tower, Harianwala Chowk, D Ground Block B
            People&apos;s Colony No 1, Faisalabad.
          </address>
        </div>
      </section>
    </main>
  );
}
