import { motion } from 'framer-motion'
import InvestmentPortfolio from '../components/investments/InvestmentPortfolio'
import InvestmentOptions from '../components/investments/InvestmentOptions'
import Sidebar from '../components/layout/Sidebar'

export default function Investments() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-6 md:p-8 max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Investments</h1>
          <InvestmentPortfolio />
          <InvestmentOptions />
        </motion.div>
      </main>
    </div>
  )
}
