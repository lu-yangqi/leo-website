"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

const navigationLinks = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "blog", href: "/blog" },
  { key: "about", href: "/about" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, translations } = useLanguage();

  return (
    <header className="border-b border-white/10">
      <nav
        className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"
        aria-label={translations.nav.ariaLabel}
      >
        <Link
          href="/"
          className="w-fit text-base font-semibold tracking-tight text-white transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          Leo Yangqi
        </Link>

        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
          <ul className="flex flex-wrap items-center gap-1 text-sm">
            {navigationLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                      isActive
                        ? "bg-white/[0.08] font-medium text-white"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
                    }`}
                  >
                    {translations.nav[link.key]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className="flex shrink-0 items-center gap-1 text-xs"
            role="group"
            aria-label={translations.nav.languageSelector}
          >
            <button
              type="button"
              lang="en"
              aria-label={translations.nav.switchTo(translations.nav.english)}
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
              className={`rounded px-1.5 py-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                locale === "en"
                  ? "bg-white/[0.08] font-semibold text-white"
                  : "text-slate-500 hover:text-slate-200"
              }`}
            >
              {translations.nav.english}
            </button>
            <span className="text-slate-700" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              lang="zh-CN"
              aria-label={translations.nav.switchTo(translations.nav.chinese)}
              aria-pressed={locale === "zh"}
              onClick={() => setLocale("zh")}
              className={`rounded px-1.5 py-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                locale === "zh"
                  ? "bg-white/[0.08] font-semibold text-white"
                  : "text-slate-500 hover:text-slate-200"
              }`}
            >
              {translations.nav.chinese}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
