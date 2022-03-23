import { ApolloError, gql } from '@apollo/client'
import { member } from '../types/general'
import { createApolloClient } from './apollo'

export type strictMember = {
  id: any
  email: string
  username: string
  avatarUrl: string | ''
}

interface MemberResult {
  memberLoading: boolean
  memberError?: ApolloError
  member: member | null
}

export const getMemberById = async (memberId: number): Promise<member | null> => {
  const apolloClient = createApolloClient({ authToken: null })

  const query = gql`
    query getMember($memberId: bigint!) {
      member_by_pk(id: $memberId) {
        id
        username
        email
      }
    }
  `

  return apolloClient
    .query({
      query: query,
      variables: { memberId: memberId },
    })
    .then(result => {
      console.log('SEARCH_MEMBER')
      console.log(result)
      if (result.data === undefined) return null

      if (result.data === null) return null

      if (result.data.member_by_pk === null) return null

      var data = result.data.member_by_pk
      var aMember: member = {
        id: data.id,
        name: data.name,
        email: data.email,
        username: data.username,
        avatarUrl: 'https://image.flaticon.com/icons/svg/848/848006.svg',
      }
      return aMember
    })
    .catch(error => {
      console.log('getMemberByIdError')
      console.log(error)
      return null
    })
}
