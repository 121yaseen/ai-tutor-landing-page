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
  title: "Pistah - AI-Powered IELTS Practice",
  description: "Your personal AI tutor for IELTS success. Practice Speaking, Listening, Writing, and Reading with real-time feedback.",
  icons: {
    icon: [
      { url: "/pistah-icon.svg", type: "image/svg+xml" },
      { url: "/pistah-icon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/pistah-icon.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    shortcut: "/pistah-icon.svg",
    apple: "/pistah-icon.svg",
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
