'use client'

import { motion } from 'framer-motion'
import PortfolioPie from './portfolio-pie'

export default function InvestmentPortfolio({ portfolio }) {
  const totalInvested = portfolio.reduce((sum, p) => sum + p.invested, 0)
  const totalCurrent = portfolio.reduce((sum, p) => sum + p.current, 0)
  const totalReturns = totalCurrent - totalInvested
  const returnsPercentage = (totalReturns / totalInvested) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-foreground">Your Portfolio</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Summary */}
        <div className="lg:col-span-2 space-y-4">
          {portfolio.map((investment, index) => {
            const returns = investment.current - investment.invested
            const returnsPercentage = (returns / investment.invested) * 100

            return (
              <motion.div
                key={investment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism rounded-xl p-6 flex items-center justify-between"
              >
                <div className="flex-1">
                  <p className="font-bold text-foreground">{investment.name}</p>
                  <p className="text-sm text-muted-foreground">₦{investment.invested.toLocaleString()} invested</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">₦{investment.current.toLocaleString()}</p>
                  <p className={`text-sm font-semibold ${returns >= 0 ? 'text-accent' : 'text-destructive'}`}>
                    {returns >= 0 ? '+' : ''}{returnsPercentage.toFixed(1)}%
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glassmorphism rounded-2xl p-8 flex flex-col items-center justify-center"
        >
          <PortfolioPie data={portfolio} />
        </motion.div>
      </div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="glassmorphism rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Invested</p>
          <p className="text-2xl font-bold text-foreground">₦{totalInvested.toLocaleString()}</p>
        </div>
        <div className="glassmorphism rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-2">Current Value</p>
          <p className="text-2xl font-bold text-foreground">₦{totalCurrent.toLocaleString()}</p>
        </div>
        <div className="glassmorphism rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Returns</p>
          <p className={`text-2xl font-bold ${totalReturns >= 0 ? 'text-accent' : 'text-destructive'}`}>
            {totalReturns >= 0 ? '+' : ''}₦{Math.abs(totalReturns).toLocaleString()}
          </p>
          <p className={`text-xs font-semibold ${totalReturns >= 0 ? 'text-accent' : 'text-destructive'}`}>
            {totalReturns >= 0 ? '+' : ''}{returnsPercentage.toFixed(1)}%
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
