import { motion } from "framer-motion";
import sripriya from "../assets/images/sripriya.jpeg";

export default function FinalReveal({ onLetter }) {
  return (
    <motion.div
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-pink-100/75 backdrop-blur-md px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Photo */}
      <motion.img
        src={sripriya}
        alt="Sripriya"
        className="
  w-32
  sm:w-40
  md:w-48
  lg:w-56

  rounded-3xl
  border-4 border-white
  shadow-[0_15px_40px_rgba(0,0,0,.25)]
  object-cover
"
        initial={{
          scale: 0.2,
          opacity: 0,
          y: 80,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.1,
          type: "spring",
        }}
      />

      {/* Heading */}
      <motion.h2
        className="
          mt-6
          text-center
          font-bold
          text-pink-700

          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        One Last Surprise 💌
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="
          mt-3
          max-w-md
          text-center
          text-pink-600

          text-sm
          sm:text-base
          md:text-lg
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        A little letter, written especially for you.
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={onLetter}
        className="
          mt-8

          rounded-full
          bg-pink-500

          px-7 py-3
          sm:px-8 sm:py-4

          text-base
          sm:text-lg
          md:text-xl

          font-semibold
          text-white

          shadow-xl

          transition-all
          duration-300

          hover:scale-105
          hover:bg-pink-600

          active:scale-95
        "
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.6,
        }}
      >
        💌 Open Letter
      </motion.button>
    </motion.div>
  );
}
