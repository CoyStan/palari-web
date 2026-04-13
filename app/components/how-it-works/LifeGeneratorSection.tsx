import FadeIn from "../FadeIn";

const passes = [
  {
    number: "1",
    title: "Defining Events",
    detail: "10 events generated per year, one selected randomly. Distributed from devastating to breakthrough.",
    color: "bg-[#F46F61]",
  },
  {
    number: "2",
    title: "Small Moments",
    detail: "Three texture memories per year. The details that make a life feel textured.",
    color: "bg-[#22B8B0]",
  },
  {
    number: "3",
    title: "Relationships",
    detail: "People who enter, shape, and sometimes leave the story. Key figures who matter.",
    color: "bg-[#E7B83D]",
  },
  {
    number: "4",
    title: "Sensory Fragments",
    detail: "Two pure sensory impressions per year. 10\u201315 words, no narrative.",
    color: "bg-[#9B4FCC]",
  },
];

const sensoryExamples = [
  "Chlorine smell from the public pool mixed with cut grass",
  "The specific blue of the sky through the car window driving to school in October",
  "Cold orange juice in a glass bottle from the corner shop",
];

export default function LifeGeneratorSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            28 years in under a minute.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Each Palari is created with a complete generated biography. Four
            passes per year, compressed every five years, synthesized into a
            persona. Total cost: under $1.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {passes.map((pass) => (
              <div
                key={pass.number}
                className="rounded-[24px] border border-black/5 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${pass.color} text-sm font-bold text-white`}
                  >
                    {pass.number}
                  </span>
                  <h3 className="text-base font-semibold text-[#2E2A7B]">
                    {pass.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#4A4D73]">
                  {pass.detail}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 rounded-[24px] bg-[#2E2A7B] p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white/40">
              Sensory fragments
            </p>
            <div className="space-y-4">
              {sensoryExamples.map((example) => (
                <p
                  key={example}
                  className="text-base italic leading-relaxed text-white/80"
                >
                  &ldquo;{example}&rdquo;
                </p>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/40">
              These almost never appear in output. Once every fifty messages,
              Sofia might mention &ldquo;reminds me of those late nights with
              cold coffee,&rdquo; and the user feels a chill of recognition.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-8 text-center text-base text-[#4A4D73]">
            Over 28 years, a Palari accumulates 8&ndash;9 wonderful moments,
            5&ndash;6 painful ones, and 14&ndash;15 ordinary years. That ratio
            feels like a real life.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
