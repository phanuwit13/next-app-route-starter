'use client'

import { useCount } from '@/store/count'
import React from 'react'

type Props = {}

const Count = (props: Props) => {
  const { count, user, increase } = useCount()

  return (
    <div className='m-auto max-w-[400px] w-full text-[80px]'>
      <button className='border py-1 px-2' onClick={() => increase(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Count
