import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, MessageCircle, Target, Users, TrendingUp, LogOut, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/goals', icon: Target, label: 'Goals' },
    { path: '/circles', icon: Users, label: 'Circles' },
    { path: '/investments', icon: TrendingUp, label: 'Investments' },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.3 }}
        className="fixed md:relative w-64 h-screen bg-card border-r border-border md:translate-x-0 z-40"
      >
        <div className="p-8">
          <h1 className="text-2xl font-bold text-primary mb-12">Dough Tracker</h1>
          <nav className="space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="absolute bottom-8 left-8 right-8">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </motion.aside>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  )
}
