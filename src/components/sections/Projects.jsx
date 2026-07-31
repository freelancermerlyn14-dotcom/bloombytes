import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import ProjectPreview from "../ui/ProjectPreview";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A sample of websites, decks, and dashboards I've built. Every project is designed around one goal: making the client's business look and run better."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="group h-full flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-[#0F1526]">
                  <div className="absolute inset-0 p-3 transition-transform duration-500 group-hover:scale-[1.04]">
                    <ProjectPreview type={project.type} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-ink">{project.title}</h3>
                  <p className="mt-2.5 text-sm text-ink-muted leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-surface-raised border border-border px-2.5 py-1 text-xs font-mono text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-5 pt-5 border-t border-border">
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-primary-glow transition-colors"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                    
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
