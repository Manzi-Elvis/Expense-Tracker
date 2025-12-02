import { motion } from 'framer-motion'
import GoalsOverview from '../components/goals/GoalsOverview'
import GoalDetail from '../components/goals/GoalDetail'
import Sidebar from '../components/layout/Sidebar'

export default function Goals() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-6 md:p-8 max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Savings Goals</h1>
          <GoalsOverview />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <GoalDetail key={i} id={i} />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
