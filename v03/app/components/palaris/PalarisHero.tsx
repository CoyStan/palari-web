"use client";

import { motion } from "framer-motion";

export default function PalarisHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#EEEAF8] via-white to-[#F0F9F8]">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F46F61]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#22B8B0]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10 lg:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl"
        >
          Seven specialists. Assemble the team your work actually needs.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#4A4D73]"
        >
          Each Palari is a domain expert with scoped access, its own memory,
          and a working style that sharpens as you work together.
        </motion.p>
      </div>
    </section>
  );
}
