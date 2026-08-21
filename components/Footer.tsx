export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} Leo Yangqi</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
