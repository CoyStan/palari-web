import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ManifestoHero from "../components/manifesto/ManifestoHero";
import FounderLetter from "../components/manifesto/FounderLetter";
import ThreeLayersSection from "../components/manifesto/ThreeLayersSection";
import PortabilitySection from "../components/manifesto/PortabilitySection";
import EthicsSection from "../components/manifesto/EthicsSection";
import FounderStorySection from "../components/manifesto/FounderStorySection";
import ManifestoCta from "../components/manifesto/ManifestoCta";

export const metadata: Metadata = {
  title: "Manifesto \u2014 Palari",
  description:
    "Why we built AI coworkers with memory. The engineering case for portable memory, two-layer brains, and scoped trust.",
  alternates: { canonical: "https://palari.io/manifesto" },
  openGraph: {
    title: "Manifesto \u2014 Palari",
    description:
      "Why we built AI coworkers with memory. The engineering case for portable memory, two-layer brains, and scoped trust.",
    type: "website",
    url: "https://palari.io/manifesto",
  },
};

export default function ManifestoPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <ManifestoHero />
        <FounderLetter />
        <ThreeLayersSection />
        <PortabilitySection />
        <EthicsSection />
        <FounderStorySection />
        <ManifestoCta />
      </main>
      <Footer />
    </div>
  );
}
