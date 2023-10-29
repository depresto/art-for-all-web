import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { createApolloClient } from '../helpers/apollo'
import { useAuth } from './AuthContext'

export const ApiProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { authToken } = useAuth()
  const apolloClient = createApolloClient({ authToken })
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
