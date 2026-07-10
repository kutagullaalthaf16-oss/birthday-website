import { motion } from "framer-motion";

export default function Butterfly({ left = true, top = 20, delay = 0 }) {
  return (
    <motion.div
      className="
      absolute
      pointer-events-none
      z-50

      left-2
      sm:left-4
      md:left-5

      right-2
      sm:right-4
      md:right-5
      "
      style={{
        top: `${top}%`,
        left: left ? undefined : "auto",
        right: left ? "auto" : undefined,
      }}
      animate={{
        y: [-18, 18, -18],
        x: left ? [0, 14, 0] : [0, -14, 0],
        rotate: [-10, 10, -10],
      }}
      transition={{
        duration: 4.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.svg
        className="
        w-7
        h-7

        sm:w-9
        sm:h-9

        md:w-10
        md:h-10
        "
        viewBox="0 0 120 120"
        animate={{
          scaleX: [1, 0.72, 1],
        }}
        transition={{
          duration: 0.22,
          repeat: Infinity,
        }}
      >
        {/* Upper Left Wing */}
        <ellipse cx="38" cy="35" rx="22" ry="30" fill="#ff8fc4" />

        {/* Lower Left Wing */}
        <ellipse cx="38" cy="75" rx="18" ry="24" fill="#ffc4de" />

        {/* Upper Right Wing */}
        <ellipse cx="82" cy="35" rx="22" ry="30" fill="#ff8fc4" />

        {/* Lower Right Wing */}
        <ellipse cx="82" cy="75" rx="18" ry="24" fill="#ffc4de" />

        {/* Body */}
        <rect x="56" y="18" width="8" height="70" rx="4" fill="#5d3b4d" />

        {/* Left Antenna */}
        <path
          d="M60 18 C50 2 40 0 36 10"
          stroke="#5d3b4d"
          strokeWidth="2"
          fill="none"
        />

        {/* Right Antenna */}
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
