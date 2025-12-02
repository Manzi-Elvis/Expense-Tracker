'use client'

import { motion } from 'framer-motion'
import GoalCard from './goal-card'

export default function GoalsOverview({ goals, onSelectGoal }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.current, 0)
  const totalTarget = goals.reduce((sum, g) => sum + g.target, 0)
  const overallProgress = (totalSaved / totalTarget) * 100

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glassmorphism rounded-2xl p-8">
          <p className="text-sm text-muted-foreground mb-2">Total Saved</p>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            ₦{totalSaved.toLocaleString()}
          </p>
          <p className="text-xs text-accent font-semibold">↑ 12% from last month</p>
        </div>

        <div className="glassmorphism rounded-2xl p-8">
          <p className="text-sm text-muted-foreground mb-2">Total Target</p>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            ₦{totalTarget.toLocaleString()}
          </p>
          <p className="text-xs text-primary font-semibold">{goals.length} active goals</p>
        </div>

        <div className="glassmorphism rounded-2xl p-8">
          <p className="text-sm text-muted-foreground mb-2">Overall Progress</p>
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
            {overallProgress.toFixed(1)}%
          </p>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Goals Grid */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Your Saving Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectGoal(goal.id)}
              className="cursor-pointer"
            >
              <GoalCard goal={goal} />
            </motion.div>
          ))}

          {/* New Goal Card */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: goals.length * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glassmorphism rounded-2xl p-8 flex flex-col items-center justify-center min-h-96 hover:shadow-lg hover:shadow-primary/20 transition border-2 border-dashed border-primary/50 hover:border-primary"
          >
            <div className="text-5xl mb-4">+</div>
            <p className="font-bold text-foreground">Create New Goal</p>
            <p className="text-sm text-muted-foreground mt-2">Start saving for something new</p>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
