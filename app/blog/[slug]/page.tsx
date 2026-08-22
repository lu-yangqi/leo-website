import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      <header>
        <p className="text-sm font-medium tracking-[0.18em] text-cyan-300 uppercase">
          {post.category}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          {post.description}
        </p>
        <time dateTime={post.date} className="mt-5 block text-sm text-slate-500">
          {formatDate(post.date)}
        </time>
      </header>

      <article className="mt-10 border-t border-white/10 pt-10 leading-8 text-slate-300 [&_a]:text-cyan-300 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-cyan-200 [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-cyan-400/40 [&_blockquote]:pl-5 [&_blockquote]:text-slate-400 [&_code]:rounded [&_code]:bg-white/[0.08] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:text-cyan-100 [&_em]:text-slate-300 [&_h1]:mt-12 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-white [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_li]:mt-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-5 [&_pre]:my-6 [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-black/30 [&_pre]:p-5 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
}
