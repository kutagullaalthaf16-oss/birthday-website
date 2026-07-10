import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Balloon({ x, y, delay, message, onPop }) {
  const [popped, setPopped] = useState(false);

  const handleClick = () => {
    if (popped) return;

    setPopped(true);
    onPop?.();
  };

  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <AnimatePresence>
        {!popped && (
          <motion.div
            onClick={handleClick}
            className="relative cursor-pointer select-none"
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
              duration: 1.4,
              delay,
              rotate: {
                repeat: Infinity,
                duration: 3,
              },
            }}
          >
            {/* Balloon */}

            <div
              className="
                w-20 h-28
                sm:w-24 sm:h-32
                md:w-28 md:h-36
                rounded-full
                shadow-2xl
              "
              style={{
                background: "linear-gradient(180deg,#ff9ccc,#ff4f95)",
              }}
            />

            {/* Shine */}

            <div
              className="
                absolute
                left-4 top-4
                w-4 h-8
                sm:left-5 sm:top-5
                sm:w-5 sm:h-10
                rounded-full
                bg-white/70
                blur-sm
              "
            />

            {/* String */}

            <div
              className="
                mx-auto
                w-[2px]
                h-16
                sm:h-20
                md:h-24
                bg-pink-300
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {popped && (
        <>
          {[...Array(45)].map((_, i) => (
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
                x: (Math.random() - 0.5) * 240,
                y: (Math.random() - 0.5) * 240,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 1,
              }}
            />
          ))}

          {/* Message */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.6, 1, 1, 0.9],
              y: [0, -30, -70, -110],
            }}
            transition={{
              duration: 3,
            }}
            className="
              absolute
              left-1/2
              -translate-x-1/2

              px-3 py-2
              sm:px-4

              rounded-xl
              shadow-xl

              bg-white/95

              text-pink-700
              font-bold
              text-sm
              sm:text-base
              md:text-lg

              whitespace-normal
              text-center

              min-w-[140px]
              max-w-[170px]
              sm:max-w-[220px]
            "
          >
            {message}
          </motion.div>
        </>
      )}
    </div>
  );
}
