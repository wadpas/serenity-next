import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Serenity',
  description: 'Serenity booking',
}

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('font-sans antialiased', inter.className)}>{children}</body>
    </html>
  )
}
