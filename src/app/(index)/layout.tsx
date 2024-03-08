'use client'

import Count from '@/components/Count'
import { useAuth } from '@/store/auth'
import { useCount } from '@/store/count'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { logout } = useAuth()
  const { count, user } = useCount()
  return (
    <>
      <nav className='flex justify-between items-center p-4 border-b'>
        <div>NEXT.JS APP ROUTE</div>
        <button onClick={() => logout()} className='border px-2 py-1'>
          Logout
        </button>
      </nav>
      <div className='m-auto max-w-[400px] w-full text-[80px]'> {count} {user}</div>
      <Count />
      {children}
    </>
  )
}
