import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'
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
  title: 'Freedom',
  description: 'Freedom store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(' font-sans antialiased', inter.className)}>
        <main className='flex min-h-screen bg-zinc-50'>
          <div className='w-full p-4 mx-auto bg-white min-w-[320px] max-w-[1600px]'>{children}</div>
        </main>
      </body>
    </html>
  )
}
