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
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-pink-300 blur-[180px] opacity-30" />

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
        initial={{ opacity: 0, scale: 0.9, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative
        w-[850px]
        max-w-[92%]
        h-[82vh]
        overflow-hidden
        rounded-[32px]
        border-[6px]
        border-pink-300
        bg-white/90
        backdrop-blur-xl
        shadow-[0_0_70px_rgba(255,105,180,.35)]
        p-14"
      >
        {/* Decorative Corners */}
        <div className="absolute top-4 left-4 text-4xl">🌸</div>
        <div className="absolute top-4 right-4 text-4xl">🌸</div>
        <div className="absolute bottom-4 left-4 text-4xl">🌸</div>
        <div className="absolute bottom-4 right-4 text-4xl">🌸</div>

        {/* Border */}
        <div className="absolute left-6 top-0 h-full border-l-2 border-pink-200" />
        <div className="absolute right-6 top-0 h-full border-r-2 border-pink-200" />

        {/* Moving Content */}
        <motion.div
          initial={{ y: "20%" }}
          animate={{ y: "-65%" }}
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
                y: 25,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 1.7,
                duration: 1.2,
              }}
              className={
                index === 0
                  ? "text-6xl text-pink-600 mb-10"
                  : "text-3xl text-gray-700 mb-5 leading-relaxed"
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
