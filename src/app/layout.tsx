import React from "react";
import type { Metadata } from "next";
import cl from "classnames";
import { Inter } from "next/font/google";
import "./globals.css";
import Crisp from "@/components/crisp";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://getlapseapp.com"),
  title: {
    default: "Lapse – Save instant time-lapse screen recording ✨",
    template: "%s | Lapse",
  },
  description: "A simple app to record screen in time-lapse on Mac and windows",
  openGraph: {
    title: "Lapse",
    description:
      "A simple app to record screen in time-lapse on Mac and windows",
    url: "https://getlapseapp.com",
    siteName: "Lapse",
    locale: "en_US",
    type: "website",
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
    title: "Lapse – Save instant time-lapse screen recording ✨",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cl(
          inter.className,
          "bg-neutral-50 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
        )}
      >
        <nav className="fixed left-0 top-0 z-50 w-full text-right">
          <div className=" mx-auto flex w-full max-w-7xl justify-center p-2 md:justify-between">
            <div></div>
            <div className="flex gap-4 rounded-full bg-neutral-100/80 px-2 py-1 backdrop-blur-sm dark:bg-neutral-800/80 ">
              {/* <Link
            href={"/docs"}
            className="p-2 text-neutral-400 hover:text-neutral-100 transition"
          >
            Referral
          </Link> */}
              <Link
                href={
                  "https://achuth.notion.site/Changelog-4c898f8b4ec140abb1d6a6d2e9108a15"
                }
                className="p-2 text-neutral-400 transition hover:text-neutral-100"
              >
                Changelog
              </Link>
              <Link
                href={"/download"}
                className="p-2 text-neutral-400 transition hover:text-neutral-100"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.25 7.5L9 11.25L12.75 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11.25V2.25"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <Crisp />
        <Analytics />
      </body>
    </html>
  );
}
