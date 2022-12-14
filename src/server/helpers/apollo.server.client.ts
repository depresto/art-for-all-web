import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, split } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { onError } from '@apollo/client/link/error'

const batchHttpLink = new BatchHttpLink({
  uri: `https://${process.env.NEXT_PUBLIC_HASURA_HOST}/v1/graphql`,
  headers: { batch: 'true' },
})
const httpLink = createHttpLink({ uri: `https://${process.env.NEXT_PUBLIC_HASURA_HOST}/v1/graphql` })
const httpLinks = split(operation => operation.getContext().important === true, httpLink, batchHttpLink)
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
  })
  return forward(operation)
})

// create onError link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(error => {
      console.error(
        `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}, ${error.extensions?.code}`,
        error.extensions,
      )
    })

  if (networkError) console.error(`[Network error]: ${networkError}`)
})

export const apolloServerClient = (() => {
  const apolloClient = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([errorLink, authLink, httpLinks]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  })

  return apolloClient
})()
