"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10">
      <nav
        className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="w-fit text-base font-semibold tracking-tight text-white transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          Leo Yangqi
        </Link>

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
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
