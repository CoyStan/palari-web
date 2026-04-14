import FadeIn from "../FadeIn";

export default function TheProblemSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            The problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            AI tools ask for the whole repo.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4D73]">
            Most AI integrations are binary. You grant full read-and-write
            across every file in your workspace, or you get nothing useful.
            So security-minded teams say no. Pragmatic teams say yes and
            pray. Neither is a real option.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                Say yes
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                One assistant has write access to everything. One prompt
                injection, one bad suggestion accepted on autopilot, and the
                whole codebase is in play.
              </p>
            </div>
            <div className="rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                Say no
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                No AI in the workflow at all. Engineers keep copy-pasting
                into a chat tab. Memory never accumulates. The tool never
                becomes a coworker.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-10 text-lg italic text-[#5B5E84]">
            Neither answer is the right answer. The right answer is the one
            you already use for humans: scope.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
