import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bezawada Lakshith — Software Engineer & Frontend Developer",
  description:
    "Portfolio of Bezawada Lakshith — Computer Science Engineering student crafting responsive, SEO-friendly web experiences with modern frontend engineering.",
  keywords: [
    "Bezawada Lakshith",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "CSE Student",
  ],
  authors: [{ name: "Bezawada Lakshith" }],
  openGraph: {
    title: "Bezawada Lakshith — Software Engineer",
    description:
      "Computer Science Engineering student building digital experiences with modern frontend engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bezawada Lakshith — Software Engineer",
    description:
      "Computer Science Engineering student building digital experiences with modern frontend engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
