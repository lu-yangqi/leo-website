import type { Metadata } from "next";
import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "About | Leo Yangqi",
  description:
    "About Leo Yangqi, an undergraduate student in Artificial Intelligence at Zhejiang University exploring machine learning, AI systems, computer systems, and software engineering.",
};

const tagClassName =
  "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <header className="max-w-3xl">
        <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
          About
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
          {profile.names.public}
        </h1>
        <p className="mt-3 text-lg text-slate-400">
          {profile.names.formal} <span aria-hidden="true">·</span>{" "}
          {profile.names.chinese}
        </p>
        <div className="mt-6 text-lg leading-8 text-slate-300">
          <p className="mb-1 text-sm font-medium tracking-wide text-cyan-300 uppercase">
            {profile.identity}
          </p>
          <p>{profile.headline}</p>
          <p className="text-slate-400">{profile.university}</p>
        </div>
        <div className="mt-8 space-y-4 leading-8 text-slate-400">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="education-heading"
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          Foundation
        </p>
        <h2
          id="education-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          Education
        </h2>
        <article className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
          <h3 className="text-xl font-semibold text-white">
            {profile.education.institution}
          </h3>
          <p className="mt-2 text-slate-300">{profile.education.program}</p>
          <p className="mt-1 text-sm text-slate-400">
            {profile.education.degree} <span aria-hidden="true">·</span>{" "}
            {profile.education.period}
          </p>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            {profile.education.school} <span aria-hidden="true">·</span>{" "}
            {profile.education.schoolChinese}
          </p>
        </article>
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="research-heading"
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          Possible future directions
        </p>
        <h2
          id="research-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          Research Interests
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
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
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="technical-heading"
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          Broader fields I enjoy learning
        </p>
        <h2
          id="technical-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          Technical Interests
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-slate-200">Primary areas</h3>
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Primary technical interests"
            >
              {profile.technicalInterests.primary.map((interest) => (
                <li key={interest} className={tagClassName}>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-200">
              Broader interests
            </h3>
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Broader technical interests"
            >
              {profile.technicalInterests.broader.map((interest) => (
                <li key={interest} className={tagClassName}>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <article className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-medium text-white">Cybersecurity side interest</h3>
          <p className="mt-2 leading-7 text-slate-400">
            {profile.technicalInterests.cybersecurity.summary} Introductory
            exposure includes{" "}
            {profile.technicalInterests.cybersecurity.exposure.join(", ")}.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                Topics encountered
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {profile.technicalInterests.cybersecurity.topics.join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                Introductory practice tools
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
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          Technologies used
        </p>
        <h2
          id="skills-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          Skills
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-medium tracking-wide text-cyan-300 uppercase">
              Comfortable With
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {profile.skills.comfortableWith.items.join(" · ")}
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              {profile.skills.comfortableWith.description}
            </p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-medium tracking-wide text-cyan-300 uppercase">
              Working With
            </p>
            <div className="mt-4 space-y-5">
              {profile.skills.workingWith.map((group) => (
                <div key={group.group}>
                  <h3 className="text-sm font-medium text-slate-200">
                    {group.group}
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
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          Growing now
        </p>
        <h2
          id="learning-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          Currently Learning
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {profile.currentlyLearning.map((area) => (
            <article
              key={area.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{area.title}</h3>
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
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="background-heading"
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          Structured study
        </p>
        <h2
          id="background-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          Learning Background
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {profile.learningBackground.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-2.5 py-1 text-xs font-medium text-cyan-200">
                  {item.status}
                </span>
              </div>
              {"subtitle" in item ? (
                <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
              ) : null}
              <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="work-heading"
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          Building
        </p>
        <h2
          id="work-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          Selected Work
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((work) => (
            <article
              key={work.title}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-xs font-medium tracking-wide text-cyan-300 uppercase">
                {work.type}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {work.title}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{work.period}</p>
              <p className="mt-4 leading-7 text-slate-400">{work.description}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {work.transparency}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                {work.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-2">
                    <span className="text-cyan-400" aria-hidden="true">
                      ·
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              {work.result ? (
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  <span className="font-medium text-slate-100">Result:</span>{" "}
                  {work.result}
                </p>
              ) : null}
              {work.availability ? (
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {work.availability}
                </p>
              ) : null}
            </article>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-7 inline-flex text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          View all projects <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section
        className="mt-16 border-t border-white/10 pt-10"
        aria-labelledby="contact-heading"
      >
        <p className="text-xs font-medium tracking-[0.18em] text-cyan-300 uppercase">
          Connect
        </p>
        <h2
          id="contact-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white"
        >
          Contact
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Find my public work on GitHub or start an email in your browser.
        </p>
        <div className="mt-6">
          <ContactLinks links={profile.contact.primary} />
        </div>
      </section>
    </main>
  );
}
