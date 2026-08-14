import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadWizard from "@/components/LeadWizard";
import { destinations, getDestination } from "@/lib/destinations";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export function generateMetadata({ params }) {
  const destination = getDestination(params.slug);

  return {
    title: destination ? `Study in ${destination.country} | ASA Educators` : "Destination",
    description: destination?.copy
  };
}

export default function DestinationDetailPage({ params }) {
  const destination = getDestination(params.slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="relative min-h-[620px] overflow-hidden">
        <Image
          src={destination.image}
          alt={`Study in ${destination.country}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D57] via-[#0B2D57]/65 to-[#0B2D57]/20" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 text-white sm:px-6 lg:px-8">
          <Link
            href="/destination"
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold ring-1 ring-white/20 transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" /> All Destinations
          </Link>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/75">
            International Destination
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Study in {destination.country}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            {destination.intro}
          </p>
          <Link
            href="#lead-form"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a]"
          >
            Apply for {destination.country} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {destination.points.map((point) => (
            <div key={point} className="rounded-2xl bg-white p-7 shadow-xl shadow-gray-200/70">
              <CheckCircle2 className="h-9 w-9 text-[#D71920]" />
              <h2 className="mt-5 text-xl font-extrabold text-[#0B2D57]">{point}</h2>
              <p className="mt-3 leading-7 text-gray-600">
                ASA Educators checks your profile against this route before
                recommending applications and document timelines.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Popular Fields
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B2D57] sm:text-4xl">
              Programs students commonly explore in {destination.country}.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Course availability changes by university and intake. We help you
              compare entry requirements, fees, deadlines, and visa relevance
              before you apply.
            </p>
          </div>
          <div className="grid gap-4">
            {destination.programs.map((program) => (
              <div key={program} className="rounded-2xl bg-gray-50 p-5 font-bold text-[#0B2D57]">
                {program}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B2D57] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
              Why {destination.country}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              A destination can be right only when it fits your profile.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {destination.why.map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-5 font-semibold text-white/90">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
