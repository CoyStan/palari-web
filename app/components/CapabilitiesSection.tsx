import FadeIn from "./FadeIn";

const inSlack = [
  "Reply in threads to keep your channels clean",
  "React with emoji so you see progress at a glance",
  "Upload diffs, test results, and screenshots as real files",
  "Pin important outcomes automatically",
  "Set reminders from natural language",
  "Post morning standups and weekly reports",
];

const beyondSlack = [
  "Read and edit Google Docs with propose-and-approve",
  "Update Google Sheets and answer questions about your data",
  "Search your Drive by name, no URL needed",
  "Manage GitHub PRs and review code (coming soon)",
  "Token-aware: your Palaris warn you before expensive tasks",
];

export default function CapabilitiesSection() {
  return (
    <FadeIn>
      <section className="bg-[#FDF8F4] py-24 md:py-32">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">
              They do real work
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-[#E6DDD5] bg-white p-8 shadow-sm">
              <span className="mb-5 block h-1.5 w-14 rounded-full bg-[#3ECDA5]" />
              <h3 className="text-2xl font-semibold text-[#1B2A4A]">In Slack</h3>
              <ul className="mt-6 space-y-4 text-base text-gray-600">
                {inSlack.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3ECDA5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#E6DDD5] bg-white p-8 shadow-sm">
              <span className="mb-5 block h-1.5 w-14 rounded-full bg-[#F07B7B]" />
              <h3 className="text-2xl font-semibold text-[#1B2A4A]">Beyond Slack</h3>
              <ul className="mt-6 space-y-4 text-base text-gray-600">
                {beyondSlack.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F07B7B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border-2 border-[#A8F0DA] bg-white p-8 text-center">
            <h3 className="text-2xl font-bold text-[#1B2A4A]">The Golden Rule</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Palaris never act without your permission. They propose changes, explain what will
              happen in plain language, and wait for you to tap Approve or Skip. You are always in
              control.
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
