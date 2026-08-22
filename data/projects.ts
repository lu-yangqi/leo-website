import type { LocalizedText } from "@/data/i18n";

export type Project = {
  id: string;
  title: LocalizedText;
  type: LocalizedText;
  category: LocalizedText;
  period: string;
  description: LocalizedText;
  technologies: string[];
  featured: boolean;
  result?: LocalizedText;
  transparency: LocalizedText;
  availability?: LocalizedText;
  responsibilities: LocalizedText[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "leo-personal-website",
    title: {
      en: "Leo Personal Website",
      zh: "Leo 个人网站",
    },
    type: {
      en: "Independent Personal Project",
      zh: "独立个人项目",
    },
    category: {
      en: "Web Development",
      zh: "Web 开发",
    },
    period: "2026.08 – Present",
    description: {
      en: "A long-term personal technical website built while learning modern web development, Git / GitHub workflows, and AI-assisted software development.",
      zh: "一个长期维护的个人技术网站，在学习现代 Web 开发、Git / GitHub 工作流和 AI 辅助软件开发的过程中构建。",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Codex",
    ],
    featured: true,
    transparency: {
      en: "Codex generates a large portion of the concrete implementation code.",
      zh: "Codex 生成了具体实现代码中的较大部分。",
    },
    responsibilities: [
      {
        en: "Website structure and roadmap planning",
        zh: "网站结构与路线图规划",
      },
      {
        en: "Requirement design and task specifications",
        zh: "需求设计与任务说明",
      },
      {
        en: "Local testing and result review",
        zh: "本地测试与结果审查",
      },
      {
        en: "Revision requests and Git / GitHub management",
        zh: "修改要求与 Git / GitHub 管理",
      },
      {
        en: "UI direction and Markdown content maintenance",
        zh: "UI 方向与 Markdown 内容维护",
      },
    ],
    github: "https://github.com/lu-yangqi/leo-website",
  },
  {
    id: "single-cycle-risc-v-cpu",
    title: {
      en: "Single-Cycle RISC-V CPU",
      zh: "单周期 RISC-V CPU",
    },
    type: {
      en: "Computer Systems Course Project",
      zh: "计算机系统课程项目",
    },
    category: {
      en: "Computer Systems",
      zh: "计算机系统",
    },
    period: "2026",
    description: {
      en: "An RV64 single-cycle CPU datapath implemented in SystemVerilog for a computer systems course project.",
      zh: "在计算机系统课程项目中使用 SystemVerilog 实现的 RV64 单周期 CPU 数据通路。",
    },
    technologies: [
      "SystemVerilog",
      "RISC-V",
      "RV64",
      "Computer Architecture",
      "Digital Logic",
    ],
    featured: true,
    result: {
      en: "Successfully ran the required course test programs.",
      zh: "成功运行了课程要求的测试程序。",
    },
    transparency: {
      en: "Individual course project with Codex-assisted implementation.",
      zh: "个人课程项目，由 Codex 辅助实现。",
    },
    availability: {
      en: "The source is preserved locally and is not publicly released; no hardware-board deployment is claimed.",
      zh: "源代码保存在本地且未公开发布；不宣称已在硬件开发板上部署。",
    },
    responsibilities: [
      {
        en: "RV64 integer arithmetic and word operations",
        zh: "RV64 整数运算与字运算",
      },
      {
        en: "Memory access",
        zh: "内存访问",
      },
      {
        en: "Conditional branches and jumps",
        zh: "条件分支与跳转",
      },
      {
        en: "U-type instructions",
        zh: "U-type 指令",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
