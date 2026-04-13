import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PalarisHero from "../components/palaris/PalarisHero";
import PalariProfiles from "../components/palaris/PalariProfiles";
import BornVsShaped from "../components/palaris/BornVsShaped";
import PalarisCta from "../components/palaris/PalarisCta";

export const metadata: Metadata = {
  title: "Meet the Palaris \u2014 Palari",
  description:
    "Every Palari is born, not built. Meet Sofia, Leo, Alfred, Ciro, Jamal, Ravi, and Yuki \u2014 seven AI coworkers with unique biographies and voices.",
  alternates: { canonical: "https://palari.io/palaris" },
  openGraph: {
    title: "Meet the Palaris \u2014 Palari",
    description:
      "Every Palari is born, not built. Meet the seven founding AI coworkers.",
    type: "website",
    url: "https://palari.io/palaris",
  },
};

export default function PalarisPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5F2] text-[#2E2A7B]">
      <Navbar />
      <main>
        <PalarisHero />
        <PalariProfiles />
        <BornVsShaped />
        <PalarisCta />
      </main>
      <Footer />
    </div>
  );
}
