import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-5 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <div className="font-mono text-xs tracking-[0.18em] uppercase text-primary-glow flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-bloom shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-display-md md:text-display-lg font-extrabold text-ink">
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
