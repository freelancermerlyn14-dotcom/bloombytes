import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const placeholders = [1, 2, 3];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client feedback"
          title="What clients are saying"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {placeholders.map((n) => (
            <motion.div
              key={n}
              variants={item}
              className="rounded-2xl border border-dashed border-border bg-surface/30 p-8 flex flex-col items-center text-center gap-4"
            >
              <Quote size={28} className="text-ink-faint" strokeWidth={1.5} />
              <p className="text-ink-muted text-sm leading-relaxed">
                Client testimonial coming soon.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
