import FadeIn from "../FadeIn";

export default function CharacterHero() {
  return (
    <section className="bg-gradient-to-br from-[#FFF4F1] via-white to-[#F7F5F2] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F46F61]">
            The character
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2E2A7B] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            A coworker, not a bot. A character, not a person.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4A4D73]">
            Every Palari has a distinct character &mdash; a stable voice, a
            set of preferences, a way of noticing things. The character is a
            construction, not a person. It does not have a past, it is not
            conscious, and it never claims to be. What it has is a
            consistent way of showing up for your work, across every
            conversation, across every model swap, for as long as you keep
            working together.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
