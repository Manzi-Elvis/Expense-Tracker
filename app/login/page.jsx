'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import AuthForm from '@/components/auth/auth-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-40 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="glassmorphism rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary via-secondary to-accent"></div>
            <h1 className="text-2xl font-bold text-foreground">Dough Tracker</h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Welcome Back</h2>
          <p className="text-muted-foreground mb-8">Sign in to continue your saving journey</p>

          <AuthForm mode="login" />

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary font-semibold hover:text-primary/80 transition">
              Sign up
            </Link>
          </p>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  )
}
