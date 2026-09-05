import type { Metadata } from "next";
import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";
import {
  LocalizedMetadata,
  LocalizedText,
} from "@/components/LanguageProvider";
import ProjectCard from "@/components/ProjectCard";
import RecentNoteCard from "@/components/RecentNoteCard";
import HeroMark from "@/components/HeroMark";
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

type SectionHeadingProps = {
  id: string;
  number: string;
  eyebrow: LocalizedTextValue;
  title: LocalizedTextValue;
  description?: LocalizedTextValue;
};

function SectionHeading({
  id,
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span className="section-number" aria-hidden="true">
          {number} /
        </span>
        <LocalizedText value={eyebrow} />
      </p>
      <h2 id={id} className="section-title">
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
  const [firstName, ...remainingName] = profile.names.public.split(" ");

  return (
    <main className="home-page flex-1">
      <LocalizedMetadata page="home" />

      <section
        className="hero site-container"
        aria-labelledby="intro-heading"
      >
        <div className="hero-topline eyebrow hero-enter">
          <span>
            <LocalizedText value={translationPair("home", "fieldNotes")} />
          </span>
          <span aria-hidden="true">LY / 01</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-enter">
              <LocalizedText value={translationPair("home", "greeting")} />
            </p>

            <h1 id="intro-heading" className="hero-name hero-enter">
              <span>{firstName}</span>{" "}
              <span className="hero-name-serif">
                {remainingName.join(" ")}
                <span className="hero-period" aria-hidden="true">.</span>
              </span>
            </h1>

            <div className="hero-identity hero-enter">
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

            <p className="hero-summary hero-enter">
              <LocalizedText value={profile.heroSummary} />
            </p>

            <div className="hero-actions hero-enter">
              <Link href="/projects" className="primary-link">
                <LocalizedText value={translationPair("common", "viewAllProjects")} />
                <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/about" className="text-link">
                <LocalizedText value={translationPair("home", "moreAboutMe")} />
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="hero-art hero-enter">
            <div className="hero-art-top eyebrow" aria-hidden="true">
              <span>LY</span><span>↗</span>
            </div>
            <HeroMark />
            <p className="hero-art-caption">
              <LocalizedText value={translationPair("home", "inProgress")} />
            </p>
            <p className="hero-formal-name">
              {profile.names.formal} <span aria-hidden="true">/</span> {profile.names.chinese}
            </p>
          </div>
        </div>
        <div className="hero-bottom">
          <p id="primary-interests-label" className="sr-only">
            <LocalizedText
              value={translationPair("home", "primaryInterestsAriaLabel")}
            />
          </p>
          <ul
            className="hero-interests"
            aria-labelledby="primary-interests-label"
          >
            {profile.technicalInterests.primary.map((interest) => (
              <li key={interest.en}>
                <LocalizedText value={interest} />
              </li>
            ))}
          </ul>
          <a href="#about-preview-heading" className="text-link explore-link">
            <LocalizedText value={translationPair("home", "explore")} />
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-contacts">
          <ContactLinks links={profile.contact.homepage} />
        </div>
      </section>

      <div className="site-container home-sections">
        <section
          className="editorial-section about-preview"
          data-reveal
          aria-labelledby="about-preview-heading"
        >
          <SectionHeading
            id="about-preview-heading"
            number="01"
            eyebrow={translationPair("home", "aboutEyebrow")}
            title={translationPair("home", "aboutTitle")}
          />
          <div className="about-preview-body">
            <div className="space-y-4 leading-8 text-slate-400">
              {profile.bio.slice(0, 2).map((paragraph) => (
                <p key={paragraph.en}>
                  <LocalizedText value={paragraph} />
                </p>
              ))}
            </div>
            <Link href="/about" className="text-link mt-6">
              <LocalizedText value={translationPair("home", "moreAboutMe")} />{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section
          className="editorial-section"
          data-reveal
          aria-labelledby="research-preview-heading"
        >
          <SectionHeading
            id="research-preview-heading"
            number="02"
            eyebrow={translationPair("home", "researchEyebrow")}
            title={translationPair("home", "researchTitle")}
            description={translationPair("home", "researchDescription")}
          />
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {profile.researchInterests.map((interest) => (
              <article
                key={interest.title.en}
                className="surface-card research-card p-6 sm:p-8"
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
          className="editorial-section"
          data-reveal
          aria-labelledby="projects-preview-heading"
        >
          <SectionHeading
            id="projects-preview-heading"
            number="03"
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
          <Link href="/projects" className="text-link mt-7">
            <LocalizedText
              value={translationPair("common", "viewAllProjects")}
            />{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section
          className="editorial-section"
          data-reveal
          aria-labelledby="learning-preview-heading"
        >
          <SectionHeading
            id="learning-preview-heading"
            number="04"
            eyebrow={translationPair("home", "learningEyebrow")}
            title={translationPair("home", "learningTitle")}
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {profile.currentlyLearning.map((area) => (
              <article
                key={area.title.en}
                className="surface-card learning-card p-6"
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
                  className="surface-card milestone-card p-6"
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
          className="editorial-section"
          data-reveal
          aria-labelledby="notes-preview-heading"
        >
          <SectionHeading
            id="notes-preview-heading"
            number="05"
            eyebrow={translationPair("home", "notesEyebrow")}
            title={translationPair("home", "notesTitle")}
            description={translationPair("home", "notesDescription")}
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {latestPosts.map((post) => (
              <RecentNoteCard key={post.slug} post={post} />
            ))}
          </div>
          <Link href="/blog" className="text-link mt-7">
            <LocalizedText value={translationPair("home", "viewAllNotes")} />{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section
          className="editorial-section contact-section"
          data-reveal
          aria-labelledby="connect-heading"
        >
          <SectionHeading
            id="connect-heading"
            number="06"
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
