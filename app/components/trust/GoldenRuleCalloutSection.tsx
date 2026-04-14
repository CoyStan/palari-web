import FadeIn from "../FadeIn";

export default function GoldenRuleCalloutSection() {
  return (
    <section className="bg-[#2E2A7B] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E7B83D]">
            The Golden Rule
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Palaris never act without your permission.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Every write is proposed, every proposal waits, every approval
            is yours. That goes double when coworkers coordinate. No Palari
            takes an action on behalf of another. You are always the hand
            on the button.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
