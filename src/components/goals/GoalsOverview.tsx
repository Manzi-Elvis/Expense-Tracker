import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function GoalsOverview() {
  const data = [
    { name: 'Jan', saved: 2000 },
    { name: 'Feb', saved: 3000 },
    { name: 'Mar', saved: 2800 },
    { name: 'Apr', saved: 3900 },
    { name: 'May', saved: 4800 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glassmorphism p-8 rounded-2xl"
    >
      <h2 className="text-2xl font-bold mb-6">Savings Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
          <Tooltip contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)' }} />
          <Bar dataKey="saved" fill="url(#gradientBar)" radius={[8, 8, 0, 0]} />
          <defs>
            <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
