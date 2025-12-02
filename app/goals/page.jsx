'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import DashboardHeader from '@/components/dashboard/dashboard-header'
import GoalsOverview from '@/components/goals/goals-overview'
import GoalDetail from '@/components/goals/goal-detail'

export default function GoalsPage() {
  const [selectedGoal, setSelectedGoal] = useState(null)

  const goals = [
    {
      id: 1,
      title: 'Laptop',
      icon: '💻',
      current: 124500,
      target: 500000,
      deadline: '5 months',
      deadline_date: '2025-04-18',
      color: 'from-primary to-secondary',
      description: 'Save for a brand new laptop to start my web design business',
      created: '2025-01-18',
      contributors: 1,
    },
    {
      id: 2,
      title: 'Vacation',
      icon: '✈️',
      current: 89000,
      target: 300000,
      deadline: '8 months',
      deadline_date: '2025-09-18',
      color: 'from-secondary to-accent',
      description: 'Dream vacation to Dubai with family',
      created: '2024-12-01',
      contributors: 3,
    },
    {
      id: 3,
      title: 'Car Fund',
      icon: '🚗',
      current: 156000,
      target: 1000000,
      deadline: '12 months',
      deadline_date: '2025-11-18',
      color: 'from-accent to-primary',
      description: 'Save for my first car',
      created: '2024-11-15',
      contributors: 1,
    },
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedGoal ? (
          <GoalDetail goal={goals.find((g) => g.id === selectedGoal)} onBack={() => setSelectedGoal(null)} />
        ) : (
          <GoalsOverview goals={goals} onSelectGoal={setSelectedGoal} />
        )}
      </main>
    </div>
  )
}
