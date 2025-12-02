'use client'

import { motion } from 'framer-motion'

export default function CircleDetail({ circle, onBack }) {
  const progress = (circle.totalSaved / circle.goal) * 100

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition"
      >
        ← Back to Circles
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glassmorphism rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="text-6xl mb-4">{circle.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{circle.name}</h1>
            <p className="text-muted-foreground mt-2">{circle.description}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-2">Created</p>
            <p className="text-sm font-semibold text-foreground">{circle.createdDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Total Saved</p>
            <p className="text-2xl font-bold text-primary">₦{circle.totalSaved.toLocaleString()}</p>
          </div>
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Circle Goal</p>
            <p className="text-2xl font-bold text-foreground">₦{circle.goal.toLocaleString()}</p>
          </div>
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Each Contribution</p>
            <p className="text-2xl font-bold text-accent">₦{circle.contributionAmount.toLocaleString()}</p>
          </div>
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Progress</p>
            <p className="text-2xl font-bold text-secondary">{progress.toFixed(0)}%</p>
          </div>
        </div>
      </motion.div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glassmorphism rounded-2xl p-8"
        >
          <h3 className="text-lg font-bold text-foreground mb-6">Saving Progress</h3>
          <div className="h-3 bg-border rounded-full overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-linear-to-r from-primary via-secondary to-accent"
            ></motion.div>
          </div>
          <p className="text-center text-2xl font-bold text-foreground">{progress.toFixed(1)}%</p>
        </motion.div>

        {/* Members */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glassmorphism rounded-2xl p-8"
        >
          <h3 className="text-lg font-bold text-foreground mb-6">Members ({circle.members})</h3>
          <div className="space-y-3">
            {circle.membersList.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-card/50"
              >
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center font-bold text-sm text-white">
                  {member.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <button className="glassmorphism rounded-xl py-4 font-semibold text-foreground hover:bg-card/50 transition">
          Contribute
        </button>
        <button className="glassmorphism rounded-xl py-4 font-semibold text-foreground hover:bg-card/50 transition">
          Chat with Circle
        </button>
        <button className="glassmorphism rounded-xl py-4 font-semibold text-destructive hover:bg-destructive/10 transition">
          Leave Circle
        </button>
      </motion.div>
    </motion.div>
  )
}
