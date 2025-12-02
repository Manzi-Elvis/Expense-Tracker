import { motion } from 'framer-motion'
import ChatHeader from '../components/chat/ChatHeader'
import ChatMessages from '../components/chat/ChatMessages'
import ChatInput from '../components/chat/ChatInput'
import Sidebar from '../components/layout/Sidebar'

export default function Chat() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-full"
        >
          <ChatHeader />
          <ChatMessages />
          <ChatInput />
        </motion.div>
      </main>
    </div>
  )
}
