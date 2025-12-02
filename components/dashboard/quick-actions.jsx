'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function QuickActions() {
  const actions = [
    { icon: '💬', label: 'Send Money', color: 'from-primary to-secondary' },
    { icon: '🎯', label: 'Create Goal', color: 'from-secondary to-accent' },
    { icon: '👥', label: 'Join Circle', color: 'from-accent to-primary' },
    { icon: '📈', label: 'Invest', color: 'from-primary via-secondary to-accent' },
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
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {actions.map((action, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group"
        >
          <button className={`w-full glassmorphism rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/20 transition`}>
            <div className="text-4xl mb-3">{action.icon}</div>
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition">{action.label}</p>
          </button>
        </motion.div>
      ))}
    </motion.div>
  )
}
