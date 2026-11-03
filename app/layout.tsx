import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import MusicPlayer from "@/components/MusicPlayer";
import { LanguageProvider } from "@/lib/lang";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Haste Mohsin — Creative Developer & AI Enthusiast",
  description:
    "Building digital experiences, exploring artificial intelligence, and transforming ideas into meaningful technology.",
  keywords: ["creative developer", "AI", "portfolio", "Haste Mohsin", "full-stack"],
  openGraph: {
    title: "Haste Mohsin — Creative Developer & AI Enthusiast",
    description:
      "Building digital experiences, exploring artificial intelligence, and transforming ideas into meaningful technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <div className="grain" />
        <SmoothScroll>
          <LanguageProvider>
            <Preloader />
            <MusicPlayer />
            {children}
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
