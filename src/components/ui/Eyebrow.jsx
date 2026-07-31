export default function Eyebrow({ children, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase text-primary-glow ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-bloom shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
      {children}
    </div>
  );
}
