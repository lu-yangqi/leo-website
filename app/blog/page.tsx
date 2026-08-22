import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import {
  LocalizedMetadata,
  LocalizedText,
} from "@/components/LanguageProvider";
import { translationPair, translations } from "@/data/i18n";
import { getBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description: translations.en.metadata.blog.description,
  path: "/blog",
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <LocalizedMetadata page="blog" />

      <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
        <LocalizedText value={translationPair("blog", "eyebrow")} />
      </p>
      <h1
        id="blog-heading"
        className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
      >
        <LocalizedText value={translationPair("blog", "title")} />
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        <LocalizedText value={translationPair("blog", "description")} />
      </p>

      <section className="mt-12" aria-labelledby="blog-heading">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
