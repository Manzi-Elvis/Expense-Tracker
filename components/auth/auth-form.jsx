'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function AuthForm({ mode = 'login' }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate API call - Replace with your actual auth logic
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // For demo purposes, just redirect
      if (mode === 'login') {
        router.push('/dashboard')
      } else {
        router.push('/dashboard')
      }
    } catch (err) {
      setError(err.message || 'An error occurred')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {mode === 'signup' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            required
          />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label className="block text-sm font-medium text-foreground mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          required
          minLength={8}
        />
      </motion.div>

      {mode === 'login' && (
        <div className="text-right">
          <button type="button" className="text-sm text-primary hover:text-primary/80 transition font-medium">
            Forgot password?
          </button>
        </div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm"
        >
          {error}
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg bg-linear-to-r from-primary to-secondary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
            {mode === 'login' ? 'Signing in...' : 'Creating account...'}
          </>
        ) : (
          mode === 'login' ? 'Sign In' : 'Create Account'
        )}
      </motion.button>

      {mode === 'signup' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-4 space-y-3"
        >
          <p className="text-xs text-muted-foreground text-center">Or continue with</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-card border border-border text-foreground font-medium hover:bg-card/80 transition text-sm"
            >
              Google
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-card border border-border text-foreground font-medium hover:bg-card/80 transition text-sm"
            >
              Apple
            </button>
          </div>
        </motion.div>
      )}
    </form>
  )
}
