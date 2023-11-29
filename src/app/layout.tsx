import React from "react";
import type { Metadata } from "next";
import cl from "classnames";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lapse – Save instant time-lapse screen recording ✨",
  description: "A simple app to record screen in time-lapse on Mac and windows",
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
          "bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100"
        )}
      >
        {children}
      </body>
    </html>
  );
}
