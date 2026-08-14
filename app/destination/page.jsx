import Image from "next/image";
import Link from "next/link";
import LeadWizard from "@/components/LeadWizard";
import { destinations } from "@/lib/destinations";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Destinations | ASA Educators",
  description: "Study destinations for ASA Educators students: Cyprus, Australia, UK, Sweden, Malaysia, and Turkey."
};

export default function DestinationPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1B65B9]">
              Favourite Destination
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-[#0B2D57] sm:text-5xl">
              Popular Destinations For International Students
            </h1>
          </div>
          <p className="self-end text-lg leading-8 text-gray-600">
            ASA Educators helps students compare countries by tuition, living
            cost, course availability, admission requirements, visa expectations,
            and long-term academic fit.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {destinations.map((destination) => (
            <article key={destination.country} className="overflow-hidden rounded-2xl bg-gray-50 shadow-xl shadow-gray-200/80">
              <div className="group relative h-[310px] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={`${destination.country} destination`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <h2 className="absolute bottom-6 left-6 text-2xl font-extrabold text-white">
                  Study in {destination.country}
                </h2>
              </div>
              <div className="p-6">
                <p className="leading-7 text-gray-600">{destination.copy}</p>
                <div className="mt-5 grid gap-3">
                  {destination.points.map((point) => (
                    <p key={point} className="flex gap-3 text-sm font-bold text-[#0B2D57]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D71920]" />
                      {point}
                    </p>
                  ))}
                </div>
                <Link
                  href={`/destination/${destination.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#b9141a]"
                >
                  Explore {destination.country} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0B2D57] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
              Need Help Choosing?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Your best destination depends on profile, budget, course, and visa readiness.
            </h2>
          </div>
          <div className="self-center">
            <p className="leading-8 text-white/85">
              A counsellor can compare options with you and build a shortlist
              that avoids wasted application fees and unrealistic timelines.
            </p>
            <Link href="#lead-form" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D71920] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#b9141a]">
              Get Destination Advice <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
