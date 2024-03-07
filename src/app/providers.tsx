'use client'

import AuthGuard from '@/auth/AuthGuard'
import AuthProvider from '@/auth/AuthProvider'
import GuestGuard from '@/auth/GuestGuard'
import SpinnerPage from '@/components/SpinnerPage'
import { ROUTE_PERMISSION } from '@/constants/permission'
import { urlMatch } from '@/lib/route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { ReactNode, useMemo } from 'react'
import PermissionProvider from './permissionProvider'

interface ProviderProps {
  children: ReactNode
}

type GuardProps = {
  guard: Guard
  children: ReactNode
}

export const queryClient = new QueryClient()

export const Guard = ({ children, guard }: GuardProps) => {
  if (guard === 'Guest')
    return <GuestGuard fallback={<SpinnerPage />}>{children}</GuestGuard>
  if (guard === 'All') return <>{children}</>

  return <AuthGuard fallback={<SpinnerPage />}>{children}</AuthGuard>
}

export default function Providers({ children }: ProviderProps) {
  const pathname = usePathname()

  const permission: Permission = useMemo(() => {
    const keyPath = Object.keys(ROUTE_PERMISSION).find((item) => {
      return urlMatch(item, pathname.toString())
    })
    if (keyPath) {
      return ROUTE_PERMISSION[keyPath]
    } else {
      return {
        guard: 'All',
        permission: [],
      }
    }
  }, [pathname])

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider checkAuth={permission.guard === 'Auth'}>
        <Guard guard={permission.guard}>
          <PermissionProvider permission={permission.permission}>
            {children}
          </PermissionProvider>
        </Guard>
      </AuthProvider>
    </QueryClientProvider>
  )
}
