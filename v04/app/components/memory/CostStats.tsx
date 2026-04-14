import FadeIn from "../FadeIn";

const stats = [
  {
    value: "< 1,300",
    label: "tokens per memory lookup",
  },
  {
    value: "~ $0.001",
    label: "cost per memory lookup",
  },
  {
    value: "< 50 MB",
    label: "storage for 100 Palaris",
  },
];

export default function CostStats() {
  return (
    <section className="bg-[#2E2A7B] py-16 text-white md:py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
              The economics
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Memory that stays under a cent.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Compressed, routed, and cached until it costs almost
              nothing. That is why Sofia can remember six months of your
              work without burning your API budget.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <FadeIn key={s.label}>
              <div className="rounded-[24px] bg-white/5 p-6 ring-1 ring-white/10">
                <p className="text-3xl font-semibold tracking-tight">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
