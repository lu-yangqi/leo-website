"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { BlogPostSummary } from "@/lib/blog";

const noteLinkClassName =
  "inline-flex text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function RecentNoteCard({ post }: { post: BlogPostSummary }) {
  const { locale, translations } = useLanguage();
  const interfaceLanguage = locale === "zh" ? "zh-CN" : "en";
  const postLanguage = post.lang === "zh" ? "zh-CN" : "en";

  return (
    <article
      lang={postLanguage}
      className="surface-card note-card flex h-full flex-col p-6"
      data-reveal
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
        <p className="font-medium tracking-[0.12em] text-cyan-300 uppercase">
          {post.category}
        </p>
        <span className="text-slate-600" aria-hidden="true">
          /
        </span>
        <time
          dateTime={post.date}
          lang={interfaceLanguage}
          className="text-slate-400"
        >
          {formatDate(post.date, translations.blog.dateLocale)}
        </time>
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          {post.title}
        </Link>
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {post.description}
      </p>

      <ul
        className="flex flex-wrap gap-2 pt-5"
        aria-label={translations.blog.tagsFor(post.title)}
        lang={interfaceLanguage}
      >
        {post.tags.slice(0, 3).map((tag) => (
          <li
            key={tag}
            lang={postLanguage}
            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <Link
          href={`/blog/${post.slug}`}
          lang={interfaceLanguage}
          className={noteLinkClassName}
        >
          {translations.blog.readNote} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
