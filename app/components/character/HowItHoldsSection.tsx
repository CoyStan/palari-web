import FadeIn from "../FadeIn";

const points = [
  {
    title: "Same voice across every conversation.",
    body:
      "The character doesn\u2019t drift between Monday and Thursday. A voice that shifts every session isn\u2019t a coworker; it\u2019s a roulette wheel.",
  },
  {
    title: "Same voice across every model.",
    body:
      "When a better model comes out, we swap the engine underneath. Your Palari keeps its voice, its preferences, and its memory of your work. You never notice the upgrade.",
  },
  {
    title: "Same voice across every week for as long as you work together.",
    body:
      "Palaris don\u2019t reinvent themselves when they get good. The character is stable on purpose. What grows is the memory of what you\u2019ve done together, not what kind of coworker you have.",
  },
];

export default function HowItHoldsSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Why the character stays stable.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            The character is the part you rely on. It&rsquo;s what makes
            your Palari feel like a teammate instead of a new assistant
            every morning. We designed it to be the most stable thing
            about the whole system.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {points.map((p) => (
            <FadeIn key={p.title}>
              <div className="h-full rounded-[24px] bg-white p-6 ring-1 ring-black/5">
                <h3 className="text-base font-semibold text-[#2E2A7B]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
