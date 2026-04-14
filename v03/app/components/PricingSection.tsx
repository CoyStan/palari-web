"use client";

import FadeIn from "./FadeIn";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Free for the founding batch.
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center text-base leading-7 text-[#4A4D73]">
            <p>
              During Stage 1, there is no subscription fee. You bring your own
              API key. Palari covers the rest. Your only cost is what you&apos;d
              pay Anthropic or OpenAI anyway &mdash; roughly $5&ndash;15/month
              depending on usage.
            </p>
          </div>
        </FadeIn>

        {/* Future pricing preview */}
        <FadeIn>
          <div className="mx-auto mt-14 max-w-3xl">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#4A4D73]/50">
              After the founding batch
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[28px] border border-black/5 bg-[#F7F5F2] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                  Individual
                </p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-[#2E2A7B]">
                    $29
                  </span>
                  <span className="pb-0.5 text-sm text-[#5B5E84]">/month</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#4A4D73]">
                  1 Palari with full memory, Planning Layer budget controls,
                  scoped access, Slack and Google Workspace integrations. BYOK
                  for the Primary Model.
                </p>
              </div>

              <div className="rounded-[28px] border border-black/5 bg-[#F7F5F2] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                  Team
                </p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-[#2E2A7B]">
                    $149
                  </span>
                  <span className="pb-0.5 text-sm text-[#5B5E84]">/month</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#4A4D73]">
                  3 Palaris, shared team memory, cross-Palari coordination,
                  admin dashboard, the inbox system for cross-Palari
                  communication.
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-[#4A4D73]/70">
              But not for you. The founding batch is free.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
