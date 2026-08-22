import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Leo Yangqi",
  description: "Technical and learning notes by Leo Yangqi.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
        Writing
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Blog
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Notes about artificial intelligence, computer science, security, and
        engineering topics I am learning.
      </p>

      <section className="mt-12" aria-label="Blog posts">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
