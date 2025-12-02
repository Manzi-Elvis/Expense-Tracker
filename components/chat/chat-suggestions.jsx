'use client'

import { motion } from 'framer-motion'

export default function ChatSuggestions({ onSuggestion }) {
  const suggestions = [
    'Save 500k for a laptop in 5 months',
    'Join a saving circle',
    'Create a vacation fund',
    'Show me my investment options',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="px-4 sm:px-6 lg:px-8 py-6 space-y-3"
    >
      <p className="text-xs text-muted-foreground font-semibold">Suggested actions</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {suggestions.map((suggestion, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSuggestion(suggestion)}
            className="p-3 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition text-left text-sm text-foreground"
          >
            {suggestion}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
