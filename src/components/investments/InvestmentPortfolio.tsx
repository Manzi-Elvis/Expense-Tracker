import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export default function InvestmentPortfolio() {
  const portfolio = [
    { name: 'Tech Stocks', value: 45, color: '#3b82f6' },
    { name: 'Bonds', value: 30, color: '#8b5cf6' },
    { name: 'Real Estate', value: 15, color: '#06b6d4' },
    { name: 'Crypto', value: 10, color: '#f59e0b' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid md:grid-cols-2 gap-8 mb-8"
    >
      <div className="glassmorphism p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6">Your Portfolio</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={portfolio}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {portfolio.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="glassmorphism p-8 rounded-2xl"
      >
        <h3 className="text-xl font-bold mb-6">Asset Allocation</h3>
        <div className="space-y-4">
          {portfolio.map((asset, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: asset.color }}
                />
                <span className="font-medium">{asset.name}</span>
              </div>
              <span className="font-bold">{asset.value}%</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 p-4 bg-background/50 rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Expected Annual Return</p>
          <p className="text-3xl font-bold text-accent">+8.5%</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
