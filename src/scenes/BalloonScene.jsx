import { useMemo, useState } from "react";
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

  const isMobile = window.innerWidth < 640;

  const balloons = useMemo(() => {
    return isMobile
      ? [
          { x: 18, y: 55 },
          { x: 42, y: 28 },
          { x: 70, y: 52 },
          { x: 25, y: 78 },
          { x: 80, y: 78 },
          { x: 55, y: 20 },
          { x: 18, y: 35 },
          { x: 82, y: 36 },
        ]
      : [
          { x: 12, y: 55 },
          { x: 28, y: 28 },
          { x: 48, y: 62 },
          { x: 68, y: 35 },
          { x: 82, y: 60 },
          { x: 18, y: 75 },
          { x: 58, y: 18 },
          { x: 88, y: 25 },
        ];
  }, [isMobile]);

  const handlePop = () => {
    setPoppedCount((count) => count + 1);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
      {/* Background Text */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          select-none pointer-events-none

          text-[52px]
          sm:text-[72px]
          md:text-[90px]
          lg:text-[110px]

          font-bold
          text-white
          opacity-10
          text-center
          px-4
        "
      >
        Sripriya's Birthday
      </div>

      {/* Heading */}
      <h1
        className="
          relative z-20

          pt-6
          sm:pt-8

          text-center

          text-3xl
          sm:text-4xl
          md:text-5xl

          font-bold
          text-pink-600
        "
      >
        Pop Every Balloon 🎈
      </h1>

      {balloons.map((balloon, index) => (
        <Balloon
          key={index}
          x={balloon.x}
          y={balloon.y}
          delay={index * 0.25}
          message={messages[index]}
          onPop={handlePop}
        />
      ))}

      {poppedCount === messages.length && <FinalReveal onLetter={onLetter} />}
    </div>
  );
}
