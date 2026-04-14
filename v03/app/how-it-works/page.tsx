import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowItWorksHero from "../components/how-it-works/HowItWorksHero";
import TwoBrainSection from "../components/how-it-works/TwoBrainSection";
import MemorySystemSection from "../components/how-it-works/MemorySystemSection";
import VoiceGeneratorSection from "../components/how-it-works/VoiceGeneratorSection";
import PlanningLayerSection from "../components/how-it-works/PlanningLayerSection";
import ScopedTrustSection from "../components/how-it-works/ScopedTrustSection";
import CoordinationSection from "../components/how-it-works/CoordinationSection";
import HowItWorksCta from "../components/how-it-works/HowItWorksCta";

export const metadata: Metadata = {
  title: "How It Works \u2014 Palari",
  description:
    "The architecture behind an AI coworker with memory. Two layers, eleven memory types, a planning layer that saves you money, and scoped trust.",
  alternates: { canonical: "https://palari.io/how-it-works" },
  openGraph: {
    title: "How It Works \u2014 Palari",
    description:
      "The architecture behind an AI coworker with memory. Two layers, eleven memory types, a planning layer that saves you money, and scoped trust.",
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
        <PlanningLayerSection />
        <ScopedTrustSection />
        <CoordinationSection />
        <VoiceGeneratorSection />
        <HowItWorksCta />
      </main>
      <Footer />
    </div>
  );
}
