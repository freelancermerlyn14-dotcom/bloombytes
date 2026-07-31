import { motion } from "framer-motion";
import { Mail, Send, Check } from "lucide-react";
import { GithubIcon, InstagramIcon } from "../ui/BrandIcons";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:bloombytes14@gmail.com",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/bloombytes_freelancer/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/freelancermerlyn14-dotcom",
  },
];
const inputClasses =
  "w-full rounded-xl bg-surface-raised border border-border px-4 py-3.5 text-ink placeholder:text-ink-faint focus:border-primary/60 focus:outline-none transition-colors duration-200 text-[15px]";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSubmitted(true);

    formRef.current?.reset();

  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something for your business"
          description="Tell us a bit about your project and I'll get back to you within a couple of days."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-border bg-surface/60 p-8 md:p-10 flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-ink-muted">
                  Name
                </label>
                <input id="name" name="from_name" type="text" required placeholder="Jane Doe" className={inputClasses} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-ink-muted">
                  Email
                </label>
                <input id="email" name="from_email" type="email" required placeholder="jane@company.com" className={inputClasses} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="project" className="text-sm text-ink-muted">
                What do you need help with?
              </label>
              <select id="project" name="service" className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Website Development</option>
                <option>Presentation Design</option>
                <option>Excel Solutions</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-ink-muted">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your business and what you're looking to build..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <Button type="submit" variant="primary" className="mt-2 justify-center">
              {submitted ? (
                <>
                  <Check size={17} /> Message sent
                </>
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="rounded-3xl border border-border bg-surface/60 p-8 flex flex-col gap-6 h-full">
              <div>
                <h3 className="font-bold text-ink text-lg">Prefer to reach out directly?</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  Find us in whichever place is easiest for you.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface-raised px-4 py-3.5 text-ink hover:border-border-hover transition-colors duration-200"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface">
                      <Icon size={17} className="text-primary-glow" />
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
