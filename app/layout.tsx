import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leo Yangqi | AI Undergraduate Student",
  description:
    "Leo Yangqi is an AI undergraduate student at Zhejiang University interested in AI research, engineering, and computer science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
