import FadeIn from "../FadeIn";

export default function FounderStorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            Origin Story
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            From sovereign crisis to AI colleagues
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              Palari started on a Thursday night. Its founder, a research analyst at the IMF who
              builds machine learning models for sovereign crisis prediction, had spent years working
              with the most capable AI systems in the world. And every single one of them forgot who
              they were talking to.
            </p>
            <p>
              The question that started everything was simple: what would it take for software to
              feel like a person you work with, without pretending to be one? Not a chatbot. Not an
              agent. Not a copilot. A coworker. One with a life, a memory, a voice, a scope of
              trust, and a way to think before thinking. The answer became Palari.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 rounded-[24px] bg-gradient-to-br from-[#EEEAF8] via-white to-[#F0F9F8] p-6 ring-1 ring-[#2E2A7B]/5">
            <blockquote className="text-base italic leading-relaxed text-[#4A4D73]">
              &ldquo;We did not set out to build a better AI product. We set out to answer a
              question: what would it take for a piece of software to feel like a person you work
              with, without pretending to be one?&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-[#2E2A7B]">
              Quetzal&iacute; Ram&iacute;rez Guill&eacute;n, Founder
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
