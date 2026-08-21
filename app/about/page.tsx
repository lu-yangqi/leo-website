import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Leo Yangqi",
  description: "About Leo Yangqi, an AI undergraduate student at Zhejiang University.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <p className="text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
        Profile
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        About
      </h1>
      <div className="mt-5 space-y-1 text-lg leading-8 text-slate-300">
        <p className="font-medium text-white">Leo Yangqi</p>
        <p>AI Undergraduate Student</p>
        <p>Zhejiang University</p>
      </div>

      <section className="mt-12 border-t border-white/10 pt-8">
        <h2 className="text-lg font-medium text-slate-200">More about me</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-500">
          More information about education, skills, and research experience
          will be added later.
        </p>
      </section>
    </main>
  );
}
