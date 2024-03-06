'use client'

import AuthGuard from '@/auth/AuthGuard'
import AuthProvider from '@/auth/AuthProvider'
import GuestGuard from '@/auth/GuestGuard'
import SpinnerPage from '@/components/SpinnerPage'
import { ROUTE_PERMISSION } from '@/constants/permission'
import { urlMatch } from '@/lib/route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import { usePathname } from 'next/navigation'
import { ReactNode, useMemo } from 'react'
import PermissionProvider from './permissionProvider'

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
  const pathname = usePathname()

  const permission = useMemo(() => {
    const keyPath = Object.keys(ROUTE_PERMISSION).find((item) => {
      return urlMatch(item, pathname.toString())
    })
    console.log('keyPath',keyPath)
    if (keyPath) {
      return ROUTE_PERMISSION[keyPath]
    } else {
      return {
        authGuard: false,
        guestGuard: false,
        permission: [],
      }
    }
  }, [pathname])

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider checkAuth={!permission.guestGuard && permission.authGuard}>
        <Guard
          authGuard={permission.authGuard}
          guestGuard={permission.guestGuard}
        >
          <PermissionProvider permission={permission.permission}>{children}</PermissionProvider>
        </Guard>
      </AuthProvider>
    </QueryClientProvider>
  )
}
