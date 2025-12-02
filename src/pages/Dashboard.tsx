import { motion } from 'framer-motion'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import WalletCard from '../components/dashboard/WalletCard'
import QuickActions from '../components/dashboard/QuickActions'
import GoalsScroll from '../components/dashboard/GoalsScroll'
import GamificationBadges from '../components/dashboard/GamificationBadges'
import TransactionHistory from '../components/dashboard/TransactionHistory'
import Sidebar from '../components/layout/Sidebar'

export default function Dashboard() {
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
          <DashboardHeader />
          <div className="mt-8 space-y-6">
            <WalletCard />
            <QuickActions />
            <GoalsScroll />
            <div className="grid md:grid-cols-2 gap-6">
              <GamificationBadges />
              <TransactionHistory />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
