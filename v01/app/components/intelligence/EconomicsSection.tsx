import FadeIn from "../FadeIn";

const stats = [
  { value: "~$5/mo", label: "planning cost" },
  { value: "~$23\u201344/mo", label: "compute saved" },
  { value: "4\u20138x", label: "return on investment" },
];

export default function EconomicsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22B8B0]">
            Economics
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            The planning layer pays for itself
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] bg-white p-5 text-center shadow-sm ring-1 ring-black/5"
              >
                <div className="text-2xl font-bold text-[#2E2A7B]">{stat.value}</div>
                <div className="mt-1 text-sm text-[#5B5E84]">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[24px] bg-white/60 p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]/50">
                Without planning
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#535778]">
                Every message uses the most expensive model. Ambiguous requests run to completion
                before you find out they were wrong. No cost awareness. Compute bills grow
                invisibly.
              </p>
            </div>
            <div className="rounded-[24px] bg-white p-6 shadow-sm ring-2 ring-[#22B8B0]/20">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                With Palari&apos;s planning layer
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#535778]">
                85% of messages use the fastest tier. Ambiguous requests get clarified before
                execution. Budget warnings before expensive tasks. Same quality, fraction of the
                cost.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
