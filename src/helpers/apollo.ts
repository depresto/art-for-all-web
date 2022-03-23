import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { notification } from 'antd'

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors &&
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`, extensions)
      if (extensions && extensions.code === 'invalid-jwt') {
        notification.info({ message: '連線已過期，將重新整理此畫面' })
        setTimeout(() => window.location.assign('/'), 3000)
      }
    })

  networkError && console.log(`[Network error]: ${JSON.stringify(networkError)}`)
})

// create auth context link
const withAuthTokenLink = (authToken: string | null) =>
  setContext(() =>
    authToken
      ? {
          headers: { authorization: `Bearer ${authToken}` },
        }
      : {
          headers: {
            'x-hasura-user-id': '00000000-0000-0000-0000-000000000000',
            'x-hasura-role': 'anonymous',
          },
        },
  )

const httpLink = createHttpLink({ uri: `https://${process.env.NEXT_PUBLIC_GRAPHQL_HOST}/v1/graphql` })

export const createApolloClient = (options: { authToken: string | null }) => {
  const apolloClient = new ApolloClient({
    link: ApolloLink.from([onErrorLink, withAuthTokenLink(options.authToken), httpLink]),
    cache: new InMemoryCache(),
  })
  return apolloClient
}
