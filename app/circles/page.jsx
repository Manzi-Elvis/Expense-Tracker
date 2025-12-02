'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import DashboardHeader from '@/components/dashboard/dashboard-header'
import CirclesOverview from '@/components/circles/circles-overview'
import CircleDetail from '@/components/circles/circle-detail'

export default function CirclesPage() {
  const [selectedCircle, setSelectedCircle] = useState(null)

  const circles = [
    {
      id: 1,
      name: 'Tech Lovers Circle',
      description: 'A group saving for tech gadgets and upgrades',
      icon: '💻',
      members: 5,
      totalSaved: 250000,
      goal: 500000,
      contributionAmount: 50000,
      frequency: 'Monthly',
      createdDate: '2024-11-01',
      membersList: [
        { name: 'You', avatar: 'Y', role: 'Creator' },
        { name: 'John', avatar: 'J', role: 'Member' },
        { name: 'Sarah', avatar: 'S', role: 'Member' },
        { name: 'Mike', avatar: 'M', role: 'Member' },
        { name: 'Emma', avatar: 'E', role: 'Member' },
      ],
    },
    {
      id: 2,
      name: 'Vacation Planners',
      description: 'Saving together for our dream vacation',
      icon: '✈️',
      members: 4,
      totalSaved: 180000,
      goal: 400000,
      contributionAmount: 40000,
      frequency: 'Monthly',
      createdDate: '2024-12-05',
      membersList: [
        { name: 'You', avatar: 'Y', role: 'Member' },
        { name: 'Lisa', avatar: 'L', role: 'Creator' },
        { name: 'Tom', avatar: 'T', role: 'Member' },
        { name: 'Rachel', avatar: 'R', role: 'Member' },
      ],
    },
    {
      id: 3,
      name: 'Business Fund',
      description: 'Collective savings for entrepreneurship',
      icon: '🚀',
      members: 3,
      totalSaved: 420000,
      goal: 1000000,
      contributionAmount: 100000,
      frequency: 'Bi-weekly',
      createdDate: '2024-10-15',
      membersList: [
        { name: 'You', avatar: 'Y', role: 'Member' },
        { name: 'Alex', avatar: 'A', role: 'Creator' },
        { name: 'Jordan', avatar: 'J', role: 'Member' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedCircle ? (
          <CircleDetail circle={circles.find((c) => c.id === selectedCircle)} onBack={() => setSelectedCircle(null)} />
        ) : (
          <CirclesOverview circles={circles} onSelectCircle={setSelectedCircle} />
        )}
      </main>
    </div>
  )
}
