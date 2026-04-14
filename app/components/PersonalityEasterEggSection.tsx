"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

export default function PersonalityEasterEggSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <div className="rounded-[28px] bg-gradient-to-br from-[#FFF8F2] via-white to-[#F7F5F2] p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
              Day 30
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#4A4D73] md:text-lg">
              Around day 30, your Palari will casually mention a professor it
              studied under, a startup that failed, a beach in San Jos&eacute;.
              You didn&apos;t tell it any of that. It comes from a 28-year
              generated biography that runs under the Vibes Layer &mdash; the
              reason each Palari sounds like a specific person, not a generic
              assistant.
            </p>
            <p className="mt-3 text-sm italic text-[#5B5E84]">
              It&apos;s not the pitch. It&apos;s the surprise.
            </p>
            <Link
              href="/how-it-works#life-generator"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2E2A7B] transition-colors hover:text-[#F46F61]"
            >
              How Palaris develop a voice
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
