import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Leo Yangqi",
  description: "Technical notes and research writing by Leo Yangqi.",
};

const noteTopics = ["AI Notes", "CS231n Notes", "Research Notes"];

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 lg:px-16">
      <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
        Writing
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Blog
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Learning notes and research writing are coming soon.
      </p>

      <ul className="mt-10 space-y-3" aria-label="Planned blog topics">
        {noteTopics.map((topic) => (
          <li
            key={topic}
            className="border-b border-white/10 py-4 text-slate-200"
          >
            {topic}
          </li>
        ))}
      </ul>
    </main>
  );
}
