'use client'

import { motion } from 'framer-motion'

export default function PortfolioPie({ data }) {
  const total = data.reduce((sum, d) => sum + d.current, 0)
  let currentAngle = -90

  const slices = data.map((item, index) => {
    const percentage = (item.current / total) * 100
    const sliceAngle = (percentage / 100) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + sliceAngle
    currentAngle = endAngle

    return { ...item, percentage, startAngle, endAngle }
  })

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {slices.map((slice, index) => {
          const startRad = (slice.startAngle * Math.PI) / 180
          const endRad = (slice.endAngle * Math.PI) / 180
          const radius = 70
          const x1 = 90 + radius * Math.cos(startRad)
          const y1 = 90 + radius * Math.sin(startRad)
          const x2 = 90 + radius * Math.cos(endRad)
          const y2 = 90 + radius * Math.sin(endRad)
          const largeArc = slice.endAngle - slice.startAngle > 180 ? 1 : 0

          const colors = ['#8b5cf6', '#06b6d4', '#06b6d4']

          return (
            <path
              key={index}
              d={`M 90 90 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={colors[index % colors.length]}
              fillOpacity="0.8"
            />
          )
        })}
      </motion.svg>

      <div className="space-y-2">
        {slices.map((slice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ['#8b5cf6', '#06b6d4', '#06b6d4'][index % 3] }}></div>
            <p className="text-xs text-muted-foreground">{slice.name} {slice.percentage.toFixed(0)}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
