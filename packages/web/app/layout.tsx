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
  title: "envguard — Type-safe Environment Variable Validation for Node.js",
  description:
    "envguard is a powerful npm package for type-safe environment variable validation using Zod. Safely load and validate your .env variables with ease.",
  keywords: [
    "envguard",
    "environment variables",
    "zod",
    "typescript",
    "validation",
    "npm package",
    "dotenv",
    "type-safe",
  ],
  openGraph: {
    title: "envguard — Type-safe Environment Variable Validation",
    description:
      "Use envguard to securely load and validate your environment variables with Zod schema validation.",
    url: "https://your-domain.com", // replace with your live site URL
    siteName: "envguard",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://your-domain.com/og-image.png", // optional OpenGraph image URL
        width: 1200,
        height: 630,
        alt: "envguard npm package",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "envguard — Type-safe Environment Variable Validation",
    description:
      "Securely load and validate your .env files with envguard, built with Zod and TypeScript.",
    creator: "@your_twitter_handle", // replace with your Twitter handle or remove
    images: ["https://your-domain.com/og-image.png"], // optional
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
        {children}
      </body>
    </html>
  );
}
