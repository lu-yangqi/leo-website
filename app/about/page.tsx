import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Leo Yangqi",
  description: "About Leo Yangqi, an AI undergraduate student at Zhejiang University.",
};

const aboutSections = [
  {
    title: "Education",
    description: "AI Undergraduate Student at Zhejiang University.",
  },
  {
    title: "Skills",
    description: "Artificial intelligence, computer vision, LLMs, and cyber security.",
  },
  {
    title: "Research Experience",
    description: "Research experience and current work will be added here.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 lg:px-16">
      <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
        Profile
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        About Leo Yangqi
      </h1>
      <div className="mt-5 space-y-1 text-lg text-slate-300">
        <p>AI Undergraduate Student</p>
        <p>Zhejiang University</p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {aboutSections.map((section) => (
          <section
            key={section.title}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h2 className="font-medium text-white">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {section.description}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
