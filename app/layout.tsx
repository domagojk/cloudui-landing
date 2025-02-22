import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "CloudUI | Focus on solving problems, not navigating the AWS Console",
  description: "GUI client for your most used AWS services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon.svg"
        type="image/svg+xml"
        media="(prefers-color-scheme: light)"
        sizes="any"
      />
      <link
        rel="icon"
        href="/favicon-dark.svg"
        type="image/svg+xml"
        media="(prefers-color-scheme: dark)"
        sizes="any"
      />
      <body>{children}</body>
      <GoogleAnalytics gaId="G-HGKX2FLH1X" />
    </html>
  );
}
