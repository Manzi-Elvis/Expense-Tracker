'use client'

import { motion } from 'framer-motion'

export default function CircularProgress({ value }) {
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        className="text-border"
      />
      <motion.circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.56 0.22 254.3)" />
          <stop offset="50%" stopColor="oklch(0.45 0.25 310)" />
          <stop offset="100%" stopColor="oklch(0.65 0.15 205)" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
