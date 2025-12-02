'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to Start Your Dough Tracker Journey?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already tracking their money, together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/signup" className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/50 transition transform hover:scale-105">
            Download App
          </Link>
          <Link href="/" className="px-8 py-4 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition">
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
