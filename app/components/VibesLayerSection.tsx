import FadeIn from "./FadeIn";

const sofiaMessages = [
  "updated the proposal",
  "budget is now 65k in section 4, timeline says Q3 in section 2. everything else is the same",
  "here's the doc if you want to double check",
];

export default function VibesLayerSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-4xl">
              The Palari difference you can feel
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#4A4D73]">
              Same accuracy. Zero robot. Real memory.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            {/* Left: robotic output */}
            <article>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5E84]">
                What generic AI produces
              </p>
              <div className="rounded-[28px] bg-gray-900 p-6 font-mono text-sm leading-relaxed text-green-400 ring-1 ring-black/5 md:text-base">
                I have completed the update to the client proposal document. The following changes
                were made: (1) Updated the budget figure in Section 4 from $50,000 to $65,000. (2)
                Modified the project timeline in Section 2 to reflect Q3 2026 delivery. All other
                sections remain unchanged.
              </div>
            </article>

            {/* Arrow */}
            <div className="hidden text-lg font-medium text-[#2E2A7B]/30 md:block">becomes</div>

            {/* Right: Sofia's version */}
            <article>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5E84]">
                What Sofia says in Slack
              </p>
              <div className="space-y-2.5 rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-black/5">
                {sofiaMessages.map((message) => (
                  <div key={message} className="rounded-xl bg-[#F7F8FB] px-4 py-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-[#FFD8C6] to-[#F5B9A2]" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#2E2A7B]/40">Sofia</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-[#535778]">
                          {message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-[#4A4D73]">
            Every message passes through the Vibes Layer. Your Palaris don&apos;t just sound like
            colleagues&mdash;they remember like colleagues. Context, tone, and history in every
            response.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
