"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#F7F5F2]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(34,184,176,0.10), transparent 55%), radial-gradient(circle at 82% 78%, rgba(244,111,97,0.10), transparent 55%), radial-gradient(circle at 50% 50%, rgba(155,79,204,0.04), transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl leading-relaxed text-[#2E2A7B] md:text-2xl md:leading-[1.5]"
        >
          Each Palari has a unique voice, a persistent memory, and scoped
          access to your files. You talk to them the way you&rsquo;d talk
          to a teammate. They remember everything. The engine underneath
          keeps improving. You change nothing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <a
            href="#early-access"
            className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-[#F46F61] px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-[#F46F61]/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F46F61]/30"
          >
            Get early access
          </a>
          <a
            href="#five-voices"
            className="inline-flex min-w-[200px] items-center justify-center rounded-xl border border-[#2E2A7B]/15 bg-white/60 px-8 py-3.5 text-base font-semibold text-[#2E2A7B] backdrop-blur transition-colors hover:bg-white"
          >
            Meet your Palaris
          </a>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[#2E2A7B]/25 p-1.5">
          <motion.span
            className="block h-1.5 w-1.5 rounded-full bg-[#2E2A7B]/50"
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
