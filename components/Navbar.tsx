import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav
        className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="w-fit text-base font-semibold tracking-tight text-white transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          Leo Yangqi
        </Link>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400 sm:gap-x-7">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
