import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ManifestoHero from "../components/manifesto/ManifestoHero";
import ThreeLayersSection from "../components/manifesto/ThreeLayersSection";
import PortabilitySection from "../components/manifesto/PortabilitySection";
import NeverTheSameSection from "../components/manifesto/NeverTheSameSection";
import EthicsSection from "../components/manifesto/EthicsSection";
import FounderStorySection from "../components/manifesto/FounderStorySection";
import ManifestoCta from "../components/manifesto/ManifestoCta";

export const metadata: Metadata = {
  title: "The Palari Manifesto \u2014 Palari",
  description:
    "What a Palari is, why identity belongs to you, and the principles we build on.",
  alternates: { canonical: "https://palari.io/manifesto" },
  openGraph: {
    title: "The Palari Manifesto \u2014 Palari",
    description:
      "What a Palari is, why identity belongs to you, and the principles we build on.",
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
        <ThreeLayersSection />
        <PortabilitySection />
        <NeverTheSameSection />
        <EthicsSection />
        <FounderStorySection />
        <ManifestoCta />
      </main>
      <Footer />
    </div>
  );
}
