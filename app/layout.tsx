import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import { translations } from "@/data/i18n";
import "./globals.css";

export const metadata: Metadata = translations.en.metadata.site;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
