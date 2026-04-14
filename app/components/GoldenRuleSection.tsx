import FadeIn from "./FadeIn";

export default function GoldenRuleSection() {
  return (
    <section className="bg-[#2E2A7B] py-16 text-white md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
            The Golden Rule
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Palaris never act without your permission.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            They propose. They wait. They move only with your nod. No
            silent writes. No surprise actions. That is the protocol, every
            time, on every surface.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
