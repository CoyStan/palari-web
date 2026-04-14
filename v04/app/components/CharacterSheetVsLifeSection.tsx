import FadeIn from "./FadeIn";

export default function CharacterSheetVsLifeSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              One of these has a character description.
              <br />
              The other one lived through it.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4A4D73]">
              The same underlying model. The same question. A completely
              different answer, because one of them was born, and the other
              was configured.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="flex h-full flex-col rounded-[28px] bg-white p-7 ring-1 ring-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B5E84]/60">
                AI with a character sheet
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#2E2A7B]">
                Generic assistant, friendly persona
              </h3>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl bg-[#F7F5F2] p-4 text-sm leading-relaxed text-[#4A4D73]">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/50">
                    You
                  </p>
                  <p>
                    i keep polishing this feature instead of shipping it. is
                    that a problem?
                  </p>
                </div>
                <div className="rounded-2xl bg-[#EEEAF8]/50 p-4 text-sm leading-relaxed text-[#4A4D73]">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/50">
                    Assistant
                  </p>
                  <p>
                    Deadlines can be tough. It&rsquo;s common to want things
                    perfect, but shipping often matters more than polish.
                    Would you like some tips for scoping your work?
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm italic leading-relaxed text-[#5B5E84]/70">
                Correct. Kind. Forgettable. Nothing that lands.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex h-full flex-col rounded-[28px] border-2 border-[#F46F61]/25 bg-white p-7 shadow-lg shadow-[#F46F61]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F46F61]">
                AI with a life
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#2E2A7B]">
                Sofia, who was born
              </h3>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl bg-[#F7F5F2] p-4 text-sm leading-relaxed text-[#4A4D73]">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#5B5E84]/50">
                    You
                  </p>
                  <p>
                    i keep polishing this feature instead of shipping it. is
                    that a problem?
                  </p>
                </div>
                <div className="rounded-2xl bg-[#F46F61]/8 p-4 text-sm leading-relaxed text-[#2E2A7B]">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#F46F61]/70">
                    Sofia
                  </p>
                  <p>
                    my first startup died because we kept polishing instead
                    of shipping. polish is the last thing you add, not the
                    reason you&rsquo;re late. what&rsquo;s the smallest thing
                    you could ship tonight?
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm italic leading-relaxed text-[#535778]">
                A scar she carries. Specific. You feel it.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
