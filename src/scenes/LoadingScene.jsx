import { motion } from "framer-motion";
import { useEffect } from "react";

export default function LoadingScene({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Show loading for only 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Glowing Circle */}
      <motion.div
        className="w-28 h-28 rounded-full border-4 border-pink-400"
        animate={{
          rotate: 360,
          scale: [1, 1.12, 1],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          },
          scale: {
            repeat: Infinity,
            duration: 1.5,
          },
        }}
      />

      {/* Loading Text */}
      <motion.h2
        className="mt-10 text-3xl font-semibold text-pink-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        ✨ Preparing something special...
      </motion.h2>
    </div>
  );
}
