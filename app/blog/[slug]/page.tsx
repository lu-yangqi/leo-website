import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { all } from "lowlight";
import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
import BlogPostMeta from "@/components/BlogPostMeta";
import { LocalizedText } from "@/components/LanguageProvider";
import { translationPair } from "@/data/i18n";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import { getAbsoluteUrl, siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

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

  const articlePath = `/blog/${post.slug}`;
  const articleTitle = `${post.title} | ${siteConfig.name}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: articlePath,
    },
    openGraph: {
      title: articleTitle,
      description: post.description,
      url: getAbsoluteUrl(articlePath),
      siteName: siteConfig.name,
      type: "article",
      locale: post.lang === "zh" ? "zh_CN" : "en_US",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title: articleTitle,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleLanguage = post.lang === "zh" ? "zh-CN" : "en";

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-20">
      <Link
        href="/blog"
        className="inline-flex text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        <span aria-hidden="true">←</span>&nbsp;
        <LocalizedText value={translationPair("blog", "backToBlog")} />
      </Link>

      <header lang={articleLanguage}>
        <p className="mt-8 text-sm font-medium tracking-[0.18em] text-cyan-300 uppercase">
          {post.category}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          {post.description}
        </p>
        <BlogPostMeta
          date={post.date}
          title={post.title}
          tags={post.tags}
          articleLanguage={post.lang}
        />
      </header>

      <article
        lang={articleLanguage}
        className="markdown-content mt-12 border-t border-white/10 pt-10 text-slate-300"
      >
        <ReactMarkdown
          rehypePlugins={[[rehypeHighlight, { languages: all }]]}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
