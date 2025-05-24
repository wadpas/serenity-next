import { Menu, Search, ShoppingCart, UserRound } from 'lucide-react'
import Link from 'next/link'
import NavLink from './NavLink'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-foreground text-background min-w-xs'>
      <div className='w-full flex p-3 items-center justify-between gap-4 mx-auto max-w-[1600px]'>
        <button className='md:hidden'>
          <Menu />
        </button>
        <Link href='/'>
          <Logo />
        </Link>
        <nav className='hidden gap-4 md:flex'>
          <NavLink href='/library'>LIBRARY</NavLink>
          <NavLink href='/books'>BOOKS</NavLink>
        </nav>
        <div className='flex gap-4 '>
          <Search />
          <button className='relative'>
            <ShoppingCart />
            <span className='absolute flex items-center justify-center w-4 h-4 text-xs text-white rounded-full bg-chart-5 -top-1 -right-1'>
              2
            </span>
          </button>
          <Link href='auth/sign-in'>
            <UserRound />
          </Link>
        </div>
      </div>
    </header>
  )
}
