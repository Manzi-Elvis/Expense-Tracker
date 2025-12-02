import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glassmorphism border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            Dough Tracker
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/login" className="hover:text-primary transition">Sign In</Link>
            <Link
              to="/signup"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-4"
          >
            <Link to="/login" className="block hover:text-primary transition">Sign In</Link>
            <Link
              to="/signup"
              className="block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition w-full text-center"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
