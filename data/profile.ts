export type ContactLink = {
  label: string;
  detail: string;
  href: string;
  external: boolean;
  email?: string;
};

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

export const profile = {
  names: {
    public: "Leo Yangqi",
    formal: "Yangqi Lu",
    chinese: "鲁杨琦",
  },
  identity: "AI Student",
  headline: "Undergraduate Student in Artificial Intelligence",
  university: "Zhejiang University",
  bio: [
    "Leo Yangqi is an undergraduate student in Artificial Intelligence at Zhejiang University.",
    "He is building foundations in machine learning, computer systems, and software engineering while exploring Efficient Machine Learning and AI Systems as possible future research directions.",
    "He is also learning software engineering through his personal website project and keeps cybersecurity and CTF as a technical side interest.",
  ],
  education: {
    institution: "Zhejiang University",
    school: "School of Artificial Intelligence",
    schoolChinese: "浙江大学人工智能学院",
    program: "Artificial Intelligence",
    degree: "Undergraduate",
    period: "2025–2029",
  },
  researchInterests: [
    {
      title: "Efficient Machine Learning",
      description:
        "Exploring efficient approaches to machine learning as a possible future research direction.",
    },
    {
      title: "AI Systems / AI Infra",
      description:
        "Interested in the systems and infrastructure that support modern AI, while still building the necessary systems foundations.",
    },
  ],
  technicalInterests: {
    primary: ["Artificial Intelligence", "Machine Learning", "AI Systems"],
    broader: [
      "Computer Systems",
      "Cyber Security",
      "Software Engineering / Engineering Tools",
    ],
    cybersecurity: {
      summary: "Learning CTF and cybersecurity fundamentals.",
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
      description:
        "Basic personal-project workflow including status, add, commit, push, repositories, and remotes.",
    },
    workingWith: [
      {
        group: "Programming",
        items: ["Python", "C", "SystemVerilog / Verilog"],
      },
      {
        group: "AI / Computing",
        items: ["NumPy"],
      },
      {
        group: "Engineering",
        items: ["Linux", "Docker"],
      },
    ],
  },
  currentlyLearning: [
    {
      title: "Modern Web Development",
      description: "Learning through development of this personal website.",
      items: [
        "JavaScript / TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS / CSS",
      ],
    },
    {
      title: "AI-Assisted Software Development",
      description: "A learning and personal-project workflow.",
      items: [
        "Requirement design",
        "GPT-assisted planning",
        "Codex implementation",
        "Local testing",
        "Iterative refinement",
        "Git / GitHub workflow",
      ],
    },
    {
      title: "Deep Learning",
      description: "Early PyTorch and deep-learning learning.",
      items: ["PyTorch", "Deep Learning foundations"],
    },
  ],
  learningBackground: [
    {
      title: "Andrew Ng Machine Learning Specialization",
      status: "Completed",
      description:
        "Completed the full course sequence and associated labs and programming exercises.",
    },
    {
      title: "Stanford CS231n",
      subtitle: "Convolutional Neural Networks for Visual Recognition",
      status: "Planned",
      description:
        "Next up; not formally started, with no assignments or independent implementations completed yet.",
    },
  ],
  selectedWork: [
    {
      title: "Leo Personal Website",
      type: "Independent Personal Project",
      period: "2026.08 – Present",
      description:
        "A long-term personal technical website built while learning modern web development, Git / GitHub workflows, and AI-assisted software development.",
      transparency:
        "Codex generates a large portion of the concrete implementation code.",
      responsibilities: [
        "Website structure and roadmap planning",
        "Requirement design and task specifications",
        "Local testing and result review",
        "Revision requests and Git / GitHub management",
        "UI direction and Markdown content maintenance",
      ],
      href: "/projects",
    },
    {
      title: "Single-Cycle RISC-V CPU",
      type: "Computer Systems Course Project",
      period: "2026",
      description:
        "An RV64 single-cycle CPU datapath implemented in SystemVerilog for a computer systems course project.",
      transparency: "Individual course project with Codex-assisted implementation.",
      responsibilities: [
        "RV64 integer arithmetic and word operations",
        "Memory access",
        "Conditional branches and jumps",
        "U-type instructions",
        "Successfully ran the required course test programs",
      ],
      note: "The source is preserved locally and is not publicly released; no hardware-board deployment is claimed.",
    },
  ],
  contact: {
    primary: [githubLink, personalEmailLink],
    homepage: [githubLink, personalEmailLink],
  },
} as const;
