import { motion } from 'framer-motion'
import { Send, Wallet, TrendingUp, Target } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    { icon: Target, label: 'New Goal', color: 'from-primary' },
    { icon: Wallet, label: 'Pay Bills', color: 'from-secondary' },
    { icon: Send, label: 'Send Money', color: 'from-accent' },
    { icon: TrendingUp, label: 'Invest', color: 'from-purple-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {actions.map((action, i) => {
        const Icon = action.icon
        return (
          <motion.button
            key={i}
            variants={itemVariants}
            className={`glassmorphism p-6 rounded-xl hover:scale-105 transition group`}
          >
            <div className={`bg-gradient-to-br ${action.color} to-transparent w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-semibold">{action.label}</p>
          </motion.button>
        )
      })}
    </motion.div>
  )
}
