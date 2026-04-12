import FadeIn from "./FadeIn";

const inSlack = [
  "Reply in threads to keep channels clean",
  "React with emoji so you see progress at a glance",
  "Upload reports, spreadsheets, and documents as real files",
  "Pin important outcomes automatically",
  "Set reminders from natural language",
  "Post morning standups and weekly reports",
];

const beyondSlack = [
  "Read and edit Google Docs with propose-and-approve",
  "Update Google Sheets and answer questions about your data",
  "Search your Drive by name, no URL needed",
  "Compile weekly summaries across your whole team",
  "Warn you before expensive tasks",
];

export default function CapabilitiesSection() {
  return (
    <section className="relative bg-[#F7F5F2] py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2E2A7B] md:text-4xl">
              They do real work
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <article className="h-full rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-black/5">
              <div className="mb-5 h-3 w-16 rounded-full bg-[#22B8B0]" />
              <h3 className="text-2xl font-semibold text-[#2E2A7B]">In Slack</h3>
              <ul className="mt-5 space-y-3 text-base text-[#535778]">
                {inSlack.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#22B8B0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>

          <FadeIn>
            <article className="h-full rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-black/5">
              <div className="mb-5 h-3 w-16 rounded-full bg-[#F46F61]" />
              <h3 className="text-2xl font-semibold text-[#2E2A7B]">Beyond Slack</h3>
              <ul className="mt-5 space-y-3 text-base text-[#535778]">
                {beyondSlack.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F46F61]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mx-auto mt-8 max-w-4xl rounded-[28px] border-2 border-[#22B8B0]/30 bg-white p-7 text-center">
            <h3 className="text-2xl font-bold text-[#2E2A7B]">The Golden Rule</h3>
            <p className="mt-3 text-lg leading-relaxed text-[#4A4D73]">
              Palaris never act without your permission. They propose changes, explain what will
              happen in plain language, and wait for you to tap Approve or Skip. You are always in
              control.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
