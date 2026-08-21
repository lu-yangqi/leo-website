import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
