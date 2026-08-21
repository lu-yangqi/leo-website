export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Leo Personal Website",
    description:
      "A personal technical portfolio built with Next.js, TypeScript, and Tailwind CSS. Developed through an AI-assisted coding workflow using Codex and Git version control.",
    category: "Web Development",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Codex",
    ],
    github: "https://github.com/lu-yangqi/leo-website",
  },
];
