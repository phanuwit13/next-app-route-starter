import { create } from 'zustand'
import { logger } from './log'

interface Count {
  count: number
  user: string
  increase: (v: number) => void
}

const initialValue = {
  count: 0,
  user: 'big',
}

export const useCount = create<Count>()(
  logger(
    (set) => ({
      ...initialValue,
      increase: (v) => {
        set({
          count: v,
          user: 'big',
        })
      },
    }),
    'count'
  )
)
