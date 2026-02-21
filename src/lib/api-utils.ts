import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

type JwtPayload = {
  sub: string
  memberId: number
  name: string | null
  email: string | null
  username: string | null
  avatarUrl: string | null
  role: string | null
}

export const getMemberIdFromRequest = (req: NextApiRequest): number | null => {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) return null

  const token = authHeader.slice(7)
  try {
    const secret = process.env.JWT_SECRET
    if (!secret) return null
    const payload = jwt.verify(token, secret) as JwtPayload
    return payload.memberId
  } catch {
    return null
  }
}

export const requireMemberId = (req: NextApiRequest, res: NextApiResponse): number | null => {
  const memberId = getMemberIdFromRequest(req)
  if (!memberId) {
    res.status(401).json({ error: 'Unauthorized' })
    return null
  }
  return memberId
}
