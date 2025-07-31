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
  title: "Pistah - AI-Powered IELTS Practice",
  description:
    "Your personal AI tutor for IELTS success. Practice Speaking, Listening, Writing, and Reading with real-time feedback.",
  keywords: [
    "IELTS",
    "AI tutor",
    "IELTS practice",
    "public speaking",
    "language learning",
  ],
  authors: [{ name: "Muhammed Yaseen", url: "https://yaseen.site" }],
  creator: "Muhammed Yaseen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pistah.live",
    title: "Pistah - AI-Powered IELTS Practice",
    description:
      "Your personal AI tutor for IELTS success. Practice Speaking, Listening, Writing, and Reading with real-time feedback.",
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
    icon: "/pistah-icon.svg",
  },
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
