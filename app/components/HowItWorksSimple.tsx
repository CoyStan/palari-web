"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

const tiers = [
  {
    label: "Fast responses",
    width: "w-[85%]",
    color: "bg-[#22B8B0]",
    pct: "85%",
  },
  {
    label: "Careful thinking",
    width: "w-[40%]",
    color: "bg-[#9B4FCC]",
    pct: "12%",
  },
  {
    label: "Deep strategy",
    width: "w-[15%]",
    color: "bg-[#2E2A7B]",
    pct: "3%",
  },
];

export default function HowItWorksSimple() {
  return (
    <section id="how-it-works" className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Thinks before it thinks.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-[#4A4D73]">
              Every message flows through three layers: planning, execution, and
              personality.
            </p>
          </div>
        </FadeIn>

        {/* Architecture diagram */}
        <FadeIn>
          <div className="mt-10">
            {/* Input */}
            <div className="mx-auto max-w-md rounded-xl border border-[#2E2A7B]/10 bg-[#2E2A7B] px-4 py-3 text-center text-sm font-medium text-white">
              You type a message in Slack
            </div>
            <div className="mx-auto h-6 w-0.5 bg-[#2E2A7B]/15" />

            {/* Three layers */}
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border-2 border-[#E7B83D]/30 bg-[#FFFCF2] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-3 w-3 shrink-0 rounded-sm bg-[#E7B83D]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E7B83D]">
                    Planning Layer
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#535778]">
                  Classifies task, checks budget, picks the right model. Routes
                  85% through the fast path.
                </p>
              </div>

              <div className="rounded-xl border-2 border-[#22B8B0]/30 bg-[#F0FFFE] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-3 w-3 shrink-0 rounded-sm bg-[#22B8B0]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#22B8B0]">
                    Mama Model
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#535778]">
                  Does the actual work &mdash; reads files, writes code, analyzes
                  data, answers questions.
                </p>
              </div>

              <div className="rounded-xl border-2 border-[#F46F61]/30 bg-[#FFF8F7] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-3 w-3 shrink-0 rounded-sm bg-[#F46F61]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F46F61]">
                    Vibes Layer
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#535778]">
                  Rewrites the output in your Palari&apos;s voice. Personality
                  isn&apos;t decoration &mdash; it&apos;s the last mile.
                </p>
              </div>
            </div>

            <div className="mx-auto h-6 w-0.5 bg-[#9B4FCC]/15" />

            {/* Output */}
            <div className="mx-auto max-w-md rounded-xl border border-[#9B4FCC]/20 bg-[#F8F5FF] px-4 py-3 text-center text-sm font-medium text-[#9B4FCC]">
              You get a reply that sounds like a person
            </div>
          </div>
        </FadeIn>

        {/* Intelligence tiers bar chart */}
        <FadeIn>
          <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#9B4FCC]">
              Intelligence Tiers
            </p>
            <div className="space-y-3">
              {tiers.map((tier) => (
                <div key={tier.label} className="flex items-center gap-4">
                  <span className="w-8 shrink-0 text-right text-xs font-bold text-[#5B5E84]">
                    {tier.pct}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`${tier.width} h-5 rounded-full ${tier.color}`}
                    />
                  </div>
                  <span className="w-32 shrink-0 text-sm text-[#5B5E84]">
                    {tier.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#4A4D73]">
              No wasted compute. No surprise bills. Your Palari only escalates
              when the task is genuinely complex.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E2A7B] transition-colors hover:text-[#F46F61]"
            >
              See the full architecture
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
