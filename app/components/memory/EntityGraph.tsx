import FadeIn from "../FadeIn";

export default function EntityGraph() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B4FCC]">
            People, projects, and their connections
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Memories know who and what they&rsquo;re about.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            A flat list of facts cannot answer &ldquo;what did Beto say
            about the auth refactor?&rdquo; if the fact was filed under
            Roberto. Your Palari stores the person once, with every alias
            you use, so the same person shows up across weeks of
            conversation.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-[24px] border border-black/5 bg-[#F7F5F2] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                Same person, different names
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    Roberto
                  </span>
                  <span className="text-[#5B5E84]/50">&rarr;</span>
                  <span className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    Rob
                  </span>
                  <span className="text-[#5B5E84]/50">&rarr;</span>
                  <span className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    Beto
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#4A4D73]">
                  All three resolve to the same person. Sofia knows
                  they&rsquo;re the same teammate whether you wrote it in
                  English, in Spanish, or in a nickname.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    the dog
                  </span>
                  <span className="text-[#5B5E84]/50">&harr;</span>
                  <span className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    mi perro
                  </span>
                  <span className="text-[#5B5E84]/50">&harr;</span>
                  <span className="rounded bg-white px-2 py-1 text-xs font-semibold text-[#2E2A7B] ring-1 ring-black/5">
                    Lola
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#4A4D73]">
                  When you mention the dog on Monday and Lola on Friday,
                  Sofia knows it&rsquo;s the same animal.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="h-full rounded-[24px] border border-black/5 bg-[#F7F5F2] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F46F61]">
                Memories connect
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4D73]">
                A memory isn&rsquo;t stored in isolation. When your Palari
                pulls up one fact, it can walk to the related ones &mdash;
                the decision that led to it, the project it belongs to,
                the later change that replaced it.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9B4FCC]">
                    Same topic
                  </p>
                  <p className="mt-1 text-[#4A4D73]">
                    Two memories about the same project or person cluster
                    together.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#22B8B0]">
                    Cause and effect
                  </p>
                  <p className="mt-1 text-[#4A4D73]">
                    One memory explains another: the decision led to the
                    regression.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F46F61]">
                    Plans change
                  </p>
                  <p className="mt-1 text-[#4A4D73]">
                    When a later fact supersedes an earlier one, the link
                    stays and both remain traceable.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
