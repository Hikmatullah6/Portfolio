import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Set NEXT_PUBLIC_SITE_URL in your Vercel project to your real domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hussain-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hussain — Software Engineer",
    template: "%s — Hussain",
  },
  description:
    "Hussain (Hikmatullah Hussainzada) — Computer Science graduate and software engineer building full-stack web apps with Next.js, React, TypeScript and Supabase.",
  keywords: [
    "Hussain",
    "Hikmatullah Hussainzada",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Ontario",
    "Canada",
  ],
  authors: [{ name: "Hikmatullah Hussainzada" }],
  creator: "Hikmatullah Hussainzada",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Hussain — Portfolio",
    title: "Hussain — Software Engineer",
    description:
      "Computer Science graduate and software engineer building full-stack web apps with Next.js, React, TypeScript and Supabase.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussain — Software Engineer",
    description:
      "Computer Science graduate and software engineer building full-stack web apps with Next.js, React and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
