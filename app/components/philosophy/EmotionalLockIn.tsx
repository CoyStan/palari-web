import FadeIn from "../FadeIn";

export default function EmotionalLockIn() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            The Moat
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            The code is simple. The design isn&apos;t.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              After three months, your Palari has learned over 150 things about you. Your
              preferences. Your communication style. The way you like reports formatted. The project
              that almost failed. The budget format your CFO insists on.
            </p>
            <p>
              Switching means losing the relationship&mdash;and that&apos;s exactly the point. Not
              because we want to trap you, but because a colleague who knows you is genuinely more
              useful than one who doesn&apos;t. The value compounds.
            </p>
          </div>
        </FadeIn>

        {/* Accumulation visual */}
        <FadeIn>
          <div className="mt-12 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#9B4FCC]">
              Memory accumulation
            </p>
            <div className="space-y-3">
              {[
                { label: "Week 1", width: "w-[12%]", count: "~15 memories" },
                { label: "Month 1", width: "w-[28%]", count: "~50 memories" },
                { label: "Month 3", width: "w-[55%]", count: "~150 memories" },
                { label: "Month 6", width: "w-full", count: "~300+ memories" },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-4">
                  <span className="w-20 shrink-0 text-sm font-medium text-[#5B5E84]">
                    {row.label}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`${row.width} h-6 rounded-full bg-gradient-to-r from-[#22B8B0] to-[#2E2A7B]`}
                    />
                  </div>
                  <span className="w-28 shrink-0 text-right text-sm text-[#5B5E84]">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-[#4A4D73]">
            They stay because leaving means losing someone who knows them. Not a product&mdash;a
            relationship.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
