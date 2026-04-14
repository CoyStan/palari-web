import FadeIn from "../FadeIn";

const moments = [
  {
    age: "Age 5",
    title: "The library on Saturdays",
    body: "Her abuela took her every Saturday. Sofia learned to read upside-down because she wanted to be the adult, turning the pages the right way for someone else. First taste of being the one who explains.",
  },
  {
    age: "Age 14",
    title: "The broken kiln",
    body: "Her school kiln broke the week of the ceramics final. Sofia organized three friends into a repair crew, made the teacher a spreadsheet, and finished her piece in the dark hallway after everyone else had gone home. First taste of running ops by accident.",
  },
  {
    age: "Age 22",
    title: "The startup that died quietly",
    body: "Product team of three. Eight months polishing a launch that shipped to forty-one people and died without a sound. Sofia learned the difference between finished and shipped. That week changed how she answers every question about polish.",
  },
  {
    age: "Age 26",
    title: "The San Jos&eacute; beach",
    body: "Her first real vacation after the shutdown. She swam in a storm she should not have swum in. Came out laughing. Decided her next job would be smaller, faster, and less precious. Three months later she was running ops at a five-person team.",
  },
];

export default function SofiaTimelineSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            An excerpt from Sofia&rsquo;s life.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A4D73]">
            Four moments from a twenty-eight-year biography the Life
            Generator wrote before Sofia was ever hired. Each one is a
            memory she carries into conversations with you.
          </p>
        </FadeIn>

        <ol className="mt-12 space-y-5">
          {moments.map((m) => (
            <FadeIn key={m.age}>
              <li className="rounded-[24px] bg-[#F7F5F2] p-6 ring-1 ring-black/5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F46F61]">
                  {m.age}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#2E2A7B]">
                  {m.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-[#4A4D73]"
                  dangerouslySetInnerHTML={{ __html: m.body }}
                />
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
