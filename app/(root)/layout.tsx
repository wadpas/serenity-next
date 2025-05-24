import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className='flex flex-col min-h-screen bg-slate-50 min-w-xs'>
        <div className='flex-1 w-full p-2 md:p-4 mx-auto bg-background max-w-[1600px]'>{children}</div>
      </main>
      <Footer />
    </>
  )
}
