import { useEffect, useRef } from "react";
import music from "../assets/music/premam_bgm.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.volume = 0.35;

    audioRef.current.play().catch(() => {
      console.log("Autoplay blocked until user interaction.");
    });
  }, []);

  return <audio ref={audioRef} src={music} loop />;
}
