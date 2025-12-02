'use client'

import { motion } from 'framer-motion'

export default function FeaturesSection() {
  const features = [
    {
      title: 'Chat & Send Money',
      description: 'Send and receive money through natural conversation with our AI',
      icon: '💬',
      gradient: 'from-primary to-secondary',
    },
    {
      title: 'AI Financial Coach',
      description: 'Get personalized financial advice and daily tips from our intelligent coach',
      icon: '🤖',
      gradient: 'from-secondary to-accent',
    },
    {
      title: 'Saving Goals',
      description: 'Create and track saving goals through conversational AI commands',
      icon: '🎯',
      gradient: 'from-accent to-primary',
    },
    {
      title: 'Saving Circles',
      description: 'Join Ikimina groups and save together with friends and family',
      icon: '👥',
      gradient: 'from-primary via-secondary to-accent',
    },
    {
      title: 'Micro-Investments',
      description: 'Invest small amounts and watch your portfolio grow with real returns',
      icon: '📈',
      gradient: 'from-secondary to-primary',
    },
    {
      title: 'Vault Mode',
      description: 'Lock your savings securely with our premium Vault feature',
      icon: '🔒',
      gradient: 'from-accent to-secondary',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything You Need to track and grow your savings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make saving delightful, social, and rewarding
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition duration-300 blur`}></div>
              <div className="relative glassmorphism rounded-2xl p-8 h-full hover:scale-105 transition duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
