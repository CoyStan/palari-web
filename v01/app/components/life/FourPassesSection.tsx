import FadeIn from "../FadeIn";

const passes = [
  {
    title: "Defining Events",
    description:
      "The big moments that shape who someone becomes. Career changes, relationships formed and lost, failures that taught lessons.",
    example: "\"Left the startup after the board dissolved it. Learned that shipping matters more than perfection.\"",
    accent: "border-[#F46F61]/30 bg-[#FFF5F0]",
    dot: "bg-[#F46F61]",
  },
  {
    title: "Small Moments",
    description:
      "The texture of daily life. Not everything important is dramatic. Sometimes the smallest moments reveal the most.",
    example: "\"Spent a Sunday afternoon organizing a friend's bookshelf by color. It was weirdly satisfying.\"",
    accent: "border-[#22B8B0]/30 bg-[#F0F9F8]",
    dot: "bg-[#22B8B0]",
  },
  {
    title: "Relationships",
    description:
      "The people who shaped them. Mentors, rivals, friends, family. Each relationship leaves patterns that echo forward.",
    example: "\"A college roommate who never apologized. Taught me that some people show love through actions, not words.\"",
    accent: "border-[#9B4FCC]/30 bg-[#F5F0FF]",
    dot: "bg-[#9B4FCC]",
  },
  {
    title: "Sensory Fragments",
    description:
      "The sounds, smells, textures, and tastes that anchor memories. The details that make someone feel real.",
    example: "\"The smell of burned coffee in a windowless office. The click of a mechanical keyboard at 2am.\"",
    accent: "border-[#E7B83D]/30 bg-[#FFFBF0]",
    dot: "bg-[#E7B83D]",
  },
];

export default function FourPassesSection() {
  return (
    <section className="bg-gradient-to-b from-[#F7F5F2] to-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            The Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Four passes for every year of life
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Each year of a Palari&apos;s life is generated in four passes, layering depth on top of
            structure.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {passes.map((pass) => (
              <article
                key={pass.title}
                className={`rounded-[24px] border-2 p-6 ${pass.accent}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${pass.dot}`} />
                  <h3 className="text-lg font-semibold text-[#2E2A7B]">{pass.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#535778]">{pass.description}</p>
                <p className="mt-3 text-sm italic leading-relaxed text-[#5B5E84]/70">
                  {pass.example}
                </p>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
