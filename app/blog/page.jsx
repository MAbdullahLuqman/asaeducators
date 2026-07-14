import { Suspense } from "react";
import Link from "next/link";
import Skeleton from "@/components/Skeleton";
import { getBlogPosts } from "@/lib/content";

export const metadata = {
  title: "Blog/Resources",
  description:
    "Study abroad articles, visa guides, admissions resources, and family planning advice from ASA Educators."
};

async function BlogList() {
  const posts = await getBlogPosts();

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 sm:px-8 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group rounded-2xl border border-line bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-plush active:scale-[0.99]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-olive">
            {post.category} / {post.readTime}
          </p>
          <h2 className="mt-10 font-serif text-[clamp(1.8rem,3vw,2.55rem)] leading-tight text-[#1A1D24]">
            {post.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5A6374]">
            {post.excerpt}
          </p>
          <span className="mt-8 inline-flex min-h-12 items-center text-sm font-semibold text-olive">
            Read resource
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-canvas pt-32">
      <section className="mx-auto max-w-6xl px-6 pb-14 sm:px-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive">
          Blog/Resources
        </p>
        <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1]">
          Study abroad guides for confident international applications.
        </h1>
      </section>
      <Suspense fallback={<Skeleton />}>
        <BlogList />
      </Suspense>
    </main>
  );
}
