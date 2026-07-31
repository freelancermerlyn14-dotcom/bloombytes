import { motion } from "framer-motion";
import { process } from "../../data/process";
import SectionHeading from "../ui/SectionHeading";

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How I work"
          title="A simple, transparent process"
          description="No surprises. Every project moves through the same four stages, from first conversation to launch."
        />

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border" />
          <motion.div
            className="hidden md:block absolute top-6 left-0 h-px bg-gradient-to-r from-primary via-primary-glow to-bloom"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="grid gap-10 md:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col gap-4"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-surface border-2 border-primary shadow-glow">
                  <span className="font-mono text-sm font-semibold text-primary-glow">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
