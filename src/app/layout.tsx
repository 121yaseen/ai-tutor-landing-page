import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pistah.live"),
  title: "Pistah AI — Know Your IELTS Score Before Test Day",
  description:
    "AI examiner for IELTS Speaking & Writing with 92% accurate score prediction. Break the 6.5 barrier with targeted feedback and unlimited mock tests (beta).",
  keywords: [
    "IELTS",
    "IELTS score prediction",
    "AI examiner",
    "92% accuracy",
    "break 6.5 writing",
    "IELTS speaking",
    "IELTS writing",
    "mock tests",
    "band score",
    "language learning",
  ],
  authors: [{ name: "Muhammed Yaseen", url: "https://yaseen.site" }],
  creator: "Muhammed Yaseen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pistah.live",
    title: "Pistah AI — Know Your IELTS Score Before Test Day",
    description:
      "92% accurate band score prediction for IELTS Speaking & Writing. Unlimited mock tests for the first 100 users. Break the 6.5 barrier with targeted feedback.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Pistah - AI-Powered IELTS Practice",
      },
    ],
  },
  icons: {
    icon: "/@pistah-icon.svg",
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
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
