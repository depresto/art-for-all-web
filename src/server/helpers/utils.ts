import { prisma } from '../../lib/prisma'

export const getMember = async (memberId: string) => {
  const member = await prisma.member.findUnique({
    where: { id: BigInt(memberId) },
  })
  if (!member) {
    throw new Error('找不到使用者')
  }
  return member
}

export const getMemberList = async () => {
  const members = await prisma.member.findMany()
  return members
}

export const notNull = <T>(x: T | null): x is T => x !== null

export const getCustomError = (name: string, message: string) => {
  const error = new Error(message)
  error.name = name
  return error
}
