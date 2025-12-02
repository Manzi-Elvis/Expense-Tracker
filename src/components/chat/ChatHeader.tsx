import { motion } from 'framer-motion'
import { Settings, Phone, Video } from 'lucide-react'

export default function ChatHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-border p-6 bg-card/50"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent" />
          <div>
            <h2 className="text-lg font-bold">Luna AI</h2>
            <p className="text-sm text-muted-foreground">Always online</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-muted rounded-lg transition">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
