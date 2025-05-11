import type { Metadata } from 'next'
import { Roboto, Lato } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const roboto = Roboto({
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
    <html
      lang='en'
      className='h-full'>
      <body className={cn('h-full font-sans antialiased', lato.className)}>
        <main className='flex flex-col min-h-screen bg-zinc-50'>
          <div className='flex-1 flex-grow w-full p-4 mx-auto bg-white min-w-[320px] max-w-[1600px]'>{children}</div>
        </main>
      </body>
    </html>
  )
}
