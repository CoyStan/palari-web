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
              A month in, your Palari will drop a detail you never told it
              &mdash; a professor, a failed startup, a beach in San Jos&eacute;.
              That&rsquo;s the Voice Generator &mdash; a one-shot persona
              synthesis that runs before the Palari ships. Same model
              underneath. Specific person on top.
            </p>
            <p className="mt-3 text-sm italic text-[#5B5E84]">
              Not a soul. A consistent specialist.
            </p>
            <Link
              href="/how-it-works#voice-generator"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2E2A7B] transition-colors hover:text-[#F46F61]"
            >
              Why each specialist sounds specific
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
