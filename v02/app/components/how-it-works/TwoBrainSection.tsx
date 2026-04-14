import FadeIn from "../FadeIn";

const steps = [
  {
    label: "Your message",
    detail: "Typed in Slack, just like you'd message any teammate",
    color: "bg-[#2E2A7B]",
  },
  {
    label: "Mama Model (the thinker)",
    detail:
      "Sonnet, Opus, or Codex \u2014 configurable per Palari. Focuses entirely on getting the work right: reading files, writing code, analyzing data.",
    color: "bg-[#22B8B0]",
  },
  {
    label: "Vibes Layer (the voice)",
    detail:
      "Claude Haiku rewrites the output in your Palari\u2019s voice. Casual, direct, human. Cost: ~$0.0006 per message.",
    color: "bg-[#F46F61]",
  },
  {
    label: "What you see",
    detail:
      "A reply that sounds like a person \u2014 lowercase, contractions, no \u2018I\u2019d be happy to help\u2019",
    color: "bg-[#9B4FCC]",
  },
];

export default function TwoBrainSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            One brain for thinking. One brain for talking.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            The expensive model focuses entirely on getting the work right. The
            cheap model makes it sound like your coworker. Total cost per
            message: under $0.002.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 space-y-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`h-4 w-4 shrink-0 rounded-full ${step.color} ring-4 ring-[#F7F5F2]`}
                  />
                  {i < steps.length - 1 && (
                    <div className="w-0.5 grow bg-[#2E2A7B]/10" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-base font-semibold text-[#2E2A7B]">
                    {step.label}
                  </p>
                  <p className="mt-1 max-w-lg text-sm leading-6 text-[#4A4D73]">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
