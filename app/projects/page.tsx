import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Leo Yangqi",
  description: "AI, computer vision, LLM, and cyber security projects by Leo Yangqi.",
};

const projectAreas = [
  "AI Projects",
  "Computer Vision",
  "Large Language Models",
  "Cyber Security",
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 lg:px-16">
      <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
        Work
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Projects
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        A collection of technical projects is coming soon.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="Project areas">
        {projectAreas.map((area) => (
          <li
            key={area}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-slate-200"
          >
            {area}
          </li>
        ))}
      </ul>
    </main>
  );
}
