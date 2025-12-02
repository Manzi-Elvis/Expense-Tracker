import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

export default function TransactionHistory() {
  const transactions = [
    { type: 'send', description: 'Transfer to Savings', amount: '-$500', time: 'Today' },
    { type: 'receive', description: 'Salary Deposit', amount: '+$2,500', time: 'Yesterday' },
    { type: 'send', description: 'Investment', amount: '-$1,000', time: '2 days ago' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="glassmorphism p-8 rounded-2xl"
    >
      <h3 className="text-xl font-bold mb-6">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((tx, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                tx.type === 'send' ? 'bg-red-500/20' : 'bg-green-500/20'
              }`}>
                {tx.type === 'send' ? (
                  <ArrowUpRight className="w-5 h-5 text-red-500" />
                ) : (
                  <ArrowDownLeft className="w-5 h-5 text-green-500" />
                )}
              </div>
              <div>
                <p className="font-semibold">{tx.description}</p>
                <p className="text-xs text-muted-foreground">{tx.time}</p>
              </div>
            </div>
            <p className={`font-bold ${tx.type === 'send' ? 'text-red-500' : 'text-green-500'}`}>
              {tx.amount}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
