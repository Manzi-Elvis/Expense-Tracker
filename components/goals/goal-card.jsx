'use client'

import { motion } from 'framer-motion'

export default function GoalCard({ goal }) {
  const progress = (goal.current / goal.target) * 100

  return (
    <motion.div
      whileHover={{ scale: 1.05, translateY: -4 }}
      className="glassmorphism rounded-2xl p-8 h-full cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-4xl mb-2">{goal.icon}</div>
            <h3 className="text-xl font-bold text-foreground">{goal.title}</h3>
          </div>
          <div className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${goal.color} text-white`}>
            {progress.toFixed(0)}%
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{goal.description}</p>

        {/* Progress Bar with circular indicator */}
        <div className="mb-4">
          <div className="h-2 bg-border rounded-full overflow-hidden mb-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className={`h-full bg-gradient-to-r ${goal.color}`}
            ></motion.div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">₦{goal.current.toLocaleString()}</span>
            <span className="font-semibold text-foreground">₦{goal.target.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          📅 {goal.deadline}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-primary">{goal.contributors} contributor{goal.contributors > 1 ? 's' : ''}</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-semibold hover:bg-primary/30 transition text-xs"
          >
            View
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
