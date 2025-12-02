'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { forwardRef } from 'react'
import TypingIndicator from './typing-indicator'

const ChatMessages = forwardRef(({ messages, isLoading }, ref) => {
  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      <AnimatePresence mode="popLayout">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 mr-3 flex items-center justify-center text-sm">
                🤖
              </div>
            )}

            <div
              className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-br-none'
                  : 'bg-card border border-border text-foreground rounded-bl-none'
              }`}
            >
              <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

            {message.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex-shrink-0 ml-3"></div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {isLoading && <TypingIndicator />}
      <div ref={ref} />
    </div>
  )
})

ChatMessages.displayName = 'ChatMessages'
export default ChatMessages
