import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AGRON — AI-Driven Agentic Drone System for Precision Agriculture",
  description:
    "AGRON is a low-cost, offline-first precision agriculture drone ecosystem that uses RGB + NoIR imagery, NDVI analytics, and deep learning to detect crop stress early and enable targeted spraying instead of blanket pesticide use.",
  keywords: [
    "AGRON",
    "precision agriculture",
    "drone",
    "NDVI",
    "crop stress detection",
    "offline-first",
    "autonomous drone",
    "agritech",
  ],
  openGraph: {
    title: "AGRON — Fly Smart, Farm Smarter",
    description:
      "An autonomous, offline-first drone system that detects crop stress early and replaces blanket spraying with targeted precision action.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-foreground">
        {children}
      </body>
    </html>
  );
}
