import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PhilosophyHero from "../components/philosophy/PhilosophyHero";
import FounderLetter from "../components/philosophy/FounderLetter";
import ThreeLayersSection from "../components/philosophy/ThreeLayersSection";
import PortabilitySection from "../components/philosophy/PortabilitySection";
import IncentiveAlignmentSection from "../components/philosophy/IncentiveAlignmentSection";
import ScopedTrustRationaleSection from "../components/philosophy/ScopedTrustRationaleSection";
import EthicsSection from "../components/philosophy/EthicsSection";
import FounderStorySection from "../components/philosophy/FounderStorySection";
import PhilosophyCta from "../components/philosophy/PhilosophyCta";

export const metadata: Metadata = {
  title: "Philosophy. Palari.",
  description:
    "Why we built AI coworkers with memory. Portability, incentive alignment, scoped trust, and the founder story behind Palari.",
  alternates: { canonical: "https://palari.io/philosophy" },
  openGraph: {
    title: "Philosophy. Palari.",
    description:
      "Why we built AI coworkers with memory, and what we had to change about the architecture to do it.",
    type: "article",
    url: "https://palari.io/philosophy",
  },
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <PhilosophyHero />
        <FounderLetter />
        <ThreeLayersSection />
        <PortabilitySection />
        <IncentiveAlignmentSection />
        <ScopedTrustRationaleSection />
        <EthicsSection />
        <FounderStorySection />
        <PhilosophyCta />
      </main>
      <Footer />
    </div>
  );
}
