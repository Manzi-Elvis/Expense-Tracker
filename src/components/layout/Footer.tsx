import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-border bg-card/30 py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Dough Tracker</h3>
            <p className="text-muted-foreground text-sm">
              Making wealth accessible to everyone through Dough Trackers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition">Features</Link></li>
              <li><Link to="/" className="hover:text-primary transition">Pricing</Link></li>
              <li><Link to="/" className="hover:text-primary transition">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition">About</Link></li>
              <li><Link to="/" className="hover:text-primary transition">Blog</Link></li>
              <li><Link to="/" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition">Privacy</Link></li>
              <li><Link to="/" className="hover:text-primary transition">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Dough Tracker. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
