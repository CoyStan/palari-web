import type { Metadata } from "next";
import EfficiencySection from "../components/memory/EfficiencySection";
import EndToEndFlow from "../components/memory/EndToEndFlow";
import MemoryCtaSection from "../components/memory/MemoryCtaSection";
import MemoryHero from "../components/memory/MemoryHero";
import MemoryLifecycle from "../components/memory/MemoryLifecycle";
import MemoryTypesGrid from "../components/memory/MemoryTypesGrid";
import TwoBrainDiagram from "../components/memory/TwoBrainDiagram";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Memory Architecture \u2014 Palari",
  description:
    "How Palari\u2019s two-brain memory system creates AI colleagues that genuinely remember who you are.",
  alternates: { canonical: "https://palari.io/memory" },
  openGraph: {
    title: "Memory Architecture \u2014 Palari",
    description:
      "How Palari\u2019s two-brain memory system creates AI colleagues that genuinely remember who you are.",
    type: "website",
    url: "https://palari.io/memory",
  },
};

export default function MemoryPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <MemoryHero />
        <TwoBrainDiagram />
        <MemoryTypesGrid />
        <MemoryLifecycle />
        <EndToEndFlow />
        <EfficiencySection />
        <MemoryCtaSection />
      </main>
      <Footer />
    </div>
  );
}
