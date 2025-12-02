import { motion } from 'framer-motion'
import { Users, TrendingUp } from 'lucide-react'

export default function CirclesOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid md:grid-cols-3 gap-6"
    >
      {[
        { label: 'Active Circles', value: '3', icon: Users },
        { label: 'Total Raised', value: '$18,500', icon: TrendingUp },
        { label: 'Members', value: '12', icon: Users },
      ].map((stat, i) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glassmorphism p-6 rounded-xl"
          >
            <Icon className="w-5 h-5 text-primary mb-2" />
            <p className="text-muted-foreground text-sm">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
