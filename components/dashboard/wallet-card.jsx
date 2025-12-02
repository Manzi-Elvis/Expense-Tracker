'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function WalletCard() {
  const [showBalance, setShowBalance] = useState(true)
  const balance = 124500
  const savingsGoal = 500000

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glassmorphism rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-64 flex flex-col justify-between"
    >
      {/* Background gradient effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -ml-36 -mb-36"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Available Balance</p>
            <motion.h2
              key={showBalance ? 'visible' : 'hidden'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              {showBalance ? `₦${balance.toLocaleString()}` : '••••••'}
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowBalance(!showBalance)}
            className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 transition flex items-center justify-center text-primary"
          >
            {showBalance ? '👁️' : '👁️‍🗨️'}
          </motion.button>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-2">Savings Progress</p>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(balance / savingsGoal) * 100}%` }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full bg-linear-to-r from-primary via-secondary to-accent"
              ></motion.div>
            </div>
          </div>
          <span className="text-xs font-semibold text-primary">{Math.round((balance / savingsGoal) * 100)}%</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">This Month</p>
            <p className="text-lg font-bold text-foreground">₦45,200</p>
          </div>
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Savings Goal</p>
            <p className="text-lg font-bold text-accent">₦500,000</p>
          </div>
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Interest Earned</p>
            <p className="text-lg font-bold text-primary">₦2,450</p>
          </div>
          <div className="glassmorphism rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Vault Balance</p>
            <p className="text-lg font-bold text-secondary">₦50,000</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
