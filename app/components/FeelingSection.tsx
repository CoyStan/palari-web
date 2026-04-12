"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function FeelingSection() {
  return (
    <FadeIn>
      <section className="bg-[#FDF8F4] py-20 md:py-32">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <article className="mx-auto max-w-2xl space-y-8 text-center md:space-y-10">
            <p className="text-2xl font-semibold leading-relaxed text-[#1B2A4A]">
              Remember the best coworker you ever had?
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              The one who knew your project so well you could say &quot;that thing from last week&quot;
              and they knew exactly what you meant. Who would look at your work and say &quot;this is
              good, but this part will break in production&quot; before you even asked. Who showed up
              on Monday and said &quot;I was thinking about that problem over the weekend&quot; and had a
              solution ready.
            </p>

            <p className="text-2xl font-semibold leading-relaxed text-[#1B2A4A]">That&apos;s what we&apos;re building.</p>

            <p className="text-lg leading-relaxed text-gray-600">
              Not a tool. Not an assistant. Not another chat window where you paste problems and
              get answers.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              A colleague. With a name. With opinions. With memory. Someone who gets better the
              longer you work together.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold tracking-tight text-transparent [background:linear-gradient(90deg,#3ECDA5,#3B5EE8)] bg-clip-text"
            >
              We call them Palaris.
            </motion.p>
          </article>
        </div>
      </section>
    </FadeIn>
  );
}
