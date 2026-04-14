import FadeIn from "./FadeIn";

const inSlack = [
  "Reply in threads so channels stay clean.",
  "React with emoji so you can see progress at a glance.",
  "Upload reports, spreadsheets, and documents as real files.",
  "Pin important outcomes automatically.",
  "Set reminders from natural language.",
  "Post morning standups and weekly reports.",
];

const beyondSlack = [
  "Read and edit Google Docs with propose-and-approve.",
  "Update Google Sheets and answer questions about your data.",
  "Search Drive by name, no URL needed.",
  "Compile weekly summaries across your whole team.",
  "Warn you before expensive tasks so cost is never a surprise.",
];

export default function RealWorkSection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
              Palaris do real work.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
              Voice is anchored to capability. Your Palari edits Google
              Docs, processes spreadsheets, compiles weekly summaries, and
              posts receipts in Slack when the work is done.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-[28px] bg-white p-7 ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#22B8B0]" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#22B8B0]">
                  In Slack
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {inSlack.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-[#4A4D73]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22B8B0]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="h-full rounded-[28px] bg-white p-7 ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F46F61]" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F46F61]">
                  Beyond Slack
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {beyondSlack.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-[#4A4D73]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F46F61]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
