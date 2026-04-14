import FadeIn from "../FadeIn";

const stages = [
  {
    label: "Day 1",
    headline: "Read-only on one folder",
    body: "Sofia sees /frontend/experiments/. She can read and describe. She can&rsquo;t change anything.",
    accent: "bg-[#E7B83D]",
  },
  {
    label: "Week 2",
    headline: "Write access on the same folder",
    body: "She&rsquo;s proved she understands the code. She can now propose edits in /frontend/experiments/. You still approve every change.",
    accent: "bg-[#22B8B0]",
  },
  {
    label: "Month 1",
    headline: "Wider read, same write",
    body: "Read access extends to /frontend/. Writes stay scoped. She now sees context she didn&rsquo;t before and suggests better.",
    accent: "bg-[#9B4FCC]",
  },
  {
    label: "Month 3",
    headline: "Full frontend ownership",
    body: "Write across /frontend/. Her memory of the codebase is deep enough that her proposals land on the first try.",
    accent: "bg-[#F46F61]",
  },
];

export default function ProgressiveTrustSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            Progressive trust
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Scope widens the same way it does for new hires.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Start Sofia on a test folder. Expand as she proves she&rsquo;s
            careful with the access she already has. This mirrors how you
            onboard a person, because it&rsquo;s the pattern that actually
            works.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {stages.map((s) => (
            <FadeIn key={s.label}>
              <div className="h-full rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${s.accent}`}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                    {s.label}
                  </p>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[#2E2A7B]">
                  {s.headline}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-[#4A4D73]"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
