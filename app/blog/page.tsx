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
    <main className="site-container inner-page flex-1">
      <LocalizedMetadata page="blog" />

      <header className="page-intro hero-enter">
        <p className="eyebrow">
          <LocalizedText value={translationPair("blog", "eyebrow")} />
        </p>
        <h1
          id="blog-heading"
          className="page-title"
        >
          <LocalizedText value={translationPair("blog", "title")} />
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          <LocalizedText value={translationPair("blog", "description")} />
        </p>
      </header>

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
