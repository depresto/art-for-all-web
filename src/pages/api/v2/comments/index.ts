import { NextApiRequest, NextApiResponse } from 'next'
import { requireMemberId } from '../../../../lib/api-utils'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const artworkId = Number(req.query.artworkId)
    if (!artworkId) return res.status(400).json({ error: 'artworkId required' })

    const comments = await prisma.artworkComment.findMany({
      where: { artwork_id: artworkId },
      orderBy: { id: 'asc' },
      select: {
        id: true,
        content: true,
        member_id: true,
        created_at: true,
        member: { select: { id: true, name: true, username: true, avatar_url: true } },
      },
    })

    return res.json(
      comments.map(c => ({
        id: c.id,
        content: c.content,
        member_id: c.member_id,
        created_at: c.created_at,
        member: {
          id: c.member.id,
          name: c.member.name,
          username: c.member.username,
          avatarUrl: c.member.avatar_url,
        },
      })),
    )
  }

  if (req.method === 'POST') {
    const memberId = requireMemberId(req, res)
    if (!memberId) return

    const artworkId = Number(req.body.artworkId)
    const content = req.body.content as string
    if (!artworkId || !content) return res.status(400).json({ error: 'artworkId and content required' })

    const comment = await prisma.artworkComment.create({
      data: {
        artwork_id: artworkId,
        member_id: BigInt(memberId),
        content,
      },
    })

    return res.json({
      id: comment.id,
      artwork_id: comment.artwork_id,
      content: comment.content,
      member_id: comment.member_id,
      created_at: comment.created_at,
    })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
