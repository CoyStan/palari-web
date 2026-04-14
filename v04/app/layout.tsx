import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = "Palari. AI coworkers who remember you.";
const description =
  "Every AI forgets you. Sofia doesn't. Palaris are coworkers with a name, a history, and a memory of your work that compounds over time.";

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
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
