import FadeIn from "../FadeIn";

export default function BornVsShaped() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            How each Palari specializes.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              Every Palari starts as a specialist &mdash; a role, a scope, a
              working style. From there, they sharpen into your team&apos;s
              specific dynamics: the way your reviewers prefer diffs, the
              regressions your codebase actually ships, the stakeholders who
              block which paths.
            </p>
            <p>
              Under the hood, the biography and voice come from the Life
              Generator &mdash; a one-shot process that gives each Palari a
              distinct point of view. But the substance of what they do for
              you comes from working together.
            </p>
            <p className="font-medium text-[#2E2A7B]">
              Two Palaris with the same role, on two different teams, end up
              fundamentally different specialists within a month.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[24px] border border-black/5 bg-[#F7F5F2] p-6">
              <div className="mb-3 inline-flex rounded-full bg-[#2E2A7B]/5 px-3 py-1 text-xs font-semibold text-[#2E2A7B]">
                Role
              </div>
              <p className="text-sm leading-6 text-[#4A4D73]">
                Defined on day one. Scope, capabilities, voice template. What
                the Palari is hired to do.
              </p>
            </div>
            <div className="rounded-[24px] border border-black/5 bg-[#F7F5F2] p-6">
              <div className="mb-3 inline-flex rounded-full bg-[#9B4FCC]/10 px-3 py-1 text-xs font-semibold text-[#9B4FCC]">
                Working style
              </div>
              <p className="text-sm leading-6 text-[#4A4D73]">
                Shaped over weeks. How the Palari writes, what it escalates,
                which patterns it learns to spot in your project.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
