import type { Metadata } from "next";
import "./globals.css";

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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
