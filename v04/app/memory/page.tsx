import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MemoryHero from "../components/memory/MemoryHero";
import TwoBrainDiagram from "../components/memory/TwoBrainDiagram";
import ElevenMemoryTypes from "../components/memory/ElevenMemoryTypes";
import MemoryCreationChannels from "../components/memory/MemoryCreationChannels";
import MemoryLifecycle from "../components/memory/MemoryLifecycle";
import EntityGraph from "../components/memory/EntityGraph";
import TemporalValidity from "../components/memory/TemporalValidity";
import EndToEndExample from "../components/memory/EndToEndExample";
import CostStats from "../components/memory/CostStats";

export const metadata: Metadata = {
  title: "Memory. Palari.",
  description:
    "Eleven memory types routed to the layer that needs them. An entity graph, temporal validity, importance decay, compression. Sub-cent memory costs and no vector database.",
  alternates: { canonical: "https://palari.io/memory" },
  openGraph: {
    title: "Memory. Palari.",
    description:
      "Eleven memory types routed to the layer that needs them. An entity graph, temporal validity, importance decay, compression.",
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
        <ElevenMemoryTypes />
        <MemoryCreationChannels />
        <MemoryLifecycle />
        <EntityGraph />
        <TemporalValidity />
        <EndToEndExample />
        <CostStats />
      </main>
      <Footer />
    </div>
  );
}
