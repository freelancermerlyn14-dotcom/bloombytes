import { motion } from "framer-motion";
import { Sparkles, Smartphone, Zap, Code2, MessageCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const reasons = [
  {
    icon: Sparkles,
    title: "Modern UI",
    description: "Interfaces and layouts that feel current, not templated.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Every deliverable works cleanly on any screen size.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "A clear process that keeps projects moving without delays.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Well-structured, maintainable builds — no shortcuts.",
  },
  {
    icon: MessageCircle,
    title: "Reliable Communication",
    description: "You always know where your project stands.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why BloomBytes"
          title="Built the right way, every time"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {reasons.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-surface/50 p-6 flex flex-col gap-4 transition-colors duration-300 hover:border-border-hover"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-raised border border-border">
                <Icon size={19} className="text-primary-glow" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
