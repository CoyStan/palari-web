import FadeIn from "../FadeIn";

const pipelineSteps = [
  { label: "Birth Options", description: "Name, background, era, starting conditions" },
  { label: "28 Years \u00d7 4 Passes", description: "Events, moments, relationships, senses" },
  { label: "Compression", description: "Raw memories become lived understanding" },
  { label: "Synthesis", description: "Core memories, opinions, sensory compilation" },
  { label: "A Person", description: "Ready to meet you" },
];

export default function LifeGenerationOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            From nothing to someone
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            A Palari isn&apos;t assembled from parts. It&apos;s grown&mdash;year by year, memory by
            memory, relationship by relationship&mdash;until a coherent person emerges.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-center gap-3 md:flex-col md:gap-0">
                <div className="flex-1 rounded-[16px] bg-white p-4 shadow-sm ring-1 ring-black/5 md:w-full">
                  <p className="text-sm font-semibold text-[#2E2A7B]">{step.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#5B5E84]">{step.description}</p>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <>
                    <span className="hidden text-[#2E2A7B]/20 md:mt-2 md:mb-2 md:block">&darr;</span>
                    <span className="text-[#2E2A7B]/20 md:hidden">&rarr;</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
