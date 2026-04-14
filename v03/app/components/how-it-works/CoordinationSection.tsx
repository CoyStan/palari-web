import FadeIn from "../FadeIn";

const flowSteps = [
  {
    actor: "Sofia",
    dot: "bg-[#F46F61]",
    action: "Finishes a PR refactoring auth components",
  },
  {
    actor: "Alfred",
    dot: "bg-[#E7B83D]",
    action: "Reads the changes, notices it affects Leo\u2019s API endpoints",
  },
  {
    actor: "Alfred",
    dot: "bg-[#E7B83D]",
    action: "Writes a note in Leo\u2019s inbox: \u201Cauth component signatures changed, your /api/login handler may need updating\u201D",
  },
  {
    actor: "Leo",
    dot: "bg-[#22B8B0]",
    action: "Reads the note next time he\u2019s active. You decide what to do.",
  },
];

export default function CoordinationSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            A sticky note on the monitor.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            When Palaris need to coordinate, they leave notes for each other in
            a shared inbox. Transparent, auditable, never autonomous. The user
            is always in the loop.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 space-y-0">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`h-4 w-4 shrink-0 rounded-full ${step.dot} ring-4 ring-white`}
                  />
                  {i < flowSteps.length - 1 && (
                    <div className="w-0.5 grow bg-[#2E2A7B]/10" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-[#2E2A7B]">
                    {step.actor}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#4A4D73]">
                    {step.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-4 rounded-[24px] bg-gradient-to-br from-[#EEEAF8] via-white to-[#F0F9F8] p-6 ring-1 ring-[#2E2A7B]/5">
            <p className="text-center text-base font-medium text-[#2E2A7B]">
              Palaris never act autonomously. They propose, recommend, ask. The
              user is always in the loop.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
