import { member } from '../types/general'

export type strictMember = {
  id: any
  email: string
  username: string
  avatarUrl: string | ''
}

export const getMemberById = async (memberId: number): Promise<member | null> => {
  // This was used to fetch member info via GraphQL.
  // With the new API architecture, member info is included in JWT payload
  // or fetched as part of other queries. Keeping as a stub.
  return null
}
