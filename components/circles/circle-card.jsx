'use client'

import { motion } from 'framer-motion'

export default function CircleCard({ circle }) {
  const progress = (circle.totalSaved / circle.goal) * 100

  return (
    <motion.div
      whileHover={{ scale: 1.05, translateY: -4 }}
      className="glassmorphism rounded-2xl p-6 h-full hover:shadow-lg hover:shadow-primary/20 transition"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{circle.icon}</div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary">
          {circle.members} members
        </span>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-1">{circle.name}</h3>
      <p className="text-xs text-muted-foreground mb-4">{circle.description}</p>

      <div className="space-y-3 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-2">Goal Progress</p>
          <div className="h-2 bg-border rounded-full overflow-hidden mb-1">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            ></motion.div>
          </div>
          <div className="flex justify-between text-xs">
            <span>₦{circle.totalSaved.toLocaleString()}</span>
            <span className="font-semibold">₦{circle.goal.toLocaleString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-card/50 rounded-lg p-2">
            <p className="text-xs text-muted-foreground">Contribution</p>
            <p className="font-bold text-sm text-foreground">₦{circle.contributionAmount.toLocaleString()}</p>
          </div>
          <div className="bg-card/50 rounded-lg p-2">
            <p className="text-xs text-muted-foreground">Frequency</p>
            <p className="font-bold text-sm text-foreground">{circle.frequency}</p>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-2 rounded-lg bg-primary/20 text-primary font-semibold hover:bg-primary/30 transition text-sm"
      >
        View Circle
      </motion.button>
    </motion.div>
  )
}
