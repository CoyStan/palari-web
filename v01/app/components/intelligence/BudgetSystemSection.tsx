import FadeIn from "../FadeIn";

export default function BudgetSystemSection() {
  return (
    <section className="bg-gradient-to-b from-[#F7F5F2] to-[#F5F0FF]/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7B83D]">
            Budget System
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Transparent compute, no surprise bills
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#22B8B0]" />
                <h3 className="text-lg font-semibold text-[#2E2A7B]">How it works</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#535778]">
                <p>
                  Your subscription includes a weekly compute budget. Your Palari tracks every
                  interaction against it.
                </p>
                <p>
                  When budget is plentiful, your Palari works freely. As it gets lower, it becomes
                  more cost-conscious, preferring efficient approaches without sacrificing quality.
                </p>
                <p>
                  Before expensive tasks, your Palari warns you: &ldquo;This is a big refactor.
                  Probably takes about 15% of what&apos;s left this week. Want me to go ahead, or
                  break it into pieces?&rdquo;
                </p>
                <p className="font-medium text-[#2E2A7B]">
                  If budget runs out, your Palari doesn&apos;t go silent. It tells you, and you can
                  still chat until it resets.
                </p>
              </div>
            </article>

            <article className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#9B4FCC]" />
                <h3 className="text-lg font-semibold text-[#2E2A7B]">Incentive alignment</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#535778]">
                <p>
                  OpenAI profits when you consume more tokens. Anthropic profits per API call. Google
                  profits on compute. They will never build a system that helps you spend less.
                </p>
                <p>
                  Palari profits from your subscription. The less compute you waste, the happier you
                  are, the longer you stay.
                </p>
                <p className="font-medium text-[#2E2A7B]">
                  We are the only product that makes money by helping you spend less.
                </p>
              </div>

              <div className="mt-6 rounded-[16px] bg-gradient-to-br from-[#F5F0FF] to-[#F0F9F8] p-4 ring-1 ring-[#9B4FCC]/10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9B4FCC]">
                  The result
                </p>
                <p className="mt-2 text-sm text-[#535778]">
                  Your interests and ours are structurally aligned. Not as a marketing claim, but as
                  a business model.
                </p>
              </div>
            </article>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
