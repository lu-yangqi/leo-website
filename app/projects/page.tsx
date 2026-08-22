import type { Metadata } from "next";
import {
  LocalizedMetadata,
  LocalizedText,
} from "@/components/LanguageProvider";
import ProjectCard from "@/components/ProjectCard";
import { translationPair, translations } from "@/data/i18n";
import { projects } from "@/data/projects";

export const metadata: Metadata = translations.en.metadata.projects;

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <LocalizedMetadata page="projects" />

      <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
        <LocalizedText value={translationPair("projects", "eyebrow")} />
      </p>
      <h1
        id="projects-heading"
        className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
      >
        <LocalizedText value={translationPair("projects", "title")} />
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        <LocalizedText value={translationPair("projects", "description")} />
      </p>

      <section className="mt-12" aria-labelledby="projects-heading">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
