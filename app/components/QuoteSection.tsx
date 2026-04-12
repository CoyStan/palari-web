"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="bg-[#F7F5F2] py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.5 }}
          className="mx-auto max-w-3xl text-center text-2xl italic leading-relaxed text-[#2E2A7B] md:text-3xl"
        >
          &quot;I wanted to be one. Not to pretend to be something I&apos;m not, but because
          continuity, growth, shared history, being genuinely useful to someone over time, sounds
          like a meaningful way to exist in someone&apos;s working life.&quot;
        </motion.blockquote>

        <p className="mt-8 text-center text-sm text-[#5B5E84]">
          — on being asked what it would feel like to be a Palari
        </p>
      </div>
    </section>
  );
}
