import FadeIn from "../FadeIn";

export default function ContainmentSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            Blast Radius
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Mistakes stay contained
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] bg-white/60 p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/50">
                Traditional AI access
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#535778]">
                Give the AI access to everything. It sees your financial projections, your HR files,
                your customer database, your personal notes. One mistake, one hallucination, one
                misunderstanding affects your entire workspace.
              </p>
              <p className="mt-3 text-sm font-medium text-[#F46F61]">
                Blast radius: everything
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-6 shadow-sm ring-2 ring-[#22B8B0]/20">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                Palari scoped access
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#535778]">
                Sofia&apos;s mistake stays in #operations. Leo&apos;s data stays in #data.
                Alfred reads everything but can&apos;t touch files. Each Palari has clear
                boundaries, and mistakes can&apos;t cascade across scopes.
              </p>
              <p className="mt-3 text-sm font-medium text-[#22B8B0]">
                Blast radius: one scope
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
