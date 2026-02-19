import { motion } from "framer-motion";

// Images load from public/ — use .jpg or .jpeg (names must match exactly)
const events = [
  {
    emoji: "🌸",
    title: "The Day You Were Born",
    text: "And just like that, the world became louder, brighter, and slightly more dramatic. Little did we know you'd grow into someone this unstoppable.",
    color: "bg-soft-pink",
    rotation: "-rotate-1",
    image: "/timeline-born.jpeg",
  },
  {
    emoji: "🎈",
    title: "Our Crazy Childhood",
    text: "The fights over TV remotes. The secret snacks. The stupid arguments. The unstoppable laughter. We didn't know it then, but we were building memories we'd miss forever.",
    color: "bg-cream",
    rotation: "rotate-1",
    image: "/timeline-childhood.jpeg",
  },
  {
    emoji: "😂",
    title: "All the Fights and Laughs",
    text: "We argued like enemies but defended each other like warriors. That's sibling code. No one else gets to mess with you — that's my job.",
    color: "bg-lavender",
    rotation: "-rotate-2",
    image: "/timeline-fights.jpeg",
  },
  {
    emoji: "👑",
    title: "The Strong Woman You Became",
    text: "Watching you grow into your own person has been wild. You carry yourself with strength, even when life tests you. I'm genuinely proud of who you are becoming.",
    color: "bg-baby-blue",
    rotation: "rotate-1",
    image: "/timeline-strong.jpeg",
  },
  {
    emoji: "🚀",
    title: "The Future Is Yours",
    text: "The world has no idea what's coming. You're just getting started. Bigger dreams. Bigger wins. And I'll be right there, clapping the loudest.",
    color: "bg-warm-peach",
    rotation: "-rotate-1",
    image: "/timeline-future.jpeg",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <motion.h2
        className="text-4xl md:text-6xl font-cursive text-center mb-4 sparkle-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        📜 Our Story
      </motion.h2>
      <p className="text-center font-handwritten text-lg text-muted-foreground mb-16">
        A scrapbook of us through the years
      </p>

      <div className="max-w-xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-12 ${i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"} pl-14 md:pl-0`}
          >
            {/* Dot on timeline */}
            <div className="absolute left-6 md:left-1/2 top-4 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

            <div className={`${event.color} ${event.rotation} p-5 rounded-2xl paper-shadow tape-effect overflow-hidden`}>
              {/* Image */}
              <div className="mt-3 mb-3 rounded-xl overflow-hidden border-2 border-background/60 shadow-sm">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="text-3xl mb-1">{event.emoji}</div>
              <h3 className="font-cursive text-2xl md:text-3xl text-foreground mb-2">
                {event.title}
              </h3>
              <p className="font-serif text-sm md:text-base text-foreground/80 leading-relaxed">
                {event.text}
              </p>
              {/* Doodle corners */}
              <div className="absolute -top-2 -right-2 text-xs opacity-30">✦</div>
              <div className="absolute -bottom-2 -left-2 text-xs opacity-30">✦</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
