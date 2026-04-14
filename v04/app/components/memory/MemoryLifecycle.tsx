import FadeIn from "../FadeIn";

const phases = [
  {
    title: "Reinforcement",
    detail:
      "Loaded into context updates last_accessed and bumps access_count. When extraction finds an existing fact, importance goes up by 0.05. A memory confirmed three times or more becomes near-permanent.",
    color: "border-[#22B8B0]/30",
    accent: "text-[#22B8B0]",
  },
  {
    title: "Decay",
    detail:
      "On server startup, a cleanup pass drops importance by 0.1 on transient memories that have not been accessed in fourteen days. Below 0.1, the memory is deleted. Permanent types are excluded.",
    color: "border-[#E7B83D]/30",
    accent: "text-[#E7B83D]",
  },
  {
    title: "Compression",
    detail:
      "When detailed memories on one topic cross a threshold, a compression pass synthesizes them into a shorter long-term summary. Five memories become one understanding. The detailed ones are replaced.",
    color: "border-[#9B4FCC]/30",
    accent: "text-[#9B4FCC]",
  },
];

export default function MemoryLifecycle() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Memories live, age, and compress.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            A memory that matters gets reinforced every time you touch it.
            A memory that stops mattering fades. And when a lot of small
            memories accumulate on one topic, they get folded into one
            durable understanding.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {phases.map((p) => (
            <FadeIn key={p.title}>
              <div
                className={`h-full rounded-[24px] border-2 ${p.color} bg-white p-6`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${p.accent}`}
                >
                  {p.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                  {p.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
