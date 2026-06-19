import { Suspense } from "react";
import Link from "next/link";
import Skeleton from "@/components/Skeleton";
import { getLandingPages } from "@/lib/content";

export const metadata = {
  title: "Study Abroad Landing Pages | ASA Educators"
};

async function LandingList() {
  const pages = await getLandingPages();

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 sm:px-8 md:grid-cols-2">
      {pages.map((page) => (
        <Link
          key={page.slug}
          href={`/landing/${page.slug}`}
          className="rounded-2xl border border-gray-100 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-plush active:scale-[0.99]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7B35]">
            {page.destination}
          </p>
          <h2 className="mt-10 font-serif text-[clamp(1.8rem,3vw,2.6rem)] leading-tight">
            {page.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5A6374]">
            {page.summary}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default function LandingIndexPage() {
  return (
    <main className="min-h-screen bg-canvas pt-32">
      <section className="mx-auto max-w-6xl px-6 pb-14 sm:px-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#9A7B35]">
          Destinations
        </p>
        <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1]">
          Choose a destination with a clear study plan.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5A6374]">
          Compare countries by courses, costs, application timelines,
          scholarship routes, and visa preparation needs.
        </p>
      </section>
      <Suspense fallback={<Skeleton />}>
        <LandingList />
      </Suspense>
    </main>
  );
}
