import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Leo Yangqi",
  description: "Technical notes and research writing by Leo Yangqi.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
        Writing
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Blog
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        Notes about AI, computer science, research, and engineering.
      </p>

      <section className="mt-12 border-t border-white/10 pt-8">
        <h2 className="text-lg font-medium text-slate-200">
          Articles coming soon.
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-500">
          This space will contain learning notes, research reflections, and
          technical writing.
        </p>
      </section>
    </main>
  );
}
