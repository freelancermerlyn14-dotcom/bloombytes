import { motion } from "framer-motion";

/**
 * BloomGrid — the studio's signature visual motif.
 * A field of data points ("bytes") that quietly bloom into a connected
 * network, echoing the brand name: structured data, growing into something alive.
 */
export default function BloomGrid({ className = "", dense = false }) {
  const nodes = dense
    ? [
        [60, 80], [180, 40], [300, 110], [420, 50], [540, 100], [660, 40],
        [110, 190], [250, 220], [380, 180], [500, 230], [620, 170],
        [40, 300], [190, 320], [330, 300], [460, 330], [590, 300], [700, 260],
      ]
    : [
        [80, 60], [220, 30], [360, 90], [500, 40], [640, 100],
        [140, 170], [300, 200], [440, 160], [580, 210],
        [60, 280], [230, 300], [400, 270], [560, 310],
      ];

  const links = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 5], [2, 6], [3, 7], [4, 8],
    [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [7, 11], [8, 12], [9, 10],
    [10, 11], [11, 12],
  ].filter(([a, b]) => a < nodes.length && b < nodes.length);

  return (
    <svg
      viewBox="0 0 700 360"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7FADFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {links.map(([a, b], i) => {
        const [x1, y1] = nodes[a];
        const [x2, y2] = nodes[b];
        return (
          <motion.line
            key={`l-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.4 + i * 0.05,
              ease: "easeOut",
            }}
          />
        );
      })}

      {nodes.map(([x, y], i) => (
        <g key={`n-${i}`}>
          <motion.circle
            cx={x}
            cy={y}
            r="14"
            fill="url(#nodeGlow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.5, 0.25], scale: 1 }}
            transition={{
              duration: 3,
              delay: 0.2 + i * 0.06,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 1.5,
            }}
          />
          <motion.circle
            cx={x}
            cy={y}
            r="2.5"
            fill={i % 3 === 0 ? "#34D399" : "#7FADFF"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
          />
        </g>
      ))}
    </svg>
  );
}
