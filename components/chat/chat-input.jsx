'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ChatInput({ onSendMessage, isLoading }) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      onSendMessage(input)
      setInput('')
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-t border-border/50 bg-background px-4 sm:px-6 lg:px-8 py-6"
    >
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex gap-3 items-flex-end">
          <div className="flex-1 glassmorphism rounded-2xl px-4 py-2 border border-border hover:border-primary/50 transition focus-within:border-primary">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Try: 'Save 500k for a laptop in 5 months'..."
              className="w-full bg-transparent text-foreground placeholder:text-muted-foreground resize-none outline-none max-h-24"
              rows="1"
              disabled={isLoading}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-12 h-12 rounded-2xl bg-linear-to-r from-primary to-secondary text-primary-foreground flex items-center justify-center font-bold hover:shadow-lg hover:shadow-primary/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? '⏳' : '📤'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}
