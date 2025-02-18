import React from "react";
import type { Metadata } from "next";
import cl from "classnames";
import { Inter } from "next/font/google";
import "./globals.css";
import Crisp from "@/components/crisp";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://getlapseapp.com"),
  title: {
    default: "Lapse | Instant Time-Lapse Screen Recording for Mac & Windows",
    template: "%s | Lapse – Time-Lapse Screen Recorder",
  },
  description: "Lapse is a powerful and easy-to-use time-lapse screen recording app for Mac and Windows. Create stunning time-lapse videos of your screen activities effortlessly.",
  keywords: ["screen recorder", "time-lapse", "screen capture", "Mac", "Windows", "video recording"],
  authors: [{ name: "Lapse" }],
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://getlapseapp.com"
  },
  applicationName: "Lapse",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/favicon-180.png",
  },
  openGraph: {
    title: "Lapse | Time-Lapse Screen Recording for Mac & Windows",
    description: "Lapse allows you to record your screen in time-lapse mode on Mac and Windows, perfect for creating tutorials, presentations, and creative videos.",
    url: "https://getlapseapp.com",
    siteName: "Lapse",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://getlapseapp.com/banner.png",
        alt: "Lapse Time-Lapse Screen Recording",
        width: 1200,
        height: 630,
        type: "image/png",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Lapse | Instant Time-Lapse Screen Recording for Mac & Windows",
    description:
      "Record your screen in time-lapse with Lapse on Mac and Windows. Create fast-motion videos of your screen activities with ease.",
    card: "summary_large_image",
  },
};


const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lapse",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Mac OS, Windows",
  "description": "A powerful and easy-to-use time-lapse screen recording app",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body className={cl(inter.className, "bg-[#000B02] text-neutral-200")}>
        <Header />
        <main className="container mx-auto" role="main" aria-label="Main content">
          {children}
        </main>
        <Footer />
        <Crisp />
        <Analytics />
      </body>
    </html >
  );
}
