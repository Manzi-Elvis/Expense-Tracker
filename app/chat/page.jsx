'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChatHeader from '@/components/chat/chat-header'
import ChatMessages from '@/components/chat/chat-messages'
import ChatInput from '@/components/chat/chat-input'
import ChatSuggestions from '@/components/chat/chat-suggestions'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! I'm your Dough Tracker coach. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text) => {
    if (!text.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        {
          text: "Great! I'm setting up your saving goal. Creating a savings plan for you...",
          sender: 'bot',
        },
        {
          text: "Perfect! I've created a saving goal for you. You can view it in your dashboard.",
          sender: 'bot',
        },
        {
          text: "I can help you with that! Would you like to join a saving circle with friends?",
          sender: 'bot',
        },
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: randomResponse.text,
          sender: randomResponse.sender,
          timestamp: new Date(),
        },
      ])
      setIsLoading(false)
    }, 1500)
  }

  const handleSuggestion = (suggestion) => {
    handleSendMessage(suggestion)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ChatHeader />
      <main className="flex-1 flex flex-col overflow-hidden max-w-4xl w-full mx-auto">
        <ChatMessages messages={messages} isLoading={isLoading} ref={messagesEndRef} />
        {messages.length <= 1 && <ChatSuggestions onSuggestion={handleSuggestion} />}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </main>
    </div>
  )
}
