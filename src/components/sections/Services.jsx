import { motion } from "framer-motion";
import { Layout, Presentation, Table2, Check } from "lucide-react";
import { services } from "../../data/services";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

const icons = { Layout, PresentationIcon: Presentation, Table2 };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What I do"
          title="One studio, every deliverable your business needs"
          description="Professional digital solutions designed to help businesses build, present, and grow."
        ></SectionHeading>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <motion.div key={service.id} variants={item}>
                <Card className="group h-full p-8 flex flex-col overflow-hidden">
                  <div
                    className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500`}
                    aria-hidden="true"
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-surface-raised border border-border group-hover:border-border-hover group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} className="text-primary-glow" strokeWidth={1.8} />
                  </div>

                  <h3 className="relative mt-6 text-xl font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-ink-muted leading-relaxed text-[15px]">
                    {service.description}
                  </p>

                  <ul className="relative mt-6 flex flex-col gap-2.5 pt-6 border-t border-border">
                    {service.items.map((line) => (
                      <li
                        key={line}
                        className="flex items-center gap-2.5 text-sm text-ink-muted group-hover:text-ink/90 transition-colors duration-300"
                      >
                        <Check size={15} className="text-bloom shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
              
            );
          })}
        </motion.div>
        <div className="mt-16 rounded-3xl border border-border bg-surface-raised p-8 text-center">
          <h3 className="text-2xl font-semibold text-ink">
            Need something different?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-ink-muted leading-relaxed">
            If your project involves web development, presentations,
            spreadsheets, automation, or another digital service,
            I'd be happy to discuss how I can help.
          </p>
          <a
    href="#contact"
    className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:scale-105"
  >
    Let's Talk
  </a>

        </div>

      </div>
    </section>
  );
}
