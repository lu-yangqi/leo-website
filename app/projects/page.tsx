import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Leo Yangqi",
  description: "AI, computer vision, LLM, and cyber security projects by Leo Yangqi.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
        Work
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Projects
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Selected projects in artificial intelligence, computer vision, systems,
        and security.
      </p>

      <section className="mt-12 border-t border-white/10 pt-8">
        <h2 className="text-lg font-medium text-slate-200">
          Project content coming soon.
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-500">
          Future versions will add project details, technology tags, and links
          to source code or live demos.
        </p>
      </section>
    </main>
  );
}
