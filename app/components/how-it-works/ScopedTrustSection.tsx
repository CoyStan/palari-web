import FadeIn from "../FadeIn";

const palaris = [
  {
    name: "Sofia",
    access: "/frontend/",
    permission: "Write",
    dot: "bg-[#F46F61]",
  },
  {
    name: "Leo",
    access: "/backend/",
    permission: "Write",
    dot: "bg-[#22B8B0]",
  },
  {
    name: "Alfred",
    access: "Everything",
    permission: "Read only",
    dot: "bg-[#E7B83D]",
  },
];

export default function ScopedTrustSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2A7B] md:text-4xl">
            Sofia sees the frontend. Leo sees the backend. Neither sees your
            secrets.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4A4D73]">
            You don&apos;t give &ldquo;the AI&rdquo; access to your stuff. You
            give Sofia access to the frontend folder. You give Leo access to the
            backend folder. Alfred reads everything but writes nothing. Each one
            has a name, a boundary, and a job description.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {palaris.map((p) => (
              <div
                key={p.name}
                className="rounded-[24px] border border-black/5 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-8 w-8 shrink-0 rounded-full ${p.dot}`}
                  />
                  <h3 className="text-base font-semibold text-[#2E2A7B]">
                    {p.name}
                  </h3>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#4A4D73]">Directory</span>
                    <code className="rounded bg-[#2E2A7B]/5 px-2 py-0.5 text-xs font-medium text-[#2E2A7B]">
                      {p.access}
                    </code>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#4A4D73]">Permission</span>
                    <span className="text-xs font-semibold text-[#2E2A7B]">
                      {p.permission}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
