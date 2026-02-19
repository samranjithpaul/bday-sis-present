import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  {
    emoji: "🏅",
    title: "Best Drama Queen",
    desc: "For turning small inconveniences into cinematic masterpieces. Your reactions deserve an Oscar.",
    color: "bg-soft-pink",
  },
  {
    emoji: "💖",
    title: "Most Caring Human",
    desc: "Behind all the sass is the softest heart. You care deeply, even when you pretend not to.",
    color: "bg-lavender",
  },
  {
    emoji: "🏆",
    title: "Lifetime Achievement in Annoying Me",
    desc: "Decades of consistent excellence. Commitment unmatched.",
    color: "bg-cream",
  },
  {
    emoji: "👑",
    title: "Strongest Woman I Know",
    desc: "You've faced challenges quietly. You've grown without applause. And that's real strength.",
    color: "bg-baby-blue",
  },
];

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
  rotation: number;
}

const confettiColors = [
  "hsl(340, 60%, 75%)",
  "hsl(270, 40%, 85%)",
  "hsl(200, 50%, 82%)",
  "hsl(40, 60%, 94%)",
  "hsl(20, 60%, 88%)",
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (isInView) {
      const pieces: ConfettiPiece[] = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        rotation: Math.random() * 360,
      }));
      setConfetti(pieces);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-3 rounded-sm pointer-events-none"
          style={{
            left: `${piece.left}%`,
            top: "-10px",
            backgroundColor: piece.color,
            animation: `confetti-fall 3s ease-in ${piece.delay}s forwards`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}

      <motion.h2
        className="text-4xl md:text-6xl font-cursive text-center mb-4 sparkle-text"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        🏆 World's Best Sister Awards
      </motion.h2>
      <p className="text-center font-handwritten text-lg text-muted-foreground mb-12">
        The annual ceremony you never asked for ✨
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className={`${award.color} p-6 rounded-2xl paper-shadow cursor-default`}
          >
            <div className="text-5xl mb-3 text-center">{award.emoji}</div>
            <h3 className="font-cursive text-2xl text-foreground text-center mb-2">
              {award.title}
            </h3>
            <p className="font-serif text-sm text-foreground/80 text-center leading-relaxed">
              {award.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
