import Link from "next/link";

export default function ArticleShell({ eyebrow, title, excerpt, children }) {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:px-8">
      <Link
        href="/blog"
        className="mb-10 inline-flex min-h-12 items-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-olive shadow-soft transition hover:border-olive active:scale-[0.97]"
      >
        Back to resources
      </Link>
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-olive">
        {eyebrow}
      </p>
      <h1 className="font-serif text-[clamp(2.25rem,5.2vw,4.4rem)] leading-[1] text-[#1A1D24]">
        {title}
      </h1>
      <p className="mt-8 text-[clamp(1.05rem,1.7vw,1.24rem)] leading-8 text-[#5A6374]">
        {excerpt}
      </p>
      <div className="mt-12 space-y-10 text-lg leading-8 text-[#3F4654]">
        {children}
      </div>
    </article>
  );
}
