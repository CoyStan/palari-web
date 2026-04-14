import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LifeHero from "../components/life/LifeHero";
import LifeStepsSection from "../components/life/LifeStepsSection";
import FourPassesSection from "../components/life/FourPassesSection";
import CompressionSection from "../components/life/CompressionSection";
import SynthesisSection from "../components/life/SynthesisSection";
import VibesLayerHumanizationSection from "../components/life/VibesLayerHumanizationSection";
import DisclaimerCallout from "../components/life/DisclaimerCallout";

export const metadata: Metadata = {
  title: "How voices are generated. Palari.",
  description:
    "Every Palari ships with a unique voice generated through a multi-step process. Specific convictions, specific ways of noticing, consistent across thousands of interactions.",
  alternates: { canonical: "https://palari.io/life" },
  openGraph: {
    title: "How voices are generated. Palari.",
    description:
      "Every Palari ships with a unique voice generated through a multi-step process. Specific convictions, specific ways of noticing, consistent across thousands of interactions.",
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
        <LifeStepsSection />
        <FourPassesSection />
        <CompressionSection />
        <SynthesisSection />
        <VibesLayerHumanizationSection />
        <DisclaimerCallout />
      </main>
      <Footer />
    </div>
  );
}
