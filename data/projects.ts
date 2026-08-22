export type Project = {
  id: string;
  title: string;
  type: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
  featured: boolean;
  result?: string;
  transparency: string;
  availability?: string;
  responsibilities: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "leo-personal-website",
    title: "Leo Personal Website",
    type: "Independent Personal Project",
    category: "Web Development",
    period: "2026.08 – Present",
    description:
      "A long-term personal technical website built while learning modern web development, Git / GitHub workflows, and AI-assisted software development.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Codex",
    ],
    featured: true,
    transparency:
      "Codex generates a large portion of the concrete implementation code.",
    responsibilities: [
      "Website structure and roadmap planning",
      "Requirement design and task specifications",
      "Local testing and result review",
      "Revision requests and Git / GitHub management",
      "UI direction and Markdown content maintenance",
    ],
    github: "https://github.com/lu-yangqi/leo-website",
  },
  {
    id: "single-cycle-risc-v-cpu",
    title: "Single-Cycle RISC-V CPU",
    type: "Computer Systems Course Project",
    category: "Computer Systems",
    period: "2026",
    description:
      "An RV64 single-cycle CPU datapath implemented in SystemVerilog for a computer systems course project.",
    technologies: [
      "SystemVerilog",
      "RISC-V",
      "RV64",
      "Computer Architecture",
      "Digital Logic",
    ],
    featured: true,
    result: "Successfully ran the required course test programs.",
    transparency: "Individual course project with Codex-assisted implementation.",
    availability:
      "The source is preserved locally and is not publicly released; no hardware-board deployment is claimed.",
    responsibilities: [
      "RV64 integer arithmetic and word operations",
      "Memory access",
      "Conditional branches and jumps",
      "U-type instructions",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
