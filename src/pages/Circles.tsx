import { motion } from 'framer-motion'
import CirclesOverview from '../components/circles/CirclesOverview'
import CircleDetail from '../components/circles/CircleDetail'
import Sidebar from '../components/layout/Sidebar'

export default function Circles() {
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
          <h1 className="text-4xl font-bold mb-8">Saving Circles</h1>
          <CirclesOverview />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <CircleDetail key={i} id={i} />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
