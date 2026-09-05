"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site";

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
    <header className="site-header">
      <nav
        className="site-nav site-container"
        aria-label={translations.nav.ariaLabel}
      >
        <Link
          href="/"
          className="brand-link"
        >
          <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M5 8v24h13M21 8l7 11 7-11M28 19v13" stroke="currentColor" strokeWidth="3" />
          </svg>
          <span>{siteConfig.name}</span>
        </Link>

        <div className="nav-controls">
          <ul className="nav-links">
            {navigationLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className="nav-link"
                  >
                    {translations.nav[link.key]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className="language-control"
            role="group"
            aria-label={translations.nav.languageSelector}
          >
            <button
              type="button"
              lang="en"
              aria-label={translations.nav.switchTo(translations.nav.english)}
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
              className="language-button"
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
              className="language-button"
            >
              {translations.nav.chinese}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
