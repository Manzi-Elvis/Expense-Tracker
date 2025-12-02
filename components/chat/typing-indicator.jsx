'use client'

import { motion } from 'framer-motion'

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-start gap-2"
    >
      <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-secondary shrink-0 flex items-center justify-center text-sm">
        🤖
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-card border border-border">
        <motion.div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [-4, 0, -4] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
              className="w-2 h-2 rounded-full bg-primary"
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
