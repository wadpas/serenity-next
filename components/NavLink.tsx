'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ children, href }: { children: string; href: string }) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={cn('hover:font-bold', pathname === href && 'text-blue-300 font-extrabold')}>
      {children}
    </Link>
  )
}
