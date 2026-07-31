import { motion } from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import BloomGrid from "../ui/BloomGrid";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-surface/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <Eyebrow>About the studio</Eyebrow>
          <h2 className="text-display-md md:text-display-lg font-extrabold text-ink">
            A studio built around one job: making your business look
            professional online.
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            BloomBytes is an independent digital studio focused on building modern websites, presentations, and business tools. My goal is to help small businesses, students, creators, and professionals establish a professional online presence through clean design and reliable development.
          </p>
           
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-border bg-surface/60 p-10 flex items-center justify-center"
        >
          <div
            className="absolute -inset-10 bg-grid-fade opacity-70 pointer-events-none"
            aria-hidden="true"
          />
          <BloomGrid dense className="w-full h-auto relative" />
        </motion.div>
      </div>
    </section>
  );
}
