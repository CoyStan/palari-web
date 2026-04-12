"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const words = ["Your", "AI", "team", "lives", "in", "Slack"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export default function HeroSection() {
  return (
    <FadeIn>
      <section className="flex min-h-screen items-center py-24 md:py-32" id="top">
        <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center md:px-8">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-[#E8FBF5] px-4 py-2 text-sm font-medium text-[#2C9C7F]">
              Now in early access
            </span>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="text-5xl font-bold tracking-tight text-[#1B2A4A] md:text-7xl"
            >
              {words.map((word) => (
                <motion.span key={word} variants={item} className="mr-3 inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <p className="max-w-xl text-xl leading-relaxed text-gray-500">
              Palaris are AI coworkers with names, personalities, and opinions. They write code,
              edit your docs, set reminders, and show up to standup. You talk in Slack. They
              handle the rest.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#early-access"
                className="rounded-full bg-gradient-to-r from-[#3ECDA5] to-[#3B5EE8] px-8 py-4 text-lg font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
              >
                Get Early Access
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-lg font-medium text-[#1B2A4A] transition-colors hover:text-[#3B5EE8]"
              >
                See how it works
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center md:justify-end">
            <div className="aspect-square w-full max-w-md rounded-3xl border border-gray-100 bg-gradient-to-br from-teal-50 to-blue-50">
              {/* DROP CHARACTER IMAGE HERE */}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
