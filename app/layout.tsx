import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  title: 'Wonder',
  description: 'Wonder booking',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('font-sans antialiased', inter.className)}>
        <Header />
        <main className='flex flex-col min-h-screen bg-primary-foreground min-w-xs'>
          <div className='flex-1 w-full p-4 mx-auto bg-background max-w-[1600px]'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
