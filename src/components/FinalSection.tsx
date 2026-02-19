import { motion } from "framer-motion";

interface FinalSectionProps {
  onReplay: () => void;
}

const FinalSection = ({ onReplay }: FinalSectionProps) => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-pink/30 to-lavender/20 pointer-events-none" />

      <motion.div
        className="max-w-2xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-5xl mb-8">🎀</div>

        <motion.p
          className="font-handwritten text-2xl md:text-3xl text-foreground leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          "No matter how old we get, no matter where life takes us — you will
          always be my little chaos partner, my safe place, and my forever best
          friend."
        </motion.p>

        <div className="flex justify-center gap-2 text-2xl mb-10 opacity-50">
          {["💖", "🌸", "✨", "🦋", "💗"].map((e, i) => (
            <span key={i} className="animate-twinkle" style={{ animationDelay: `${i * 0.3}s` }}>
              {e}
            </span>
          ))}
        </div>

        <motion.button
          onClick={onReplay}
          className="bg-primary/20 hover:bg-primary/30 px-8 py-4 rounded-2xl font-handwritten text-xl text-foreground transition-all hover:scale-105 active:scale-95 scrapbook-border"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ Replay the Surprise ✨
        </motion.button>
      </motion.div>
    </section>
  );
};

export default FinalSection;
