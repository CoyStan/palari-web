import FadeIn from "./FadeIn";

const steps = [
  {
    number: "1",
    title: "Connect your Slack",
    text: "One click. No terminal, no config files, no API keys.",
  },
  {
    number: "2",
    title: "Pick your Palaris",
    text: "Choose from default teammates or create custom personalities with their own voice and expertise.",
  },
  {
    number: "3",
    title: "Start talking",
    text: "Message Sofia in #frontend. She reads your code, proposes changes, and waits for your approval.",
  },
];

export default function HowItWorksSection() {
  return (
    <FadeIn>
      <section className="scroll-mt-28 py-24 md:py-32" id="how-it-works">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">
              Up and running in three steps
            </h2>
          </div>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[17%] right-[17%] top-12 hidden border-t border-dashed border-[#D8DEEF] md:block" />
            {steps.map((step) => (
              <article key={step.number} className="relative rounded-2xl bg-white p-2">
                <p className="text-6xl font-bold leading-none text-transparent [background:linear-gradient(90deg,#3ECDA5,#3B5EE8)] bg-clip-text">
                  {step.number}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#1B2A4A]">{step.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
