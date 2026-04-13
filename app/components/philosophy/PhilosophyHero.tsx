"use client";

import { motion } from "framer-motion";

export default function PhilosophyHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#EEEAF8] via-white to-[#F0F9F8]">
      <div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#9B4FCC]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 lg:py-20">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex w-fit items-center rounded-full border border-[#2E2A7B]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#2E2A7B] shadow-sm"
          >
            Philosophy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-6xl"
          >
            Memory is not storage
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#4A4D73]"
          >
            Most AI memory works like a filing cabinet&mdash;store a fact, retrieve it later. Palari
            treats memory like a living system. The difference changes everything.
          </motion.p>
        </div>

        {/* Right: Filing Cabinet vs Living Memory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 grid gap-4"
        >
          <div className="rounded-[20px] bg-white/60 p-5 ring-1 ring-black/5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F46F61]">
              &#10007; Filing Cabinet
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#535778]">
              <li>Store a fact, retrieve it later</li>
              <li>Every memory has equal weight</li>
              <li>Nothing fades, nothing connects</li>
            </ul>
          </div>
          <div className="rounded-[20px] bg-white p-5 shadow-sm ring-2 ring-[#22B8B0]/30">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#22B8B0]">
              &#10003; Living Memory
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#535778]">
              <li>Memories reinforce with use</li>
              <li>Unimportant details naturally decay</li>
              <li>Old memories compress into wisdom</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
