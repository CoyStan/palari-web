import FadeIn from "./FadeIn";

const timeline = [
  {
    month: "March",
    improvement: "New memory indexing. Retrieval 50% faster.",
    accent: "bg-[#22B8B0]",
  },
  {
    month: "April",
    improvement:
      "Cheaper model adopted for the voice layer. Cost per response dropped 25x.",
    accent: "bg-[#F46F61]",
  },
  {
    month: "April",
    improvement: "Entity graph gained alias resolution across projects.",
    accent: "bg-[#9B4FCC]",
  },
  {
    month: "May",
    improvement: "New voice generation process. Richer personalities.",
    accent: "bg-[#E7B83D]",
  },
];

export default function NeverFallBehindSection() {
  return (
    <section
      id="never-fall-behind"
      className="relative overflow-hidden bg-[#EEEAF8] py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#22B8B0]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#9B4FCC]/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
              You never fall behind
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              AI moves every week. You don't have to.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4A4D73]">
              New models. New efficiency techniques. New papers on memory,
              retrieval, and context. Keeping up is a full-time job. We do
              that job. Your coworker gets the benefit.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-12 max-w-3xl rounded-[28px] bg-white p-6 shadow-lg shadow-[#2E2A7B]/5 ring-1 ring-black/5 md:p-8">
            <div className="flex items-start gap-3">
              <span
                className="mt-1 h-10 w-10 shrink-0 rounded-full bg-[#2E2A7B]"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/70">
                  Palari, today
                </p>
                <p className="mt-2 text-base leading-relaxed text-[#2E2A7B]">
                  Updated Sofia's engine. Response time improved 40%. Cost
                  per message dropped 30%. Your teams, access controls, and
                  working style are unchanged.
                </p>
                <p className="mt-3 text-sm italic leading-relaxed text-[#5B5E84]">
                  That's the product. You keep working. We keep improving.
                  Your coworker sounds the same, remembers the same things,
                  has the same access. The engine underneath just got
                  better.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, i) => (
            <FadeIn key={`${item.month}-${i}`}>
              <div className="flex h-full flex-col rounded-[24px] bg-white p-6 ring-1 ring-black/5">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${item.accent}`}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2E2A7B]">
                    {item.month}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                  {item.improvement}
                </p>
                <p className="mt-4 text-xs italic text-[#5B5E84]/70">
                  Invisible to the user.
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-[#5B5E84]">
            This is how Palari is built. Identity (memories, voice,
            relationships) is separated from compute (which model runs
            underneath). Swap the model: same coworker. Upgrade the memory
            system: same coworker. Every improvement in AI infrastructure
            becomes an improvement in your coworker, without you moving a
            finger.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
