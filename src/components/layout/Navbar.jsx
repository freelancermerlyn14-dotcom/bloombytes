import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-card" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary-gradient">
              <span className="h-2 w-2 rounded-full bg-white/90" />
            </span>
            <span className="font-bold text-lg tracking-tight text-ink">
              BloomBytes
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button as="a" href="#contact" variant="secondary" className="!px-5 !py-2.5 text-sm">
              Let's talk
            </Button>
          </div>

          <button
            className="md:hidden text-ink p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 glass rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-ink-muted hover:text-ink py-3 px-2 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center rounded-full bg-primary text-white py-3 text-sm font-semibold"
                >
                  Let's talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
