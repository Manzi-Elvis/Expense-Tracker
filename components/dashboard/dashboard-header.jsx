'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glassmorphism sticky top-0 z-40 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary via-secondary to-accent"></div>
            <h1 className="text-lg md:text-xl font-bold text-foreground">Dough Tracker</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="text-sm text-primary font-semibold">Dashboard</Link>
            <Link href="/chat" className="text-sm text-muted-foreground hover:text-foreground transition">Chat</Link>
            <Link href="/goals" className="text-sm text-muted-foreground hover:text-foreground transition">Goals</Link>
            <Link href="/circles" className="text-sm text-muted-foreground hover:text-foreground transition">Circles</Link>
            <Link href="/investments" className="text-sm text-muted-foreground hover:text-foreground transition">Investments</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 transition flex items-center justify-center text-accent">
              🔔
            </button>
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary cursor-pointer hover:shadow-lg hover:shadow-primary/50 transition"></div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
