import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LifeHero from "../components/life/LifeHero";
import LifeGenerationOverview from "../components/life/LifeGenerationOverview";
import FourPassesSection from "../components/life/FourPassesSection";
import CompressionSection from "../components/life/CompressionSection";
import SynthesisSection from "../components/life/SynthesisSection";
import HumanizationSection from "../components/life/HumanizationSection";
import LifeCta from "../components/life/LifeCta";

export const metadata: Metadata = {
  title: "How Palaris Are Born \u2014 Palari",
  description:
    "Each Palari has lived 28 years before they meet you. Here\u2019s how we generate a life.",
  alternates: { canonical: "https://palari.io/life" },
  openGraph: {
    title: "How Palaris Are Born \u2014 Palari",
    description:
      "Each Palari has lived 28 years before they meet you. Here\u2019s how we generate a life.",
    type: "website",
    url: "https://palari.io/life",
  },
};

export default function LifePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <LifeHero />
        <LifeGenerationOverview />
        <FourPassesSection />
        <CompressionSection />
        <SynthesisSection />
        <HumanizationSection />
        <LifeCta />
      </main>
      <Footer />
    </div>
  );
}
