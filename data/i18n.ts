import { siteConfig } from "@/lib/site";

export type Locale = "en" | "zh";

export type LocalizedText<T = string> = Readonly<{
  en: T;
  zh: T;
}>;

export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES: readonly Locale[] = ["en", "zh"];

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "zh";
}

function isLocalizedText<T>(
  value: T | LocalizedText<T>,
): value is LocalizedText<T> {
  return (
    typeof value === "object" &&
    value !== null &&
    "en" in value &&
    "zh" in value
  );
}

export function localize<T>(value: LocalizedText<T>, locale: Locale): T;
export function localize<T>(value: T | LocalizedText<T>, locale: Locale): T;
export function localize<T>(
  value: T | LocalizedText<T>,
  locale: Locale,
): T {
  return isLocalizedText(value) ? value[locale] : value;
}

export type TranslationDictionary = {
  nav: {
    ariaLabel: string;
    skipToContent: string;
    home: string;
    projects: string;
    blog: string;
    about: string;
    languageSelector: string;
    english: string;
    chinese: string;
    switchTo: (language: string) => string;
  };
  footer: {
    builtWith: string;
    backToTop: string;
  };
  contact: {
    ariaLabel: string;
    labels: {
      github: string;
      personalEmail: string;
      zjuEmail: string;
    };
    linkAriaLabel: (label: string, detail: string) => string;
    copyAddress: (label: string) => string;
    copy: string;
    copied: string;
    tryAgain: string;
    copiedAnnouncement: (label: string) => string;
    copyErrorAnnouncement: (label: string) => string;
  };
  common: {
    result: string;
    viewAllProjects: string;
    contact: string;
    completed: string;
    planned: string;
    sentenceEnd: string;
  };
  home: {
    greeting: string;
    fieldNotes: string;
    inProgress: string;
    explore: string;
    primaryInterestsAriaLabel: string;
    aboutEyebrow: string;
    aboutTitle: string;
    moreAboutMe: string;
    researchEyebrow: string;
    researchTitle: string;
    researchDescription: string;
    projectsEyebrow: string;
    projectsTitle: string;
    projectsDescription: string;
    learningEyebrow: string;
    learningTitle: string;
    nextUp: string;
    learningMilestone: string;
    notesEyebrow: string;
    notesTitle: string;
    notesDescription: string;
    readNote: string;
    viewAllNotes: string;
    tagsFor: (title: string) => string;
    contactEyebrow: string;
    contactTitle: string;
    contactDescription: string;
  };
  about: {
    eyebrow: string;
    educationEyebrow: string;
    educationTitle: string;
    researchEyebrow: string;
    researchTitle: string;
    technicalEyebrow: string;
    technicalTitle: string;
    primaryAreas: string;
    primaryInterestsAriaLabel: string;
    broaderInterests: string;
    broaderInterestsAriaLabel: string;
    cybersecurityTitle: string;
    introductoryExposureIncludes: string;
    topicsEncountered: string;
    practiceTools: string;
    skillsEyebrow: string;
    skillsTitle: string;
    comfortableWith: string;
    workingWith: string;
    learningEyebrow: string;
    learningTitle: string;
    backgroundEyebrow: string;
    backgroundTitle: string;
    workEyebrow: string;
    workTitle: string;
    contactEyebrow: string;
    contactTitle: string;
    contactDescription: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    showcaseAriaLabel: string;
    result: string;
    liveDemo: string;
    responsibilities: string;
    technologiesFor: (title: string) => string;
  };
  blog: {
    eyebrow: string;
    title: string;
    description: string;
    postsAriaLabel: string;
    latestNotes: string;
    readArticle: string;
    readNote: string;
    backToBlog: string;
    tagsFor: (title: string) => string;
    dateLocale: string;
  };
  metadata: {
    site: {
      title: string;
      description: string;
    };
    home: {
      title: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
    };
    projects: {
      title: string;
      description: string;
    };
    blog: {
      title: string;
      description: string;
    };
  };
};

export const translations = {
  en: {
    nav: {
      ariaLabel: "Main navigation",
      skipToContent: "Skip to content",
      home: "Home",
      projects: "Projects",
      blog: "Blog",
      about: "About",
      languageSelector: "Language",
      english: "EN",
      chinese: "中文",
      switchTo: (language) => `Switch to ${language}`,
    },
    footer: {
      builtWith: "Built with Next.js and Tailwind CSS",
      backToTop: "Back to top",
    },
    contact: {
      ariaLabel: "Profile links",
      labels: {
        github: "GitHub",
        personalEmail: "Personal Email",
        zjuEmail: "ZJU Email",
      },
      linkAriaLabel: (label, detail) => `${label}: ${detail}`,
      copyAddress: (label) => `Copy ${label} address`,
      copy: "Copy",
      copied: "Copied!",
      tryAgain: "Try again",
      copiedAnnouncement: (label) =>
        `${label} address copied to clipboard.`,
      copyErrorAnnouncement: (label) =>
        `${label} address could not be copied. Please copy it manually.`,
    },
    common: {
      result: "Result:",
      viewAllProjects: "View all projects",
      contact: "Contact",
      completed: "Completed",
      planned: "Planned",
      sentenceEnd: ".",
    },
    home: {
      greeting: "Hello, I’m",
      fieldNotes: "A personal field notebook",
      inProgress: "Learning. Building. Becoming.",
      explore: "Explore the notebook",
      primaryInterestsAriaLabel: "Primary technical interests",
      aboutEyebrow: "Profile",
      aboutTitle: "About",
      moreAboutMe: "More about me",
      researchEyebrow: "Possible future directions",
      researchTitle: "Research Interests",
      researchDescription:
        "Areas I am exploring while continuing to build the necessary machine-learning and systems foundations.",
      projectsEyebrow: "Building",
      projectsTitle: "Selected Projects",
      projectsDescription:
        "A small selection of personal and course work from the central project showcase.",
      learningEyebrow: "Growing now",
      learningTitle: "Currently Learning",
      nextUp: "Next Up",
      learningMilestone: "Learning Milestone",
      notesEyebrow: "Writing",
      notesTitle: "Latest Notes",
      notesDescription:
        "Recent technical and learning notes from the Markdown blog.",
      readNote: "Read note",
      viewAllNotes: "View all notes",
      tagsFor: (title) => `Tags for ${title}`,
      contactEyebrow: "Contact",
      contactTitle: "Let’s connect",
      contactDescription:
        "Find my public work on GitHub or start an email in your browser.",
    },
    about: {
      eyebrow: "About",
      educationEyebrow: "Foundation",
      educationTitle: "Education",
      researchEyebrow: "Possible future directions",
      researchTitle: "Research Interests",
      technicalEyebrow: "Broader fields I enjoy learning",
      technicalTitle: "Technical Interests",
      primaryAreas: "Primary areas",
      primaryInterestsAriaLabel: "Primary technical interests",
      broaderInterests: "Broader interests",
      broaderInterestsAriaLabel: "Broader technical interests",
      cybersecurityTitle: "Cybersecurity side interest",
      introductoryExposureIncludes: "Introductory exposure includes:",
      topicsEncountered: "Topics encountered",
      practiceTools: "Introductory practice tools",
      skillsEyebrow: "Technologies used",
      skillsTitle: "Skills",
      comfortableWith: "Comfortable With",
      workingWith: "Working With",
      learningEyebrow: "Growing now",
      learningTitle: "Currently Learning",
      backgroundEyebrow: "Structured study",
      backgroundTitle: "Learning Background",
      workEyebrow: "Building",
      workTitle: "Selected Work",
      contactEyebrow: "Connect",
      contactTitle: "Contact",
      contactDescription:
        "Find my public work on GitHub or start an email in your browser.",
    },
    projects: {
      eyebrow: "Work",
      title: "Projects",
      description:
        "Personal and course projects built while learning software engineering, computer systems, and artificial intelligence.",
      showcaseAriaLabel: "Project showcase",
      result: "Result:",
      liveDemo: "Live demo",
      responsibilities: "Responsibilities",
      technologiesFor: (title) => `${title} technologies`,
    },
    blog: {
      eyebrow: "Writing",
      title: "Blog",
      description:
        "Notes about artificial intelligence, computer science, security, and engineering topics I am learning.",
      postsAriaLabel: "Blog posts",
      latestNotes: "Latest Notes",
      readArticle: "Read article",
      readNote: "Read note",
      backToBlog: "Back to Blog",
      tagsFor: (title) => `Tags for ${title}`,
      dateLocale: "en-US",
    },
    metadata: {
      site: {
        title: siteConfig.title,
        description: siteConfig.description,
      },
      home: {
        title: siteConfig.title,
        description: siteConfig.description,
      },
      about: {
        title: "About | Leo Yangqi",
        description:
          "Learn about Leo Yangqi, an Artificial Intelligence undergraduate at Zhejiang University, including his research interests, technical interests, current learning, and selected work.",
      },
      projects: {
        title: "Projects | Leo Yangqi",
        description:
          "Selected work by Leo Yangqi, including the Leo Personal Website and a Single-Cycle RISC-V CPU course project.",
      },
      blog: {
        title: "Blog | Leo Yangqi",
        description:
          "Technical learning notes and development records by Leo Yangqi.",
      },
    },
  },
  zh: {
    nav: {
      ariaLabel: "主导航",
      skipToContent: "跳转到正文",
      home: "首页",
      projects: "项目",
      blog: "博客",
      about: "关于",
      languageSelector: "语言",
      english: "EN",
      chinese: "中文",
      switchTo: (language) => `切换为${language}`,
    },
    footer: {
      builtWith: "使用 Next.js 和 Tailwind CSS 构建",
      backToTop: "回到顶部",
    },
    contact: {
      ariaLabel: "个人链接",
      labels: {
        github: "GitHub",
        personalEmail: "个人邮箱",
        zjuEmail: "浙大邮箱",
      },
      linkAriaLabel: (label, detail) => `${label}：${detail}`,
      copyAddress: (label) => `复制${label}地址`,
      copy: "复制",
      copied: "已复制！",
      tryAgain: "重试",
      copiedAnnouncement: (label) => `已将${label}地址复制到剪贴板。`,
      copyErrorAnnouncement: (label) =>
        `无法复制${label}地址，请手动复制。`,
    },
    common: {
      result: "结果：",
      viewAllProjects: "查看全部项目",
      contact: "联系",
      completed: "已完成",
      planned: "计划中",
      sentenceEnd: "。",
    },
    home: {
      greeting: "你好，我是",
      fieldNotes: "一本持续更新的个人手记",
      inProgress: "在学习中探索，在实践中成长。",
      explore: "翻开这本手记",
      primaryInterestsAriaLabel: "主要技术兴趣",
      aboutEyebrow: "个人简介",
      aboutTitle: "关于我",
      moreAboutMe: "进一步了解我",
      researchEyebrow: "未来可能的方向",
      researchTitle: "研究兴趣",
      researchDescription:
        "在继续打好机器学习与系统基础的同时，我正在探索这些方向。",
      projectsEyebrow: "实践",
      projectsTitle: "精选项目",
      projectsDescription: "从个人项目与课程项目中选取的部分作品。",
      learningEyebrow: "近期成长",
      learningTitle: "正在学习",
      nextUp: "下一步",
      learningMilestone: "学习里程碑",
      notesEyebrow: "写作",
      notesTitle: "近期笔记",
      notesDescription: "Markdown 博客中的近期技术与学习笔记。",
      readNote: "阅读笔记",
      viewAllNotes: "查看全部笔记",
      tagsFor: (title) => `${title}的标签`,
      contactEyebrow: "联系",
      contactTitle: "保持联系",
      contactDescription:
        "你可以在 GitHub 查看我的公开作品，或通过浏览器给我发送邮件。",
    },
    about: {
      eyebrow: "关于",
      educationEyebrow: "基础",
      educationTitle: "教育经历",
      researchEyebrow: "未来可能的方向",
      researchTitle: "研究兴趣",
      technicalEyebrow: "我乐于了解的更多领域",
      technicalTitle: "技术兴趣",
      primaryAreas: "主要方向",
      primaryInterestsAriaLabel: "主要技术兴趣",
      broaderInterests: "其他兴趣",
      broaderInterestsAriaLabel: "其他技术兴趣",
      cybersecurityTitle: "网络安全方面的兴趣",
      introductoryExposureIncludes: "初步接触的方向包括：",
      topicsEncountered: "接触过的主题",
      practiceTools: "初步实践工具",
      skillsEyebrow: "使用过的技术",
      skillsTitle: "技能",
      comfortableWith: "较熟悉",
      workingWith: "正在使用",
      learningEyebrow: "近期成长",
      learningTitle: "正在学习",
      backgroundEyebrow: "系统学习",
      backgroundTitle: "学习背景",
      workEyebrow: "实践",
      workTitle: "精选项目",
      contactEyebrow: "联系",
      contactTitle: "联系方式",
      contactDescription:
        "你可以在 GitHub 查看我的公开作品，或通过浏览器给我发送邮件。",
    },
    projects: {
      eyebrow: "作品",
      title: "项目",
      description:
        "在学习软件工程、计算机系统和人工智能过程中构建的个人项目与课程项目。",
      showcaseAriaLabel: "项目展示",
      result: "结果：",
      liveDemo: "在线演示",
      responsibilities: "主要职责",
      technologiesFor: (title) => `${title}使用的技术`,
    },
    blog: {
      eyebrow: "写作",
      title: "博客",
      description:
        "记录我正在学习的人工智能、计算机科学、安全与工程主题。",
      postsAriaLabel: "博客文章",
      latestNotes: "近期笔记",
      readArticle: "阅读文章",
      readNote: "阅读笔记",
      backToBlog: "返回博客",
      tagsFor: (title) => `${title}的标签`,
      dateLocale: "zh-CN",
    },
    metadata: {
      site: {
        title: "Leo Yangqi｜人工智能本科生",
        description:
          "Leo Yangqi 是浙江大学人工智能专业本科生，正在探索机器学习、AI Systems、计算机系统与软件工程。",
      },
      home: {
        title: "Leo Yangqi｜浙江大学人工智能专业学生",
        description:
          "Leo Yangqi 的个人网站。他是浙江大学人工智能专业本科生，正在探索机器学习、AI Systems、计算机系统与软件工程。",
      },
      about: {
        title: "关于｜Leo Yangqi",
        description:
          "了解浙江大学人工智能专业本科生 Leo Yangqi 的学习背景、研究兴趣、技术兴趣与项目。",
      },
      projects: {
        title: "项目｜Leo Yangqi",
        description: "Leo Yangqi 的个人项目与课程项目。",
      },
      blog: {
        title: "博客｜Leo Yangqi",
        description: "Leo Yangqi 的技术与学习笔记。",
      },
    },
  },
} satisfies Record<Locale, TranslationDictionary>;

export type MetadataPage = keyof TranslationDictionary["metadata"];

type UiTranslationNamespace = Exclude<
  keyof TranslationDictionary,
  "metadata"
>;

type StringTranslationKey<Namespace extends UiTranslationNamespace> = {
  [Key in keyof TranslationDictionary[Namespace]]:
    TranslationDictionary[Namespace][Key] extends string ? Key : never;
}[keyof TranslationDictionary[Namespace]];

/**
 * Returns a bilingual value for static server-rendered UI without duplicating
 * translation strings in page components.
 */
export function translationPair<
  Namespace extends UiTranslationNamespace,
  Key extends StringTranslationKey<Namespace>,
>(namespace: Namespace, key: Key): LocalizedText {
  return {
    en: translations.en[namespace][key] as string,
    zh: translations.zh[namespace][key] as string,
  };
}
