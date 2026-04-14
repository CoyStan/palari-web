"use client";

import { motion } from "framer-motion";

export default function TrustHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#F0F9F8] via-white to-[#EEEAF8]">
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#22B8B0]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#E7B83D]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center rounded-full border border-[#2E2A7B]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#2E2A7B] shadow-sm"
        >
          Trust, scoped
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl lg:text-5xl"
        >
          You don&apos;t give the AI the keys.
          <br />
          You give Sofia one folder.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4A4D73]"
        >
          Most AI tools ask for everything or nothing. Palari asks for
          exactly what each coworker needs, the same way you&rsquo;d
          onboard a new hire. Start narrow. Expand with trust. Contain the
          blast radius.
        </motion.p>
      </div>
    </section>
  );
}
