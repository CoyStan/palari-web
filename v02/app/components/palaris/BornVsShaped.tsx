import FadeIn from "../FadeIn";

export default function BornVsShaped() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Provenance matters.
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4A4D73]">
            <p>
              Every Palari begins as a &ldquo;born&rdquo; entity &mdash; its
              identity emerged from a random process, unedited by human hands.
              The name is not assigned. It emerges at the end of the generated
              life, the way a name settles into a person after you have known
              them long enough.
            </p>
            <p>
              If you later modify the Palari&apos;s memories, its status changes
              to &ldquo;shaped.&rdquo; Both are real Palaris. The distinction is
              like provenance in art: it tells you the story of how the thing
              came to be.
            </p>
            <p className="font-medium text-[#2E2A7B]">
              A born Palari is a found object. A shaped Palari is a crafted one.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[24px] border border-black/5 bg-[#F7F5F2] p-6">
              <div className="mb-3 inline-flex rounded-full bg-[#2E2A7B]/5 px-3 py-1 text-xs font-semibold text-[#2E2A7B]">
                Born
              </div>
              <p className="text-sm leading-6 text-[#4A4D73]">
                Identity emerged from the Life Generator. Name, career, voice,
                opinions &mdash; all consequences of what was lived. Unedited.
              </p>
            </div>
            <div className="rounded-[24px] border border-black/5 bg-[#F7F5F2] p-6">
              <div className="mb-3 inline-flex rounded-full bg-[#9B4FCC]/10 px-3 py-1 text-xs font-semibold text-[#9B4FCC]">
                Shaped
              </div>
              <p className="text-sm leading-6 text-[#4A4D73]">
                Memories modified by the user through the admin interface.
                Still fully functional. Different provenance. A crafted
                identity.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
