import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import TypingIndicator from './TypingIndicator'

export default function ChatMessages() {
  const messagesRef = useRef<HTMLDivElement>(null)

  const messages = [
    { type: 'bot', text: 'Hi Mutoni! How can I help you save today?' },
    { type: 'user', text: 'I want to save for a vacation next summer' },
    { type: 'bot', text: 'Great! A summer vacation is a wonderful goal. How much are you looking to save?' },
    { type: 'user', text: 'Around $5000' },
    { type: 'bot', text: 'Perfect! If you save $200/week, you\'ll reach your goal in about 6 months. Shall I set this up for you?' },
  ]

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

  return (
    <motion.div
      ref={messagesRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="flex-1 overflow-y-auto p-6 space-y-4"
    >
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-sm px-4 py-3 rounded-lg ${
              msg.type === 'user'
                ? 'bg-primary text-primary-foreground'
                : 'glassmorphism'
            }`}
          >
            <p>{msg.text}</p>
            <p className="text-xs opacity-70 mt-1">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </motion.div>
      ))}
      <TypingIndicator />
    </motion.div>
  )
}
