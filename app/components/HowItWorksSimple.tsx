"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

const steps = [
  {
    label: "You type a message in Slack",
    detail: null,
    color: "bg-[#2E2A7B]",
  },
  {
    label: "Planning Layer",
    detail: "Classifies task, checks budget, picks the right model",
    color: "bg-[#E7B83D]",
  },
  {
    label: "Mama Model",
    detail: "Does the actual work \u2014 reads files, writes code, analyzes data",
    color: "bg-[#22B8B0]",
  },
  {
    label: "Vibes Layer",
    detail: "Rewrites the output in your Palari\u2019s voice",
    color: "bg-[#F46F61]",
  },
  {
    label: "You get a reply that sounds like a person",
    detail: null,
    color: "bg-[#9B4FCC]",
  },
];

export default function HowItWorksSimple() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Thinks before it thinks.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#4A4D73]">
              Every message flows through three layers: planning, execution, and
              personality.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-14 space-y-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex gap-4">
                {/* Vertical line + dot */}
                <div className="flex flex-col items-center">
                  <span
                    className={`h-4 w-4 shrink-0 rounded-full ${step.color} ring-4 ring-[#F7F5F2]`}
                  />
                  {i < steps.length - 1 && (
                    <div className="w-0.5 grow bg-[#2E2A7B]/10" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <p className="text-base font-semibold text-[#2E2A7B]">
                    {step.label}
                  </p>
                  {step.detail && (
                    <p className="mt-1 text-sm text-[#4A4D73]">
                      {step.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-4 text-center text-sm text-[#4A4D73]">
            85% of messages go through the fast path. Your Palari only
            escalates when the task is genuinely complex.
          </p>
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
