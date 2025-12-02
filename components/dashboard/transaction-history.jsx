'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TransactionHistory() {
  const transactions = [
    { icon: '📤', label: 'Transfer to Savings', amount: '+₦45,200', date: 'Today', color: 'text-primary' },
    { icon: '📈', label: 'Investment Returns', amount: '+₦2,450', date: 'Yesterday', color: 'text-accent' },
    { icon: '👥', label: 'Circle Contribution', amount: '-₦20,000', date: '2 days ago', color: 'text-secondary' },
    { icon: '🏦', label: 'Bank Transfer', amount: '+₦100,000', date: '3 days ago', color: 'text-primary' },
    { icon: '🎁', label: 'Cashback Received', amount: '+₦500', date: '5 days ago', color: 'text-accent' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground">Recent Transactions</h3>
        <Link href="#" className="text-primary hover:text-primary/80 transition text-sm font-semibold">
          See All →
        </Link>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-3"
      >
        {transactions.map((tx, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glassmorphism rounded-xl p-4 flex items-center justify-between hover:bg-card/50 transition"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">{tx.icon}</div>
              <div>
                <p className="font-semibold text-foreground">{tx.label}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
            </div>
            <p className={`font-bold ${tx.color}`}>{tx.amount}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
