import { NextApiRequest, NextApiResponse } from 'next'
import { getMemberIdFromRequest } from '../../../../lib/api-utils'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const artworkId = Number(req.query.artworkId)
  if (!artworkId) return res.status(400).json({ error: 'Invalid artworkId' })

  const memberId = getMemberIdFromRequest(req)

  const artwork = await prisma.artwork.findUnique({
    where: { id: artworkId },
    include: {
      creator: { select: { id: true, name: true } },
      exhibition_artworks: { select: { exhibition_id: true } },
      member_artwork_collections: memberId ? { where: { member_id: memberId }, select: { id: true } } : false,
      comments: {
        select: {
          id: true,
          content: true,
          member: { select: { id: true, name: true, avatar_url: true } },
        },
      },
    },
  })

  if (!artwork) return res.status(404).json({ error: 'Not found' })

  return res.json({
    id: artwork.id,
    name: artwork.name,
    title: artwork.name,
    featureImageUrl: artwork.featured_image,
    imageUrls: artwork.images ?? [],
    audioUrl: artwork.speech,
    description: artwork.description,
    creator: artwork.creator,
    material: artwork.material,
    sizing: artwork.size,
    years: artwork.years,
    saved: memberId ? (artwork.member_artwork_collections?.length ?? 0) > 0 : false,
    exhibitionIds: artwork.exhibition_artworks.map(ea => ea.exhibition_id),
    comments: artwork.comments.map(c => ({
      id: c.id,
      content: c.content,
      member: {
        id: c.member.id,
        name: c.member.name,
        avatarUrl: c.member.avatar_url,
      },
    })),
  })
}
