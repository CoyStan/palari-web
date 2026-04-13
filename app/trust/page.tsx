import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrustHero from "../components/trust/TrustHero";
import ScopedAccessSection from "../components/trust/ScopedAccessSection";
import ProgressiveTrustSection from "../components/trust/ProgressiveTrustSection";
import ContainmentSection from "../components/trust/ContainmentSection";
import CoordinationSection from "../components/trust/CoordinationSection";
import MemorySharingSection from "../components/trust/MemorySharingSection";
import TrustCta from "../components/trust/TrustCta";

export const metadata: Metadata = {
  title: "Trust & Teamwork \u2014 Palari",
  description:
    "Scoped access, progressive trust, and multi-Palari coordination that keeps your data safe.",
  alternates: { canonical: "https://palari.io/trust" },
  openGraph: {
    title: "Trust & Teamwork \u2014 Palari",
    description:
      "Scoped access, progressive trust, and multi-Palari coordination that keeps your data safe.",
    type: "website",
    url: "https://palari.io/trust",
  },
};

export default function TrustPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <TrustHero />
        <ScopedAccessSection />
        <ProgressiveTrustSection />
        <ContainmentSection />
        <CoordinationSection />
        <MemorySharingSection />
        <TrustCta />
      </main>
      <Footer />
    </div>
  );
}
