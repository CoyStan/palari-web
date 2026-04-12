import FadeIn from "./FadeIn";

export default function DemoSection() {
  return (
    <FadeIn>
      <section className="scroll-mt-28 bg-[#F8F9FC] py-24 md:py-32" id="demo">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] md:text-4xl">
              See Palari in action
            </h2>
          </div>

          <div className="mx-auto mt-12 flex aspect-video w-full max-w-4xl items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100 text-lg font-medium text-gray-500">
            {/* DROP DEMO VIDEO HERE */}
            Demo video coming soon
          </div>

          <p className="mt-6 text-center text-lg text-gray-600">
            Sign up for early access to be the first to see it.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
