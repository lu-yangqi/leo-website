import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { all } from "lowlight";
import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Leo Yangqi`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-20">
      <Link
        href="/blog"
        className="inline-flex text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        <span aria-hidden="true">←</span>&nbsp;Back to Blog
      </Link>

      <header>
        <p className="mt-8 text-sm font-medium tracking-[0.18em] text-cyan-300 uppercase">
          {post.category}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          {post.description}
        </p>
        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <time dateTime={post.date} className="text-sm text-slate-500">
            {formatDate(post.date)}
          </time>
          <ul
            className="flex flex-wrap gap-2"
            aria-label={`Tags for ${post.title}`}
          >
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-2.5 py-1 text-xs text-slate-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <article className="markdown-content mt-12 border-t border-white/10 pt-10 text-slate-300">
        <ReactMarkdown
          rehypePlugins={[[rehypeHighlight, { languages: all }]]}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
