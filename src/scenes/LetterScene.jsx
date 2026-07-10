import { motion } from "framer-motion";
import Butterfly from "../components/Butterfly";

const lines = [
  "Dear Sripriya,",
  "",
  "Happy Birthday! 🎉",
  "",
  "I wanted today to feel a little different,",
  "so I made this small surprise just for you.",
  "",
  "I hope this year brings you",
  "lots of happiness,",
  "good health,",
  "new adventures,",
  "and countless reasons to smile.",
  "",
  "Keep being the kind,",
  "strong and wonderful person you are.",
  "",
  "May every day ahead",
  "bring something beautiful into your life.",
  "",
  "Have an amazing birthday! 🌸",
  "",
  "",
  "— Althaf",
  "",
  "",
];

export default function LetterScene() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-pink-300 opacity-30 blur-[130px] sm:h-[520px] sm:w-[520px] md:h-[650px] md:w-[650px] lg:h-[720px] lg:w-[720px]" />

      {/* Butterflies */}
      <Butterfly left top={12} delay={0} />
      <Butterfly left top={28} delay={1} />
      <Butterfly left top={46} delay={2} />
      <Butterfly left top={66} delay={3} />
      <Butterfly left top={84} delay={4} />

      <Butterfly left={false} top={18} delay={0.5} />
      <Butterfly left={false} top={36} delay={1.5} />
      <Butterfly left={false} top={56} delay={2.5} />
      <Butterfly left={false} top={74} delay={3.5} />
      <Butterfly left={false} top={90} delay={4.5} />

      {/* Letter */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 80,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
        relative

        w-[95%]
        sm:w-[90%]
        md:w-[82%]
        lg:w-[850px]

        h-[84vh]

        overflow-hidden

        rounded-3xl

        border-4
        md:border-[6px]
        border-pink-300

        bg-white/90
        backdrop-blur-xl

        shadow-[0_0_60px_rgba(255,105,180,.35)]

        px-5
        py-7

        sm:px-8
        sm:py-10

        md:px-12
        md:py-12

        lg:px-14
        lg:py-14
        "
      >
        {/* Decorative Corners */}

        <div className="absolute left-3 top-3 text-xl sm:left-4 sm:top-4 sm:text-3xl md:text-4xl">
          🌸
        </div>

        <div className="absolute right-3 top-3 text-xl sm:right-4 sm:top-4 sm:text-3xl md:text-4xl">
          🌸
        </div>

        <div className="absolute bottom-3 left-3 text-xl sm:bottom-4 sm:left-4 sm:text-3xl md:text-4xl">
          🌸
        </div>

        <div className="absolute bottom-3 right-3 text-xl sm:bottom-4 sm:right-4 sm:text-3xl md:text-4xl">
          🌸
        </div>

        {/* Decorative Border */}

        <div className="absolute left-3 top-0 h-full border-l border-pink-200 sm:left-6 sm:border-l-2" />

        <div className="absolute right-3 top-0 h-full border-r border-pink-200 sm:right-6 sm:border-r-2" />

        {/* Scrolling Letter */}

        <motion.div
          initial={{
            y: "18%",
          }}
          animate={{
            y: "-65%",
          }}
          transition={{
            duration: 38,
            ease: "linear",
          }}
        >
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{
                opacity: 0,
                y: 18,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 1.6,
                duration: 1.2,
              }}
              className={
                index === 0
                  ? `
                    mb-8
                    text-center
                    text-3xl
                    text-pink-600

                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  `
                  : `
                    mb-4

                    text-lg
                    leading-relaxed
                    text-gray-700

                    sm:text-xl
                    md:text-2xl
                    lg:text-3xl
                  `
              }
              style={{
                fontFamily: index === 0 ? "Great Vibes" : "Caveat",
              }}
            >
              {line || <br />}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
