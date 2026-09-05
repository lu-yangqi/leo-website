"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-container footer-content">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <p>{translations.footer.builtWith}</p>
        <a href="#main-content" className="text-link">
          {translations.footer.backToTop} <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
