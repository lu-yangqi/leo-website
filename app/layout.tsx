import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leo Yangqi",
  description:
    "Personal website of Leo Yangqi, an AI undergraduate student at Zhejiang University.",
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
