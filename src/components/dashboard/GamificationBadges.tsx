import { motion } from 'framer-motion'
import { Trophy, Star, Flame, Award } from 'lucide-react'

export default function GamificationBadges() {
  const badges = [
    { icon: Trophy, label: 'Champion Saver', color: 'text-yellow-500', locked: false },
    { icon: Star, label: 'Consistent', color: 'text-blue-500', locked: false },
    { icon: Flame, label: 'On Fire', color: 'text-red-500', locked: true },
    { icon: Award, label: 'Legend', color: 'text-purple-500', locked: true },
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
      className="glassmorphism p-8 rounded-2xl"
    >
      <h3 className="text-xl font-bold mb-6">Achievements</h3>
      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge, i) => {
          const Icon = badge.icon
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`p-4 rounded-lg text-center ${
                badge.locked ? 'opacity-50 grayscale' : ''
              }`}
            >
              <Icon className={`w-8 h-8 mx-auto mb-2 ${badge.color}`} />
              <p className="text-sm font-semibold">{badge.label}</p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
