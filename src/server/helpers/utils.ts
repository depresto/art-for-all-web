import * as types from '../../types'
import { GET_MEMBER, GET_MEMBER_LIST } from '../gql/queries'
import { apolloServerClient } from './apollo.server.client'

export const getMember = async (memberId: string) => {
  const { data } = await apolloServerClient.query<types.GET_MEMBER, types.GET_MEMBERVariables>({
    query: GET_MEMBER,
    variables: { memberId },
  })
  const member = data.member_by_pk
  if (!member) {
    throw new Error('找不到使用者')
  }
  return member
}

export const getMemberList = async () => {
  const { data } = await apolloServerClient.query<types.GET_MEMBER_LIST>({
    query: GET_MEMBER_LIST,
  })
  const members = data.member
  return members
}

export const notNull = <T>(x: T | null): x is T => x !== null

export const getCustomError = (name: string, message: string) => {
  const error = new Error(message)
  error.name = name
  return error
}
