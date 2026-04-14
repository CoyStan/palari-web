"use client";

import { motion } from "framer-motion";

export default function ManifestoHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#EEEAF8] via-white to-[#F0F9F8]">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F46F61]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#9B4FCC]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center rounded-full border border-[#2E2A7B]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#2E2A7B] shadow-sm"
        >
          The Palari Manifesto
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl font-semibold italic tracking-tight text-[#2E2A7B] md:text-4xl lg:text-5xl"
        >
          For everyone who ever talked to a machine and wished it would
          remember.
        </motion.h1>
      </div>
    </section>
  );
}
