import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import CircularProgress from './CircularProgress'

interface GoalDetailProps {
  id: number
}

export default function GoalDetail({ id }: GoalDetailProps) {
  const goals = [
    { title: 'Dream Home', target: 100000, current: 78000, emoji: '🏡' },
    { title: 'Vacation', target: 5000, current: 3200, emoji: '✈️' },
    { title: 'Emergency Fund', target: 20000, current: 18500, emoji: '🛡️' },
  ]

  const goal = goals[id - 1]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: id * 0.1 }}
      className="glassmorphism p-8 rounded-2xl"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="text-muted-foreground text-sm">{goal.emoji}</span>
          <h3 className="text-xl font-bold">{goal.title}</h3>
        </div>
        <TrendingUp className="w-5 h-5 text-green-500" />
      </div>

      <div className="flex justify-between items-center mb-6">
        <CircularProgress
          value={(goal.current / goal.target) * 100}
          size={100}
        />
        <div className="text-right">
          <p className="text-2xl font-bold">${goal.current.toLocaleString()}</p>
          <p className="text-muted-foreground text-sm">of ${goal.target.toLocaleString()}</p>
        </div>
      </div>

      <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
        Add to Goal
      </button>
    </motion.div>
  )
}
