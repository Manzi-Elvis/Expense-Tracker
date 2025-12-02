'use client'

import { motion } from 'framer-motion'

export default function GamificationBadges() {
  const badges = [
    { icon: '🌟', label: 'First Save', desc: 'Made your first saving' },
    { icon: '🔥', label: '7-Day Streak', desc: 'Saved for 7 consecutive days' },
    { icon: '💎', label: 'Premium Saver', desc: 'Reached 1M savings' },
    { icon: '🤝', label: 'Circle Master', desc: 'Joined 5+ saving circles' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-6">Achievements</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="glassmorphism rounded-xl p-6 text-center"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl mb-2"
            >
              {badge.icon}
            </motion.div>
            <p className="font-semibold text-foreground text-sm mb-1">{badge.label}</p>
            <p className="text-xs text-muted-foreground">{badge.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
