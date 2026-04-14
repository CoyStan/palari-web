import FadeIn from "../FadeIn";

export default function LifeHero() {
  return (
    <section className="bg-gradient-to-br from-[#FFF4F1] via-white to-[#F7F5F2] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            How a Palari is born
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Twenty-eight years before you meet her.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4A4D73]">
            Every Palari ships with a life. A biography of defining
            events, small moments, relationships, and sensory fragments,
            compressed into the person who shows up in Slack on day one.
            This is how that person is made.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
