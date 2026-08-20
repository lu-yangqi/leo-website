const interests = [
  "Artificial Intelligence",
  "Computer Vision",
  "Large Language Models",
  "Cyber Security",
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl" aria-labelledby="intro-heading">
        <p className="mb-6 text-sm font-medium tracking-[0.2em] text-sky-300 uppercase">
          Hello, I&apos;m
        </p>

        <h1
          id="intro-heading"
          className="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
        >
          Leo Yangqi
        </h1>

        <div className="mt-7 space-y-1 text-lg text-slate-300 sm:text-xl">
          <p>AI Undergraduate Student</p>
          <p>Zhejiang University</p>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-sm font-medium tracking-widest text-slate-400 uppercase">
            Interested in
          </h2>

          <ul className="mt-5 flex flex-wrap gap-3" aria-label="Research interests">
            {interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
