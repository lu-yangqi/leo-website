import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
      <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
        {project.category}
      </p>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
        {project.title}
      </h2>

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
