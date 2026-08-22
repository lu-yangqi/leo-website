import type { Metadata } from "next";
import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Leo Yangqi | AI Student at Zhejiang University",
  description:
    "Personal website of Leo Yangqi, an Artificial Intelligence undergraduate at Zhejiang University exploring machine learning, AI systems, computer systems, and software engineering.",
};

const sectionLinkClassName =
  "inline-flex text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 leading-7 text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function Home() {
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <main className="flex-1">
      <section
        className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
        aria-labelledby="intro-heading"
      >
        <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
          Hello, I&apos;m
        </p>

        <h1
          id="intro-heading"
          className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
        >
          {profile.names.public}
        </h1>

        <div className="mt-6 flex flex-col gap-1 text-lg text-slate-300 sm:flex-row sm:items-center sm:gap-3 sm:text-xl">
          <p>{profile.heroHeadline}</p>
          <span className="hidden text-slate-600 sm:inline" aria-hidden="true">
            /
          </span>
          <p>{profile.university}</p>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {profile.heroSummary}
        </p>

        <ul
          className="mt-8 flex flex-wrap gap-3"
          aria-label="Primary technical interests"
        >
          {profile.technicalInterests.primary.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
            >
              {interest}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ContactLinks links={profile.contact.homepage} />
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16">
        <section
          className="border-t border-white/10 pt-12"
          aria-labelledby="about-preview-heading"
        >
          <SectionHeading
            id="about-preview-heading"
            eyebrow="Profile"
            title="About"
          />
          <div className="mt-6 max-w-3xl space-y-4 leading-8 text-slate-400">
            {profile.bio.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link href="/about" className={`${sectionLinkClassName} mt-6`}>
            More about me <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section
          className="mt-16 border-t border-white/10 pt-12"
          aria-labelledby="research-preview-heading"
        >
          <SectionHeading
            id="research-preview-heading"
            eyebrow="Possible future directions"
            title="Research Interests"
            description="Areas I am exploring while continuing to build the necessary machine-learning and systems foundations."
          />
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {profile.researchInterests.map((interest) => (
              <article
                key={interest.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {interest.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {interest.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-16 border-t border-white/10 pt-12"
          aria-labelledby="projects-preview-heading"
        >
          <SectionHeading
            id="projects-preview-heading"
            eyebrow="Building"
            title="Selected Projects"
            description="A small selection of personal and course work from the central project showcase."
          />
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                headingLevel="h3"
                compact
              />
            ))}
          </div>
          <Link href="/projects" className={`${sectionLinkClassName} mt-7`}>
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section
          className="mt-16 border-t border-white/10 pt-12"
          aria-labelledby="learning-preview-heading"
        >
          <SectionHeading
            id="learning-preview-heading"
            eyebrow="Growing now"
            title="Currently Learning"
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {profile.currentlyLearning.map((area) => (
              <article
                key={area.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {area.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-cyan-400" aria-hidden="true">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {profile.learningBackground.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="text-xs font-medium tracking-[0.16em] text-cyan-300 uppercase">
                  {item.status === "Planned" ? "Next Up" : "Learning Milestone"}
                </p>
                <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-2.5 py-1 text-xs font-medium text-cyan-200">
                    {item.status}
                  </span>
                </div>
                {"subtitle" in item ? (
                  <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
                ) : null}
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-16 border-t border-white/10 pt-12"
          aria-labelledby="notes-preview-heading"
        >
          <SectionHeading
            id="notes-preview-heading"
            eyebrow="Writing"
            title="Latest Notes"
            description="Recent technical and learning notes from the Markdown blog."
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                  <p className="font-medium tracking-[0.12em] text-cyan-300 uppercase">
                    {post.category}
                  </p>
                  <span className="text-slate-600" aria-hidden="true">
                    /
                  </span>
                  <time dateTime={post.date} className="text-slate-400">
                    {formatDate(post.date)}
                  </time>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {post.description}
                </p>
                <ul
                  className="flex flex-wrap gap-2 pt-5"
                  aria-label={`Tags for ${post.title}`}
                >
                  {post.tags.slice(0, 3).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className={sectionLinkClassName}
                  >
                    Read note <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Link href="/blog" className={`${sectionLinkClassName} mt-7`}>
            View all notes <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section
          className="mt-16 border-t border-white/10 pt-12"
          aria-labelledby="connect-heading"
        >
          <SectionHeading
            id="connect-heading"
            eyebrow="Contact"
            title="Let&apos;s connect"
            description="Find my public work on GitHub or start an email in your browser."
          />
          <div className="mt-6">
            <ContactLinks links={profile.contact.primary} />
          </div>
        </section>
      </div>
    </main>
  );
}
