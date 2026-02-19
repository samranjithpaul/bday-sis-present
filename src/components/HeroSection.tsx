import { motion } from "framer-motion";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-gentle-sway opacity-50">🌸</div>
      <div className="absolute top-20 right-16 text-3xl animate-twinkle">✨</div>
      <div className="absolute bottom-32 left-20 text-2xl animate-float">🦋</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-gentle-sway opacity-40" style={{ animationDelay: "1s" }}>🌷</div>
      <div className="absolute top-40 left-1/4 text-2xl animate-twinkle" style={{ animationDelay: "0.5s" }}>⭐</div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 max-w-2xl"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-cursive sparkle-text leading-tight mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Happy Birthday, My Forever Best Friend 💖
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-handwritten text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Built with love, chaos, and a lifetime of memories.
        </motion.p>

        <motion.button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 bg-card px-8 py-5 rounded-2xl scrapbook-border cursor-pointer animate-envelope-bounce hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-3xl">💌</span>
          <span className="font-handwritten text-xl md:text-2xl text-foreground">
            Click to Begin the Surprise
          </span>
        </motion.button>
      </motion.div>

      {/* Stars decoration */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-primary opacity-30 animate-twinkle"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${i * 0.4}s`,
            fontSize: `${10 + Math.random() * 14}px`,
          }}
        >
          ✦
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
