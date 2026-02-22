import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: {
    default: 'Department of Mechatronics | SRM Institute of Science and Technology',
    template: '%s | Mechatronics - SRMIST',
  },
  description: 'Department of Mechatronics Engineering at SRM Institute of Science and Technology, Kattankulathur. Offering B.Tech, M.Tech programs in mechatronics, robotics, and automation.',
  keywords: ['SRM', 'Mechatronics', 'Engineering', 'Kattankulathur', 'Robotics', 'Automation', 'B.Tech', 'M.Tech'],
}

export const viewport: Viewport = {
  themeColor: '#1a3a5c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-right" />
        <Analytics />
      </body>
    </html>
  )
}
