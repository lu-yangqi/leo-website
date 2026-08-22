"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { localize } from "@/data/i18n";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
  compact?: boolean;
  showResponsibilities?: boolean;
};

export default function ProjectCard({
  project,
  headingLevel = "h2",
  compact = false,
  showResponsibilities = false,
}: ProjectCardProps) {
  const Heading = headingLevel;
  const { locale, translations } = useLanguage();
  const title = localize(project.title, locale);

  return (
    <article className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <p className="font-medium tracking-[0.16em] text-cyan-300 uppercase">
          {localize(project.category, locale)}
        </p>
        <span className="text-slate-600" aria-hidden="true">
          /
        </span>
        <p className="text-slate-400">{project.period}</p>
      </div>

      <Heading className="mt-4 text-2xl font-semibold tracking-tight text-white">
        {title}
      </Heading>

      <p className="mt-2 text-sm text-slate-400">
        {localize(project.type, locale)}
      </p>

      <p className="mt-4 leading-7 text-slate-400">
        {localize(project.description, locale)}
      </p>

      <ul
        className="mt-6 flex flex-wrap gap-2"
        aria-label={translations.projects.technologiesFor(title)}
      >
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
          >
            {technology}
          </li>
        ))}
      </ul>

      {project.result ? (
        <p className="mt-5 text-sm leading-6 text-slate-300">
          <span className="font-medium text-slate-100">
            {translations.projects.result}
          </span>{" "}
          {localize(project.result, locale)}
        </p>
      ) : null}

      {!compact ? (
        <div className="mt-5 space-y-2 text-sm leading-6 text-slate-400">
          <p>{localize(project.transparency, locale)}</p>
          {project.availability ? (
            <p>{localize(project.availability, locale)}</p>
          ) : null}
        </div>
      ) : null}

      {showResponsibilities ? (
        <div className="mt-5">
          <p className="text-xs font-medium tracking-wide text-slate-300 uppercase">
            {translations.projects.responsibilities}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
            {project.responsibilities.map((responsibility) => (
              <li key={responsibility.en} className="flex gap-2">
                <span className="text-cyan-400" aria-hidden="true">
                  ·
                </span>
                <span>{localize(responsibility, locale)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.github || project.demo ? (
        <div className="mt-auto flex flex-wrap gap-5 pt-8 text-sm font-medium">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              GitHub <span aria-hidden="true">→</span>
            </a>
          ) : null}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              {translations.projects.liveDemo}{" "}
              <span aria-hidden="true">→</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
