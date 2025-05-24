export default function Header() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-border text-foreground min-w-xs'>
      <div className=' mx-auto p-4 max-w-[1600px]'>
        <p className='text-sm text-center '>&copy; {currentYear} Serenity. All rights reserved.</p>
      </div>
    </footer>
  )
}
