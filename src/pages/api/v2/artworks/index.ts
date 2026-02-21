import { NextApiRequest, NextApiResponse } from 'next'
import { getMemberIdFromRequest } from '../../../../lib/api-utils'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const memberId = getMemberIdFromRequest(req)

  const artworks = await prisma.artwork.findMany({
    include: {
      creator: { select: { id: true, name: true } },
      exhibition_artworks: { select: { exhibition_id: true } },
      member_artwork_collections: memberId ? { where: { member_id: memberId }, select: { id: true } } : false,
    },
  })

  const result = artworks.map(a => ({
    id: a.id,
    name: a.name,
    title: a.name,
    featureImageUrl: a.featured_image,
    imageUrls: a.images ?? [],
    audioUrl: a.speech,
    description: a.description,
    creator: a.creator,
    material: a.material,
    sizing: a.size,
    years: a.years,
    saved: memberId ? (a.member_artwork_collections?.length ?? 0) > 0 : false,
    exhibitionIds: a.exhibition_artworks.map(ea => ea.exhibition_id),
  }))

  return res.json(result)
}
