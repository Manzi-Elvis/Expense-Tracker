'use client'

import { motion } from 'framer-motion'

export default function InvestmentOptions({ investments }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low':
        return 'text-accent'
      case 'Medium':
        return 'text-primary'
      case 'High':
        return 'text-destructive'
      default:
        return 'text-foreground'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-foreground">Investment Opportunities</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {investments.map((investment) => (
          <motion.div
            key={investment.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, translateY: -4 }}
            className="glassmorphism rounded-2xl p-6 cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{investment.icon}</div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full bg-border ${getRiskColor(investment.risk)}`}>
                {investment.risk} Risk
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-1">{investment.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">Min. investment: ₦{investment.minInvest.toLocaleString()}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-card/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">Expected Returns</p>
                <p className="font-bold text-primary">{investment.returns}</p>
              </div>
              <div className="bg-card/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">Risk Level</p>
                <p className={`font-bold ${getRiskColor(investment.risk)}`}>{investment.risk}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-linear-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition"
            >
              Invest Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
