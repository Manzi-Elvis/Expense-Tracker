import { motion } from 'framer-motion'

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h1 className="text-4xl font-bold">Welcome back, Mutoni!</h1>
      <p className="text-muted-foreground mt-2">
        You're{' '}
        <span className="text-accent font-semibold">78% closer</span> to your dream home
      </p>
    </motion.div>
  )
}
