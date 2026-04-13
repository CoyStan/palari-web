import FadeIn from "../FadeIn";

const stages = [
  { label: "Month 1", description: "Learning your patterns", savings: "25%", width: "w-[25%]" },
  { label: "Month 3", description: "Routing optimized", savings: "35%", width: "w-[50%]" },
  { label: "Month 6", description: "Anticipating needs", savings: "45%", width: "w-[75%]" },
  { label: "Month 12", description: "Effectively automatic", savings: "50%+", width: "w-full" },
];

export default function LearningSection() {
  return (
    <section className="bg-gradient-to-b from-[#F5F0FF]/30 to-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            Compound Effect
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Gets smarter about you over time
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            Your Palari learns how you prompt, when you work hard, and which tasks need deep
            thinking. Over time, routing gets more accurate and costs go down.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#F46F61]">
              Compute savings over time
            </p>
            <div className="space-y-4">
              {stages.map((stage) => (
                <div key={stage.label}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#2E2A7B]">{stage.label}</span>
                    <span className="text-sm text-[#5B5E84]">
                      {stage.description} &middot; ~{stage.savings} savings
                    </span>
                  </div>
                  <div className="h-5 rounded-full bg-[#F7F5F2]">
                    <div
                      className={`${stage.width} h-5 rounded-full bg-gradient-to-r from-[#9B4FCC] to-[#22B8B0]`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm italic text-[#5B5E84]/70">
              A new competitor can replicate the code on day one. They cannot replicate six months of
              learned patterns.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
