import FadeIn from "../FadeIn";

const beforeItems = [
  "Detailed memory A",
  "Detailed memory B",
  "Detailed memory C",
  "Detailed memory D",
  "Detailed memory E",
];

export default function CompressionSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Five memories become one understanding.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            The raw output from the four passes is too much to carry into
            every conversation. A compression pass folds related memories
            into a single durable conviction. The surface detail is
            released. The underlying judgment stays.
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
              <p className="mt-4 text-xs italic text-[#5B5E84]/70">
                Five specific events, each with its own texture.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-[24px] border-2 border-[#F46F61]/25 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F46F61]">
                After compression
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#2E2A7B]">
                One durable conviction. A specific way of seeing. A rule
                the coworker carries into every future problem, expressed
                in her own language.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#4A4D73]">
                The five surface memories are released. The judgment they
                produced stays.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
