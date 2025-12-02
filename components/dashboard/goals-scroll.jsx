'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GoalsScroll() {
  const goals = [
    {
      title: 'Laptop',
      current: 124500,
      target: 500000,
      deadline: '5 months',
      icon: '💻',
      color: 'from-primary to-secondary',
    },
    {
      title: 'Vacation',
      current: 89000,
      target: 300000,
      deadline: '8 months',
      icon: '✈️',
      color: 'from-secondary to-accent',
    },
    {
      title: 'Car Fund',
      current: 156000,
      target: 1000000,
      deadline: '12 months',
      icon: '🚗',
      color: 'from-accent to-primary',
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground">Saving Goals</h3>
        <Link href="/goals" className="text-primary hover:text-primary/80 transition text-sm font-semibold">
          View All →
        </Link>
      </div>

      <div className="overflow-x-auto pb-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-4"
        >
          {goals.map((goal, index) => {
            const progress = (goal.current / goal.target) * 100
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, translateY: -4 }}
                className="shrink-0 w-80 glassmorphism rounded-2xl p-6 cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{goal.icon}</span>
                  <span className="text-xs font-bold text-primary bg-primary/20 px-3 py-1 rounded-full">{progress.toFixed(0)}%</span>
                </div>

                <h4 className="text-lg font-bold text-foreground mb-1">{goal.title}</h4>
                <p className="text-xs text-muted-foreground mb-4">Due in {goal.deadline}</p>

                <div className="space-y-2 mb-4">
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className={`h-full bg-linear-to-r ${goal.color}`}
                    ></motion.div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">₦{goal.current.toLocaleString()}</span>
                    <span className="font-semibold text-foreground">₦{goal.target.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full py-2 rounded-lg bg-primary/20 text-primary font-medium hover:bg-primary/30 transition text-sm">
                  View Details
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
