"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} Leo Yangqi</p>
        <p>{translations.footer.builtWith}</p>
      </div>
    </footer>
  );
}
