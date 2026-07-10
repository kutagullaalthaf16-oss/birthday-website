import { motion } from "framer-motion";

export default function Butterfly({
  left = true,
  top = 20,
  delay = 0,
  size = 42,
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top: `${top}%`,
        left: left ? "18px" : "auto",
        right: left ? "auto" : "18px",
      }}
      animate={{
        y: [-30, 30, -30],
        x: left ? [0, 12, 0] : [0, -12, 0],
        rotate: [-8, 8, -8],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        animate={{
          scaleX: [1, 0.75, 1],
        }}
        transition={{
          duration: 0.25,
          repeat: Infinity,
        }}
      >
        {/* Left Wings */}
        <ellipse cx="38" cy="35" rx="22" ry="30" fill="#ff8fc4" />
        <ellipse cx="38" cy="75" rx="18" ry="24" fill="#ffc4de" />

        {/* Right Wings */}
        <ellipse cx="82" cy="35" rx="22" ry="30" fill="#ff8fc4" />
        <ellipse cx="82" cy="75" rx="18" ry="24" fill="#ffc4de" />

        {/* Body */}
        <rect x="56" y="18" width="8" height="70" rx="4" fill="#5d3b4d" />

        {/* Antennas */}
        <path
          d="M60 18 C50 2 40 0 36 10"
          stroke="#5d3b4d"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M60 18 C70 2 80 0 84 10"
          stroke="#5d3b4d"
          strokeWidth="2"
          fill="none"
        />
      </motion.svg>
    </motion.div>
  );
}
