import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "@/components/Skeleton";
import LeadWizard from "@/components/LeadWizard";
import { getBlogPosts } from "@/lib/content";

const blogImages = [
  "https://images.unsplash.com/photo-1527095655060-4026c4af2b25?auto=format&fit=crop&w=1500&q=85",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85"
];

const categories = [
  ["Career Counselling", "24"],
  ["Courses And Programs", "20"],
  ["Education", "120"],
  ["English Test", "73"],
  ["Immigration", "10"],
  ["Life", "13"],
  ["News", "68"],
  ["Student Life", "213"],
  ["Universities", "202"],
  ["Scholarships", "08"]
];

export const metadata = {
  title: "Blog/Resources",
  description:
    "Study abroad articles, visa guides, admissions resources, and family planning advice from ASA Educators."
};

function formatDate(date) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
}

function AuthorMeta({ date }) {
  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2D57] text-sm font-extrabold text-white">
        ASA
      </div>
      <div>
        <p className="font-bold text-[#071326]">ASA Educators</p>
        <p className="text-sm font-semibold text-gray-500">{formatDate(date)}</p>
      </div>
    </div>
  );
}

function PostCard({ post, index }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
        <Image
          src={post.image || blogImages[index % blogImages.length]}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#1B65B9] shadow">
          {post.category}
        </span>
      </div>
      <h2 className="mt-6 text-2xl font-extrabold leading-tight text-[#071326] transition group-hover:text-[#1B65B9]">
        {post.title}
      </h2>
      <AuthorMeta date={post.date} />
    </Link>
  );
}

async function BlogList() {
  const posts = await getBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-16">
      <div className="min-w-0">
        {featured ? (
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="relative min-h-[330px] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm sm:min-h-[430px]">
              <Image
                src={featured.image || blogImages[0]}
                alt={featured.title}
                fill
                priority
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-[#D7E7FF] px-5 py-2 text-sm font-extrabold text-[#1B65B9]">
                Latest
              </span>
            </div>
            <p className="mt-7 text-lg font-extrabold text-[#1B65B9]">{featured.category}</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#071326] transition group-hover:text-[#1B65B9] sm:text-4xl">
              {featured.title}
            </h1>
            <AuthorMeta date={featured.date} />
          </Link>
        ) : null}

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {rest.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index + 1} />
          ))}
        </div>
      </div>

      <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/70">
        <input
          type="search"
          placeholder="Search"
          className="h-14 w-full rounded-lg border border-gray-300 px-4 text-base font-semibold outline-none transition placeholder:text-gray-400 focus:border-[#1B65B9]"
        />
        <h2 className="mt-8 text-xl font-extrabold text-[#071326]">Popular Categories</h2>
        <div className="mt-4 grid gap-3">
          {categories.map(([label, count]) => (
            <div key={label} className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm font-bold text-[#071326]">
              <span>{label}</span>
              <span>{count}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={<Skeleton />}>
        <BlogList />
      </Suspense>
      <LeadWizard />
    </main>
  );
}
