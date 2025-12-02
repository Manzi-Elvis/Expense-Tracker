import { motion } from 'framer-motion'
import { Eye, EyeOff, Send, Plus } from 'lucide-react'
import { useState } from 'react'

export default function WalletCard() {
  const [isVisible, setIsVisible] = useState(false)
  const balance = 24567.89

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glassmorphism p-8 rounded-2xl"
    >
      <div className="flex justify-between items-start mb-12">
        <div>
          <p className="text-muted-foreground mb-2">Total Balance</p>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold">
              {isVisible ? `$${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••'}
            </h2>
            <button onClick={() => setIsVisible(!isVisible)} className="p-2 hover:bg-muted rounded-lg transition">
              {isVisible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <div className="text-right">
          <p className="text-muted-foreground text-sm mb-1">Monthly Savings</p>
          <p className="text-2xl font-bold text-accent">+$3,240</p>
        </div>
      </div>

      <div className="mb-6 bg-background/50 rounded-lg p-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Savings Progress</span>
          <span className="font-semibold">78%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-linear-to-r from-primary to-accent" />
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
          <Send className="w-4 h-4" />
          Transfer
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition">
          <Plus className="w-4 h-4" />
          Add Funds
        </button>
      </div>
    </motion.div>
  )
}
