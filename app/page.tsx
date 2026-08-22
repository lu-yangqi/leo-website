import ContactLinks from "@/components/ContactLinks";
import { profile } from "@/data/profile";

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "AI Systems",
  "Computer Systems",
  "Software Engineering",
];

export default function Home() {
  return (
    <main className="flex flex-1 items-center px-6 py-16 sm:px-10 lg:px-16">
      <section
        className="mx-auto w-full max-w-5xl"
        aria-labelledby="intro-heading"
      >
        <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
          Hello, I&apos;m
        </p>

        <h1
          id="intro-heading"
          className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl"
        >
          Leo Yangqi
        </h1>

        <div className="mt-6 flex flex-col gap-1 text-lg text-slate-300 sm:flex-row sm:items-center sm:gap-3 sm:text-xl">
          <p>AI Undergraduate Student</p>
          <span className="hidden text-slate-600 sm:inline" aria-hidden="true">
            / 
          </span>
          <p>Zhejiang University</p>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          I&apos;m building foundations in machine learning, computer systems,
          and software engineering while exploring efficient machine learning
          and AI systems as possible future directions.
        </p>

        <ul
          className="mt-8 flex flex-wrap gap-3"
          aria-label="Technical interests"
        >
          {interests.map((interest) => (
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
    </main>
  );
}
