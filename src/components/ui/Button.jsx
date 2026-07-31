import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[15px] transition-colors duration-200 whitespace-nowrap";

const variants = {
  primary:
    "bg-primary text-white shadow-glow hover:bg-primary-glow px-7 py-3.5",
  secondary:
    "glass text-ink hover:border-border-hover px-7 py-3.5",
  ghost: "text-ink-muted hover:text-ink px-4 py-2",
};

export default function Button({
  as = "button",
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Comp = motion[as === "a" ? "a" : "button"];
  return (
    <Comp
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      {...props}
    >
      {children}
    </Comp>
  );
}
