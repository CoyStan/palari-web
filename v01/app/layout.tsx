import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = "Palari — Colleagues who remember";
const description =
  "A Palari carries who you are outside the context window. Sofia, Leo, Alfred, and Maya are AI colleagues with names, personalities, and memory that grows. Talk in Slack. They handle the rest.";

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
        alt: "Palari — Colleagues who remember",
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
      <body className="flex min-h-full flex-col bg-[#F7F5F2] text-[#2E2A7B]">
        {children}
      </body>
    </html>
  );
}
