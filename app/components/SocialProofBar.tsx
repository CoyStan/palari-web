import FadeIn from "./FadeIn";

export default function SocialProofBar() {
  return (
    <FadeIn>
      <section className="bg-[#EEEAF8]/70 py-5">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <p className="text-sm font-medium text-[#4A4D73]">
            Built with Claude by Anthropic · OpenAI Codex · Slack API
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
