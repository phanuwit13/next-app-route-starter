'use client'

import { useAuth } from '@/store/auth'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { logout } = useAuth()

  return (
    <>
      <nav className='flex justify-between items-center p-4 border-b'>
        <div>NEXT.JS APP ROUTE</div>
        <button onClick={() => logout()} className='border px-2 py-1'>
          Logout
        </button>
      </nav>
      {children}
    </>
  )
}
