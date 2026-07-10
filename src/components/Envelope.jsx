import { motion } from "framer-motion";

export default function Envelope({ onOpen }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
        className="relative cursor-pointer"
      >
        {/* Body */}
        <div className="w-96 h-60 rounded-xl bg-pink-300 shadow-2xl" />

        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-0 h-0
          border-l-[192px]
          border-r-[192px]
          border-b-[120px]
          border-transparent
          border-b-pink-400
          origin-top"
          whileHover={{
            rotateX: 180,
          }}
          transition={{
            duration: 0.8,
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
          💌 Open Me
        </div>
      </motion.div>
    </div>
  );
}
