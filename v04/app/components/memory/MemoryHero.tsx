import FadeIn from "../FadeIn";

export default function MemoryHero() {
  return (
    <section className="bg-gradient-to-br from-[#EEEAF8] via-white to-[#F7F5F2] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            The memory system
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Structured memory, not a flat list.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4A4D73]">
            Eleven memory types, routed to the layer that needs them. An
            entity graph that connects people and projects. Temporal
            validity that knows when a fact changed. Importance decay that
            keeps what matters and releases what doesn&rsquo;t. All of it
            under a cent per lookup.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
