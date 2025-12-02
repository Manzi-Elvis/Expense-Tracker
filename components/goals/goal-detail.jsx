'use client'

import { motion } from 'framer-motion'
import CircularProgress from './circular-progress'
import GoalChart from './goal-chart'

export default function GoalDetail({ goal, onBack }) {
  const progress = (goal.current / goal.target) * 100
  const dailyNeeded = Math.ceil((goal.target - goal.current) / 150)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition"
      >
        ← Back to Goals
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glassmorphism rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="text-6xl mb-4">{goal.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{goal.title}</h1>
            <p className="text-muted-foreground mt-2">{goal.description}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-2">Due</p>
            <p className="text-lg font-bold text-foreground">{goal.deadline}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Current Amount</p>
            <p className="text-2xl font-bold text-primary">₦{goal.current.toLocaleString()}</p>
          </div>
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Target Amount</p>
            <p className="text-2xl font-bold text-foreground">₦{goal.target.toLocaleString()}</p>
          </div>
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Remaining</p>
            <p className="text-2xl font-bold text-accent">₦{(goal.target - goal.current).toLocaleString()}</p>
          </div>
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Daily Needed</p>
            <p className="text-2xl font-bold text-secondary">₦{dailyNeeded.toLocaleString()}</p>
          </div>
        </div>
      </motion.div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Circular Progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glassmorphism rounded-2xl p-8 flex flex-col items-center justify-center"
        >
          <CircularProgress value={progress} />
          <p className="mt-4 text-center">
            <span className="text-2xl font-bold text-foreground">{progress.toFixed(1)}%</span>
            <p className="text-sm text-muted-foreground mt-2">of your goal completed</p>
          </p>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glassmorphism rounded-2xl p-8"
        >
          <h3 className="text-lg font-bold text-foreground mb-6">Savings Trend</h3>
          <GoalChart />
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <button className="glassmorphism rounded-xl py-4 font-semibold text-foreground hover:bg-card/50 transition">
          Add Funds
        </button>
        <button className="glassmorphism rounded-xl py-4 font-semibold text-foreground hover:bg-card/50 transition">
          Edit Goal
        </button>
        <button className="glassmorphism rounded-xl py-4 font-semibold text-destructive hover:bg-destructive/10 transition">
          Delete Goal
        </button>
      </motion.div>
    </motion.div>
  )
}
