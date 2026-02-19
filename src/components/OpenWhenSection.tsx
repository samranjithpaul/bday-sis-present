import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = [
  {
    label: "Open when you feel sad",
    emoji: "🥺",
    color: "bg-soft-pink",
    message:
      "Hey… I know you pretend you're strong all the time, but it's okay to not be okay. You've survived 100% of your worst days. That's not luck — that's strength. And no matter what, you'll never face life alone. I'm always on your team.",
  },
  {
    label: "Open when you need motivation",
    emoji: "🔥",
    color: "bg-warm-peach",
    message:
      "You are literally one of the most capable humans I know. If stubbornness were a superpower, you'd be a superhero. Stop doubting yourself and start remembering who you are.",
  },
  {
    label: "Open when you miss me",
    emoji: "💌",
    color: "bg-lavender",
    message:
      "First of all… dramatic. I'm not going anywhere. Even if we're miles apart, I'm only one call away. Annoying you is a lifetime contract.",
  },
  {
    label: "Open when you feel proud of yourself",
    emoji: "🌟",
    color: "bg-cream",
    message:
      "GOOD. You should. I've watched you grow into someone powerful and independent. You didn't become strong by accident — you earned it.",
  },
  {
    label: "Open on your next birthday",
    emoji: "🎂",
    color: "bg-baby-blue",
    message:
      "If you're reading this next year, I hope you chased something that scared you. I hope you grew. And I hope you still know how deeply loved you are.",
  },
];

const OpenWhenSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-cursive text-center mb-4 sparkle-text">
          💌 Open When...
        </h2>
        <p className="text-center font-handwritten text-lg text-muted-foreground mb-12">
          Little letters for whenever you need them
        </p>

        <div className="flex flex-col gap-4">
          {letters.map((letter, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left p-5 rounded-xl ${letter.color} pastel-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-2 border-transparent hover:border-primary/30`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{letter.emoji}</span>
                  <span className="font-handwritten text-xl text-foreground">
                    {letter.label}
                  </span>
                  <span className="ml-auto text-muted-foreground transition-transform duration-300" style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                    ▼
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 mt-2 bg-card rounded-xl paper-shadow">
                      <p className="font-serif text-foreground/90 leading-relaxed italic text-base">
                        "{letter.message}"
                      </p>
                      <div className="mt-3 text-right font-handwritten text-primary text-sm">
                        — with love 💖
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OpenWhenSection;
