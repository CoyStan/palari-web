import FadeIn from "../FadeIn";

const beforeItems = [
  "She stayed late on Thursdays to review the ship list.",
  "Her cofounder never read the ship list.",
  "The launch postmortem was three hours; nobody wrote it down.",
  "The investor asked for a demo the day of the outage.",
  "She apologized seven times in one week.",
];

export default function CompressionSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Five memories became one understanding.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            A life has too many moments to keep every one. After the
            biography is generated, a compression pass folds related
            memories into a single durable understanding. The detailed
            ones are replaced, but the lesson stays.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5E84]">
                Before compression
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#4A4D73]">
                {beforeItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B5E84]/40"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-[24px] border-2 border-[#F46F61]/25 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F46F61]">
                After compression
              </p>
              <p className="mt-4 text-base italic leading-relaxed text-[#2E2A7B]">
                &ldquo;I spent a year covering for a partner who would
                not show up. It taught me that the only thing worse than
                shipping late is shipping late while apologizing.&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#4A4D73]">
                One durable opinion, one durable scar. Five moments
                released.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
