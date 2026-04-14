import FadeIn from "../FadeIn";

const channels = [
  {
    title: "Life Generator",
    when: "Once, at birth",
    detail:
      "Runs one time per Palari. Populates life_event, sensory fragments, relationship ghosts, and opinions. This is the biography.",
  },
  {
    title: "Automatic extraction",
    when: "After every substantive conversation",
    detail:
      "A background Haiku call reads the exchange and extracts up to three memories. Cost is about $0.0002. FTS5 full-text checks stop duplicates; a similar memory gets its importance bumped by 0.05 instead.",
  },
  {
    title: "Session summaries",
    when: "When a session ends",
    detail:
      "Haiku reads the last twenty messages and writes a structured summary stored as recent_life. Short-term continuity without re-reading history every time.",
  },
  {
    title: "Manual seeding",
    when: "During onboarding",
    detail:
      "An operator can insert memories directly. Useful for bootstrapping with team facts that would otherwise take weeks to learn.",
  },
];

export default function MemoryCreationChannels() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Four ways memories get created.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Memory formation is not a single process. Different channels
            cover different timescales, from the Palari&rsquo;s
            pre-generated life to the conversation you had five minutes
            ago.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {channels.map((c, i) => (
            <FadeIn key={c.title}>
              <div className="h-full rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-[#2E2A7B] ring-1 ring-black/5">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-[#2E2A7B]">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                  {c.when}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4D73]">
                  {c.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
