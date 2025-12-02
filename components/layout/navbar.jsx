'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glassmorphism"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary via-secondary to-accent"></div>
            <span className="text-lg md:text-xl font-bold text-foreground">Dough Tracker</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a>
            <a href="#story" className="text-sm text-muted-foreground hover:text-foreground transition">Story</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-primary hover:text-primary/80 transition">
              Sign In
            </Link>
            <Link href="/signup" className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
