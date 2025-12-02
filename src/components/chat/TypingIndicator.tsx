import { motion } from 'framer-motion'

export default function TypingIndicator() {
  const dotVariants = {
    hidden: { y: 0 },
    visible: (i: number) => ({
      y: -10,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        repeatType: 'reverse' as const,
        repeat: Infinity,
      },
    }),
  }

  return (
    <div className="flex justify-start">
      <div className="glassmorphism px-4 py-3 rounded-lg flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={dotVariants}
            initial="hidden"
            animate="visible"
            className="w-2 h-2 bg-muted-foreground rounded-full"
          />
        ))}
      </div>
    </div>
  )
}
