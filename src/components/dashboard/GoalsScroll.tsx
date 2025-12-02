import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function GoalsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const goals = [
    { title: 'Dream Home', target: 100000, current: 78000, icon: '🏡' },
    { title: 'Vacation', target: 5000, current: 3200, icon: '✈️' },
    { title: 'Emergency Fund', target: 20000, current: 18500, icon: '🛡️' },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Your Goals</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 hover:bg-muted rounded-lg transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 hover:bg-muted rounded-lg transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {goals.map((goal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 glassmorphism p-6 rounded-xl min-w-80"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-muted-foreground text-sm">{goal.title}</p>
                <h4 className="text-2xl font-bold">${goal.current.toLocaleString()}</h4>
              </div>
              <span className="text-3xl">{goal.icon}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Target: ${goal.target.toLocaleString()}</span>
                <span>{Math.round((goal.current / goal.target) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-primary to-accent"
                  style={{ width: `${(goal.current / goal.target) * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
