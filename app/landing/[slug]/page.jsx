import Image from "next/image";
import { notFound } from "next/navigation";
import LeadWizard from "@/components/LeadWizard";
import { CheckCircle2 } from "lucide-react";
import { getLandingPage, getLandingPages } from "@/lib/content";

export async function generateStaticParams() {
  const pages = await getLandingPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const page = await getLandingPage(params.slug);
  return {
    title: page ? `${page.destination} Study Plan | ASA Educators` : "Study Plan"
  };
}

export default async function LandingPage({ params }) {
  const page = await getLandingPage(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-canvas pt-28">
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-plush">
          <div className="relative min-h-[520px]">
            <Image
              src={page.image}
              alt={`${page.destination} study destination`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/84 via-espresso/18 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#F3D58B]">
                Study in {page.destination}
              </p>
              <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1] text-white">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
                {page.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7B35]">
            Planning Snapshot
          </p>
          <div className="mt-7 grid gap-3">
            {page.stats.map((stat) => (
              <div
                key={stat}
                className="rounded-xl border border-line bg-canvas px-5 py-4 text-lg font-semibold text-olive"
              >
                {stat}
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {page.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-olive/20 bg-white px-5 py-3 text-sm font-semibold text-olive shadow-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <article className="rounded-2xl border border-gray-100 bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7B35]">
              What We Watch
            </p>
            <div className="mt-6 grid gap-4">
              {page.highlights.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-olive" size={18} />
                  <p className="leading-7 text-[#5A6374]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7B35]">
              Application Timeline
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.timeline.map((item, index) => (
                <div key={item} className="rounded-xl bg-canvas p-5">
                  <p className="text-sm font-semibold text-olive">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 font-semibold text-[#1A1D24]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <LeadWizard />
    </main>
  );
}
