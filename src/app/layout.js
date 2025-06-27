import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Groupize.ai Event Parser - Powered by Aime',
  description: 'Transform your event documents into structured data with Aime, your AI assistant for meetings & events',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}