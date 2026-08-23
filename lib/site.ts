import type { Metadata } from "next";

export const siteConfig = {
  name: "Leo Yangqi",
  url: "https://leo-website-lilac.vercel.app",
  title: "Leo Yangqi | AI Student at Zhejiang University",
  description:
    "Personal website of Leo Yangqi, an Artificial Intelligence undergraduate at Zhejiang University exploring machine learning, AI systems, computer systems, and software engineering.",
  shareImage: {
    path: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Leo Yangqi — AI Student at Zhejiang University",
    identity: "AI Student · Zhejiang University",
    interests: "AI · Machine Learning · Systems",
  },
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
  const shareImageUrl = getAbsoluteUrl(siteConfig.shareImage.path);

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
      images: [
        {
          url: shareImageUrl,
          width: siteConfig.shareImage.width,
          height: siteConfig.shareImage.height,
          alt: siteConfig.shareImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [shareImageUrl],
    },
  };
}
