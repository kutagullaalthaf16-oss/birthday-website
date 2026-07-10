import { useState } from "react";
import Balloon from "../components/Balloon";
import FinalReveal from "../components/FinalReveal";

const messages = [
  "You are amazing ✨",
  "You are elegant 🌸",
  "You are kind 💖",
  "You are strong 🌷",
  "Keep smiling 😊",
  "Stay wonderful 🌼",
  "Keep shining ⭐",
  "You are thoughtful 💕",
];

export default function BalloonScene({ onLetter }) {
  const [poppedCount, setPoppedCount] = useState(0);

  const handlePop = () => {
    setPoppedCount((count) => count + 1);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
      {/* Background Text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          fontSize: "110px",
          fontWeight: "700",
          color: "#ffffff",
          opacity: 0.08,
        }}
      >
        Sripriya's Birthday
      </div>

      {/* Heading */}
      <h1 className="relative z-20 pt-8 text-center text-5xl font-bold text-pink-600">
        Pop Every Balloon 🎈
      </h1>

      <Balloon
        x={12}
        y={55}
        delay={0}
        message={messages[0]}
        onPop={handlePop}
      />

      <Balloon
        x={28}
        y={28}
        delay={0.3}
        message={messages[1]}
        onPop={handlePop}
      />

      <Balloon
        x={48}
        y={62}
        delay={0.6}
        message={messages[2]}
        onPop={handlePop}
      />

      <Balloon
        x={68}
        y={35}
        delay={0.8}
        message={messages[3]}
        onPop={handlePop}
      />

      <Balloon
        x={82}
        y={60}
        delay={1}
        message={messages[4]}
        onPop={handlePop}
      />

      <Balloon
        x={18}
        y={75}
        delay={1.2}
        message={messages[5]}
        onPop={handlePop}
      />

      <Balloon
        x={58}
        y={18}
        delay={1.4}
        message={messages[6]}
        onPop={handlePop}
      />

      <Balloon
        x={88}
        y={25}
        delay={1.6}
        message={messages[7]}
        onPop={handlePop}
      />

      {poppedCount === messages.length && <FinalReveal onLetter={onLetter} />}
    </div>
  );
}
