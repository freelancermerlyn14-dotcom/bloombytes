import { motion } from "framer-motion";
import { ArrowRight, FolderKanban } from "lucide-react";
import Button from "../ui/Button";
import BloomGrid from "../ui/BloomGrid";
import Eyebrow from "../ui/Eyebrow";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px] animate-float-slow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-0 h-[360px] w-[360px] rounded-full bg-bloom/10 blur-[110px] animate-float pointer-events-none"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-24 flex justify-center opacity-70 pointer-events-none select-none">
        <BloomGrid className="w-[700px] max-w-[95vw] h-auto" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <Eyebrow>Websites · Presentations · Excel Solutions</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-7 text-display-md sm:text-display-lg md:text-display-xl font-extrabold text-gradient max-w-4xl"
        >
          Modern Digital Solutions for Growing Businesses
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed"
        >
          BloomBytes designs and builds the websites, presentations, and
          Excel solutions businesses, students, and creators need to look professional, move faster,
          and make better decisions.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button as="a" href="#projects" variant="primary">
            <FolderKanban size={17} />
            View Projects
          </Button>
          <Button as="a" href="#contact" variant="secondary">
            Let's Work Together
            <ArrowRight size={17} />
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-ink-faint text-sm"
        >
          <span>Built for businesses, students, and creators that want to look serious</span>
        </motion.div>
      </div>
    </section>
  );
}
