import { notFound } from "next/navigation";
import ArticleShell from "@/components/ArticleShell";
import { getBlogPost, getBlogPosts } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  return {
    title: post ? `${post.title} | ASA Educators` : "Article | ASA Educators"
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-canvas">
      <ArticleShell
        eyebrow={`${post.date} / ${post.readTime}`}
        title={post.title}
        excerpt={post.excerpt}
      >
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-4 font-serif text-3xl text-[#1A1D24]">
              {section.heading}
            </h2>
            <p>{section.body}</p>
          </section>
        ))}
      </ArticleShell>
    </main>
  );
}
