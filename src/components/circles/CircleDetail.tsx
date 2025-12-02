import { motion } from 'framer-motion'
import { Users, Calendar } from 'lucide-react'

interface CircleDetailProps {
  id: number
}

export default function CircleDetail({ id }: CircleDetailProps) {
  const circles = [
    {
      name: 'Home Builders',
      members: 5,
      target: 50000,
      current: 38000,
      nextContribution: '2024-12-15',
    },
    {
      name: 'Investment Club',
      members: 7,
      target: 100000,
      current: 65000,
      nextContribution: '2024-12-20',
    },
  ]

  const circle = circles[id - 1]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: id * 0.1 }}
      className="glassmorphism p-8 rounded-2xl"
    >
      <h3 className="text-xl font-bold mb-4">{circle.name}</h3>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">{circle.members} Members</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-accent" />
          <div>
            <p className="text-sm text-muted-foreground">
              Next contribution: {new Date(circle.nextContribution).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>${circle.current.toLocaleString()}</span>
          <span>${circle.target.toLocaleString()}</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent"
            style={{ width: `${(circle.current / circle.target) * 100}%` }}
          />
        </div>
      </div>

      <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
        View Details
      </button>
    </motion.div>
  )
}
