import FadeIn from "../FadeIn";

export default function EvolvingArchitectureSection() {
  return (
    <section className="bg-[#EEEAF8] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            Designed to evolve
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            The memory architecture keeps getting better.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4D73]">
            When a new retrieval technique proves effective, we implement
            it. When a more efficient indexing method appears, we migrate
            to it. Your coworker&rsquo;s memory gets deeper and faster over
            time without any action from you.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4D73]">
            The eleven memory types, the entity graph, the temporal
            validity tracking: these are the current state. They won&rsquo;t
            be the final state. The architecture was designed from day one
            to evolve.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
