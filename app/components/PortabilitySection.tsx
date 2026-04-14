"use client";

import FadeIn from "./FadeIn";

const scenarios = [
  {
    trigger: "A better model appears",
    result:
      "Update the engine config. Your Palari\u2019s memory, scope, and working style stay exactly the same.",
  },
  {
    trigger: "Your provider deprecates a model",
    result:
      "Switch to Claude, GPT, or an open model. Your Palari migrates without losing context.",
  },
  {
    trigger: "Your company leaves Slack",
    result:
      "Run the open-source server on your own infrastructure. Same Palari, new platform.",
  },
];

export default function PortabilitySection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
              Portability
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              You own your AI coworker. Take it anywhere.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#4A4D73]">
              Not locked to Claude. Not locked to Slack. Not locked to any
              server. Your Palari&apos;s identity lives in a portable SQLite
              file &mdash; you download it, back it up, move it.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/60">
                Traditional AI
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#535778]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ccc]" />
                  <span>Your data lives on their servers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ccc]" />
                  <span>History disappears when you cancel</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ccc]" />
                  <span>Switching means starting over</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ccc]" />
                  <span>You rent access to a model</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border-2 border-[#22B8B0]/20 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                Palari
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#535778]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22B8B0]" />
                  <span>Identity lives in a portable SQLite file you own</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22B8B0]" />
                  <span>Export everything, any time</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22B8B0]" />
                  <span>Self-host the open-source server</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22B8B0]" />
                  <span>Model-agnostic: Claude, GPT, open models</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {scenarios.map((s) => (
              <div
                key={s.trigger}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold text-[#2E2A7B]">
                  {s.trigger}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#535778]">
                  {s.result}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base italic text-[#5B5E84]">
            Lock-in through value, not walls.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
