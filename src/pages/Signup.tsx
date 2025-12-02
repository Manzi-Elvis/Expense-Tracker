import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AuthForm from '../components/auth/AuthForm'

export default function Signup() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-card to-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="glassmorphism p-8 rounded-2xl">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground mb-8">Start your Dough Tracker journey today</p>
          <AuthForm mode="signup" />
          <p className="text-center text-muted-foreground mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
