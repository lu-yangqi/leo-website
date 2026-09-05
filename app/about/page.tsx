import type { Metadata } from "next";
import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";
import {
  LocalizedMetadata,
  LocalizedText,
} from "@/components/LanguageProvider";
import ProjectCard from "@/components/ProjectCard";
import { translationPair, translations } from "@/data/i18n";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: translations.en.metadata.about.description,
  path: "/about",
});

const tagClassName =
  "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300";

export default function AboutPage() {
  return (
    <main className="site-container inner-page about-page flex-1">
      <LocalizedMetadata page="about" />

      <header className="page-intro hero-enter max-w-3xl">
        <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
          <LocalizedText value={translationPair("about", "eyebrow")} />
        </p>
        <h1 className="page-title">
          {profile.names.public}
        </h1>
        <p className="mt-3 text-lg text-slate-400">
          {profile.names.formal} <span aria-hidden="true">·</span>{" "}
          {profile.names.chinese}
        </p>
        <div className="mt-6 text-lg leading-8 text-slate-300">
          <p className="mb-1 text-sm font-medium tracking-wide text-cyan-300 uppercase">
            <LocalizedText value={profile.identity} />
          </p>
          <p>
            <LocalizedText value={profile.headline} />
          </p>
          <p className="text-slate-400">
            <LocalizedText value={profile.university} />
          </p>
        </div>
        <div className="mt-8 space-y-4 leading-8 text-slate-400">
          {profile.bio.map((paragraph) => (
            <p key={paragraph.en}>
              <LocalizedText value={paragraph} />
            </p>
          ))}
        </div>
      </header>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="education-heading"
        data-reveal
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          <LocalizedText
            value={translationPair("about", "educationEyebrow")}
          />
        </p>
        <h2
          id="education-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          <LocalizedText value={translationPair("about", "educationTitle")} />
        </h2>
        <article className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
          <h3 className="text-xl font-semibold text-white">
            <LocalizedText value={profile.education.institution} />
          </h3>
          <p className="mt-2 text-slate-300">
            <LocalizedText value={profile.education.program} />
          </p>
          <p className="mt-1 text-sm text-slate-400">
            <LocalizedText value={profile.education.degree} />{" "}
            <span aria-hidden="true">·</span> {profile.education.period}
          </p>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            <LocalizedText value={profile.education.school} />
          </p>
        </article>
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="research-heading"
        data-reveal
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          <LocalizedText
            value={translationPair("about", "researchEyebrow")}
          />
        </p>
        <h2
          id="research-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          <LocalizedText value={translationPair("about", "researchTitle")} />
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
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
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="technical-heading"
        data-reveal
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          <LocalizedText
            value={translationPair("about", "technicalEyebrow")}
          />
        </p>
        <h2
          id="technical-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          <LocalizedText value={translationPair("about", "technicalTitle")} />
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h3
              id="primary-interests-heading"
              className="text-sm font-medium text-slate-200"
            >
              <LocalizedText value={translationPair("about", "primaryAreas")} />
            </h3>
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-labelledby="primary-interests-heading"
            >
              {profile.technicalInterests.primary.map((interest) => (
                <li key={interest.en} className={tagClassName}>
                  <LocalizedText value={interest} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              id="broader-interests-heading"
              className="text-sm font-medium text-slate-200"
            >
              <LocalizedText
                value={translationPair("about", "broaderInterests")}
              />
            </h3>
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-labelledby="broader-interests-heading"
            >
              {profile.technicalInterests.broader.map((interest) => (
                <li key={interest.en} className={tagClassName}>
                  <LocalizedText value={interest} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <article className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-medium text-white">
            <LocalizedText
              value={translationPair("about", "cybersecurityTitle")}
            />
          </h3>
          <p className="mt-2 leading-7 text-slate-400">
            <LocalizedText
              value={profile.technicalInterests.cybersecurity.summary}
            />{" "}
            <LocalizedText
              value={translationPair("about", "introductoryExposureIncludes")}
            />
            {" "}
            {profile.technicalInterests.cybersecurity.exposure.join(", ")}
            <LocalizedText value={translationPair("common", "sentenceEnd")} />
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                <LocalizedText
                  value={translationPair("about", "topicsEncountered")}
                />
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {profile.technicalInterests.cybersecurity.topics.join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                <LocalizedText
                  value={translationPair("about", "practiceTools")}
                />
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {profile.technicalInterests.cybersecurity.tools.join(" · ")}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="skills-heading"
        data-reveal
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          <LocalizedText value={translationPair("about", "skillsEyebrow")} />
        </p>
        <h2
          id="skills-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          <LocalizedText value={translationPair("about", "skillsTitle")} />
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-medium tracking-wide text-cyan-300 uppercase">
              <LocalizedText
                value={translationPair("about", "comfortableWith")}
              />
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {profile.skills.comfortableWith.items.join(" · ")}
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              <LocalizedText
                value={profile.skills.comfortableWith.description}
              />
            </p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-medium tracking-wide text-cyan-300 uppercase">
              <LocalizedText value={translationPair("about", "workingWith")} />
            </p>
            <div className="mt-4 space-y-5">
              {profile.skills.workingWith.map((group) => (
                <div key={group.group.en}>
                  <h3 className="text-sm font-medium text-slate-200">
                    <LocalizedText value={group.group} />
                  </h3>
                  <p className="mt-1 leading-7 text-slate-400">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="learning-heading"
        data-reveal
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          <LocalizedText value={translationPair("about", "learningEyebrow")} />
        </p>
        <h2
          id="learning-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          <LocalizedText value={translationPair("about", "learningTitle")} />
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
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
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="background-heading"
        data-reveal
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          <LocalizedText
            value={translationPair("about", "backgroundEyebrow")}
          />
        </p>
        <h2
          id="background-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          <LocalizedText value={translationPair("about", "backgroundTitle")} />
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {profile.learningBackground.map((item) => {
            const isPlanned = item.status === "planned";

            return (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
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
                  <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
                ) : null}
                <p className="mt-4 leading-7 text-slate-400">
                  <LocalizedText value={item.description} />
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="work-heading"
        data-reveal
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          <LocalizedText value={translationPair("about", "workEyebrow")} />
        </p>
        <h2
          id="work-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          <LocalizedText value={translationPair("about", "workTitle")} />
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((work) => (
            <ProjectCard
              key={work.id}
              project={work}
              headingLevel="h3"
              showResponsibilities
            />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-7 inline-flex text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          <LocalizedText
            value={translationPair("common", "viewAllProjects")}
          />{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="contact-heading"
        data-reveal
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          <LocalizedText value={translationPair("about", "contactEyebrow")} />
        </p>
        <h2
          id="contact-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          <LocalizedText value={translationPair("about", "contactTitle")} />
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          <LocalizedText
            value={translationPair("about", "contactDescription")}
          />
        </p>
        <div className="mt-6">
          <ContactLinks links={profile.contact.primary} />
        </div>
      </section>
    </main>
  );
}
