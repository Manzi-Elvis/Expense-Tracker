'use client'

import { motion } from 'framer-motion'

export default function GoalChart() {
  const data = [
    { month: 'Jan', amount: 20000 },
    { month: 'Feb', amount: 35000 },
    { month: 'Mar', amount: 60000 },
    { month: 'Apr', amount: 85000 },
    { month: 'May', amount: 105000 },
    { month: 'Jun', amount: 124500 },
  ]

  const maxAmount = Math.max(...data.map((d) => d.amount))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const barVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-end justify-between gap-2 h-48"
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          variants={barVariants}
          className="flex-1 flex flex-col items-center"
        >
          <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg" style={{ height: `${(item.amount / maxAmount) * 100}%` }}></div>
          <p className="text-xs text-muted-foreground mt-2">{item.month}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
