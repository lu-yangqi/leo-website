import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
  compact?: boolean;
};

export default function ProjectCard({
  project,
  headingLevel = "h2",
  compact = false,
}: ProjectCardProps) {
  const Heading = headingLevel;

  return (
    <article className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <p className="font-medium tracking-[0.16em] text-cyan-300 uppercase">
          {project.category}
        </p>
        <span className="text-slate-600" aria-hidden="true">
          /
        </span>
        <p className="text-slate-400">{project.period}</p>
      </div>

      <Heading className="mt-4 text-2xl font-semibold tracking-tight text-white">
        {project.title}
      </Heading>

      <p className="mt-2 text-sm text-slate-400">{project.type}</p>

      <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

      <ul
        className="mt-6 flex flex-wrap gap-2"
        aria-label={`${project.title} technologies`}
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
          <span className="font-medium text-slate-100">Result:</span>{" "}
          {project.result}
        </p>
      ) : null}

      {!compact ? (
        <div className="mt-5 space-y-2 text-sm leading-6 text-slate-400">
          <p>{project.transparency}</p>
          {project.availability ? <p>{project.availability}</p> : null}
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
              Live demo <span aria-hidden="true">→</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
