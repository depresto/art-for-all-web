import React from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from '../lib/fetcher'
import { useAuth } from './AuthContext'

export const ApiProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { authToken } = useAuth()
  return (
    <SWRConfig value={{ fetcher: (url: string) => fetcher(url, authToken), revalidateOnFocus: false }}>
      {children}
    </SWRConfig>
  )
}
