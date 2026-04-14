import FadeIn from "../FadeIn";

const tiers = [
  {
    tier: "Tier 1",
    pct: "85%",
    label: "Instant classification",
    detail: "Is this simple? Route it fast. Uses Haiku. ~$0.0003 per message.",
    color: "bg-[#22B8B0]",
    width: "w-[85%]",
  },
  {
    tier: "Tier 2",
    pct: "12%",
    label: "Decomposition",
    detail: "Is this complex? Break it down. Uses Sonnet. ~$0.005 per message.",
    color: "bg-[#E7B83D]",
    width: "w-[12%]",
  },
  {
    tier: "Tier 3",
    pct: "3%",
    label: "Strategy",
    detail: "Is this hard? Make a plan first. Uses Opus. ~$0.03 per message.",
    color: "bg-[#F46F61]",
    width: "w-[3%]",
  },
];

export default function PlanningLayerSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Thinks before it thinks.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Most AI companies profit when you use more tokens. Palari charges a
            flat subscription. We profit when you trust your Palari enough to
            keep using it &mdash; which happens when it&apos;s thoughtful with
            your resources.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 space-y-6">
            {tiers.map((t) => (
              <div key={t.tier} className="flex items-start gap-4">
                <div className="w-16 shrink-0 text-right">
                  <span className="text-lg font-bold text-[#2E2A7B]">
                    {t.pct}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-3 w-3 shrink-0 rounded-full ${t.color}`}
                    />
                    <h3 className="text-base font-semibold text-[#2E2A7B]">
                      {t.tier}: {t.label}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-[#4A4D73]">
                    {t.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 rounded-[24px] bg-gradient-to-br from-[#EEEAF8] via-white to-[#F0F9F8] p-6 ring-1 ring-[#2E2A7B]/5">
            <p className="text-base leading-relaxed text-[#4A4D73]">
              When Sofia says{" "}
              <span className="font-medium text-[#2E2A7B]">
                &ldquo;we&apos;re running low this week, want me to save the
                deep analysis for Friday?&rdquo;
              </span>{" "}
              &mdash; that&apos;s the Planning Layer protecting your budget.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-8 text-center text-sm text-[#4A4D73]">
            Only Palari has the structural incentive to help you spend less. We
            charge a flat subscription. The less compute you waste, the happier
            we both are.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
