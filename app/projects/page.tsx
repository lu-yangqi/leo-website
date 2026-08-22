import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Leo Yangqi",
  description: "Personal and course projects by Leo Yangqi.",
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
        Personal and course projects built while learning software engineering,
        computer systems, and artificial intelligence.
      </p>

      <section className="mt-12" aria-label="Project showcase">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
