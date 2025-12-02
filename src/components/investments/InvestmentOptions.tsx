import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function InvestmentOptions() {
  const investments = [
    {
      name: 'Tech Growth Fund',
      type: 'High Risk',
      return: '+12.5%',
      positive: true,
      description: 'Invest in emerging tech companies',
    },
    {
      name: 'Balanced ETF',
      type: 'Medium Risk',
      return: '+7.2%',
      positive: true,
      description: 'Diversified mix of stocks and bonds',
    },
    {
      name: 'Bond Portfolio',
      type: 'Low Risk',
      return: '+4.1%',
      positive: true,
      description: 'Conservative fixed income strategy',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl font-bold mb-6">Available Investments</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {investments.map((inv, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="glassmorphism p-8 rounded-2xl hover:scale-105 transition cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold">{inv.name}</h3>
                <p className="text-sm text-muted-foreground">{inv.type}</p>
              </div>
              {inv.positive ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-500" />
              )}
            </div>

            <p className="text-3xl font-bold text-accent mb-2">{inv.return}</p>
            <p className="text-muted-foreground text-sm mb-6">{inv.description}</p>

            <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Invest Now
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
