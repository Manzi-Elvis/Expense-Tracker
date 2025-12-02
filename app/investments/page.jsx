'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import DashboardHeader from '@/components/dashboard/dashboard-header'
import InvestmentPortfolio from '@/components/investments/investment-portfolio'
import InvestmentOptions from '@/components/investments/investment-options'

export default function InvestmentsPage() {
  const portfolio = [
    { id: 1, name: 'Tech Fund', symbol: 'TECH', invested: 50000, current: 56000, color: 'from-primary to-secondary' },
    { id: 2, name: 'Gold ETF', symbol: 'GOLD', invested: 30000, current: 32100, color: 'from-yellow-400 to-yellow-600' },
    { id: 3, name: 'Index Fund', symbol: 'INDEX', invested: 45000, current: 49500, color: 'from-secondary to-accent' },
  ]

  const investments = [
    { id: 1, name: 'Tech Growth Fund', icon: '📱', returns: '18% APY', minInvest: 5000, risk: 'Medium' },
    { id: 2, name: 'Stable Bond Fund', icon: '📊', returns: '8% APY', minInvest: 10000, risk: 'Low' },
    { id: 3, name: 'Crypto Portfolio', icon: '💰', returns: '25% APY', minInvest: 1000, risk: 'High' },
    { id: 4, name: 'Real Estate REIT', icon: '🏢', returns: '12% APY', minInvest: 25000, risk: 'Medium' },
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <InvestmentPortfolio portfolio={portfolio} />
        <InvestmentOptions investments={investments} />
      </main>
    </div>
  )
}
