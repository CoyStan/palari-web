import type { Metadata } from "next";
import EfficiencySection from "../components/memory/EfficiencySection";
import EndToEndFlow from "../components/memory/EndToEndFlow";
import LifeDivider from "../components/memory/LifeDivider";
import MemoryCtaSection from "../components/memory/MemoryCtaSection";
import MemoryHero from "../components/memory/MemoryHero";
import MemoryLifecycle from "../components/memory/MemoryLifecycle";
import MemoryTypesGrid from "../components/memory/MemoryTypesGrid";
import TwoBrainDiagram from "../components/memory/TwoBrainDiagram";
import VibesLayerSection from "../components/VibesLayerSection";
import LifeHero from "../components/life/LifeHero";
import LifeGenerationOverview from "../components/life/LifeGenerationOverview";
import FourPassesSection from "../components/life/FourPassesSection";
import CompressionSection from "../components/life/CompressionSection";
import SynthesisSection from "../components/life/SynthesisSection";
import HumanizationSection from "../components/life/HumanizationSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Memory & Life \u2014 Palari",
  description:
    "Eleven memory types, life generation, and the architecture that makes AI colleagues who genuinely remember.",
  alternates: { canonical: "https://palari.io/memory" },
  openGraph: {
    title: "Memory & Life \u2014 Palari",
    description:
      "Eleven memory types, life generation, and the architecture that makes AI colleagues who genuinely remember.",
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
        <VibesLayerSection />
        <LifeDivider />
        <LifeHero />
        <LifeGenerationOverview />
        <FourPassesSection />
        <CompressionSection />
        <SynthesisSection />
        <HumanizationSection />
        <EfficiencySection />
        <MemoryCtaSection />
      </main>
      <Footer />
    </div>
  );
}
