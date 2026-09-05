import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { LanguageProvider, LocalizedText } from "@/components/LanguageProvider";
import MotionEffects from "@/components/MotionEffects";
import { translationPair } from "@/data/i18n";
import Navbar from "@/components/Navbar";
import { getAbsoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const shareImageUrl = getAbsoluteUrl(siteConfig.shareImage.path);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
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
    title: siteConfig.title,
    description: siteConfig.description,
    images: [shareImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <a className="skip-link" href="#main-content">
            <LocalizedText value={translationPair("nav", "skipToContent")} />
          </a>
          <MotionEffects />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div id="main-content" tabIndex={-1} className="flex flex-1 flex-col">
              {children}
            </div>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
