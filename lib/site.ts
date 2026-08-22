import type { Metadata } from "next";

export const siteConfig = {
  name: "Leo Yangqi",
  url: "https://leo-website-lilac.vercel.app",
  title: "Leo Yangqi | AI Student at Zhejiang University",
  description:
    "Personal website of Leo Yangqi, an Artificial Intelligence undergraduate at Zhejiang University exploring machine learning, AI systems, computer systems, and software engineering.",
} as const;

export function getAbsoluteUrl(pathname: string) {
  return new URL(pathname, `${siteConfig.url}/`).toString();
}

type PageMetadataOptions = {
  title?: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  return {
    title: title ?? { absolute: siteConfig.title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: resolvedTitle,
      description,
    },
  };
}
