import { Inter, Manrope, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const poppins = Poppins({ subsets: ['latin'], weights: [400, 500, 600, 700], variable: '--font-poppins' })

export const metadata = {
  title: 'Dough Tracker – Chat. Save. Grow.',
  description: 'Chat-based personal finance app with AI coach, saving goals, and investment opportunities',
  generator: 'v0.app',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f172a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${manrope.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
