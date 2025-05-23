export default function Header() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='opacity-75 bg-primary text-primary-foreground min-w-xs'>
      <div className=' mx-auto p-4 max-w-[1600px]'>
        <p className='text-sm text-center '>&copy; {currentYear} Wonder. All rights reserved.</p>
      </div>
    </footer>
  )
}
