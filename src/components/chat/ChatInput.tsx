import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'

export default function ChatInput() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="border-t border-border p-6 bg-card/50"
    >
      <div className="flex gap-4 max-w-7xl mx-auto">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Luna anything about saving..."
          className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send
        </button>
      </div>
    </motion.form>
  )
}
