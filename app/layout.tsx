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


export const metadata: Metadata = {
  title: "Ariful Islam | Full Stack Developer",
  description:
    "Explore my developer portfolio featuring modern web applications, projects, skills, education, and leadership experience.",

  keywords: [
    "Portfolio",
    "Web Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],

  openGraph: {
    title: "Your Name | Developer Portfolio",
    description:
      "Explore my projects, technical skills, and development journey.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
