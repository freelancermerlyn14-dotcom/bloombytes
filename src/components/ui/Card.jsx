import { motion } from "framer-motion";

export default function Card({ children, className = "", hover = true, ...props }) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-border bg-surface/70 backdrop-blur-sm ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              borderColor: "rgba(248,250,252,0.16)",
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
