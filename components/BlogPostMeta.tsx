"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { BlogLanguage } from "@/lib/blog";

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

type BlogPostMetaProps = {
  date: string;
  title: string;
  tags: string[];
  articleLanguage: BlogLanguage;
};

export default function BlogPostMeta({
  date,
  title,
  tags,
  articleLanguage,
}: BlogPostMetaProps) {
  const { locale, translations } = useLanguage();
  const interfaceLanguage = locale === "zh" ? "zh-CN" : "en";
  const postLanguage = articleLanguage === "zh" ? "zh-CN" : "en";

  return (
    <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <time
        dateTime={date}
        lang={interfaceLanguage}
        className="text-sm text-slate-500"
      >
        {formatDate(date, translations.blog.dateLocale)}
      </time>
      <ul
        className="flex flex-wrap gap-2"
        lang={interfaceLanguage}
        aria-label={translations.blog.tagsFor(title)}
      >
        {tags.map((tag) => (
          <li
            key={tag}
            lang={postLanguage}
            className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-2.5 py-1 text-xs text-slate-400"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
