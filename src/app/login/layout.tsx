'use client'

import { Guard } from '@/app/providers'
import AuthProvider from '@/auth/AuthProvider'

// is page check auth
const authGuard = false //access only auth
const guestGuard = true //access only guest

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider checkAuth={!guestGuard && authGuard}>
      <Guard authGuard={authGuard} guestGuard={guestGuard}>
        {children}
      </Guard>
    </AuthProvider>
  )
}
