import FadeIn from "../FadeIn";

export default function MemoryHero() {
  return (
    <section className="bg-gradient-to-br from-[#EEEAF8] via-white to-[#F7F5F2] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            Memory that compounds
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            A coworker who remembers your work.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4A4D73]">
            Your Palari doesn&rsquo;t start from zero every morning. It
            remembers the decisions you made, the people on your team, the
            conventions of your codebase, the mistakes you&rsquo;d rather
            not repeat. What you tell it today shapes how it answers you
            in six months. Less than a cent per lookup, no vector
            database, and the memory is yours to take with you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
