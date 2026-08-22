import type { Metadata } from "next";
import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";
import {
  LocalizedMetadata,
  LocalizedText,
} from "@/components/LanguageProvider";
import ProjectCard from "@/components/ProjectCard";
import RecentNoteCard from "@/components/RecentNoteCard";
import {
  translationPair,
  translations,
  type LocalizedText as LocalizedTextValue,
} from "@/data/i18n";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { getBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  description: translations.en.metadata.home.description,
  path: "/",
});

const sectionLinkClassName =
  "inline-flex text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

type SectionHeadingProps = {
  id: string;
  eyebrow: LocalizedTextValue;
  title: LocalizedTextValue;
  description?: LocalizedTextValue;
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
        <LocalizedText value={eyebrow} />
      </p>
      <h2
        id={id}
        className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        <LocalizedText value={title} />
      </h2>
      {description ? (
        <p className="mt-3 leading-7 text-slate-400">
          <LocalizedText value={description} />
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <main className="flex-1">
      <LocalizedMetadata page="home" />

      <section
        className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
        aria-labelledby="intro-heading"
      >
        <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
          <LocalizedText value={translationPair("home", "greeting")} />
        </p>

        <h1
          id="intro-heading"
          className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
        >
          {profile.names.public}
        </h1>

        <div className="mt-6 flex flex-col gap-1 text-lg text-slate-300 sm:flex-row sm:items-center sm:gap-3 sm:text-xl">
          <p>
            <LocalizedText value={profile.heroHeadline} />
          </p>
          <span className="hidden text-slate-600 sm:inline" aria-hidden="true">
            /
          </span>
          <p>
            <LocalizedText value={profile.university} />
          </p>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          <LocalizedText value={profile.heroSummary} />
        </p>

        <p id="primary-interests-label" className="sr-only">
          <LocalizedText
            value={translationPair("home", "primaryInterestsAriaLabel")}
          />
        </p>
        <ul
          className="mt-8 flex flex-wrap gap-3"
          aria-labelledby="primary-interests-label"
        >
          {profile.technicalInterests.primary.map((interest) => (
            <li
              key={interest.en}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
            >
              <LocalizedText value={interest} />
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
            eyebrow={translationPair("home", "aboutEyebrow")}
            title={translationPair("home", "aboutTitle")}
          />
          <div className="mt-6 max-w-3xl space-y-4 leading-8 text-slate-400">
            {profile.bio.slice(0, 2).map((paragraph) => (
              <p key={paragraph.en}>
                <LocalizedText value={paragraph} />
              </p>
            ))}
          </div>
          <Link href="/about" className={`${sectionLinkClassName} mt-6`}>
            <LocalizedText value={translationPair("home", "moreAboutMe")} />{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section
          className="mt-16 border-t border-white/10 pt-12"
          aria-labelledby="research-preview-heading"
        >
          <SectionHeading
            id="research-preview-heading"
            eyebrow={translationPair("home", "researchEyebrow")}
            title={translationPair("home", "researchTitle")}
            description={translationPair("home", "researchDescription")}
          />
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {profile.researchInterests.map((interest) => (
              <article
                key={interest.title.en}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  <LocalizedText value={interest.title} />
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  <LocalizedText value={interest.description} />
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
            eyebrow={translationPair("home", "projectsEyebrow")}
            title={translationPair("home", "projectsTitle")}
            description={translationPair("home", "projectsDescription")}
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
            <LocalizedText
              value={translationPair("common", "viewAllProjects")}
            />{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section
          className="mt-16 border-t border-white/10 pt-12"
          aria-labelledby="learning-preview-heading"
        >
          <SectionHeading
            id="learning-preview-heading"
            eyebrow={translationPair("home", "learningEyebrow")}
            title={translationPair("home", "learningTitle")}
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {profile.currentlyLearning.map((area) => (
              <article
                key={area.title.en}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  <LocalizedText value={area.title} />
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  <LocalizedText value={area.description} />
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                  {area.items.map((item) => (
                    <li
                      key={typeof item === "string" ? item : item.en}
                      className="flex gap-2"
                    >
                      <span className="text-cyan-400" aria-hidden="true">
                        ·
                      </span>
                      <span>
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <LocalizedText value={item} />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {profile.learningBackground.map((item) => {
              const isPlanned = item.status === "planned";

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <p className="text-xs font-medium tracking-[0.16em] text-cyan-300 uppercase">
                    <LocalizedText
                      value={translationPair(
                        "home",
                        isPlanned ? "nextUp" : "learningMilestone",
                      )}
                    />
                  </p>
                  <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-2.5 py-1 text-xs font-medium text-cyan-200">
                      <LocalizedText
                        value={translationPair(
                          "common",
                          isPlanned ? "planned" : "completed",
                        )}
                      />
                    </span>
                  </div>
                  {"subtitle" in item ? (
                    <p className="mt-2 text-sm text-slate-400">
                      {item.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    <LocalizedText value={item.description} />
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="mt-16 border-t border-white/10 pt-12"
          aria-labelledby="notes-preview-heading"
        >
          <SectionHeading
            id="notes-preview-heading"
            eyebrow={translationPair("home", "notesEyebrow")}
            title={translationPair("home", "notesTitle")}
            description={translationPair("home", "notesDescription")}
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {latestPosts.map((post) => (
              <RecentNoteCard key={post.slug} post={post} />
            ))}
          </div>
          <Link href="/blog" className={`${sectionLinkClassName} mt-7`}>
            <LocalizedText value={translationPair("home", "viewAllNotes")} />{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section
          className="mt-16 border-t border-white/10 pt-12"
          aria-labelledby="connect-heading"
        >
          <SectionHeading
            id="connect-heading"
            eyebrow={translationPair("home", "contactEyebrow")}
            title={translationPair("home", "contactTitle")}
            description={translationPair("home", "contactDescription")}
          />
          <div className="mt-6">
            <ContactLinks links={profile.contact.primary} />
          </div>
        </section>
      </div>
    </main>
  );
}
