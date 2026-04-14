import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowItWorksHero from "../components/how-it-works/HowItWorksHero";
import TwoBrainSection from "../components/how-it-works/TwoBrainSection";
import MemorySystemSection from "../components/how-it-works/MemorySystemSection";
import LifeGeneratorSection from "../components/how-it-works/LifeGeneratorSection";
import PlanningLayerSection from "../components/how-it-works/PlanningLayerSection";
import ScopedTrustSection from "../components/how-it-works/ScopedTrustSection";
import CoordinationSection from "../components/how-it-works/CoordinationSection";
import HowItWorksCta from "../components/how-it-works/HowItWorksCta";

export const metadata: Metadata = {
  title: "How It Works \u2014 Palari",
  description:
    "The architecture behind a coworker that remembers, plans, and sounds like a person. Two brains, seven memory types, three planning tiers.",
  alternates: { canonical: "https://palari.io/how-it-works" },
  openGraph: {
    title: "How It Works \u2014 Palari",
    description:
      "The architecture behind a coworker that remembers, plans, and sounds like a person.",
    type: "website",
    url: "https://palari.io/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <HowItWorksHero />
        <TwoBrainSection />
        <MemorySystemSection />
        <LifeGeneratorSection />
        <PlanningLayerSection />
        <ScopedTrustSection />
        <CoordinationSection />
        <HowItWorksCta />
      </main>
      <Footer />
    </div>
  );
}
