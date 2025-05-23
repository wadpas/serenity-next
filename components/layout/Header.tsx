import Link from 'next/link'
import { Menu, Search, ShoppingCart, UserRound } from 'lucide-react'
import NavLink from './NavLink'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-primary text-primary-foreground min-w-xs'>
      <div className='w-full flex p-2 items-center justify-between gap-4 mx-auto max-w-[1600px]'>
        <button className='md:hidden'>
          <Menu />
        </button>
        <Link href='/'>
          <Logo />
        </Link>
        <nav className='hidden space-x-4 md:flex'>
          <NavLink href='/products'>PRODUCTS</NavLink>
          <NavLink href='/admin'>ORDERS</NavLink>
          <NavLink href='/'>USERS</NavLink>
        </nav>
        <div className='flex space-x-4 '>
          <Search />
          <button className='relative'>
            <ShoppingCart />
            <span className='absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-blue-500 rounded-full -top-1 -right-1 '>
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
