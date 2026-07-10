import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function BirthdayScene({ onComplete }) {
  const [korean, setKorean] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setKorean(true), 3000);
    const t2 = setTimeout(() => onComplete(), 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={korean ? "kr" : "en"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {!korean ? (
            <>
              <h1
                className="text-7xl text-pink-600"
                style={{ fontFamily: "Great Vibes" }}
              >
                Happy Birthday
              </h1>

              <h2 className="text-6xl font-bold text-rose-500 mt-4">
                Sripriya
              </h2>
            </>
          ) : (
            <>
              <h1
                className="text-6xl text-pink-600"
                style={{ fontFamily: "Great Vibes" }}
              >
                생일 축하해요
              </h1>

              <h2 className="text-5xl text-rose-500 mt-4">스리프리야</h2>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
