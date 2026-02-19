import { useState, useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import OpenWhenSection from "@/components/OpenWhenSection";
import TimelineSection from "@/components/TimelineSection";
import AwardsSection from "@/components/AwardsSection";
import FinalSection from "@/components/FinalSection";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [started, setStarted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setStarted(false), 800);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <MusicToggle autoPlay={started} />

      <HeroSection onStart={handleStart} />

      {started && (
        <div ref={contentRef}>
          <OpenWhenSection />
          <TimelineSection />
          <AwardsSection />
          <FinalSection onReplay={handleReplay} />
        </div>
      )}
    </div>
  );
};

export default Index;
