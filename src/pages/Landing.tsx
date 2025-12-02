import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Target, Zap } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function Landing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const features = [
    {
      icon: TrendingUp,
      title: 'Dough Trackers',
      description: 'AI-powered savings goals that adapt to your lifestyle',
    },
    {
      icon: Users,
      title: 'Saving Circles',
      description: 'Join communities and save together with friends',
    },
    {
      icon: Target,
      title: 'Investment Opportunities',
      description: 'Grow your wealth with curated investment options',
    },
    {
      icon: Zap,
      title: 'Gamification',
      description: 'Earn badges and rewards for reaching milestones',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-4 py-20 md:py-32"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-balance mb-6 text-5xl font-bold md:text-7xl"
          >
             Live Better
          </motion.h1>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mb-8 text-xl text-muted-foreground md:text-2xl"
          >
            Join thousands saving towards their dreams with AI-powered guidance and community support
          </motion.p>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition"
            >
              Sign In
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 py-20 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Dough Tracker?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glassmorphism p-8 rounded-xl"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 py-20 md:py-32 bg-card/50"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-8">Mutoni's Story</h2>
          <p className="text-lg text-muted-foreground mb-6">
            From struggling with finances to building wealth, Mutoni discovered that saving doesn't have to be difficult. With Dough Tracker's AI guidance and community support, she achieved her goals in just 18 months—and so can you.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
