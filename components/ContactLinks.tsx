"use client";

import { useState } from "react";
import type { ContactLink } from "@/data/profile";

type ContactLinksProps = {
  links: readonly ContactLink[];
};

export default function ContactLinks({ links }: ContactLinksProps) {
  const [copyStatus, setCopyStatus] = useState<{
    email: string;
    label: string;
    result: "copied" | "error";
  } | null>(null);

  async function copyEmail(email: string, label: string) {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus({ email, label, result: "copied" });
    } catch {
      setCopyStatus({ email, label, result: "error" });
    }

    window.setTimeout(() => setCopyStatus(null), 5000);
  }

  return (
    <div className="flex flex-wrap gap-4" aria-label="Profile links">
      {links.map((link, index) => (
        <div key={link.label} className="flex min-w-0 items-center gap-2">
          <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className={
              index === 0
                ? "rounded-lg bg-slate-100 px-5 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                : "rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            }
            aria-label={`${link.label}: ${link.detail}`}
          >
            {link.label}
          </a>

          {link.email ? (
            <button
              type="button"
              onClick={() => copyEmail(link.email!, link.label)}
              aria-label={`Copy ${link.label} address`}
              className="rounded-lg border border-white/10 px-3 py-3 text-xs font-medium text-slate-400 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              {copyStatus?.email === link.email
                ? copyStatus.result === "copied"
                  ? "Copied!"
                  : "Try again"
                : "Copy"}
            </button>
          ) : null}
        </div>
      ))}
      <p className="sr-only" aria-live="polite">
        {copyStatus
          ? copyStatus.result === "copied"
            ? `${copyStatus.label} address copied to clipboard.`
            : `${copyStatus.label} address could not be copied. Please copy it manually.`
          : ""}
      </p>
    </div>
  );
}
