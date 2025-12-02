'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import DashboardHeader from '@/components/dashboard/dashboard-header'
import WalletCard from '@/components/dashboard/wallet-card'
import QuickActions from '@/components/dashboard/quick-actions'
import GoalsScroll from '@/components/dashboard/goals-scroll'
import TransactionHistory from '@/components/dashboard/transaction-history'
import GamificationBadges from '@/components/dashboard/gamification-badges'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <WalletCard />
        <QuickActions />
        <GoalsScroll />
        <GamificationBadges />
        <TransactionHistory />
      </main>
    </div>
  )
}
