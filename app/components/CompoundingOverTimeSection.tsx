import FadeIn from "./FadeIn";

const stages = [
  {
    label: "Week 1",
    body: "Your Palari learns your name, your project, your file structure. She asks the right questions because she doesn&rsquo;t yet know what you care about.",
    accent: "bg-[#E7B83D]",
  },
  {
    label: "Month 1",
    body: "She knows your formatting preferences, your common mistakes, which files you keep coming back to. The questions stop. The answers start fitting.",
    accent: "bg-[#22B8B0]",
  },
  {
    label: "Month 3",
    body: "She anticipates what you need before you ask. She flags the stale revenue data because she remembers it was stale last quarter too.",
    accent: "bg-[#9B4FCC]",
  },
  {
    label: "Month 6",
    body: "Switching means losing someone who knows how you think. That is not lock-in. It is a relationship.",
    accent: "bg-[#F46F61]",
  },
];

export default function CompoundingOverTimeSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              What happens over time.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              A Palari compounds. What you tell her today shapes how she
              answers you in October. After six months, switching means
              losing someone who knows how you think.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage) => (
            <FadeIn key={stage.label}>
              <div className="flex h-full flex-col rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${stage.accent}`}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2E2A7B]">
                    {stage.label}
                  </p>
                </div>
                <p
                  className="mt-4 text-sm leading-relaxed text-[#4A4D73]"
                  dangerouslySetInnerHTML={{ __html: stage.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
