import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MemoryHero from "../components/memory/MemoryHero";
import MemoryTwoKinds from "../components/memory/MemoryTwoKinds";
import EntityGraph from "../components/memory/EntityGraph";
import TemporalValidity from "../components/memory/TemporalValidity";
import CostStats from "../components/memory/CostStats";
import EvolvingArchitectureSection from "../components/memory/EvolvingArchitectureSection";

const title = "Memory. Palari.";
const description =
  "Your Palari remembers your work. One part of its memory stays stable — the character. One part grows with you. Under a cent per lookup, portable, yours to take with you.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://palari.io/memory" },
  openGraph: {
    title,
    description,
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
        <MemoryTwoKinds />
        <EntityGraph />
        <TemporalValidity />
        <CostStats />
        <EvolvingArchitectureSection />
      </main>
      <Footer />
    </div>
  );
}
