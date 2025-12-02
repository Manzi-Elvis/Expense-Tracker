'use client'

import { motion } from 'framer-motion'

export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mutoni's Laptop Dream
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Mutoni dreamed of owning a laptop to start her freelance web design business. But with her small income, saving felt impossible. Traditional savings apps were boring and disconnected from her daily life.
            </p>
            <p>
              Then she discovered Dough Tracker. By simply chatting with our AI coach, she set a goal: "Save 500k for a laptop in 5 months." The conversational interface made it feel natural, not like a chore. She joined a saving circle with two friends, and together they kept each other motivated.
            </p>
            <p>
              Within 4 months, Mutoni had saved enough. The small micro-investments she made through Dough Tracker added an extra boost. Today, she's using her new laptop to grow her design business, and she's still using Dough Tracker to save for her next dream.
            </p>
            <p className="font-semibold text-foreground pt-4">
              Your Dough Tracker journey starts here. What will you build?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
