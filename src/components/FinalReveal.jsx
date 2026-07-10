import { motion } from "framer-motion";
import sripriya from "../assets/images/sripriya.jpeg";

export default function FinalReveal({ onLetter }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-pink-100/70 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={sripriya}
        className="w-60 rounded-3xl shadow-2xl"
        initial={{
          scale: 0.2,
          opacity: 0,
          y: 100,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          type: "spring",
        }}
      />

      <motion.h2
        className="mt-8 text-4xl font-bold text-pink-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        One Last Surprise 💌
      </motion.h2>

      <motion.button
        onClick={onLetter}
        className="mt-8 rounded-full bg-pink-500 px-8 py-4 text-xl text-white shadow-xl hover:bg-pink-600"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.8,
        }}
      >
        Open Letter
      </motion.button>
    </motion.div>
  );
}
