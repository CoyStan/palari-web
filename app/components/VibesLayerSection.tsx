import FadeIn from "./FadeIn";

const slackMessages = [
  "done! auth module is cleaned up",
  "pulled the JWT validation into its own util, added expired token handling. 12 new tests, all green",
  "diff is in the thread",
];

export default function VibesLayerSection() {
  return (
    <FadeIn>
      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">
              The difference you can feel
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Every message passes through something we call the Vibes Layer. Same accuracy. Zero
              robot.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <article>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                What the AI produces
              </p>
              <div className="rounded-xl bg-gray-900 p-6 font-mono text-sm leading-relaxed text-green-400 md:text-base">
                I&apos;ve completed the refactoring of the authentication module. The changes include:
                (1) Extracted JWT validation into a separate utility function. (2) Added error
                handling for expired tokens. (3) Updated the test suite with 12 new test cases. All
                tests pass.
              </div>
            </article>

            <div className="hidden text-lg font-medium text-gray-400 md:block">becomes</div>

            <article>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                What Sofia says in Slack
              </p>
              <div className="space-y-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
                {slackMessages.map((message) => (
                  <div key={message} className="rounded-xl bg-[#F6F7FB] px-4 py-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-6 w-6 rounded-full bg-gradient-to-br from-[#F8C5C5] to-[#F3A9A9]" />
                      <p className="font-mono text-sm leading-relaxed text-[#334155]">{message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
