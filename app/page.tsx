"use client";

import { useState } from "react";

const interests = [
  "AI",
  "Computer Vision",
  "LLM",
  "Cyber Security",
];

const profileLinks = [
  {
    label: "GitHub",
    href: "https://github.com/lu-yangqi",
    external: true,
  },
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=luyangqi20060901%40gmail.com",
    external: true,
    email: "luyangqi20060901@gmail.com",
  },
  {
    label: "ZJU Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=3250103580%40zju.edu.cn",
    external: true,
    email: "3250103580@zju.edu.cn",
  },
];

function CopyEmailButton({ email, label }: { email: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label={`Copy ${label} address`}
      className="rounded-lg border border-white/10 px-3 py-3 text-xs font-medium text-slate-400 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center px-6 py-16 sm:px-10 lg:px-16">
      <section
        className="mx-auto w-full max-w-5xl"
        aria-labelledby="intro-heading"
      >
        <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
          Hello, I&apos;m
        </p>

        <h1
          id="intro-heading"
          className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
        >
          Leo Yangqi
        </h1>

        <div className="mt-6 flex flex-col gap-1 text-lg text-slate-300 sm:flex-row sm:items-center sm:gap-3 sm:text-xl">
          <p>AI Undergraduate Student</p>
          <span className="hidden text-slate-600 sm:inline" aria-hidden="true">
            / 
          </span>
          <p>Zhejiang University</p>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          I&apos;m interested in AI research, engineering, and computer science,
          with a focus on building intelligent systems that can perceive,
          reason, and solve real-world problems.
        </p>

        <ul
          className="mt-8 flex flex-wrap gap-3"
          aria-label="Technical interests"
        >
          {interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
            >
              {interest}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4" aria-label="Profile links">
          {profileLinks.map((link, index) => (
            <div key={link.label} className="flex items-center gap-2">
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className={
                  index === 0
                    ? "rounded-lg bg-slate-100 px-5 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    : "rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                }
              >
                {link.label}
              </a>

              {link.email ? (
                <CopyEmailButton email={link.email} label={link.label} />
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
