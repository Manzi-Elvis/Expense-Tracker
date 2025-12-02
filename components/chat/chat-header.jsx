'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ChatHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glassmorphism sticky top-0 z-40 border-b border-border/50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-xl font-bold">
              🤖
            </div>
            <div>
              <p className="font-bold text-foreground">Dough Track Bot</p>
              <p className="text-xs text-accent">Online</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 transition flex items-center justify-center text-accent text-lg">
              ℹ️
            </button>
            <Link href="/dashboard" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition flex items-center justify-center text-primary">
              ⬅️
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
