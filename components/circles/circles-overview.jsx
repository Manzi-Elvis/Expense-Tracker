'use client'

import { motion } from 'framer-motion'
import CircleCard from './circle-card'

export default function CirclesOverview({ circles, onSelectCircle }) {
  const totalMembers = circles.reduce((sum, c) => sum + c.members, 0)
  const totalSaved = circles.reduce((sum, c) => sum + c.totalSaved, 0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glassmorphism rounded-2xl p-8">
          <p className="text-sm text-muted-foreground mb-2">Active Circles</p>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-3">{circles.length}</p>
          <p className="text-xs text-primary font-semibold">Growing community</p>
        </div>

        <div className="glassmorphism rounded-2xl p-8">
          <p className="text-sm text-muted-foreground mb-2">Total Members</p>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-3">{totalMembers}</p>
          <p className="text-xs text-secondary font-semibold">Collaborating together</p>
        </div>

        <div className="glassmorphism rounded-2xl p-8">
          <p className="text-sm text-muted-foreground mb-2">Total Saved</p>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            ₦{totalSaved.toLocaleString()}
          </p>
          <p className="text-xs text-accent font-semibold">Collective power</p>
        </div>
      </motion.div>

      {/* Circles Grid */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Your Saving Circles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {circles.map((circle, index) => (
            <motion.div
              key={circle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectCircle(circle.id)}
              className="cursor-pointer"
            >
              <CircleCard circle={circle} />
            </motion.div>
          ))}

          {/* Create New Circle */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: circles.length * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glassmorphism rounded-2xl p-8 flex flex-col items-center justify-center min-h-64 hover:shadow-lg hover:shadow-primary/20 transition border-2 border-dashed border-primary/50 hover:border-primary"
          >
            <div className="text-5xl mb-4">+</div>
            <p className="font-bold text-foreground">Create Circle</p>
            <p className="text-sm text-muted-foreground mt-2">Start a new saving group</p>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
