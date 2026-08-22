import type { LocalizedText } from "@/data/i18n";

export type ContactLink = {
  label: string;
  detail: string;
  href: string;
  external: boolean;
  email?: string;
};

export type LearningStatus = "completed" | "planned";

const githubLink: ContactLink = {
  label: "GitHub",
  detail: "lu-yangqi",
  href: "https://github.com/lu-yangqi",
  external: true,
};

const personalEmailLink: ContactLink = {
  label: "Personal Email",
  detail: "luyangqi20060901@gmail.com",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=luyangqi20060901%40gmail.com",
  external: true,
  email: "luyangqi20060901@gmail.com",
};

const universityEmailLink: ContactLink = {
  label: "ZJU Email",
  detail: "3250103580@zju.edu.cn",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=3250103580%40zju.edu.cn",
  external: true,
  email: "3250103580@zju.edu.cn",
};

const identity = {
  en: "AI Student",
  zh: "人工智能专业学生",
} satisfies LocalizedText;

const heroHeadline = {
  en: "AI Undergraduate Student",
  zh: "人工智能专业本科生",
} satisfies LocalizedText;

const headline = {
  en: "Undergraduate Student in Artificial Intelligence",
  zh: "人工智能专业本科生",
} satisfies LocalizedText;

const university = {
  en: "Zhejiang University",
  zh: "浙江大学",
} satisfies LocalizedText;

export const profile = {
  names: {
    public: "Leo Yangqi",
    formal: "Yangqi Lu",
    chinese: "鲁杨琦",
  },
  identity,
  heroHeadline,
  headline,
  university,
  heroSummary: {
    en: "Building foundations in machine learning, computer systems, and software engineering while exploring Efficient Machine Learning and AI Systems as possible future directions.",
    zh: "正在打下机器学习、计算机系统和软件工程方面的基础，同时将高效机器学习与 AI Systems 作为未来可能的发展方向进行探索。",
  } satisfies LocalizedText,
  bio: [
    {
      en: "Leo Yangqi is an undergraduate student in Artificial Intelligence at Zhejiang University.",
      zh: "Leo Yangqi 是浙江大学人工智能专业本科生。",
    },
    {
      en: "He is building foundations in machine learning, computer systems, and software engineering while exploring Efficient Machine Learning and AI Systems as possible future research directions.",
      zh: "他正在学习机器学习、计算机系统和软件工程的基础，并将高效机器学习与 AI Systems 作为未来可能的研究方向进行探索。",
    },
    {
      en: "He is also learning software engineering through his personal website project and keeps cybersecurity and CTF as a technical side interest.",
      zh: "他也通过个人网站项目学习软件工程，并将网络安全与 CTF 作为技术方面的兴趣。",
    },
  ] satisfies LocalizedText[],
  education: {
    institution: university,
    school: {
      en: "School of Artificial Intelligence",
      zh: "浙江大学人工智能学院",
    } satisfies LocalizedText,
    program: {
      en: "Artificial Intelligence",
      zh: "人工智能",
    } satisfies LocalizedText,
    degree: {
      en: "Undergraduate",
      zh: "本科",
    } satisfies LocalizedText,
    period: "2025–2029",
  },
  researchInterests: [
    {
      title: {
        en: "Efficient Machine Learning",
        zh: "高效机器学习",
      },
      description: {
        en: "Exploring efficient approaches to machine learning as a possible future research direction.",
        zh: "将高效的机器学习方法作为未来可能的研究方向进行探索。",
      },
    },
    {
      title: {
        en: "AI Systems / AI Infra",
        zh: "AI Systems / AI Infra",
      },
      description: {
        en: "Interested in the systems and infrastructure that support modern AI, while still building the necessary systems foundations.",
        zh: "对支撑现代 AI 的系统与基础设施感兴趣，同时仍在学习必要的系统基础。",
      },
    },
  ] satisfies Array<{
    title: LocalizedText;
    description: LocalizedText;
  }>,
  technicalInterests: {
    primary: [
      { en: "Artificial Intelligence", zh: "人工智能" },
      { en: "Machine Learning", zh: "机器学习" },
      { en: "AI Systems", zh: "AI Systems" },
    ] satisfies LocalizedText[],
    broader: [
      { en: "Computer Systems", zh: "计算机系统" },
      { en: "Cyber Security", zh: "网络安全" },
      {
        en: "Software Engineering / Engineering Tools",
        zh: "软件工程 / 工程工具",
      },
    ] satisfies LocalizedText[],
    cybersecurity: {
      summary: {
        en: "Learning CTF and cybersecurity fundamentals.",
        zh: "正在学习 CTF 与网络安全基础。",
      } satisfies LocalizedText,
      exposure: ["Web Security", "Reverse Engineering", "Basic Pwn concepts"],
      topics: [
        "XSS",
        "SQL Injection",
        "DOM Clobbering",
        "Dangling Markup",
        "Encoding / parsing issues",
      ],
      tools: [
        "IDA",
        "Ghidra",
        "GDB / pwndbg",
        "pwntools",
        "Wireshark",
        "Linux command-line tools",
      ],
    },
  },
  skills: {
    comfortableWith: {
      items: ["Git / GitHub"],
      description: {
        en: "Basic personal-project workflow including status, add, commit, push, repositories, and remotes.",
        zh: "个人项目中的基础工作流，包括 status、add、commit、push、仓库与远程仓库操作。",
      } satisfies LocalizedText,
    },
    workingWith: [
      {
        group: { en: "Programming", zh: "编程" },
        items: ["Python", "C", "SystemVerilog / Verilog"],
      },
      {
        group: { en: "AI / Computing", zh: "AI / 计算" },
        items: ["NumPy"],
      },
      {
        group: { en: "Engineering", zh: "工程工具" },
        items: ["Linux", "Docker"],
      },
    ] satisfies Array<{ group: LocalizedText; items: string[] }>,
  },
  currentlyLearning: [
    {
      title: {
        en: "Modern Web Development",
        zh: "现代 Web 开发",
      },
      description: {
        en: "Learning through development of this personal website.",
        zh: "通过开发这个个人网站进行学习。",
      },
      items: [
        "JavaScript / TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS / CSS",
      ],
    },
    {
      title: {
        en: "AI-Assisted Software Development",
        zh: "AI 辅助软件开发",
      },
      description: {
        en: "A learning and personal-project workflow.",
        zh: "用于学习和个人项目的工作流。",
      },
      items: [
        { en: "Requirement design", zh: "需求设计" },
        { en: "GPT-assisted planning", zh: "GPT 辅助规划" },
        { en: "Codex implementation", zh: "Codex 实现" },
        { en: "Local testing", zh: "本地测试" },
        { en: "Iterative refinement", zh: "迭代完善" },
        { en: "Git / GitHub workflow", zh: "Git / GitHub 工作流" },
      ],
    },
    {
      title: {
        en: "Deep Learning",
        zh: "深度学习",
      },
      description: {
        en: "Early PyTorch and deep-learning learning.",
        zh: "处于 PyTorch 与深度学习的初步学习阶段。",
      },
      items: ["PyTorch", "Deep Learning foundations"],
    },
  ] satisfies Array<{
    title: LocalizedText;
    description: LocalizedText;
    items: Array<string | LocalizedText>;
  }>,
  learningBackground: [
    {
      title: "Andrew Ng Machine Learning Specialization",
      status: "completed",
      description: {
        en: "Completed the full course sequence and associated labs and programming exercises.",
        zh: "已完成全部课程、配套实验和编程练习。",
      },
    },
    {
      title: "Stanford CS231n",
      subtitle: "Convolutional Neural Networks for Visual Recognition",
      status: "planned",
      description: {
        en: "Next up; not formally started, with no assignments or independent implementations completed yet.",
        zh: "计划下一步学习；尚未正式开始，也尚未完成课程作业或独立实现。",
      },
    },
  ] satisfies Array<{
    title: string;
    subtitle?: string;
    status: LearningStatus;
    description: LocalizedText;
  }>,
  contact: {
    primary: [githubLink, personalEmailLink, universityEmailLink],
    homepage: [githubLink, personalEmailLink, universityEmailLink],
  },
} as const;
