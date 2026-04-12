import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = "Palari — Your AI Team Lives in Slack";
const description =
  "Add AI coworkers to your Slack workspace. They have names, personalities, and opinions. They write code, edit docs, set reminders, and show up to standup.";

export const metadata: Metadata = {
  metadataBase: new URL("https://palari.io"),
  title,
  description,
  alternates: {
    canonical: "https://palari.io",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://palari.io",
    siteName: "Palari",
    images: [
      {
        url: "/og-image-placeholder.png",
        width: 1200,
        height: 630,
        alt: "Palari landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image-placeholder.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-[#1B2A4A]">{children}</body>
    </html>
  );
}
