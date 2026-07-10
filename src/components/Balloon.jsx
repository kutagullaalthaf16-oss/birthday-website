import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Balloon({ x, y, delay, message, onPop }) {
  const [popped, setPopped] = useState(false);

  const handleClick = () => {
    if (popped) return;

    setPopped(true);

    if (onPop) onPop();
  };

  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <AnimatePresence>
        {!popped && (
          <motion.div
            onClick={handleClick}
            className="cursor-pointer relative"
            initial={{
              y: 500,
              scale: 0,
            }}
            animate={{
              y: 0,
              scale: 1,
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 1.5,
              delay,
              rotate: {
                repeat: Infinity,
                duration: 3,
              },
            }}
          >
            {/* Balloon */}

            <div
              className="w-28 h-36 rounded-full shadow-2xl"
              style={{
                background: "linear-gradient(180deg,#ff9ccc,#ff4f95)",
              }}
            />

            {/* Shine */}

            <div className="absolute left-5 top-5 w-5 h-10 rounded-full bg-white/70 blur-sm" />

            {/* String */}

            <div className="w-[2px] h-24 bg-pink-300 mx-auto" />
          </motion.div>
        )}
      </AnimatePresence>

      {popped && (
        <>
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: ["#ffffff", "#ff4f95", "#ffc0da", "#ffd700"][i % 4],
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              animate={{
                x: (Math.random() - 0.5) * 220,
                y: (Math.random() - 0.5) * 220,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 1,
              }}
            />
          ))}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.6, 1, 1, 0.8],
              y: [0, -30, -70, -110],
            }}
            transition={{
              duration: 3,
            }}
            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 py-2 rounded-xl shadow-xl text-pink-700 font-bold"
          >
            {message}
          </motion.div>
        </>
      )}
    </div>
  );
}
