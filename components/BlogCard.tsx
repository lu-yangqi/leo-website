import Link from "next/link";
import type { BlogPostSummary } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPostSummary;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <p className="font-medium tracking-[0.14em] text-cyan-300 uppercase">
          {post.category}
        </p>
        <span className="text-slate-700" aria-hidden="true">
          / 
        </span>
        <time dateTime={post.date} className="text-slate-500">
          {formatDate(post.date)}
        </time>
      </div>

      <h2 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          {post.title}
        </Link>
      </h2>

      <p className="mt-4 leading-7 text-slate-400">{post.description}</p>

      <div className="mt-auto pt-6">
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
