'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-transparent to-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Dough Tracker</h3>
            <p className="text-sm text-muted-foreground">Chat. Save. Grow.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">Features</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Pricing</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">About</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Dough Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
