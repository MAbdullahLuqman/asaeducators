import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadWizard from "@/components/LeadWizard";
import { getBlogPost, getBlogPosts } from "@/lib/content";

const blogImages = [
  "https://images.unsplash.com/photo-1527095655060-4026c4af2b25?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85"
];

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  return {
    title: post ? post.title : "Article",
    description: post?.excerpt
  };
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
}

function articleImage(post, posts) {
  const index = Math.max(posts.findIndex((item) => item.slug === post.slug), 0);
  return post.image || blogImages[index % blogImages.length];
}

export default async function BlogPostPage({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = articleImage(post, posts);
  const recent = posts.filter((item) => item.slug !== post.slug).slice(0, 6);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[300px] overflow-hidden bg-[#061120] sm:min-h-[420px]">
        <Image
          src={image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative mx-auto flex min-h-[300px] max-w-5xl flex-col justify-end px-4 pb-10 pt-16 text-white sm:min-h-[420px] sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/75">
            {post.category}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm font-bold text-white/80">{formatDate(post.date)} / {post.readTime}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8 lg:py-16">
        <article className="min-w-0 text-base leading-8 text-gray-700">
          <p>{post.excerpt}</p>
          <p className="mt-5">
            ASA Educators prepares students with practical guidance on course
            selection, admission documents, English requirements, financial
            planning, and visa file readiness before each intake.
          </p>

          <div className="relative my-8 min-h-[280px] overflow-hidden rounded-lg bg-gray-100 sm:min-h-[430px]">
            <Image
              src={image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading} className="border-b border-gray-200 pb-7 last:border-b-0">
                <h2 className="text-2xl font-extrabold leading-tight text-[#071326]">
                  {section.heading}
                </h2>
                <p className="mt-4">{section.body}</p>
                <p className="mt-4">
                  Students should confirm deadlines early, keep records
                  consistent, and speak with a counselor before making final
                  choices about deposits, interviews, travel, or visa documents.
                </p>
              </section>
            ))}
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-extrabold leading-tight text-[#071326]">Conclusion</h2>
            <p className="mt-4">
              A strong study abroad plan is built step by step. ASA Educators
              helps students compare realistic options and move through the
              process with a cleaner checklist.
            </p>
          </section>
        </article>

        <aside className="h-fit lg:sticky lg:top-28">
          <h2 className="text-xl font-extrabold text-[#071326]">Recent Blogs</h2>
          <div className="mt-5 grid gap-4">
            {recent.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group grid grid-cols-[84px_1fr] gap-3">
                <div className="relative min-h-[64px] overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src={articleImage(item, posts)}
                    alt={item.title}
                    fill
                    sizes="84px"
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="line-clamp-2 text-sm font-extrabold leading-snug text-[#071326] group-hover:text-[#1B65B9]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-gray-500">{formatDate(item.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <LeadWizard />
    </main>
  );
}
