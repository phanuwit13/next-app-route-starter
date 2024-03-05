'use client'

import AuthGuard from '@/auth/AuthGuard'
import GuestGuard from '@/auth/GuestGuard'
import SpinnerPage from '@/components/SpinnerPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import { ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  authGuard?: boolean
  guestGuard?: boolean
}

interface ProviderProps {
  initialState?: Record<string, unknown>
  children: ReactNode
}

type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

export const queryClient = new QueryClient()

export const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<SpinnerPage />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<SpinnerPage />}>{children}</AuthGuard>
  }
}

export default function Providers({ children }: ProviderProps) {
  console.log('asd')
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
