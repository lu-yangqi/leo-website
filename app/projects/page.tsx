import type { Metadata } from "next";
import {
  LocalizedMetadata,
  LocalizedText,
} from "@/components/LanguageProvider";
import ProjectCard from "@/components/ProjectCard";
import { translationPair, translations } from "@/data/i18n";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description: translations.en.metadata.projects.description,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="site-container inner-page flex-1">
      <LocalizedMetadata page="projects" />

      <header className="page-intro hero-enter">
        <p className="eyebrow">
          <LocalizedText value={translationPair("projects", "eyebrow")} />
        </p>
        <h1
          id="projects-heading"
          className="page-title"
        >
          <LocalizedText value={translationPair("projects", "title")} />
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          <LocalizedText value={translationPair("projects", "description")} />
        </p>
      </header>

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
