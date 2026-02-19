import { useState, useRef, useEffect } from "react";

interface MusicToggleProps {
  autoPlay?: boolean;
}

const MusicToggle = ({ autoPlay = false }: MusicToggleProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAutoPlayed = useRef(false);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audio.addEventListener("error", () => {
      audio.src = "https://cdn.pixabay.com/audio/2024/11/28/audio_3a4e1fd965.mp3";
    });
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    });
    audio.addEventListener("play", () => setPlaying(true));
    audio.addEventListener("pause", () => setPlaying(false));
    audioRef.current = audio;

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (autoPlay && audioRef.current && !hasAutoPlayed.current) {
      hasAutoPlayed.current = true;
      audioRef.current.play().catch(() => {});
    }
  }, [autoPlay]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 bg-card/80 backdrop-blur-sm p-3 rounded-full paper-shadow hover:scale-110 active:scale-95 transition-transform"
      aria-label="Toggle music"
    >
      <span className="text-xl">{playing ? "🔊" : "🔇"}</span>
    </button>
  );
};

export default MusicToggle;
