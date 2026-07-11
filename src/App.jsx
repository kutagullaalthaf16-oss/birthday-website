import { useState } from "react";

import Sparkles from "./components/Sparkles";

import LoadingScene from "./scenes/LoadingScene";
import BirthdayScene from "./scenes/BirthdayScene";
import BalloonScene from "./scenes/BalloonScene";
import LetterScene from "./scenes/LetterScene";
import BackgroundMusic from "./components/BackgroundMusic";
import { Analytics } from "@vercel/analytics/react";
export default function App() {
  const [scene, setScene] = useState("loading");

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100 to-rose-200">
      <Sparkles />

      {scene === "loading" && (
        <LoadingScene onComplete={() => setScene("birthday")} />
      )}

      {scene === "birthday" && (
        <BirthdayScene onComplete={() => setScene("balloons")} />
      )}

      {scene === "balloons" && (
        <BalloonScene onLetter={() => setScene("letter")} />
      )}

      {scene === "letter" && (
        <>
          <BackgroundMusic />
          <LetterScene />
        </>
      )}
      <Analytics />
    </div>
  );
}
