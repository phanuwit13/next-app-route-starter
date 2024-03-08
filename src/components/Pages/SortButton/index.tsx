import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
  sortBy: string
}

const SortButton = ({ children, sortBy }: Props) => {
  const pathname = usePathname()
  const router = useRouter()
  const params = useSearchParams()
  const [state, setState] = useState('desc')

  const handleSortClick = () => {
    const query: { [key: string]: string } = {}
    params.forEach((item, key) => {
      query[key] = item
    })
    const type = state === 'decs' ? 'aes' : 'decs'
    query['sortBy'] = sortBy
    query['sortType'] = type
    setState(type)

    const paramData = Object.keys(query)
      .map((item) => `${item}=${query[item]}`)
      .join('&')

    const path = pathname + `${paramData ? `?${paramData}` : ''}`
    router.push(path)
  }

  return (
    <div onClick={() => handleSortClick()}>
      {children} {state}
    </div>
  )
}

export default SortButton
