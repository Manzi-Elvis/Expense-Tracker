import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthFormProps {
  mode: 'login' | 'signup'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate('/dashboard')
    }, 1000)
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <motion.div custom={0} variants={inputVariants} initial="hidden" animate="visible">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          required
        />
      </motion.div>

      <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible">
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          required
        />
      </motion.div>

      <motion.button
        custom={2}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        {isLoading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Create Account'}
      </motion.button>
    </form>
  )
}
