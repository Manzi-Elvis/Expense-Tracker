'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Dough Tracker{' '}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Chat. Save. Grow.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed"
        >
          Chat with our AI financial coach, create saving goals through conversation, join saving circles with friends, and watch your wealth grow with micro-investments—all in one delightful app.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/signup" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition transform hover:scale-105">
            Get Started Free
          </Link>
          <Link href="#features" className="px-8 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition">
            Learn More
          </Link>
        </motion.div>

        {/* Mock UI preview */}
        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-20"
        >
          <div className="relative mx-auto max-w-sm md:max-w-md rounded-2xl overflow-hidden glassmorphism p-6 transform hover:scale-105 transition duration-500">
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4"></div>
                <p className="text-sm text-muted-foreground">Chat interface preview</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
